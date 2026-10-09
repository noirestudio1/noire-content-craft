import { copy, paths, type Locale } from "@/lib/site-locale";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Check, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/noire/LeadForms";
import { Logo } from "@/components/noire/Logo";
import { SectionHeading } from "@/components/noire/SectionHeading";
import { SiteHeader } from "@/components/noire/SiteHeader";
import { VideoPlaceholder } from "@/components/noire/VideoPlaceholder";
import { CinematicExperience } from "@/components/noire/CinematicExperience";
import { CinematicImageLayer, CinematicMask, CinematicScene } from "@/components/noire/CinematicScene";
import heroImage from "@/assets/noire-hero.jpg";
import cinematicProduction from "@/assets/cinematic-production.jpg";
import cinematicSocial from "@/assets/cinematic-social.jpg";
import cinematicProcess from "@/assets/cinematic-process.jpg";
import cinematicIndustries from "@/assets/cinematic-industries.jpg";
import problemEditing from "@/assets/problem-editing.png";
import problemPlanning from "@/assets/problem-planning.png";
import { ScrollSequence } from "@/components/noire/ScrollSequence";

const processImages = [cinematicProcess, heroImage, cinematicProduction, cinematicProduction, problemEditing, problemPlanning, cinematicSocial];

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
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: () => <HomePage locale="ro" />,
});

const problems = [
  ["NU AI IDEI?", "Noi avem. Tu ai un business de condus.", cinematicProduction],
  ["NU ȘTII CE SĂ SPUI?", "Te ghidăm cadru cu cadru — ce spui, cum o spui, intonație, mimică și prezență. Ca un regizor.", cinematicSocial],
  ["NU ȘTII CUM SĂ FILMEZI?", "Venim la locație și construim cadrele pentru tine.", cinematicProcess],
  ["NU VREI SĂ EDITEZI?", "Din material brut facem content care ține atenția.", problemEditing],
  ["NU ȘTII CÂND SĂ POSTEZI?", "Construim un calendar clar pentru ritmul businessului.", problemPlanning],
  ["NU AI TIMP SĂ POSTEZI?", "Putem administra publicarea, ca tu să rămâi în business.", cinematicIndustries],
] as const;

const process = [
  ["STRATEGIE", "Înainte să pornim camera, trebuie să știm de ce ar rămâne cineva să se uite."],
  ["IDEI", "Nu-ți cerem să vii cu ideile. Asta e treaba noastră."],
  ["SCRIPT", "Știi ce spui înainte să apăsăm REC. Fără improvizații incomode."],
  ["FILMARE", "Tu vii cu expertiza. Noi venim cu camera și te regizăm."],
  ["EDITARE", "Tăiem ce plictisește. Păstrăm ce ține omul pe ecran."],
  ["PLANIFICARE", "Fiecare clip are un loc și un moment. Nu postăm la întâmplare."],
  ["POSTARE", "Contentul pleacă. Tu te întorci la business."],
];

