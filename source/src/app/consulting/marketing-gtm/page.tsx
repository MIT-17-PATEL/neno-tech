import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConsultingServiceBySlug } from "@/data/consultingData";
import ConsultingDetailPage from "@/components/consulting/ConsultingDetailPage";

export const metadata: Metadata = {
    title: "Marketing & GTM Consulting | Neno Technology",
    description: "Positioning, channel strategy, and an AI-assisted go-to-market motion — from messaging through to the systems that run the pipeline.",
};

export default function MarketingGTMConsultingPage() {
    const service = getConsultingServiceBySlug("marketing-gtm");

    if (!service) {
        notFound();
    }

    return <ConsultingDetailPage service={service} />;
}
