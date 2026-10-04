import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navItems: Array<[string, string]> = [
  ["Acasă", "#acasa"], ["Despre Noi", "#despre"], ["Servicii", "#servicii"],
  ["Portofoliu", "#portofoliu"], ["Blog", "/blog"], ["Contact", "#contact"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const menu = menuRef.current;
    const getFocusable = () => Array.from(menu?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])') ?? []);
    getFocusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500", scrolled || open ? "border-border bg-background/95 backdrop-blur-lg" : "bg-transparent")}>
      <div className="mx-auto grid h-16 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-20 sm:px-8 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <a href="#acasa" className="w-fit" onClick={() => setOpen(false)}><Logo /></a>
        <nav aria-label="Navigație principală" className="hidden items-center justify-center gap-7 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-[0.68rem] tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">{label.toUpperCase()}</a>)}
        </nav>
        <Button asChild className="hidden h-11 rounded-none px-5 text-[0.65rem] tracking-[0.16em] lg:inline-flex"><a href="#contact">ÎNCEPE UN PROIECT</a></Button>
        <Button ref={triggerRef} variant="ghost" size="icon" className="rounded-none lg:hidden" aria-label={open ? "Închide meniul" : "Deschide meniul"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open ? (
        <nav id="mobile-navigation" ref={menuRef} aria-label="Navigație mobilă" className="mobile-couture-menu lg:hidden">
          <div className="mobile-couture-aura" aria-hidden="true"><i /><i /><i /></div>
          <div className="mobile-couture-head">
            <div className="mobile-couture-brand"><Logo /></div>
            <button type="button" className="mobile-couture-close" aria-label="Închide meniul" onClick={() => setOpen(false)}><X /></button>
          </div>
          <div className="mobile-couture-links">
            {navItems.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className={cn("mobile-couture-link", index === 0 && "is-active")}>
                <span>{label}</span>
              </a>
            ))}
          </div>
          <div className="mobile-couture-bottom">
            <a href="#contact" onClick={() => setOpen(false)} className="mobile-couture-cta"><span>ÎNCEPE UN PROIECT</span><i aria-hidden="true">→</i></a>
            <p>BUCUREȘTI · BRAȘOV</p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
