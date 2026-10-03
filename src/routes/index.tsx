import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm, IdeasForm } from "@/components/noire/LeadForms";
import { Logo } from "@/components/noire/Logo";
import { SectionHeading } from "@/components/noire/SectionHeading";
import { SiteHeader } from "@/components/noire/SiteHeader";
import { VideoPlaceholder } from "@/components/noire/VideoPlaceholder";
import heroImage from "@/assets/noire-hero.jpg";

const metaDescription = "NOIRE creează content video pentru businessuri din București și Brașov: strategie, scenarii, filmare, editare și planificare pentru TikTok, Instagram Reels și YouTube Shorts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOIRE Content Studio | Content pentru Business" },
      { name: "description", content: metaDescription },
      { property: "og:title", content: "NOIRE Content Studio | Content pentru Business" },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const problems = [
  ["NU AI IDEI?", "Le găsim noi."], ["NU ȘTII CE SĂ SPUI?", "Îți scriem noi scenariul."],
  ["NU ȘTII CUM SĂ FILMEZI?", "Venim noi la locație."], ["NU VREI SĂ EDITEZI?", "Facem noi asta."],
  ["NU ȘTII CÂND SĂ POSTEZI?", "Primești calendarul complet."], ["NU AI TIMP SĂ POSTEZI?", "O putem face noi."],
];

const process = [
  ["STRATEGIE", "Înțelegem businessul, publicul și obiectivele."], ["IDEI", "Construim concepte potrivite businessului."],
  ["SCRIPT", "Creăm hook-urile și îți spunem exact ce să spui."], ["FILMARE", "Venim la locația ta și filmăm."],
  ["EDITARE", "Transformăm materialul în Reels, TikToks și Shorts."], ["PLANIFICARE", "Construim calendarul de publicare."],
  ["POSTARE", "Îți livrăm totul gata sau administrăm noi publicarea."],
];

const projects = ["AUTOMOTIVE", "BEAUTY", "RESTAURANT", "FITNESS", "MEDICAL", "REAL ESTATE"];
const industries = ["BEAUTY & AESTHETICS", "MEDICAL", "RESTAURANTS", "AUTOMOTIVE", "FITNESS", "REAL ESTATE", "LOCAL BUSINESS"];
const contentSystem = ["Strategie lunară", "Idei de content", "Hook-uri și scenarii", "Sesiune de filmare", "Editare profesională", "Reels / TikTok / Shorts", "Calendar editorial"];
const fullSocial = [...contentSystem, "Administrarea publicării", "Captions", "Programarea postărilor", "Optimizarea strategiei", "Raportare lunară"];

