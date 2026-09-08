import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConsultingServiceBySlug } from "@/data/consultingData";
import ConsultingDetailPage from "@/components/consulting/ConsultingDetailPage";

export const metadata: Metadata = {
    title: "Marketing & GTM Consulting | Neno Technology",
    description: "Technology-driven go-to-market strategies that align product capabilities with market demand, automated growth funnels, and data-backed attribution.",
};

export default function MarketingGTMConsultingPage() {
    const service = getConsultingServiceBySlug("marketing-gtm");

    if (!service) {
        notFound();
    }

    return <ConsultingDetailPage service={service} />;
}
