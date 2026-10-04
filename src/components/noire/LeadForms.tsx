import { useEffect, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { submitLead, type LeadInput } from "@/lib/leads.functions";
import { submitLeadForm } from "@/lib/lead-form-client";

const fieldClass = "h-12 rounded-none border-x-0 border-t-0 border-input bg-transparent px-0 text-foreground placeholder:text-muted-foreground focus-visible:border-gold focus-visible:ring-0";

function FormStatus({ state }: { state: "idle" | "sending" | "success" | "error" }) {
  if (state === "success") return <p role="status" className="mt-5 text-sm text-gold">Solicitarea a fost trimisă. Revenim cu un răspuns.</p>;
  if (state === "error") return <p role="alert" className="mt-5 text-sm text-destructive">Nu am putut trimite solicitarea. Verifică datele și încearcă din nou.</p>;
  return null;
}

export function IdeasForm() {
  const sendLead = useServerFn(submitLead);
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setState("sending");
    try {
      await submitLeadForm({
        formType: "free_ideas",
        name: String(values.get("name") ?? ""),
        businessName: String(values.get("businessName") ?? ""),
        industry: String(values.get("industry") ?? ""),
        city: String(values.get("city") ?? ""),
        socialHandle: String(values.get("socialHandle") ?? ""),
        website: String(values.get("website") ?? ""),
        phone: String(values.get("phone") ?? ""),
        consent: true,
        websiteTrap: String(values.get("companyWebsite") ?? ""),
      } satisfies LeadInput, sendLead);
      form.reset();
      setConsent(false);
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-5 md:grid-cols-2">
      <Input className={fieldClass} name="name" placeholder="Nume *" required minLength={2} maxLength={100} autoComplete="name" />
      <Input className={fieldClass} name="businessName" placeholder="Numele businessului *" required maxLength={120} />
      <Input className={fieldClass} name="industry" placeholder="Domeniu de activitate *" required maxLength={120} />
      <Input className={fieldClass} name="city" placeholder="Oraș *" required maxLength={100} autoComplete="address-level2" />
      <Input className={fieldClass} name="socialHandle" placeholder="Instagram / TikTok *" required maxLength={200} />
      <Input className={fieldClass} name="website" placeholder="Website (opțional, cu https://)" type="url" maxLength={300} />
      <Input className={fieldClass} name="phone" placeholder="Telefon / WhatsApp *" required type="tel" maxLength={40} autoComplete="tel" />
      <div className="hidden" aria-hidden="true"><Input name="companyWebsite" tabIndex={-1} autoComplete="off" /></div>
      <div className="md:col-span-2 mt-2 flex items-start gap-3">
        <Checkbox id="ideas-consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} required />
        <Label htmlFor="ideas-consent" className="font-normal leading-relaxed text-muted-foreground">Sunt de acord să fiu contactat în legătură cu solicitarea mea.</Label>
      </div>
      <div className="md:col-span-2">
        <Button type="submit" size="lg" disabled={state === "sending" || !consent} className="h-13 rounded-none px-7 tracking-[0.12em]">
          {state === "sending" ? "SE TRIMITE..." : "PRIMEȘTE CELE 3 IDEI"}<ArrowUpRight />
        </Button>
        <FormStatus state={state} />
      </div>
    </form>
  );
}

export function ContactForm() {
  const sendLead = useServerFn(submitLead);
  const [interest, setInterest] = useState("clasic");

  useEffect(() => {
    const syncInterest = () => {
      const selected = new URLSearchParams(window.location.search).get("interest");
      if (selected && ["clasic", "full_social", "free_ideas", "unsure"].includes(selected)) setInterest(selected);
    };
    syncInterest();
    window.addEventListener("sans-retour-interest", syncInterest);
    return () => window.removeEventListener("sans-retour-interest", syncInterest);
  }, []);
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setState("sending");
    try {
      await submitLeadForm({
        formType: "contact",
        interest,
        name: String(values.get("name") ?? ""),
        businessName: String(values.get("businessName") ?? ""),
        email: String(values.get("email") ?? ""),
        phone: String(values.get("phone") ?? ""),
        message: String(values.get("message") ?? ""),
        consent: true,
        websiteTrap: String(values.get("companyWebsite") ?? ""),
      } satisfies LeadInput, sendLead);
      form.reset();
      setInterest("clasic");
      setConsent(false);
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input className={fieldClass} name="name" placeholder="Nume *" required minLength={2} maxLength={100} autoComplete="name" />
      <Input className={fieldClass} name="businessName" placeholder="Numele businessului" maxLength={120} />
      <div>
        <Label htmlFor="contact-interest" className="mb-2 block text-xs tracking-[0.12em] text-muted-foreground">CE TE INTERESEAZĂ?</Label>
        <select
          id="contact-interest"
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          className="h-12 w-full rounded-none border-x-0 border-t-0 border-input bg-transparent px-0 text-sm text-foreground outline-none focus:border-gold"
        >
          <option value="clasic">CONTENT SYSTEM / CLASIC</option>
          <option value="full_social">FULL SOCIAL</option>
          <option value="free_ideas">3 IDEI GRATUITE</option>
          <option value="unsure">VREAU SĂ DISCUTĂM</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input className={fieldClass} name="email" placeholder="Email *" required type="email" maxLength={255} autoComplete="email" />
        <Input className={fieldClass} name="phone" placeholder="Telefon" type="tel" maxLength={40} autoComplete="tel" />
      </div>
      <Textarea name="message" placeholder="Spune-ne pe scurt despre business și ce vrei să obții." required maxLength={2000} className="min-h-32 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-gold" />
      <div className="hidden" aria-hidden="true"><Input name="companyWebsite" tabIndex={-1} autoComplete="off" /></div>
      <div className="flex items-start gap-3">
        <Checkbox id="contact-consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} required />
        <Label htmlFor="contact-consent" className="font-normal leading-relaxed text-muted-foreground">Sunt de acord să fiu contactat în legătură cu solicitarea mea.</Label>
      </div>
      <Button type="submit" size="lg" disabled={state === "sending" || !consent} className="h-13 rounded-none px-7 tracking-[0.12em]">
        {state === "sending" ? "SE TRIMITE..." : "TRIMITE SOLICITAREA"}{state === "success" ? <Check /> : <ArrowUpRight />}
      </Button>
      <FormStatus state={state} />
    </form>
  );
}