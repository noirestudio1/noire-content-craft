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
      business_name: data.businessName,
      industry: data.industry,
      city: data.city,
      social_handle: data.socialHandle,
      website: data.website,
      phone: data.phone,
      email: data.email,
      message: data.message,
      consent: data.consent,
    });

    if (error) {
      console.error("NOIRE lead submission failed", error.message);
      throw new Error("Solicitarea nu a putut fi trimisă. Încearcă din nou.");
    }

    return { success: true };
  });