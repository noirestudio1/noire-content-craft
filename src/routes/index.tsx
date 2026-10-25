import { useEffect, useRef } from "react";
import { copy, paths, type Locale } from "@/lib/site-locale";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/noire/LeadForms";
import { Logo } from "@/components/noire/Logo";
import { SectionHeading } from "@/components/noire/SectionHeading";
import { SiteHeader } from "@/components/noire/SiteHeader";
import { VideoPlaceholder } from "@/components/noire/VideoPlaceholder";
import { CinematicScene } from "@/components/noire/CinematicScene";
const heroImage = "/sans-retour-hero.jpg.jpeg";


const metaDescription = "SANS RETOUR construiește sisteme complete de content pentru businessuri: strategie, idei, scripturi, filmare, editare și publicare pentru Reels, TikTok și Shorts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SANS RETOUR | Content Studio București & Brașov" },
      { name: "description", content: metaDescription },
      { property: "og:title", content: "SANS RETOUR — Content Studio" },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }, { rel: "alternate", hrefLang: "ro", href: "/" }, { rel: "alternate", hrefLang: "en", href: "/en/" }],
  }),
  component: () => <HomePage locale="ro" />,
});



const projects = [
  { title: "LUCKY BEANS", category: "CAFENEA", videoUrl: "/videos/lucky-beans.mp4", poster: "/videos/lucky-beans.jpg" },
  { title: "DJ", category: "EVENIMENTE", videoUrl: "/videos/dj.mp4", poster: "/videos/dj.jpg" },
  { title: "UNISPORT", category: "SPORT", videoUrl: "/videos/unisport.mp4", poster: "/videos/unisport.jpg" },
] as const;
const contentStart = ["5 clipuri verticale / lună", "5 fotografii editate", "1 sesiune de producție", "Strategie lunară", "Idei & concepte", "Scripturi și hook-uri", "Regie la filmare", "Filmare + editare", "Calendar de content", "Captions", "Audit inițial", "Raport lunar"];
const contentSystem = ["10 clipuri verticale / lună", "10 fotografii editate", "2 sesiuni de producție", "Strategie lunară", "Idei & concepte", "Scripturi și hook-uri", "Regie la filmare", "Filmare + editare", "Calendar de content", "Captions", "Audit inițial", "Analiză & optimizare", "Trend Research & Adaptare", "Analiză competiție", "Raport lunar"];
const fullSocial = ["20 clipuri verticale / lună", "15 fotografii editate", "3 sesiuni de producție", "Strategie lunară", "Idei & concepte", "Scripturi și hook-uri", "Regie la filmare", "Filmare + editare", "Calendar de content", "Captions", "Audit inițial", "Analiză & optimizare", "Trend Research & Adaptare", "Analiză competiție", "Publicare multi-platformă", "Administrare social media", "Community management", "Optimizare profil", "Trend Response", "Raport lunar"];

