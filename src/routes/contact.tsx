import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/contact")({
 head:()=>({meta:[{title:copy.ro.meta.contact[0]},{name:"description",content:copy.ro.meta.contact[1]}]}),
 component:()=> <ContentPage locale="ro" page="contact"/>
});
