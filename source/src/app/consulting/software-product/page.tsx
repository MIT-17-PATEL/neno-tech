import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConsultingServiceBySlug } from "@/data/consultingData";
import ConsultingDetailPage from "@/components/consulting/ConsultingDetailPage";

export const metadata: Metadata = {
    title: "Software Product Consulting | Neno Technology",
    description: "Senior architectural guidance on distributed systems, tech debt mitigation, modern cloud frameworks, and high-velocity engineering practices.",
};

export default function SoftwareProductConsultingPage() {
    const service = getConsultingServiceBySlug("software-product");

    if (!service) {
        notFound();
    }

    return <ConsultingDetailPage service={service} />;
}