export function HomePage({locale = "ro"}: {locale?: Locale}) {
  const t = copy[locale];
  const kineticRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-row, .reveal-copy, .reveal-card"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const update = () => {
      for (const [section, variable] of [[kineticRef.current, "--kinetic-progress"], [processRef.current, "--process-progress"]] as const) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.75 - rect.top) / Math.max(1, rect.height)));
        section.style.setProperty(variable, progress.toFixed(4));
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return (
    <div className="overflow-x-clip bg-background text-foreground">
      <SiteHeader locale={locale} />
      <main>
        <CinematicScene id="acasa" className="hero-cinematic scroll-mt-0">
          <div className="hero-cinematic-stage">
            <img src={heroImage} alt="SANS RETOUR — PR & Content Marketing" fetchPriority="high" decoding="async" className="hero-branded-image absolute inset-0 h-full w-full object-cover object-center" />
          </div>
        </CinematicScene>

        <section id="portofoliu" className="champagne-work scroll-mt-20 border-y border-border bg-surface-subtle py-16 sm:py-28"><div className="champagne-work-marquee" aria-hidden="true"><span>SELECTED WORK · SANS RETOUR · SELECTED WORK · SANS RETOUR ·</span></div>
          <div className="section-shell">
            <SectionHeading label={t.portfolio.label}>{locale === "ro" ? <>CONTENT CARE MERITĂ<br />SĂ FIE VĂZUT.</> : <>CONTENT WORTH<br />WATCHING.</>}</SectionHeading>
            <div className="mt-11 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 sm:mt-16 sm:gap-5 md:grid-cols-3 lg:ml-[15%]">
              {projects.map((project, index) => <div id={`work-${project.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={project.category} className={index % 3 === 1 ? "md:translate-y-12" : ""}><VideoPlaceholder project={project.title} category={project.category} videoUrl={project.videoUrl} poster={project.poster} className="reveal-card portfolio-motion" /></div>)}
            </div>
            
          </div>
        </section>

        <section className="champagne-problems section-shell py-16 sm:py-24" id="ce-facem"><div className="max-w-5xl"><p className="eyebrow mb-5">{t.what.label}</p><h2 className="font-display text-3xl leading-[1.16] tracking-tight sm:text-5xl lg:text-6xl">{locale === "ro" ? <>TU AI POVESTEA.<span className="block mt-2 sm:mt-3">NOI O FACEM</span><span className="block">IMPOSIBIL DE IGNORAT.</span></> : <>YOUR STORY.<span className="block mt-2 sm:mt-3">MADE IMPOSSIBLE</span><span className="block">TO IGNORE.</span></>}</h2></div><div className="mt-12 grid gap-8 border-t border-gold/30 pt-8 md:grid-cols-3 sm:mt-16">{t.what.items.map(([heading,body],i)=><article key={heading} className="reveal-card"><p className="mb-4 text-[0.65rem] tracking-[0.2em] text-gold">0{i+1}</p><h3 className="font-display text-xl sm:text-2xl">{heading}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{body}</p></article>)}</div></section>
        <section ref={processRef} id="proces" className="process-premium champagne-process section-shell relative scroll-mt-20 overflow-hidden py-16 sm:py-24"><SectionHeading label={t.process.label}>{t.process.title}</SectionHeading><div className="process-panel relative mt-12 overflow-hidden border-y border-border/70 sm:ml-[15%]"><div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-gold/20 sm:left-[1.65rem]" /><div className="absolute left-[1.15rem] top-0 w-px bg-gold shadow-[0_0_14px_rgba(212,175,55,0.8)] sm:left-[1.65rem]" style={{ height: "calc(var(--process-progress, 0) * 100%)" }} />{t.process.items.map(([heading,body],i)=><article key={heading} className="process-row process-stage relative grid grid-cols-[3rem_1fr] gap-x-4 gap-y-2 border-b border-border/80 py-6 sm:grid-cols-[4rem_0.7fr_1fr] sm:gap-8 sm:py-9"><span className="relative z-10 grid size-9 place-items-center rounded-full border border-gold bg-background text-[0.6rem] text-gold sm:size-12">{String(i+1).padStart(2,"0")}</span><h3 className="font-display text-xl sm:text-2xl">{heading}</h3><p className="col-start-2 max-w-lg text-sm leading-6 text-muted-foreground sm:col-start-3">{body}</p></article>)}</div></section>
        <section ref={kineticRef} className="kinetic-film" aria-label="Sistemul SANS RETOUR">
          <div className="kinetic-film-stage">
            <div className="kinetic-film-light" aria-hidden="true" />
            <div className="kinetic-film-grain" aria-hidden="true" />
            <div className="kinetic-film-frame kinetic-film-frame--idea"><span>01 · STRATEGIE</span><strong>IDEA.</strong></div>
            <div className="kinetic-film-frame kinetic-film-frame--script"><span>02 · CREAȚIE</span><strong>SCRIPT.</strong></div>
            <div className="kinetic-film-frame kinetic-film-frame--shoot"><span>03 · PRODUCȚIE</span><strong>SHOOT.</strong></div>
            <div className="kinetic-film-frame kinetic-film-frame--edit"><span>04 · POST-PRODUCȚIE</span><strong>EDIT.</strong></div>
            <div className="kinetic-film-signature"><span>THE SYSTEM BEHIND THE CONTENT</span><strong>SANS RETOUR.</strong></div>
            <div className="kinetic-film-progress" aria-hidden="true"><i /></div>
          </div>
        </section>

        <section id="despre" className="champagne-about section-shell scroll-mt-20 py-16 sm:py-24"><SectionHeading label={t.about.label}>{t.about.title}</SectionHeading><p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">{t.about.body}</p><a href={paths[locale].about} className="mt-8 inline-block border-b border-gold pb-2 text-xs tracking-[0.14em] text-gold">{t.about.link} →</a></section>
        <section id="servicii" className="champagne-services scroll-mt-20 border-y border-border bg-surface-subtle py-16 sm:py-28">
          <div className="section-shell">
            <SectionHeading label={t.pricing.label}>{locale === "ro" ? <>NOI FACEM CONTENTUL.<br /><span className="text-ivory-muted">TU ÎȚI CONDUCI BUSINESSUL.</span></> : <>WE MAKE THE CONTENT.<br /><span className="text-ivory-muted">YOU RUN THE BUSINESS.</span></>}</SectionHeading>
            <div className="package-grid mt-11 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
              <ServiceCard index="01" title="ESSENTIAL" price="1.500 LEI" features={locale === "ro" ? contentStart : contentStart.map(translateFeature)} cta={locale === "ro" ? "ALEGE ESSENTIAL" : "CHOOSE ESSENTIAL"} interest="start" tone="essential" locale={locale} />
              <ServiceCard index="02" title="ELITE" price="2.500 LEI" features={locale === "ro" ? contentSystem : contentSystem.map(translateFeature)} cta={locale === "ro" ? "ALEGE ELITE" : "CHOOSE ELITE"} interest="clasic" tone="elite" badge={t.pricing.most} locale={locale} />
              <ServiceCard index="03" title="BLACK ROYAL" price="4.500 LEI" features={locale === "ro" ? fullSocial : fullSocial.map(translateFeature)} cta={locale === "ro" ? "ALEGE BLACK ROYAL" : "CHOOSE BLACK ROYAL"} interest="full_social" tone="royal" badge={t.pricing.full} locale={locale} />
            </div>
            <p className="mt-7 text-center text-xs tracking-[0.08em] text-muted-foreground">{t.pricing.custom}</p>
          </div>
        </section>

        <section id="contact" className="section-shell scroll-mt-20 py-16 sm:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div><p className="eyebrow">CONTACT</p><h2 className="section-title">{locale === "ro" ? <>SPUNE-NE CE<br />VREI SĂ CREȘTI.</> : <>TELL US WHAT<br />YOU WANT TO GROW.</>}</h2><p className="mt-8 max-w-md leading-7 text-muted-foreground">{t.contact.body}</p><div className="mt-12 space-y-4 border-t border-border pt-6 text-sm text-muted-foreground"><p>Instagram — <a className="text-foreground transition-colors hover:text-gold" href="https://www.instagram.com/sansretourcs/" target="_blank" rel="noopener noreferrer">@sansretourcs</a></p><p>TikTok — <span className="text-foreground">de adăugat</span></p><p>Email — <a className="text-foreground transition-colors hover:text-gold" href="mailto:sansretourstudio@gmail.com">sansretourstudio@gmail.com</a></p><p>WhatsApp — <a className="text-foreground transition-colors hover:text-gold" href="https://wa.me/40724674008" target="_blank" rel="noopener noreferrer">0724 674 008</a></p></div></div>
            <div className="flex flex-col justify-center gap-5 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><p className="text-lg leading-relaxed text-foreground">{locale === "ro" ? "Hai să discutăm despre proiectul tău." : "Let’s talk about your project."}</p><Button asChild variant="outline" size="lg" className="w-fit rounded-none border-gold/70 bg-transparent px-7 text-gold hover:bg-gold hover:text-background"><a href="tel:+40724674008">{locale === "ro" ? "HAI SĂ VORBIM" : "LET’S TALK"} <ArrowUpRight className="ml-2 size-4" /></a></Button></div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><Logo /><p className="mt-8 text-xs tracking-[0.18em] text-muted-foreground">{t.footer.place}</p></div>
          <div className="grid gap-5 text-xs tracking-[0.12em] text-muted-foreground sm:grid-cols-3"><a href="https://www.instagram.com/sansretourcs/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">INSTAGRAM — @SANSRETOURCS</a><span>TIKTOK — ÎN CURÂND</span><a href="#contact" className="hover:text-foreground">CONTACT</a></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1500px] flex-col gap-4 border-t border-border pt-6 text-[0.65rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 SANS RETOUR · CONTENT STUDIO</span><div className="flex gap-5"><a href="/politica-de-confidentialitate" className="hover:text-foreground">{t.footer.privacy}</a><a href="/politica-de-cookies" className="hover:text-foreground">{t.footer.cookies}</a></div></div>
      </footer>
    </div>
  );
}

const featureTranslations: Record<string,string> = {
"5 clipuri verticale / lună":"5 vertical videos / month","10 clipuri verticale / lună":"10 vertical videos / month","20 clipuri verticale / lună":"20 vertical videos / month","5 fotografii editate":"5 edited photos","10 fotografii editate":"10 edited photos","15 fotografii editate":"15 edited photos","1 sesiune de producție":"1 production session","2 sesiuni de producție":"2 production sessions","3 sesiuni de producție":"3 production sessions","Strategie lunară":"Monthly strategy","Idei & concepte":"Ideas & concepts","Scripturi și hook-uri":"Scripts & hooks","Regie la filmare":"On-set direction","Filmare + editare":"Filming + editing","Calendar de content":"Content calendar","Captions":"Captions","Audit inițial":"Initial audit","Raport lunar":"Monthly report","Analiză & optimizare":"Analysis & optimization","Trend Research & Adaptare":"Trend research & adaptation","Analiză competiție":"Competitor analysis","Publicare multi-platformă":"Multi-platform publishing","Administrare social media":"Social media management","Community management":"Community management","Optimizare profil":"Profile optimization","Trend Response":"Trend response"
};
function translateFeature(feature:string){return featureTranslations[feature] ?? feature;}
function ServiceCard({ index, title, price, features, cta, interest, tone, badge, locale }: { index: string; title: string; price: string; features: string[]; cta: string; interest: "start" | "clasic" | "full_social"; tone: "essential" | "elite" | "royal"; badge?: string; locale: Locale }) {
  const cardClass = `package-card package-card--${tone} p-7 sm:p-8`;
  const mutedClass = tone === "elite" ? "text-[#17130D]/60" : "text-[#F2E9D8]/55";
  const buttonVariant = tone === "elite" ? "secondary" : "outline";
  return <article className={cardClass}><div className="flex items-center justify-between"><span className={`text-xs tracking-[0.2em] ${tone === "elite" ? "text-[#241B0E]" : "text-gold"}`}>{index}</span>{badge ? <span className={`text-[0.55rem] tracking-[0.18em] ${mutedClass}`}>{badge}</span> : null}</div><h3 className="mt-8 break-normal font-display text-3xl [overflow-wrap:normal] sm:mt-10 sm:text-4xl">{title}</h3><p className={`mt-4 font-display text-2xl ${tone === "elite" ? "text-[#241B0E]" : "text-gold"}`}>{price}<span className={`ml-2 font-sans text-[0.6rem] tracking-[0.14em] ${mutedClass}`}>{locale === "ro" ? "/ LUNĂ" : "/ MONTH"}</span></p><ul className="mt-8 space-y-3 sm:mt-9">{features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm"><Check className={`size-3 shrink-0 ${tone === "elite" ? "text-[#241B0E]" : "text-gold"}`} />{feature}</li>)}</ul><Button asChild variant={buttonVariant} className={`mt-10 h-12 rounded-none px-5 sm:mt-12 ${tone === "royal" ? "border-gold/60 text-[#F2E9D8] hover:bg-gold hover:text-[#090909]" : ""}`}><a href={`?interest=${interest}#contact`} onClick={(event) => { event.preventDefault(); window.history.replaceState(null, "", `?interest=${interest}#contact`); window.dispatchEvent(new CustomEvent("sans-retour-interest", { detail: interest })); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>{cta}<ArrowUpRight /></a></Button></article>;
}
