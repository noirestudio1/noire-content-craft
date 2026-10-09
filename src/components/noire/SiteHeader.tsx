import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { copy, equivalentPath, paths, type Locale, type PublicPage } from "@/lib/site-locale";

export function SiteHeader({ locale, page = "home" }: { locale: Locale; page?: PublicPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const text = copy[locale].nav;
  const otherLocale: Locale = locale === "ro" ? "en" : "ro";
  const navItems: Array<[string, PublicPage]> = [[text.home, "home"], [text.about, "about"], [text.services, "services"], [text.portfolio, "portfolio"], [text.contact, "contact"]];
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow; document.body.style.overflow = "hidden";
    const focusable = () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])') ?? []);
    focusable()[0]?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); return; } if (event.key !== "Tab") return; const nodes = focusable(); const first = nodes[0]; const last = nodes[nodes.length - 1]; if (!first || !last) return; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } };
    document.addEventListener("keydown", onKey); return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKey); triggerRef.current?.focus(); };
  }, [open]);
  return <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500", scrolled || open ? "border-border bg-background/95 backdrop-blur-lg" : "bg-transparent")}>
    <div className="mx-auto grid h-16 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-20 sm:px-8 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-12">
      <Link to={paths[locale].home} className="w-fit"><Logo /></Link>
      <nav aria-label={locale === "ro" ? "Navigație principală" : "Main navigation"} className="hidden items-center justify-center gap-6 lg:flex">{navItems.map(([label, key]) => <Link key={key} to={paths[locale][key]} className="text-[0.65rem] tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">{label.toUpperCase()}</Link>)}<Link to={equivalentPath(otherLocale, page)} className="border-l border-border pl-5 text-[0.62rem] tracking-[0.14em] text-gold">{locale === "ro" ? "EN" : "RO"}</Link></nav>
      <Button asChild className="hidden h-11 rounded-none px-5 text-[0.65rem] tracking-[0.16em] lg:inline-flex"><Link to={paths[locale].contact}>{text.start.toUpperCase()}</Link></Button>
      <Button ref={triggerRef} variant="ghost" size="icon" className="rounded-none lg:hidden" aria-label={open ? text.close : text.open} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open ? <nav id="mobile-navigation" ref={menuRef} aria-label={locale === "ro" ? "Navigație mobilă" : "Mobile navigation"} className="mobile-couture-menu lg:hidden"><div className="mobile-couture-aura" aria-hidden="true"><i /><i /><i /></div><div className="mobile-couture-head"><div className="mobile-couture-brand"><Logo /></div><button type="button" className="mobile-couture-close" aria-label={text.close} onClick={() => setOpen(false)}><X /></button></div><div className="mobile-couture-links">{navItems.map(([label, key]) => <Link key={key} to={paths[locale][key]} onClick={() => setOpen(false)} className={cn("mobile-couture-link", key === page && "is-active")}><span>{label}</span></Link>)}</div><div className="mobile-couture-bottom"><Link to={equivalentPath(otherLocale, page)} onClick={() => setOpen(false)} className="mb-4 block text-center text-xs tracking-[0.2em] text-gold">RO / EN · {otherLocale.toUpperCase()}</Link><Link to={paths[locale].contact} onClick={() => setOpen(false)} className="mobile-couture-cta"><span>{text.start.toUpperCase()}</span><i aria-hidden="true">→</i></Link><p>BUCUREȘTI · BRAȘOV</p></div></nav> : null}
  </header>;
}
