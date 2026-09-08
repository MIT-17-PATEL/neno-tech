import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
    title: "Application Support & Modernization | Neno Technology",
    description: "Dedicated engineering support teams and systematic legacy application modernization.",
};

export default function Page() {
    const service = getServiceBySlug("application-support-modernization");
    if (!service) { notFound(); }
    return <ServiceDetailPage service={service} />;
}
