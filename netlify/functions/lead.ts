import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().transform((value) => value || undefined);

const leadSchema = z.object({
  formType: z.enum(["free_ideas", "contact", "quote"]),
  interest: z.enum(["start", "clasic", "full_social", "free_ideas", "unsure"]).optional(),
  name: z.string().trim().min(2).max(100),
  businessName: optionalText(120),
  industry: optionalText(120),
  city: optionalText(100),
  socialHandle: optionalText(200),
  website: optionalText(300).refine((value) => !value || /^https?:\/\//i.test(value)),
  phone: optionalText(40),
  email: optionalText(255).refine((value) => !value || z.string().email().safeParse(value).success),
  message: optionalText(2000),
  consent: z.literal(true),
  websiteTrap: optionalText(100),
}).superRefine((data, context) => {
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
    context.addIssue({ code: "custom", path: ["email"], message: "Adaugă un email sau un număr de telefon." });
  }
});

const interestLabels = {
  start: "ESSENTIAL — 1.500 LEI",
  clasic: "ELITE — 2.500 LEI",
  full_social: "BLACK ROYAL — 4.500 LEI",
  free_ideas: "3 IDEI GRATUITE",
  unsure: "VREAU SĂ DISCUTĂM",
} as const;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[character] ?? character);

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
  }

  let data: z.infer<typeof leadSchema>;
  try {
    data = leadSchema.parse(await request.json());
  } catch {
    return Response.json({ success: false, error: "Date invalide." }, { status: 400 });
  }

  if (data.websiteTrap) return Response.json({ success: true });

  const supabaseUrl = Netlify.env.get("SUPABASE_URL");
  const supabaseKey = Netlify.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const resendApiKey = Netlify.env.get("RESEND_API_KEY");

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase runtime environment variables.");
    return Response.json({ success: false }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("lead_submissions").insert({
    form_type: data.formType,
    name: data.name,
    business_name: data.businessName ?? null,
    industry: data.industry ?? null,
    city: data.city ?? null,
    social_handle: data.socialHandle ?? null,
    website: data.website ?? null,
    phone: data.phone ?? null,
    email: data.email ?? null,
    message: data.interest ? `[Interes: ${data.interest}]${data.message ? `\n${data.message}` : ""}` : data.message ?? null,
    consent: data.consent,
  });

  if (error) {
    console.error("SANS RETOUR lead submission failed", error.message);
    return Response.json({ success: false }, { status: 500 });
  }

  if (!resendApiKey) {
    console.error("Lead saved; RESEND_API_KEY is not configured.");
    return Response.json({ success: true, notificationSent: false });
  }

  const selectedInterest = data.interest ? interestLabels[data.interest] : undefined;
  const subject = selectedInterest
    ? `[${selectedInterest}] Solicitare nouă | SANS RETOUR`
    : data.formType === "free_ideas"
      ? "[3 IDEI GRATUITE] Solicitare nouă | SANS RETOUR"
      : data.formType === "quote"
        ? "[OFERTĂ] Solicitare nouă | SANS RETOUR"
        : "Solicitare nouă | SANS RETOUR";

  const fields = [
    ["Interes", selectedInterest],
    ["Nume", data.name],
    ["Business", data.businessName],
    ["Domeniu", data.industry],
    ["Oraș", data.city],
    ["Instagram / TikTok", data.socialHandle],
    ["Website", data.website],
    ["Telefon / WhatsApp", data.phone],
    ["Email", data.email],
    ["Mesaj", data.message],
  ].filter(([, value]) => value) as [string, string][];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#171717">
      <h1 style="font-size:22px">SANS RETOUR — solicitare nouă</h1>
      <p style="color:#666">Formular: ${escapeHtml(data.formType)}</p>
      <table style="width:100%;border-collapse:collapse">
        ${fields.map(([label, value]) => `
          <tr>
            <td style="padding:10px 8px;border-bottom:1px solid #eee;font-weight:700;vertical-align:top">${escapeHtml(label)}</td>
            <td style="padding:10px 8px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>
        `).join("")}
      </table>
    </div>
  `;

  try {
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
      console.error("Lead saved; Resend notification failed", await emailResponse.text());
      return Response.json({ success: true, notificationSent: false });
    }
  } catch (error) {
    console.error("Lead saved; Resend request failed", error);
    return Response.json({ success: true, notificationSent: false });
  }

  return Response.json({ success: true, notificationSent: true });
};
