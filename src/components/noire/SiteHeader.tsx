import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navItems: Array<[string, string]> = [
  ["Acasă", "#acasa"], ["Portofoliu", "#portofoliu"], ["Servicii", "#servicii"],
  ["Proces", "#proces"], ["Despre", "#despre"], ["Contact", "#contact"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500", scrolled || open ? "border-border bg-background/95 backdrop-blur-lg" : "bg-transparent")}>
      <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:h-24 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <a href="#acasa" className="w-fit" onClick={() => setOpen(false)}><Logo /></a>
        <nav aria-label="Navigație principală" className="hidden items-center justify-center gap-7 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-[0.68rem] tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">{label.toUpperCase()}</a>)}
        </nav>
        <Button asChild className="hidden h-11 rounded-none px-5 text-[0.65rem] tracking-[0.16em] lg:inline-flex"><a href="#contact">ÎNCEPE UN PROIECT</a></Button>
        <Button variant="ghost" size="icon" className="rounded-none lg:hidden" aria-label={open ? "Închide meniul" : "Deschide meniul"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open ? (
        <nav aria-label="Navigație mobilă" className="border-t border-border bg-background px-5 pb-8 pt-5 lg:hidden">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-display text-2xl">{label}</a>)}
          <Button asChild className="mt-6 h-12 w-full rounded-none"><a href="#contact" onClick={() => setOpen(false)}>ÎNCEPE UN PROIECT</a></Button>
        </nav>
      ) : null}
    </header>
  );
}