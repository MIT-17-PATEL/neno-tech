import { Metadata } from "next";
import CategoryOverviewPage from "@/components/shared/CategoryOverviewPage";
import { serviceItems } from "@/data/servicesData";

export const metadata: Metadata = {
    title: "AI Engineering Services | Neno Technology",
    description: "Explore Neno Technology's full range of AI engineering services, from Agentic AI Development and LLM Fine-Tuning to AI GTM, Vibe Coding Squads, and Application Modernization.",
};

const iconMap: Record<string, string> = {
    "agentic-ai-development":       "fas fa-robot",
    "ai-product-development":       "fas fa-cube",
    "vibe-coding-squads":           "fas fa-bolt",
    "ai-gtm":                       "fas fa-chart-line",
    "llm-fine-tuning-deployment":   "fas fa-brain",
    "application-support-modernization": "fas fa-tools",
};

const cards = serviceItems.map(s => ({
    title: s.title,
    description: s.description,
    href: s.href,
    icon: iconMap[s.slug] ?? "fas fa-layer-group",
    badge: s.duration,
}));

export default function ServicesPage() {
    return (
        <CategoryOverviewPage
            pillBadge="SERVICES"
            breadCrumb="Home / Services"
            heroTitle="AI Engineering Services Built for Production"
            heroDescription="From building autonomous AI agents to modernising legacy applications, our engineering services are scoped, delivered, and measured with rigorous production standards."
            cards={cards}
            cols={3}
            ctaLabel="Book a Discovery Call"
            ctaHref="/contact-us?intent=services"
            ctaSecondaryLabel="View All Engineers"
            ctaSecondaryHref="/hire-engineers"
        />
    );
}
