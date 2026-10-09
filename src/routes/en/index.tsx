import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../index";
import { copy } from "@/lib/site-locale";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: copy.en.meta.home[0] },
      { name: "description", content: copy.en.meta.home[1] },
      { property: "og:title", content: copy.en.meta.home[0] },
      { property: "og:description", content: copy.en.meta.home[1] },
    ],
    links: [{ rel: "canonical", href: "/en/" }, { rel: "alternate", hrefLang: "ro", href: "/" }, { rel: "alternate", hrefLang: "en", href: "/en/" }],
  }),
  component: () => <HomePage locale="en" />,
});
