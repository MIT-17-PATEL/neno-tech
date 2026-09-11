import { Metadata } from "next";
import CategoryOverviewPage from "@/components/shared/CategoryOverviewPage";
import { productItems } from "@/data/productsData";

export const metadata: Metadata = {
    title: "Neno Products | Neno Technology",
    description: "Explore the Neno product suite: Voice AI Agents, AI-Powered Dialer, AI-Native CRM, and AI-Augmented ERP, built for modern revenue and operations teams.",
};

const iconMap: Record<string, string> = {
    "neno-voice":   "fas fa-microphone-alt",
    "neno-dialer":  "fas fa-phone-volume",
    "neno-crm":     "fas fa-users",
    "neno-erp":     "fas fa-layer-group",
};

const cards = productItems.map(p => ({
    title: p.title,
    description: p.description,
    href: p.href,
    icon: iconMap[p.slug] ?? "fas fa-cube",
    badge: p.category,
}));

export default function ProductsPage() {
    return (
        <CategoryOverviewPage
            pillBadge="PRODUCTS"
            breadCrumb="Home / Products"
            heroTitle="Neno Products: Engineered for High-Velocity Teams"
            heroDescription="The complete Neno product suite: voice AI agents, a high-velocity sales dialer, an AI-native CRM, and a modular AI-augmented ERP platform, all built to integrate seamlessly."
            cards={cards}
            cols={2}
            ctaLabel="Book a Demo"
            ctaHref="/contact-us?intent=products"
            ctaSecondaryLabel="Talk to an Engineer"
            ctaSecondaryHref="/hire-engineers"
        />
    );
}
