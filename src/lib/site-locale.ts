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
    what: { label: "CE FACEM", title: "Imaginea ta. Viziunea noastră.", items: [["O IMAGINE CARE TE REPREZINTĂ", "Construim o prezență vizuală recognoscibilă, potrivită personalității brandului tău."], ["MAI MULT DECÂT VIZUALIZĂRI", "Fiecare material are un scop: să atragă atenția potrivită și să creeze încredere."], ["TU RĂMÂI ÎN CONTROL", "Ai o echipă creativă alături, fără să-ți consumi zilele cu producția de conținut."]] },
    process: { label: "PROCES", title: "DE LA PRIMA IDEE LA O PREZENȚĂ CARE CONTEAZĂ.", items: [["STRATEGIE & POZIȚIONARE", "Înainte să pornim camera, înțelegem cine ești, cui te adresezi și ce vrei să transmiți. Analizăm imaginea actuală a brandului și construim o direcție creativă care să te diferențieze, nu doar să te facă prezent în online."], ["CONCEPT & DIRECȚIE CREATIVĂ", "Transformăm strategia în idei care merită urmărite. Pregătim conceptele, scenariile, mesajele și fiecare detaliu al filmării. Iar când ajungi în fața camerei, nu trebuie să fii actor: te ghidăm astfel încât totul să pară natural și autentic."], ["PRODUCȚIE & POST-PRODUCȚIE", "Venim la locație și transformăm ideile în imagini. Ne ocupăm de cadre, lumină, regie și ritmul filmării, apoi construim fiecare material prin montaj, sunet, culoare și storytelling. Rezultatul trebuie să arate bine, dar mai ales să transmită ceva."], ["DISTRIBUȚIE & CONTINUITATE", "Un material bun merită și momentul potrivit. Organizăm conținutul într-un calendar coerent, adaptat platformelor și obiectivelor tale. În funcție de colaborare, putem gestiona și publicarea, astfel încât prezența brandului tău să rămână constantă."]] },
    about: { label: "DESPRE SANS RETOUR", title: "Imaginea nu se lasă la întâmplare.", body: "SANS RETOUR este o agenție de PR & Content Marketing. Construim imaginea brandurilor și a oamenilor din spatele lor prin strategie, direcție creativă și conținut care are ceva de spus. De la prima idee până la materialul final, fiecare detaliu lucrează pentru felul în care vrei să fii perceput.", link: "DESCOPERĂ STUDIOUL" },
    pricing: { label: "SERVICII", title: "NOI FACEM CONTENTUL. TU ÎȚI CONDUCI BUSINESSUL.", month: "/ LUNĂ", choose: "ALEGE", custom: "AI NEVOIE DE UN VOLUM DIFERIT? CONSTRUIM O OFERTĂ ADAPTATĂ BUSINESSULUI TĂU.", most: "CEL MAI ALES", full: "FULL SERVICE" },
    ideas: { label: "3 IDEI GRATUITE", title: "NU ȘTII CE AI PUTEA POSTA?", body: "Îți trimitem 3 idei de clipuri create special pentru businessul tău.", cta: "CERE CELE 3 IDEI" },
    contact: { label: "CONTACT", title: "Hai să construim ceva memorabil.", body: "Ai un business, un brand sau un proiect pe care vrei să-l faci remarcat? Povestește-ne despre el. Noi venim cu direcția creativă.", placeholders: "Instagram — de adăugat\nTikTok — de adăugat\nWhatsApp — de adăugat" },
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
    what: { label: "WHAT WE DO", title: "Your image. Our vision.", items: [["A DISTINCTIVE PRESENCE", "We create a recognizable visual identity that feels true to your brand."], ["MORE THAN JUST VIEWS", "Every piece has a purpose: attract the right attention and build trust."], ["YOU STAY IN CONTROL", "A creative team at your side, without spending your days producing content."]] },
    process: { label: "PROCESS", title: "FROM THE FIRST IDEA TO A PRESENCE THAT MATTERS.", items: [["STRATEGY & POSITIONING", "Before the camera rolls, we get to know your brand, your audience and the message you want to convey. We assess your current presence and build a creative direction designed to set you apart, not just keep you posting."], ["CONCEPT & CREATIVE DIRECTION", "We turn strategy into ideas worth watching. We prepare concepts, scripts, key messages and the details of each shoot. You do not need to be an actor on camera: we guide you so everything feels natural and authentic."], ["PRODUCTION & POST-PRODUCTION", "We come to your location and bring the ideas to life. From framing, lighting and direction to editing, sound, color and storytelling, we craft each piece to look exceptional and communicate something meaningful."], ["DISTRIBUTION & CONTINUITY", "Great content deserves the right moment. We organize your videos into a consistent calendar tailored to your platforms and goals. Depending on the project, we can also handle publishing to keep your brand present and recognizable."]] },
    about: { label: "ABOUT SANS RETOUR", title: "Your image is no accident.", body: "SANS RETOUR is a PR & Content Marketing agency. We shape the image of brands and the people behind them through strategy, creative direction and content with something to say. From the first idea to the final piece, every detail serves how you want to be perceived.", link: "DISCOVER THE STUDIO" },
    pricing: { label: "SERVICES", title: "WE MAKE THE CONTENT. YOU RUN THE BUSINESS.", month: "/ MONTH", choose: "CHOOSE", custom: "NEED A DIFFERENT VOLUME? WE’LL BUILD A PACKAGE AROUND YOUR BUSINESS.", most: "MOST POPULAR", full: "FULL SERVICE" },
    ideas: { label: "3 COMPLIMENTARY IDEAS", title: "NOT SURE WHAT YOU COULD POST?", body: "We’ll send you three video ideas created specifically for your business.", cta: "REQUEST 3 IDEAS" },
    contact: { label: "CONTACT", title: "Let’s create something memorable.", body: "Have a business, brand or project you want to get noticed? Tell us about it. We’ll bring the creative direction.", placeholders: "Instagram — to be added\nTikTok — to be added\nWhatsApp — to be added" },
    footer: { place: "BUCHAREST · BRAȘOV · ROMANIA", privacy: "PRIVACY POLICY", cookies: "COOKIE POLICY" },
  },
} as const;
