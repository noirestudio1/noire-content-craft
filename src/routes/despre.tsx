import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/despre")({
 head:()=>({meta:[{title:copy.ro.meta.about[0]},{name:"description",content:copy.ro.meta.about[1]}]}),
 component:()=> <ContentPage locale="ro" page="about"/>
});
