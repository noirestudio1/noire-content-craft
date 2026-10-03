import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)} aria-label="NOIRE Content Studio">
      <span className="font-display text-[1.55rem] tracking-[0.16em]">NOIRE</span>
      <span className="mt-1 text-[0.48rem] tracking-[0.42em] text-gold">CONTENT STUDIO</span>
    </span>
  );
}