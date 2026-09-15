import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConsultingServiceBySlug } from "@/data/consultingData";
import ConsultingDetailPage from "@/components/consulting/ConsultingDetailPage";

export const metadata: Metadata = {
    title: "MVP → Production Consulting | Neno Technology",
    description: "The hardest gap in AI. Move AI prototypes and early MVPs into reliable production systems by solving reliability, evaluation, cost, latency, security, and deployment.",
};

export default function MVPToProductionConsultingPage() {
    const service = getConsultingServiceBySlug("mvp-to-production");

    if (!service) {
        notFound();
    }

    return <ConsultingDetailPage service={service} />;
}
