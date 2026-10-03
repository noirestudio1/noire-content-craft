import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/noire/Logo";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({ meta: [{ title: "Politica de cookies | NOIRE" }, { name: "description", content: "Informații despre utilizarea cookie-urilor pe site-ul NOIRE Content Studio." }, { property: "og:title", content: "Politica de cookies | NOIRE" }, { property: "og:description", content: "Informații despre utilizarea cookie-urilor pe site-ul NOIRE Content Studio." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/politica-de-cookies" }] }),
  component: CookiesPage,
});

function CookiesPage() { return <main className="min-h-screen px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto max-w-4xl"><Logo /><div className="mt-24"><p className="eyebrow">DOCUMENT ÎN CURS DE COMPLETARE</p><h1 className="font-display text-5xl leading-none sm:text-7xl">POLITICA DE COOKIES</h1><div className="mt-12 space-y-6 border-t border-border pt-8 text-lg leading-relaxed text-muted-foreground"><p>Această pagină este rezervată politicii finale de cookies NOIRE Content Studio.</p><p>Versiunea actuală a site-ului nu folosește instrumente publicitare sau de analiză opționale. Funcționalitățile esențiale pot folosi tehnologii strict necesare pentru funcționare și securitate.</p><p><strong>De completat înainte de lansare:</strong> lista finală de cookies și furnizori, duratele și opțiunile de consimțământ, după conectarea instrumentelor definitive.</p></div><Button asChild variant="outline" className="mt-12 rounded-none bg-transparent"><Link to="/"><ArrowLeft />ÎNAPOI LA SITE</Link></Button></div></div></main>; }