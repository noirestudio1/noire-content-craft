import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/noire/Logo";

export const Route = createFileRoute("/politica-de-confidentialitate")({
  head: () => ({ meta: [{ title: "Politica de confidențialitate | SANS RETOUR" }, { name: "description", content: "Informații despre prelucrarea datelor pe site-ul SANS RETOUR Content Studio." }, { property: "og:title", content: "Politica de confidențialitate | SANS RETOUR" }, { property: "og:description", content: "Informații despre prelucrarea datelor pe site-ul SANS RETOUR Content Studio." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/politica-de-confidentialitate" }] }),
  component: PrivacyPage,
});

function PrivacyPage() { return <LegalPage title="POLITICA DE CONFIDENȚIALITATE"><p>Această pagină este rezervată politicii finale de confidențialitate SANS RETOUR Content Studio.</p><p>Formularele solicită doar datele necesare pentru a răspunde cererii tale: nume, date de contact și informații despre business. Aceste date sunt folosite exclusiv pentru gestionarea solicitării.</p><p><strong>De completat înainte de lansare:</strong> identitatea juridică a operatorului, datele de contact oficiale, perioadele de păstrare, temeiurile legale și procedura pentru exercitarea drepturilor.</p></LegalPage>; }

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) { return <main className="min-h-screen px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto max-w-4xl"><Logo /><div className="mt-24"><p className="eyebrow">DOCUMENT ÎN CURS DE COMPLETARE</p><h1 className="font-display text-4xl leading-[0.95] sm:text-6xl">{title}</h1><div className="mt-12 space-y-6 border-t border-border pt-8 text-lg leading-relaxed text-muted-foreground">{children}</div><Button asChild variant="outline" className="mt-12 rounded-none bg-transparent"><Link to="/"><ArrowLeft />ÎNAPOI LA SITE</Link></Button></div></div></main>; }