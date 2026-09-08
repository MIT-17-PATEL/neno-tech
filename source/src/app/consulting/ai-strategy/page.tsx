import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConsultingServiceBySlug } from "@/data/consultingData";
import ConsultingDetailPage from "@/components/consulting/ConsultingDetailPage";

export const metadata: Metadata = {
    title: "AI Strategy Consulting | Neno Technology",
    description: "Enterprise AI adoption roadmaps, LLM & foundation model evaluation, high-ROI use cases, and responsible AI governance.",
};

export default function AIStrategyConsultingPage() {
    const service = getConsultingServiceBySlug("ai-strategy");

    if (!service) {
        notFound();
    }

    return <ConsultingDetailPage service={service} />;
}
