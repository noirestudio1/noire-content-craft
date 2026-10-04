# SANS RETOUR — upgrade cinematic complet

## Obiectiv
Păstrez identitatea, textele aprobate, ordinea secțiunilor, navigația și formularele. Transform pagina existentă într-o experiență cinematografică legată prin tranziții, fotografie editorială și profunzime, cu sistemul WebGL complet prezent în cod dar oprit implicit.

## Implementare
- Creez un sistem central `FULL_CINEMATIC_MODE = false`, plus detectarea automată pentru `prefers-reduced-motion`, dispozitive tactile și secțiuni aflate în afara ecranului.
- Construiesc componente reutilizabile pentru scene: reveal cu mască, parallax pe straturi, imagine magnetică, wipe cinematic, text în profunzime, cursor preview și tranziții între secțiuni.
- Generez și integrez o bibliotecă vizuală coerentă, caldă și masculină: producție, regie, editare și imagini relevante pentru industriile existente. Imaginile vor fi responsive și încărcate progresiv.
- Ridic eroul la nivel de showpiece: straturi fotografice, perspectivă la mouse, film grain, lumină controlată, intro mascat și un strat WebGL opțional încărcat dinamic numai când modul complet este activ.
- Transform cele șase probleme în postere cinematografice cu imagini, profunzime și motion individual.
- Transform procesul într-o călătorie vizuală sticky, conectată, cu șapte cadre care evoluează odată cu scroll-ul, păstrând exact etapele și textele existente.
- Amplific portofoliul și industriile cu imagini dominante, preview pe cursor/tap, perspective și takeover-uri de fundal, fără a bloca înlocuirea ulterioară cu video real.
- Leg secțiunile prin suprapuneri, wipe-uri, cadre full-bleed și mișcare pe axe diferite; păstrez formularele și CTA-urile clare deasupra efectelor.
- Adaug microinteracțiuni premium: cursor desktop contextual, butoane magnetice, săgeți, sweep-uri discrete și tranziții ale meniului.

## Detalii tehnice
- React Three Fiber + Three.js vor fi izolate într-un modul încărcat dinamic, fără randare pe server și fără inițializare când `FULL_CINEMATIC_MODE` este `false`.
- Motion-ul standard rămâne CSS + `IntersectionObserver` + `requestAnimationFrame`, doar cu `transform`/`opacity`; efectele se opresc în afara ecranului.
- Nu introduc un motor de scroll care să afecteze navigația, accesibilitatea sau formularele.
- Actualizez metadatele doar dacă este necesar; nu schimb structura de conversie sau integrarea formularelor.

## Verificare
- Verific întreaga pagină la desktop, tabletă, 390px și 360px.
- Confirm: zero overflow, text lizibil, cuvinte românești intacte, meniuri/ancore/formulare funcționale, motion redus corect și mod cinematic greu neinițializat implicit.
- Activez temporar modul complet doar pentru verificarea scenei WebGL și îl readuc la `false` înainte de finalizare.
