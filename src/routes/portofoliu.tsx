import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/portofoliu")({
 head:()=>({meta:[{title:copy.ro.meta.portfolio[0]},{name:"description",content:copy.ro.meta.portfolio[1]}]}),
 component:()=> <ContentPage locale="ro" page="portfolio"/>
});
