import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollSequenceProps = {
  id?: string;
  count: number;
  className?: string;
  label?: string;
  /** Viewport heights of scroll per frame. */
  pace?: number;
  children: (active: number) => ReactNode;
};

/** Sticky scroll-driven sequence: exposes active frame index and --seq-progress. */
export function ScrollSequence({ id, count, className, label, pace = 0.9, children }: ScrollSequenceProps) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let visible = false;
    const update = () => {
      frame = 0;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const travel = Math.max(1, el.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      el.style.setProperty("--seq-progress", progress.toFixed(4));
      setActive(Math.min(count - 1, Math.floor(progress * count)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([e]) => { visible = e?.isIntersecting ?? false; if (visible) schedule(); });
    io.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [count]);

  return (
    <section ref={ref} id={id} aria-label={label} className={cn("scroll-seq", className)} style={{ height: `${count * pace * 100 + 100}svh` }}>
      <div className="scroll-seq-stage">
        {children(active)}
        <div className="scroll-seq-progress" aria-hidden="true"><i /></div>
      </div>
    </section>
  );
}
