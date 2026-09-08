import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
    title: "AI Product Development | Neno Technology",
    description: "We build end-to-end AI-powered software products from architecture to production.",
};

export default function Page() {
    const service = getServiceBySlug("ai-product-development");
    if (!service) { notFound(); }
    return <ServiceDetailPage service={service} />;
}
