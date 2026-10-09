import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/servicii")({
 head:()=>({meta:[{title:copy.ro.meta.services[0]},{name:"description",content:copy.ro.meta.services[1]}]}),
 component:()=> <ContentPage locale="ro" page="services"/>
});
