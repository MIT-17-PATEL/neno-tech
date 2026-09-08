import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConsultingServiceBySlug } from "@/data/consultingData";
import ConsultingDetailPage from "@/components/consulting/ConsultingDetailPage";

export const metadata: Metadata = {
    title: "MVP to Production Consulting | Neno Technology",
    description: "Bridge the gap between proof-of-concept and enterprise-grade reliability with infrastructure hardening, CI/CD automation, and scale testing.",
};

export default function MVPToProductionConsultingPage() {
    const service = getConsultingServiceBySlug("mvp-to-production");

    if (!service) {
        notFound();
    }

    return <ConsultingDetailPage service={service} />;
}
