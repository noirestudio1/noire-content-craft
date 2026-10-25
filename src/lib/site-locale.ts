export type Locale = "ro" | "en";
export type PublicPage = "home" | "about" | "services" | "portfolio" | "contact";

export const paths: Record<Locale, Record<PublicPage, string>> = {
  ro: { home: "/", about: "/despre", services: "/servicii", portfolio: "/portofoliu", contact: "/contact" },
  en: { home: "/en/", about: "/en/about", services: "/en/services", portfolio: "/en/portfolio", contact: "/en/contact" },
};

export function equivalentPath(locale: Locale, page: PublicPage) { return paths[locale][page]; }

export const copy = {
  ro: {
    nav: { home: "Acasă", about: "Despre Noi", services: "Servicii", portfolio: "Portofoliu", contact: "Contact", start: "Începe un proiect", open: "Deschide meniul", close: "Închide meniul" },
    meta: {
      home: ["SANS RETOUR | Content Studio București & Brașov", "SANS RETOUR construiește sisteme complete de content: strategie, producție, editare și publicare pentru Reels, TikTok și Shorts."],
      about: ["Despre SANS RETOUR | Content Studio", "Un content studio din București și Brașov, construit pentru businessuri care vor o prezență clară și premium."],
      services: ["Servicii | SANS RETOUR Content Studio", "Pachete lunare de strategie, producție video, fotografie, editare, planificare și publicare."],
      portfolio: ["Portofoliu | SANS RETOUR Content Studio", "Selected work SANS RETOUR. Proiectele video vor fi publicate aici doar când materialele reale sunt disponibile."],
      contact: ["Contact | SANS RETOUR Content Studio", "Discută cu SANS RETOUR despre contentul businessului tău sau cere trei idei gratuite."],
    },
    hero: { kicker: "BUCUREȘTI · BRAȘOV / CONTENT STUDIO", title: "NU MAI STA SĂ TE GÂNDEȘTI CE SĂ POSTEZI.", body: "Noi venim cu ideea. Îți spunem ce să spui. Filmăm. Edităm. Planificăm. Postăm.", start: "ÎNCEPE UN PROIECT", process: "VEZI CUM LUCRĂM" },
    portfolio: { label: "SELECTED WORK", title: "CONTENT CARE MERITĂ SĂ FIE VĂZUT.", pending: "PROIECTELE NOASTRE VOR APĂREA AICI ÎN CURÂND.", videoSoon: "VIDEO ÎN CURÂND" },
    what: { label: "CE FACEM", title: "TU AI POVESTEA. NOI O FACEM IMPOSIBIL DE IGNORAT.", items: [["O IMAGINE CARE TE REPREZINTĂ", "Construim o prezență vizuală recognoscibilă, potrivită personalității brandului tău."], ["MAI MULT DECÂT VIZUALIZĂRI", "Fiecare material are un scop: să atragă atenția potrivită și să creeze încredere."], ["TU RĂMÂI ÎN CONTROL", "Ai o echipă creativă alături, fără să-ți consumi zilele cu producția de conținut."]] },
    process: { label: "PROCES", title: "O ZI DE FILMARE. O LUNĂ DE CONTENT.", items: [["STRATEGIE", "Stabilim obiectivul, publicul și direcția."], ["IDEI · SCRIPT · REGIE", "Pregătim conceptele, cuvintele și prezența din fața camerei."], ["PRODUCȚIE · EDITARE", "Filmăm la locație și transformăm materialul în clipuri care țin atenția."], ["PLANIFICARE · PUBLICARE", "Așezăm fiecare clip într-un calendar și, la nevoie, administrăm publicarea."]] },
    about: { label: "DESPRE SANS RETOUR", title: "CONTENTUL TĂU, FĂRĂ OCOLIȘURI.", body: "SANS RETOUR este un content studio din București și Brașov. Construim sisteme video clare pentru businessuri care vor să fie văzute fără să devină, peste noapte, scenariști, cameramani și editori.", link: "DESCOPERĂ STUDIOUL" },
    pricing: { label: "SERVICII", title: "NOI FACEM CONTENTUL. TU ÎȚI CONDUCI BUSINESSUL.", month: "/ LUNĂ", choose: "ALEGE", custom: "AI NEVOIE DE UN VOLUM DIFERIT? CONSTRUIM O OFERTĂ ADAPTATĂ BUSINESSULUI TĂU.", most: "CEL MAI ALES", full: "FULL SERVICE" },
    ideas: { label: "3 IDEI GRATUITE", title: "NU ȘTII CE AI PUTEA POSTA?", body: "Îți trimitem 3 idei de clipuri create special pentru businessul tău.", cta: "CERE CELE 3 IDEI" },
    contact: { label: "CONTACT", title: "SPUNE-NE CE VREI SĂ CREȘTI.", body: "Povestește-ne despre businessul tău. Construim de aici conversația potrivită.", placeholders: "Instagram — de adăugat\nTikTok — de adăugat\nWhatsApp — de adăugat" },
    footer: { place: "BUCUREȘTI · BRAȘOV · ROMÂNIA", privacy: "POLITICA DE CONFIDENȚIALITATE", cookies: "POLITICA DE COOKIES" },
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", start: "Start a project", open: "Open menu", close: "Close menu" },
    meta: {
      home: ["SANS RETOUR | Content Studio Bucharest & Brașov", "SANS RETOUR builds complete content systems: strategy, production, editing and publishing for Reels, TikTok and Shorts."],
      about: ["About SANS RETOUR | Content Studio", "A Bucharest and Brașov content studio for businesses that want a distinctive, premium presence."],
      services: ["Services | SANS RETOUR Content Studio", "Monthly strategy, video production, photography, editing, planning and publishing packages."],
      portfolio: ["Portfolio | SANS RETOUR Content Studio", "Selected work by SANS RETOUR. Real project films will be published here when available."],
      contact: ["Contact | SANS RETOUR Content Studio", "Talk to SANS RETOUR about your content or request three complimentary ideas."],
    },
    hero: { kicker: "BUCHAREST · BRAȘOV / CONTENT STUDIO", title: "STOP WONDERING WHAT TO POST.", body: "We bring the idea. We shape the words. We film. Edit. Plan. Publish.", start: "START A PROJECT", process: "SEE HOW WE WORK" },
    portfolio: { label: "SELECTED WORK", title: "CONTENT WORTH WATCHING.", pending: "OUR WORK WILL APPEAR HERE SOON.", videoSoon: "VIDEO COMING SOON" },
    what: { label: "WHAT WE DO", title: "YOUR STORY. MADE IMPOSSIBLE TO IGNORE.", items: [["A DISTINCTIVE PRESENCE", "We create a recognizable visual identity that feels true to your brand."], ["MORE THAN JUST VIEWS", "Every piece has a purpose: attract the right attention and build trust."], ["YOU STAY IN CONTROL", "A creative team at your side, without spending your days producing content."]] },
    process: { label: "PROCESS", title: "ONE SHOOT DAY. ONE MONTH OF CONTENT.", items: [["STRATEGY", "We define the objective, audience and creative direction."], ["IDEAS · SCRIPT · DIRECTION", "We prepare the concepts, words and on-camera delivery."], ["PRODUCTION · EDITING", "We film on location and turn the footage into attention-holding content."], ["PLANNING · PUBLISHING", "We give every film its place in the calendar and can manage publishing when needed."]] },
    about: { label: "ABOUT SANS RETOUR", title: "CONTENT, WITHOUT THE DETOURS.", body: "SANS RETOUR is a content studio based in Bucharest and Brașov. We build clear video systems for businesses that want to be seen without becoming scriptwriters, camera operators and editors overnight.", link: "DISCOVER THE STUDIO" },
    pricing: { label: "SERVICES", title: "WE MAKE THE CONTENT. YOU RUN THE BUSINESS.", month: "/ MONTH", choose: "CHOOSE", custom: "NEED A DIFFERENT VOLUME? WE’LL BUILD A PACKAGE AROUND YOUR BUSINESS.", most: "MOST POPULAR", full: "FULL SERVICE" },
    ideas: { label: "3 COMPLIMENTARY IDEAS", title: "NOT SURE WHAT YOU COULD POST?", body: "We’ll send you three video ideas created specifically for your business.", cta: "REQUEST 3 IDEAS" },
    contact: { label: "CONTACT", title: "TELL US WHAT YOU WANT TO GROW.", body: "Tell us about your business. We’ll take the conversation from there.", placeholders: "Instagram — to be added\nTikTok — to be added\nWhatsApp — to be added" },
    footer: { place: "BUCHAREST · BRAȘOV · ROMANIA", privacy: "PRIVACY POLICY", cookies: "COOKIE POLICY" },
  },
} as const;
