import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  children,
  className,
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("reveal max-w-5xl", className)}>
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2 className="section-title text-balance">{children}</h2>
    </header>
  );
}