const projects = [
  { title: "PROJECT 001", category: "AUTOMOTIVE", videoUrl: null, poster: null },
  { title: "PROJECT 002", category: "BEAUTY", videoUrl: null, poster: null },
  { title: "PROJECT 003", category: "RESTAURANT", videoUrl: null, poster: null },
  { title: "PROJECT 004", category: "FITNESS", videoUrl: null, poster: null },
  { title: "PROJECT 005", category: "MEDICAL", videoUrl: null, poster: null },
  { title: "PROJECT 006", category: "REAL ESTATE", videoUrl: null, poster: null },
] as const;
const industries = [
  ["BEAUTY & AESTHETICS", "Portrete, servicii și transformări cu imagine premium."],
  ["MEDICAL", "Expertiză explicată clar, uman și credibil."],
  ["RESTAURANTS", "Povești, atmosferă și produs, filmate cinematic."],
  ["AUTOMOTIVE", "Detaliu, mișcare și cadre construite pentru pasiune."],
  ["FITNESS", "Energie, progres și comunitate transformate în content."],
  ["REAL ESTATE", "Spații prezentate cinematic, nu ca simple anunțuri."],
  ["LOCAL BUSINESS", "Oameni reali și businessuri locale cu povești care merită văzute."],
] as const;
const contentStart = ["5 clipuri verticale / lună", "5 fotografii editate", "1 sesiune de producție", "Strategie lunară", "Idei & concepte", "Scripturi și hook-uri", "Regie la filmare", "Filmare + editare", "Calendar de content", "Captions", "Audit inițial", "Raport lunar"];
const contentSystem = ["10 clipuri verticale / lună", "10 fotografii editate", "2 sesiuni de producție", "Strategie lunară", "Idei & concepte", "Scripturi și hook-uri", "Regie la filmare", "Filmare + editare", "Calendar de content", "Captions", "Audit inițial", "Analiză & optimizare", "Trend Research & Adaptare", "Analiză competiție", "Raport lunar"];
const fullSocial = ["20 clipuri verticale / lună", "15 fotografii editate", "3 sesiuni de producție", "Strategie lunară", "Idei & concepte", "Scripturi și hook-uri", "Regie la filmare", "Filmare + editare", "Calendar de content", "Captions", "Audit inițial", "Analiză & optimizare", "Trend Research & Adaptare", "Analiză competiție", "Publicare multi-platformă", "Administrare social media", "Community management", "Optimizare profil", "Trend Response", "Raport lunar"];

  return (
    <div className="overflow-x-clip bg-background text-foreground">
      <SiteHeader locale={locale} />
      <main>
        <CinematicScene id="acasa" className="hero-cinematic scroll-mt-0">
          <div className="hero-cinematic-stage">
            <div className="hero-reel" aria-hidden="true">
              <div className="hero-reel-frame hero-reel-frame--old"><img src={heroImage} alt="" fetchPriority="high" decoding="async" /></div>
              <div className="hero-reel-frame hero-reel-frame--production"><img src={cinematicProduction} alt="" loading="eager" decoding="async" /></div>
              <div className="hero-reel-frame hero-reel-frame--social"><img src={cinematicSocial} alt="" loading="eager" decoding="async" /></div>
            </div>
            <CinematicImageLayer src={cinematicSocial} className="hero-cinematic-portrait" />
            <div className="hero-cinematic-slat" aria-hidden="true"><img src={cinematicSocial} alt="" loading="eager" decoding="async" /></div>
            <CinematicMask className="hero-cinematic-grade" />
            <div className="hero-cinematic-light" aria-hidden="true" />
            <div className="hero-cinematic-grain" aria-hidden="true" />
            <CinematicExperience />
            <div className="hero-cinematic-content">
              <div className="relative z-10 mx-auto w-full max-w-[1500px]">
            <div className="mb-6 grid w-fit grid-cols-[2rem_minmax(0,1fr)] items-center gap-3 text-[0.56rem] tracking-[0.16em] text-gold sm:mb-8 sm:flex sm:text-[0.62rem] sm:tracking-[0.24em]"><span className="h-px w-8 bg-gold sm:w-10" />{t.hero.kicker}</div>
            <h1 className="hero-title hero-cinematic-title max-w-6xl text-balance">{locale === "ro" ? <>NU MAI STA SĂ TE GÂNDEȘTI<br /><span className="text-ivory-muted">CE SĂ POSTEZI.</span></> : <>STOP WONDERING<br /><span className="text-ivory-muted">WHAT TO POST.</span></>}</h1>
            <div className="mt-7 grid gap-6 sm:mt-9 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">{locale === "ro" ? <>Noi venim cu ideea. Îți spunem ce să spui.<br /><span className="text-foreground">Filmăm. Edităm. Planificăm. Postăm.</span></> : <>We bring the ideas. We guide you on camera.<br /><span className="text-foreground">We shoot. Edit. Plan. Publish.</span></>}</p>
              <div className="grid gap-3 sm:flex sm:flex-row">
                <Button asChild size="lg" className="h-12 w-full rounded-none px-5 text-[0.68rem] tracking-[0.1em] sm:h-13 sm:w-auto sm:px-6 sm:tracking-[0.12em]"><a href="?interest=unsure#contact" onClick={(event) => { event.preventDefault(); window.history.replaceState(null, "", `?interest=unsure#contact`); window.dispatchEvent(new CustomEvent("sans-retour-interest", { detail: "unsure" })); requestAnimationFrame(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })); }}>{t.hero.start} <ArrowUpRight /></a></Button>
                <Button asChild variant="outline" size="lg" className="h-12 w-full rounded-none bg-transparent px-5 text-[0.68rem] tracking-[0.1em] sm:h-13 sm:w-auto sm:px-6 sm:tracking-[0.12em]"><a href="#proces">{t.hero.process} <ArrowDown /></a></Button>
              </div>
            </div>
              </div>
            </div>
            <div className="hero-scene-wipe" aria-hidden="true"><span /></div>
            <span className="absolute right-5 top-28 z-20 hidden border border-border bg-background/50 px-3 py-2 text-[0.55rem] tracking-[0.18em] text-muted-foreground backdrop-blur-sm sm:right-8 sm:block lg:right-12">SHOWREEL — PLACEHOLDER VIDEO</span>
          </div>
        </CinematicScene>

        <section id="portofoliu" className="champagne-work scroll-mt-20 border-y border-border bg-surface-subtle py-16 sm:py-28"><div className="champagne-work-marquee" aria-hidden="true"><span>SELECTED WORK · SANS RETOUR · SELECTED WORK · SANS RETOUR ·</span></div>
          <div className="section-shell">
            <SectionHeading label="SELECTED WORK">{locale === "ro" ? <>CONTENT CARE MERITĂ<br />SĂ FIE VĂZUT.</> : <>CONTENT WORTH<br />WATCHING.</>}</SectionHeading>
            <div className="mt-11 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 sm:mt-16 sm:gap-5 md:grid-cols-3 lg:ml-[15%]">
              {projects.map((project, index) => <div id={`work-${project.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={project.category} className={index % 3 === 1 ? "md:translate-y-12" : ""}><VideoPlaceholder project={project.title} category={project.category} videoUrl={project.videoUrl} poster={project.poster} className="reveal-card portfolio-motion" /></div>)}
            </div>
            <p className="mt-12 border-t border-border pt-6 text-xs tracking-[0.14em] text-muted-foreground sm:mt-20 sm:tracking-[0.18em]">{t.portfolio.pending}</p>
          </div>
        </section>

        <section className="champagne-problems section-shell py-16 sm:py-24" id="ce-facem"><SectionHeading label={t.what.label}>{t.what.title}</SectionHeading><div className="mt-12 grid gap-6 md:grid-cols-3">{t.what.items.map(([heading,body],i)=><article key={heading} className="reveal-card border-t border-border pt-6"><p className="mb-5 text-xs tracking-[0.18em] text-gold">0{i+1}</p><h3 className="font-display text-2xl">{heading}</h3><p className="mt-4 leading-7 text-muted-foreground">{body}</p></article>)}</div></section>
        <section id="proces" className="process-premium section-shell scroll-mt-20 py-16 sm:py-24"><SectionHeading label={t.process.label}>{t.process.title}</SectionHeading><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{t.process.items.map(([heading,body],i)=><article key={heading} className="reveal-card border-t border-gold/40 pt-6"><span className="text-xs tracking-[0.2em] text-gold">{String(i+1).padStart(2,"0")}</span><h3 className="mt-5 font-display text-xl">{heading}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p></article>)}</div></section>
        <section id="despre" className="champagne-about section-shell scroll-mt-20 py-16 sm:py-24"><SectionHeading label={t.about.label}>{t.about.title}</SectionHeading><p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">{t.about.body}</p><a href={paths[locale].about} className="mt-8 inline-block border-b border-gold pb-2 text-xs tracking-[0.14em] text-gold">{t.about.link} →</a></section>
        <section id="servicii" className="champagne-services scroll-mt-20 border-y border-border bg-surface-subtle py-16 sm:py-28">
          <div className="section-shell">
            <SectionHeading label="SERVICII">{locale === "ro" ? <>NOI FACEM CONTENTUL.<br /><span className="text-ivory-muted">TU ÎȚI CONDUCI BUSINESSUL.</span></> : <>WE MAKE THE CONTENT.<br /><span className="text-ivory-muted">YOU RUN THE BUSINESS.</span></>}</SectionHeading>
            <div className="package-grid mt-11 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
              <ServiceCard index="01" title="ESSENTIAL" price="1.500 LEI" features={locale === "ro" ? contentStart : contentStart.map(translateFeature)} cta="ALEGE ESSENTIAL" interest="start" tone="essential" />
              <ServiceCard index="02" title="ELITE" price="2.500 LEI" features={locale === "ro" ? contentSystem : contentSystem.map(translateFeature)} cta="ALEGE ELITE" interest="clasic" tone="elite" badge={t.pricing.most} />
              <ServiceCard index="03" title="BLACK ROYAL" price="4.500 LEI" features={locale === "ro" ? fullSocial : fullSocial.map(translateFeature)} cta="ALEGE BLACK ROYAL" interest="full_social" tone="royal" badge={t.pricing.full} />
            </div>
            <p className="mt-7 text-center text-xs tracking-[0.08em] text-muted-foreground">{t.pricing.custom}</p>
          </div>
        </section>

        <section id="contact" className="section-shell scroll-mt-20 py-16 sm:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div><p className="eyebrow">CONTACT</p><h2 className="section-title">{locale === "ro" ? <>SPUNE-NE CE<br />VREI SĂ CREȘTI.</> : <>TELL US WHAT<br />YOU WANT TO GROW.</>}</h2><p className="mt-8 max-w-md leading-7 text-muted-foreground">{t.contact.body}</p><div className="mt-12 space-y-4 border-t border-border pt-6 text-sm text-muted-foreground"><p>Instagram — <span className="text-foreground">de adăugat</span></p><p>TikTok — <span className="text-foreground">de adăugat</span></p><p>Email — <a className="text-foreground transition-colors hover:text-gold" href="mailto:sansretourstudio@gmail.com">sansretourstudio@gmail.com</a></p><p>WhatsApp — <span className="text-foreground">de adăugat</span></p></div></div>
            <ContactForm locale={locale} />
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><Logo /><p className="mt-8 text-xs tracking-[0.18em] text-muted-foreground">BUCUREȘTI · BRAȘOV · ROMÂNIA</p></div>
          <div className="grid gap-5 text-xs tracking-[0.12em] text-muted-foreground sm:grid-cols-3"><span>INSTAGRAM — ÎN CURÂND</span><span>TIKTOK — ÎN CURÂND</span><a href="#contact" className="hover:text-foreground">CONTACT</a></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1500px] flex-col gap-4 border-t border-border pt-6 text-[0.65rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 SANS RETOUR · CONTENT STUDIO</span><div className="flex gap-5"><a href="/politica-de-confidentialitate" className="hover:text-foreground">POLITICA DE CONFIDENȚIALITATE</a><a href="/politica-de-cookies" className="hover:text-foreground">POLITICA DE COOKIES</a></div></div>
      </footer>
    </div>
  );
}

const featureTranslations: Record<string,string> = {
"5 clipuri verticale / lună":"5 vertical videos / month","10 clipuri verticale / lună":"10 vertical videos / month","20 clipuri verticale / lună":"20 vertical videos / month","5 fotografii editate":"5 edited photos","10 fotografii editate":"10 edited photos","15 fotografii editate":"15 edited photos","1 sesiune de producție":"1 production session","2 sesiuni de producție":"2 production sessions","3 sesiuni de producție":"3 production sessions","Strategie lunară":"Monthly strategy","Idei & concepte":"Ideas & concepts","Scripturi și hook-uri":"Scripts & hooks","Regie la filmare":"On-set direction","Filmare + editare":"Filming + editing","Calendar de content":"Content calendar","Captions":"Captions","Audit inițial":"Initial audit","Raport lunar":"Monthly report","Analiză & optimizare":"Analysis & optimization","Trend Research & Adaptare":"Trend research & adaptation","Analiză competiție":"Competitor analysis","Publicare multi-platformă":"Multi-platform publishing","Administrare social media":"Social media management","Community management":"Community management","Optimizare profil":"Profile optimization","Trend Response":"Trend response"
};
function translateFeature(feature:string){return featureTranslations[feature] ?? feature;}
function ServiceCard({ index, title, price, features, cta, interest, tone, badge }: { index: string; title: string; price: string; features: string[]; cta: string; interest: "start" | "clasic" | "full_social"; tone: "essential" | "elite" | "royal"; badge?: string }) {
  const cardClass = `package-card package-card--${tone} p-7 sm:p-8`;
  const mutedClass = tone === "elite" ? "text-[#17130D]/60" : "text-[#F2E9D8]/55";
  const buttonVariant = tone === "elite" ? "secondary" : "outline";
  return <article className={cardClass}><div className="flex items-center justify-between"><span className={`text-xs tracking-[0.2em] ${tone === "elite" ? "text-[#241B0E]" : "text-gold"}`}>{index}</span>{badge ? <span className={`text-[0.55rem] tracking-[0.18em] ${mutedClass}`}>{badge}</span> : null}</div><h3 className="mt-8 break-normal font-display text-3xl [overflow-wrap:normal] sm:mt-10 sm:text-4xl">{title}</h3><p className={`mt-4 font-display text-2xl ${tone === "elite" ? "text-[#241B0E]" : "text-gold"}`}>{price}<span className={`ml-2 font-sans text-[0.6rem] tracking-[0.14em] ${mutedClass}`}>/ LUNĂ</span></p><ul className="mt-8 space-y-3 sm:mt-9">{features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm"><Check className={`size-3 shrink-0 ${tone === "elite" ? "text-[#241B0E]" : "text-gold"}`} />{feature}</li>)}</ul><Button asChild variant={buttonVariant} className={`mt-10 h-12 rounded-none px-5 sm:mt-12 ${tone === "royal" ? "border-gold/60 text-[#F2E9D8] hover:bg-gold hover:text-[#090909]" : ""}`}><a href={`?interest=${interest}#contact`} onClick={(event) => { event.preventDefault(); window.history.replaceState(null, "", `?interest=${interest}#contact`); window.dispatchEvent(new CustomEvent("sans-retour-interest", { detail: interest })); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>{cta}<ArrowUpRight /></a></Button></article>;
}
