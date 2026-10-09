import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/en/services")({
 head:()=>({meta:[{title:copy.en.meta.services[0]},{name:"description",content:copy.en.meta.services[1]}]}),
 component:()=> <ContentPage locale="en" page="services"/>
});
