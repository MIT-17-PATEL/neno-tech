import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
    title: "AI GTM (Go-To-Market) | Neno Technology",
    description: "AI applied to how you sell. Build intelligent lead qualification, outbound automation, CRM intelligence, AI voice follow-ups, and pipeline analytics.",
};

export default function Page() {
    const service = getServiceBySlug("ai-gtm");
    if (!service) { notFound(); }
    return <ServiceDetailPage service={service} />;
}
