import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((value) => value || undefined);

const leadSchema = z
  .object({
    formType: z.enum(["free_ideas", "contact", "quote"]),
    name: z.string().trim().min(2, "Completează numele.").max(100),
    businessName: optionalText(120),
    industry: optionalText(120),
    city: optionalText(100),
    socialHandle: optionalText(200),
    website: optionalText(300).refine(
      (value) => !value || /^https?:\/\//i.test(value),
      "Adaugă un link complet, inclusiv https://",
    ),
    phone: optionalText(40),
    email: optionalText(255).refine(
      (value) => !value || z.string().email().safeParse(value).success,
      "Adresa de email nu este validă.",
    ),
    message: optionalText(2000),
    consent: z.literal(true, { errorMap: () => ({ message: "Este necesar acordul tău." }) }),
    websiteTrap: optionalText(100),
  })
  .superRefine((data, context) => {
    if (data.formType === "free_ideas") {
      for (const [key, value] of [
        ["businessName", data.businessName],
        ["industry", data.industry],
        ["city", data.city],
        ["socialHandle", data.socialHandle],
        ["phone", data.phone],
      ] as const) {
        if (!value) context.addIssue({ code: "custom", path: [key], message: "Câmp obligatoriu." });
      }
    }
    if (data.formType !== "free_ideas" && !data.email && !data.phone) {
      context.addIssue({
        code: "custom",
        path: ["email"],
        message: "Adaugă un email sau un număr de telefon.",
      });
    }
  });

export type LeadInput = z.input<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: LeadInput) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.websiteTrap) return { success: true };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("lead_submissions").insert({
      form_type: data.formType,
      name: data.name,
      business_name: data.businessName ?? null,
      industry: data.industry ?? null,
      city: data.city ?? null,
      social_handle: data.socialHandle ?? null,
      website: data.website ?? null,
      phone: data.phone ?? null,
      email: data.email ?? null,
      message: data.message ?? null,
      consent: data.consent,
    });

    if (error) {
      console.error("SANS RETOUR lead submission failed", error.message);
      throw new Error("Solicitarea nu a putut fi trimisă. Încearcă din nou.");
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("SANS RETOUR email notification skipped: RESEND_API_KEY is not configured.");
      throw new Error("Notificarea pe email nu este configurată.");
    }

    const subject =
      data.formType === "free_ideas"
        ? "Cerere nouă — 3 idei gratuite | SANS RETOUR"
        : data.formType === "quote"
          ? "Cerere nouă de ofertă | SANS RETOUR"
          : "Solicitare nouă | SANS RETOUR";

    const fields = [
      ["Nume", data.name],
      ["Business", data.businessName],
      ["Domeniu", data.industry],
      ["Oraș", data.city],
      ["Instagram / TikTok", data.socialHandle],
      ["Website", data.website],
      ["Telefon / WhatsApp", data.phone],
      ["Email", data.email],
      ["Mesaj", data.message],
    ].filter(([, value]) => value);

    const escapeHtml = (value: string) =>
      value.replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character);

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#171717">
        <h1 style="font-size:22px">SANS RETOUR — solicitare nouă</h1>
        <p style="color:#666">Formular: ${escapeHtml(data.formType)}</p>
        <table style="width:100%;border-collapse:collapse">
          ${fields.map(([label, value]) => `
            <tr>
              <td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:700;vertical-align:top">${escapeHtml(label!)}</td>
              <td style="padding:10px 8px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value!)}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SANS RETOUR Website <onboarding@resend.dev>",
        to: ["sansretourstudio@gmail.com"],
        reply_to: data.email || undefined,
        subject,
        html,
      }),
    });

    if (!emailResponse.ok) {
      const details = await emailResponse.text();
      console.error("SANS RETOUR email notification failed", details);
      throw new Error("Solicitarea a fost salvată, dar notificarea pe email nu a putut fi trimisă.");
    }

    return { success: true };
  });