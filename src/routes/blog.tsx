import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog | SANS RETOUR" }] }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <section className="max-w-3xl text-center">
        <p className="mb-5 text-[0.6rem] tracking-[0.28em] text-gold">SANS RETOUR · CONTENT STUDIO</p>
        <h1 className="font-display text-4xl leading-none sm:text-6xl">ARTICOLELE VOR APĂREA AICI ÎN CURÂND.</h1>
        <Link to="/" className="mt-10 inline-block border border-gold/50 px-6 py-4 text-[0.62rem] tracking-[0.2em] text-gold">ÎNAPOI ACASĂ →</Link>
      </section>
    </main>
  );
}
