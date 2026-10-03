import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function VideoPlaceholder({
  project,
  category,
  className,
}: {
  project: string;
  category: string;
  className?: string;
}) {
  return (
    <article className={cn("group relative isolate aspect-[9/16] overflow-hidden bg-surface", className)}>
      <div className="absolute inset-0 bg-placeholder transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-x-0 top-0 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 p-4 text-[0.6rem] tracking-[0.18em] text-muted-foreground sm:p-5 sm:tracking-[0.24em]">
        <span className="min-w-0 truncate">{project}</span>
        <span>9:16</span>
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid size-12 place-items-center rounded-full border border-foreground/25 bg-background/30 backdrop-blur-sm transition-colors group-hover:border-gold group-hover:text-gold">
          <Play className="size-4 fill-current" aria-hidden="true" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="break-normal font-display text-xl uppercase [overflow-wrap:normal] sm:text-2xl">{category}</p>
        <p className="mt-2 text-[0.58rem] tracking-[0.22em] text-muted-foreground">VIDEO ÎN CURÂND</p>
      </div>
    </article>
  );
}