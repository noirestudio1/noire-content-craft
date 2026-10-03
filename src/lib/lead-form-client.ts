import type { LeadInput } from "@/lib/leads.functions";

type ServerSubmit = (options: { data: LeadInput }) => Promise<unknown>;

export async function submitLeadForm(input: LeadInput, serverSubmit: ServerSubmit) {
  const externalEndpoint = import.meta.env.VITE_PUBLIC_FORM_ENDPOINT?.trim();

  if (!externalEndpoint) {
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