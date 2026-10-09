import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/en/portfolio")({
 head:()=>({meta:[{title:copy.en.meta.portfolio[0]},{name:"description",content:copy.en.meta.portfolio[1]}]}),
 component:()=> <ContentPage locale="en" page="portfolio"/>
});
