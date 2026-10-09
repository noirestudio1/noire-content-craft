import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/en/contact")({
 head:()=>({meta:[{title:copy.en.meta.contact[0]},{name:"description",content:copy.en.meta.contact[1]}]}),
 component:()=> <ContentPage locale="en" page="contact"/>
});
