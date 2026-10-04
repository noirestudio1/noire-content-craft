import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type CinematicSceneProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function CinematicScene({ id, className, children }: CinematicSceneProps) {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      scene.style.setProperty("--scene-progress", "0");
      return;
    }

    let frame = 0;
    let active = false;
    const update = () => {
      frame = 0;
      if (!active) return;
      const bounds = scene.getBoundingClientRect();
      const travel = Math.max(bounds.height - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -bounds.top / travel));
      scene.style.setProperty("--scene-progress", progress.toFixed(4));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      active = entry?.isIntersecting ?? false;
      if (active) schedule();
    }, { rootMargin: "15% 0px" });

    observer.observe(scene);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return <section ref={sceneRef} id={id} className={cn("cinematic-scene", className)}>{children}</section>;
}

type CinematicImageLayerProps = {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function CinematicImageLayer({ src, alt = "", className, priority = false }: CinematicImageLayerProps) {
  return (
    <div className={cn("cinematic-image-layer", className)} aria-hidden={alt ? undefined : true}>
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
    </div>
  );
}

export function CinematicMask({ className }: { className?: string }) {
  return <div className={cn("cinematic-mask", className)} aria-hidden="true" />;
}