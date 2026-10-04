import { lazy, Suspense, useEffect, useState } from "react";
import { FULL_CINEMATIC_MODE } from "@/lib/cinematic-config";

const HeroDepthCanvas = lazy(() => import("./HeroDepthCanvas"));

export function CinematicExperience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let frame = 0;
    const root = document.documentElement;
    const cursor = document.querySelector<HTMLElement>("[data-cinematic-cursor]");
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        root.style.setProperty("--depth-x", `${(event.clientX / innerWidth - 0.5) * 2}`);
        root.style.setProperty("--depth-y", `${(event.clientY / innerHeight - 0.5) * 2}`);
        if (cursor) cursor.dataset["visible"] = "true";
      });
    };
    const onLeave = () => { if (cursor) cursor.dataset["visible"] = "false"; };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div className="cinematic-cursor" data-cinematic-cursor aria-hidden="true"><span /></div>
      {FULL_CINEMATIC_MODE && mounted ? (
        <Suspense fallback={null}><HeroDepthCanvas /></Suspense>
      ) : null}
    </>
  );
}
