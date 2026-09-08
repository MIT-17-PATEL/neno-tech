import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
    title: "LLM Fine-Tuning & Deployment | Neno Technology",
    description: "We fine-tune open-source language models on your proprietary data.",
};

export default function Page() {
    const service = getServiceBySlug("llm-fine-tuning-deployment");
    if (!service) { notFound(); }
    return <ServiceDetailPage service={service} />;
}
