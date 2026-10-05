export type LeadInput = {
  formType: "free_ideas" | "contact" | "quote";
  interest?: "start" | "clasic" | "full_social" | "free_ideas" | "unsure";
  name: string;
  businessName?: string;
  industry?: string;
  city?: string;
  socialHandle?: string;
  website?: string;
  phone?: string;
  email?: string;
  message?: string;
  consent: true;
  websiteTrap?: string;
};

type ServerSubmit = (options: { data: LeadInput }) => Promise<unknown>;

export async function submitLeadForm(input: LeadInput, serverSubmit: ServerSubmit) {
  const externalEndpoint =
    import.meta.env["VITE_PUBLIC_FORM_ENDPOINT"]?.trim() ||
    "/.netlify/functions/lead";

  if (typeof window === "undefined") {
    return serverSubmit({ data: input });
  }

  const response = await fetch(externalEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Solicitarea nu a putut fi trimisă.");
  }

  return { success: true };
}
