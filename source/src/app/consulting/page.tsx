import { Metadata } from "next";
import CategoryOverviewPage from "@/components/shared/CategoryOverviewPage";
import { consultingServices } from "@/data/consultingData";
import ConsultingSharedExtras from "@/components/consulting/ConsultingSharedExtras";

export const metadata: Metadata = {
    title: "Consulting Services | Neno Technology",
    description: "Strategic consulting from Neno Technology: AI Strategy, Software Product Consulting, MVP to Production, and Marketing & GTM Consulting.",
};

const iconMap: Record<string, string> = {
    "ai-strategy":        "fas fa-brain",
    "software-product":   "fas fa-cube",
    "mvp-to-production":  "fas fa-rocket",
    "marketing-gtm":      "fas fa-chart-line",
};

const cards = consultingServices.map(s => ({
    title: s.title,
    description: s.description,
    href: s.href,
    icon: iconMap[s.slug] ?? "fas fa-lightbulb",
    badge: s.duration,
}));

export default function ConsultingPage() {
    return (
        <CategoryOverviewPage
            pillBadge="CONSULTING"
            breadCrumb="Home / Consulting"
            heroTitle="Strategic Consulting by Senior Practitioners"
            heroDescription="Our consulting engagements are led by senior engineers and AI architects, not generalist advisors. Every engagement produces actionable output, not slide decks."
            cards={cards}
            cols={2}
            ctaLabel="Schedule a Consultation"
            ctaHref="/contact-us?intent=consulting"
            ctaSecondaryLabel="Hire Engineers Instead"
            ctaSecondaryHref="/hire-engineers"
        >
            <ConsultingSharedExtras />
        </CategoryOverviewPage>
    );
}
