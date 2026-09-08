import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
    title: "Agentic AI Development | Neno Technology",
    description: "We design and build production-grade autonomous AI agents and multi-agent orchestration systems.",
};

export default function Page() {
    const service = getServiceBySlug("agentic-ai-development");
    if (!service) { notFound(); }
    return <ServiceDetailPage service={service} />;
}
