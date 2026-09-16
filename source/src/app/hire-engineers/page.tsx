import { Metadata } from "next";
import CategoryOverviewPage from "@/components/shared/CategoryOverviewPage";
import { engineerRoles } from "@/data/hireEngineersData";
import HireEngineersIndexExtras from "@/components/hire-engineers/HireEngineersIndexExtras";

export const metadata: Metadata = {
    title: "Hire Engineers On Demand | Neno Technology",
    description: "Hire vetted senior engineers on demand, from Forward Deployed Engineers to AI Agents, LLM, Security, Full Stack, and Application Support specialists.",
};

const cards = engineerRoles.map(r => ({
    title: r.title,
    description: r.description,
    href: r.href,
    icon: "fas fa-code",
    badge: r.availability,
}));

export default function HireEngineersPage() {
    return (
        <CategoryOverviewPage
            pillBadge="HIRE ENGINEERS"
            breadCrumb="Home / Hire Engineers"
            heroTitle="Hire Senior Engineers On Demand"
            heroDescription="Access vetted senior engineers across every specialisation, embedded in your team within 48 to 72 hours. No recruiters and no lengthy hiring pipelines."
            cards={cards}
            cols={3}
            ctaLabel="Start Hiring Now"
            ctaHref="/contact-us?intent=hire-engineers"
            ctaSecondaryLabel="Talk to Our Team"
            ctaSecondaryHref="/contact-us"
        >
            <HireEngineersIndexExtras />
        </CategoryOverviewPage>
    );
}
