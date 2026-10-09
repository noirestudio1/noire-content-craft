import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/noire/ContentPage";
import { copy } from "@/lib/site-locale";
export const Route = createFileRoute("/en/about")({
 head:()=>({meta:[{title:copy.en.meta.about[0]},{name:"description",content:copy.en.meta.about[1]}]}),
 component:()=> <ContentPage locale="en" page="about"/>
});
