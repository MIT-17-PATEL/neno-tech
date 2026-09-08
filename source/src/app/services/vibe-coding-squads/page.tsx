import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
    title: "Vibe Coding Squads | Neno Technology",
    description: "Deploy a high-velocity AI-augmented engineering squad that ships at 3-5x speed.",
};

export default function Page() {
    const service = getServiceBySlug("vibe-coding-squads");
    if (!service) { notFound(); }
    return <ServiceDetailPage service={service} />;
}
