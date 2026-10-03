import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)} aria-label="SANS RETOUR Content Studio">
      <span className="font-display text-[1.32rem] tracking-[0.12em] sm:text-[1.48rem]">SANS RETOUR</span>
      <span className="mt-1 text-[0.42rem] tracking-[0.34em] sm:text-[0.46rem] sm:tracking-[0.38em] text-gold">CONTENT STUDIO</span>
    </span>
  );
}