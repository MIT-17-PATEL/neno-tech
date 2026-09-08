import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { consultingServices, getConsultingServiceBySlug } from "@/data/consultingData";
import ConsultingDetailPage from "@/components/consulting/ConsultingDetailPage";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return consultingServices.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getConsultingServiceBySlug(slug) || (slug === "mvp-production" ? getConsultingServiceBySlug("mvp-to-production") : undefined);

    if (!service) {
        return {
            title: "Consulting | Neno Technology",
        };
    }

    return {
        title: `${service.title} | Neno Technology`,
        description: service.description,
    };
}

export default async function ConsultingDynamicPage({ params }: PageProps) {
    const { slug } = await params;

    // Handle alias / fallback
    if (slug === "mvp-production") {
        redirect("/consulting/mvp-to-production");
    }

    const service = getConsultingServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return <ConsultingDetailPage service={service} />;
}
