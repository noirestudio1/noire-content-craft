import { SiteHeader } from "@/components/noire/SiteHeader";
import { Logo } from "@/components/noire/Logo";
import { ContactForm } from "@/components/noire/LeadForms";
import { copy, paths, type Locale, type PublicPage } from "@/lib/site-locale";
import { Check } from "lucide-react";
const packages = [
  {name:"ESSENTIAL",price:"1.500 LEI",items:["5 video clips","5 edited photos","1 production session"]},
  {name:"ELITE",price:"2.500 LEI",items:["10 video clips","10 edited photos","2 production sessions"]},
  {name:"BLACK ROYAL",price:"4.500 LEI",items:["20 video clips","15 edited photos","3 production sessions"]}
];
export function ContentPage({locale,page}:{locale:Locale;page:Exclude<PublicPage,"home">}){
 const t=copy[locale];
 const title={about:t.about.title,services:locale==="ro"?"SERVICIILE NOASTRE":"OUR SERVICES",portfolio:locale==="ro"?"PORTOFOLIU":"SELECTED WORK",contact:locale==="ro"?"HAI SĂ VORBIM":"LET'S TALK"}[page];
 return <div className="min-h-screen bg-background text-foreground"><SiteHeader locale={locale} page={page}/><main className="section-shell pb-24 pt-36 sm:pt-48"><p className="eyebrow">SANS RETOUR · CONTENT STUDIO</p><h1 className="section-title mt-8">{title}</h1>
 {page==="about"&&<div className="mt-12 max-w-3xl"><p className="text-lg leading-8 text-muted-foreground">{t.about.body}</p><p className="mt-6 text-lg leading-8 text-muted-foreground">{locale==="ro"?"De la idee și scenariu până la filmare, editare și publicare, te ghidăm pe tot parcursul producției.":"From concept and script to filming, editing and publishing, we guide you through every stage of production."}</p></div>}
 {page==="portfolio"&&<div className="mt-12 border-t border-border py-16"><p className="text-sm tracking-[0.15em] text-muted-foreground">{t.portfolio.pending}</p></div>}
 {page==="services"&&<div className="mt-12 grid gap-6 md:grid-cols-3">{packages.map(p=><article key={p.name} className="border border-border bg-surface p-7"><h2 className="font-display text-3xl">{p.name}</h2><p className="mt-5 text-xl text-gold">{p.price} <span className="text-xs">{t.pricing.month}</span></p><ul className="mt-8 space-y-4">{p.items.map((item,i)=><li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="size-4 shrink-0 text-gold"/>{locale==="ro"?[["5 clipuri verticale","5 fotografii editate","1 sesiune de producție"],["10 clipuri verticale","10 fotografii editate","2 sesiuni de producție"],["20 clipuri verticale","15 fotografii editate","3 sesiuni de producție"]][packages.indexOf(p)][i]:item}</li>)}</ul><a href={paths[locale].contact} className="mt-9 inline-block border-b border-gold pb-2 text-xs tracking-widest text-gold">{t.nav.start.toUpperCase()} →</a></article>)}</div>}
 {page==="contact"&&<div className="mt-12 grid gap-12 lg:grid-cols-2"><div><p className="text-lg text-muted-foreground">{t.contact.body}</p><a className="mt-8 block text-gold" href="mailto:sansretourstudio@gmail.com">sansretourstudio@gmail.com</a></div><ContactForm locale={locale}/></div>}
 </main><footer className="border-t border-border px-6 py-10"><Logo/><p className="mt-5 text-xs tracking-widest text-muted-foreground">{t.footer.place}</p></footer></div>;
}