function Index() {
  return (
    <div className="overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <main>
        <section id="acasa" className="relative flex min-h-[100svh] items-end overflow-hidden border-b border-border px-5 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-20">
          <img src={heroImage} width={1920} height={1080} alt="Cameră cinematografică pregătită pentru producție video NOIRE" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative z-10 mx-auto w-full max-w-[1500px]">
            <div className="mb-6 grid w-fit grid-cols-[2rem_minmax(0,1fr)] items-center gap-3 text-[0.56rem] tracking-[0.16em] text-gold sm:mb-8 sm:flex sm:text-[0.62rem] sm:tracking-[0.24em]"><span className="h-px w-8 bg-gold sm:w-10" />CONTENT VIDEO PENTRU BUSINESS</div>
            <h1 className="hero-title max-w-6xl text-balance">NU MAI STA SĂ TE GÂNDEȘTI<br /><span className="text-ivory-muted">CE SĂ POSTEZI.</span></h1>
            <div className="mt-7 grid gap-6 sm:mt-9 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Noi venim cu ideea. Îți spunem ce să spui.<br /><span className="text-foreground">Filmăm. Edităm. Planificăm. Postăm.</span></p>
              <div className="grid gap-3 sm:flex sm:flex-row">
                <Button asChild size="lg" className="h-12 w-full rounded-none px-5 text-[0.68rem] tracking-[0.1em] sm:h-13 sm:w-auto sm:px-6 sm:tracking-[0.12em]"><a href="#contact">ÎNCEPE UN PROIECT <ArrowUpRight /></a></Button>
                <Button asChild variant="outline" size="lg" className="h-12 w-full rounded-none bg-transparent px-5 text-[0.68rem] tracking-[0.1em] sm:h-13 sm:w-auto sm:px-6 sm:tracking-[0.12em]"><a href="#proces">VEZI CUM LUCRĂM <ArrowDown /></a></Button>
              </div>
            </div>
          </div>
          <span className="absolute right-5 top-28 z-10 hidden border border-border bg-background/50 px-3 py-2 text-[0.55rem] tracking-[0.18em] text-muted-foreground backdrop-blur-sm sm:right-8 sm:block lg:right-12">SHOWREEL — PLACEHOLDER VIDEO</span>
        </section>

        <section className="section-shell py-20 sm:py-36 lg:py-48">
          <SectionHeading label="NOIRE CONTENT STUDIO">TU CONDUCI BUSINESSUL.<br /><span className="text-ivory-muted">NOI NE OCUPĂM DE CONTENT.</span></SectionHeading>
          <div className="mt-11 grid gap-8 border-t border-border pt-7 sm:mt-16 sm:gap-10 sm:pt-8 md:grid-cols-2 lg:mt-24">
            <p className="max-w-xl text-xl leading-relaxed sm:text-2xl">Serile tale nu ar trebui să se termine căutând idei pentru TikTok sau rescriind un script care nu sună natural.</p>
            <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end">Construim întregul sistem de content: de la prima idee până la clipul editat și calendarul de publicare. Tu vii cu expertiza. Noi o facem vizibilă.</p>
          </div>
        </section>

        <section className="border-y border-border bg-surface-subtle py-20 sm:py-36">
          <div className="section-shell">
            <SectionHeading label="MAI PUȚINĂ PRESIUNE. MAI MULTĂ CLARITATE.">CONTENTUL <span className="whitespace-nowrap">N-AR</span> TREBUI<br /><span className="whitespace-nowrap">SĂ-ȚI</span> CONSUME TIMPUL.</SectionHeading>
            <div className="mt-11 grid border-l border-t border-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map(([title, copy], index) => (
                <article key={title} className="group min-h-48 border-b border-r border-border p-6 transition-colors duration-500 hover:bg-surface sm:min-h-56 sm:p-8">
                  <span className="text-xs tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-12 break-normal font-display text-2xl [overflow-wrap:normal] sm:mt-16 sm:text-3xl">{title}</h3>
                  <p className="mt-3 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proces" className="section-shell scroll-mt-20 py-20 sm:py-36 lg:py-48">
          <SectionHeading label="DE LA STRATEGIE LA PUBLICARE">O ZI DE FILMARE.<br /><span className="text-ivory-muted">O LUNĂ DE CONTENT.</span></SectionHeading>
          <div className="relative mt-12 sm:mt-20 lg:ml-[22%]">
            <div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-border sm:left-[1.65rem]" />
            {process.map(([title, copy], index) => (
              <article key={title} className="relative grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-6 sm:grid-cols-[4rem_0.7fr_1fr] sm:gap-8 sm:py-10">
                <span className="relative z-10 grid size-9 place-items-center rounded-full border border-gold bg-background text-[0.6rem] text-gold sm:size-12">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl sm:text-4xl">{title}</h3>
                <p className="col-start-2 max-w-lg text-muted-foreground sm:col-start-3 sm:pt-2">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portofoliu" className="scroll-mt-20 border-y border-border bg-surface-subtle py-20 sm:py-36">
          <div className="section-shell">
            <SectionHeading label="SELECTED WORK">CONTENT CARE MERITĂ<br />SĂ FIE VĂZUT.</SectionHeading>
            <div className="mt-11 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 sm:mt-16 sm:gap-5 md:grid-cols-3 lg:ml-[15%]">
              {projects.map((category, index) => <VideoPlaceholder key={category} project={`PROJECT ${String(index + 1).padStart(3, "0")}`} category={category} className={index % 3 === 1 ? "md:translate-y-12" : ""} />)}
            </div>
            <p className="mt-12 border-t border-border pt-6 text-xs tracking-[0.14em] text-muted-foreground sm:mt-20 sm:tracking-[0.18em]">PROIECTELE NOASTRE VOR APĂREA AICI ÎN CURÂND.</p>
          </div>
        </section>

        <section className="section-shell py-20 sm:py-36 lg:py-48">
          <SectionHeading label="INDUSTRII">CONTENT CREAT PENTRU<br />BUSINESSUL TĂU.</SectionHeading>
          <div className="mt-11 border-t border-border sm:mt-16">
            {industries.map((industry, index) => (
              <div key={industry} className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:text-gold sm:py-8">
                <span className="text-[0.6rem] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="truncate font-display text-[clamp(1.55rem,4vw,4.5rem)]">{industry}</h3>
                <span className="flex items-center gap-2 text-[0.55rem] tracking-[0.15em] text-muted-foreground"><Circle className="size-2 fill-current" /> SPAȚIU VIDEO</span>
              </div>
            ))}
          </div>
        </section>

        <section id="servicii" className="scroll-mt-20 border-y border-border bg-surface-subtle py-20 sm:py-36">
          <div className="section-shell">
            <SectionHeading label="SERVICII">NOI FACEM CONTENTUL.<br /><span className="text-ivory-muted">TU ÎȚI CONDUCI BUSINESSUL.</span></SectionHeading>
            <div className="mt-11 grid gap-px bg-border sm:mt-16 lg:grid-cols-2">
              <ServiceCard index="01" title="CONTENT SYSTEM" features={contentSystem} cta="CERE OFERTĂ" />
              <ServiceCard index="02" title="FULL SOCIAL" features={fullSocial} cta="VREAU FULL SOCIAL" featured />
            </div>
          </div>
        </section>

        <section id="idei" className="scroll-mt-20 border-y border-border bg-background py-20 sm:py-28 lg:py-32">
          <div className="section-shell grid overflow-hidden border border-border bg-surface lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative isolate min-h-96 overflow-hidden p-7 sm:p-10 lg:min-h-full lg:p-14">
              <img src={heroImage} width={1920} height={1080} loading="lazy" alt="Producție video NOIRE în lumină cinematografică" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" />
              <div className="absolute inset-0 -z-10 bg-background/75" />
              <div className="flex h-full flex-col justify-end"><p className="eyebrow">GRATUIT</p><h2 className="section-title max-w-xl">NU ȘTII CE AI PUTEA POSTA?</h2><p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">Îți trimitem 3 idei de clipuri create special pentru businessul tău.</p></div>
            </div>
            <div className="relative border-t border-border bg-surface-subtle p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14"><div className="absolute right-7 top-7 grid size-10 place-items-center border border-border text-gold sm:right-10 sm:top-10"><span className="h-px w-5 rotate-45 bg-gold/50" /></div><div className="pt-14 sm:pt-16"><IdeasForm /></div></div>
          </div>
        </section>

        <section id="despre" className="section-shell scroll-mt-20 py-20 sm:py-36 lg:py-48">
          <SectionHeading label="DESPRE NOIRE">NU SUNTEM AICI<br /><span className="whitespace-nowrap">SĂ-ȚI</span> MAI DĂM TEME.</SectionHeading>
          <div className="mt-11 grid gap-8 border-t border-border pt-7 sm:mt-16 sm:gap-10 sm:pt-8 md:grid-cols-2">
            <p className="font-display text-2xl leading-snug sm:text-4xl">NOIRE a pornit dintr-o idee simplă:</p>
            <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted-foreground"><p>Businessurile au nevoie de content, dar proprietarii nu ar trebui să devină peste noapte scenariști, cameramani și editori.</p><p className="text-foreground">Noi construim sistemul.<br />Tu apari și îți conduci businessul.</p></div>
          </div>
        </section>

        <section className="border-y border-border bg-surface-subtle py-20 text-center sm:py-40">
          <div className="section-shell"><h2 className="section-title mx-auto max-w-6xl">URMĂTOAREA TA LUNĂ<br /><span className="text-ivory-muted">DE CONTENT ÎNCEPE AICI.</span></h2><div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row"><Button asChild size="lg" className="h-12 rounded-none px-7 sm:h-13"><a href="#contact">HAI SĂ VORBIM <ArrowUpRight /></a></Button><Button asChild variant="outline" size="lg" className="h-12 rounded-none bg-transparent px-5 sm:h-13 sm:px-7"><a href="#idei">PRIMEȘTE 3 IDEI GRATUITE</a></Button></div></div>
        </section>

        <section id="contact" className="section-shell scroll-mt-20 py-20 sm:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div><p className="eyebrow">CONTACT</p><h2 className="section-title">SPUNE-NE CE<br />VREI SĂ CREȘTI.</h2><p className="mt-8 max-w-md leading-7 text-muted-foreground">Povestește-ne despre businessul tău. Construim de aici conversația potrivită.</p><div className="mt-12 space-y-4 border-t border-border pt-6 text-sm text-muted-foreground"><p>Instagram — <span className="text-foreground">de adăugat</span></p><p>TikTok — <span className="text-foreground">de adăugat</span></p><p>Email — <span className="text-foreground">de adăugat</span></p><p>WhatsApp — <span className="text-foreground">de adăugat</span></p></div></div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><Logo /><p className="mt-8 text-xs tracking-[0.18em] text-muted-foreground">BUCUREȘTI · BRAȘOV · ROMÂNIA</p></div>
          <div className="grid gap-5 text-xs tracking-[0.12em] text-muted-foreground sm:grid-cols-3"><span>INSTAGRAM — ÎN CURÂND</span><span>TIKTOK — ÎN CURÂND</span><a href="#contact" className="hover:text-foreground">CONTACT</a></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1500px] flex-col gap-4 border-t border-border pt-6 text-[0.65rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 NOIRE CONTENT STUDIO</span><div className="flex gap-5"><a href="/politica-de-confidentialitate" className="hover:text-foreground">POLITICA DE CONFIDENȚIALITATE</a><a href="/politica-de-cookies" className="hover:text-foreground">POLITICA DE COOKIES</a></div></div>
      </footer>
    </div>
  );
}

function ServiceCard({ index, title, features, cta, featured = false }: { index: string; title: string; features: string[]; cta: string; featured?: boolean }) {
  return <article className={featured ? "bg-premium-ivory p-7 text-premium-ivory-foreground sm:p-10" : "bg-background p-7 sm:p-10"}><div className="flex items-center justify-between"><span className="text-xs tracking-[0.2em] text-gold">{index}</span>{featured ? <span className="text-[0.55rem] tracking-[0.18em] text-premium-ivory-foreground/60">SISTEM COMPLET</span> : null}</div><h3 className="mt-8 break-normal font-display text-4xl [overflow-wrap:normal] sm:mt-10 sm:text-5xl">{title}</h3><ul className="mt-8 space-y-4 sm:mt-10">{features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm"><Check className="size-3 shrink-0 text-gold" />{feature}</li>)}</ul><Button asChild variant={featured ? "secondary" : "outline"} className="mt-10 h-12 rounded-none px-6 sm:mt-12"><a href="#contact">{cta}<ArrowUpRight /></a></Button></article>;
}