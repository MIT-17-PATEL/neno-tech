import { Metadata } from "next";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import { CAPABILITY_BLUEPRINTS } from "@/data/blueprintsData";
import { notFound } from "next/navigation";

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const blueprint = CAPABILITY_BLUEPRINTS.find(
        (b) => b.slug === id || b.id.toString() === id
    );

    if (!blueprint) {
        return {
            title: "Engagement Blueprint | Neno Technology",
            description: "Explore Neno Technology's enterprise agentic capability blueprints.",
        };
    }

    return {
        title: `${blueprint.title} | Engagement Blueprint - Neno Technology`,
        description: `${blueprint.positioningLine}. ${blueprint.cardDescription}`,
    };
}

const ProjectDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const blueprint = CAPABILITY_BLUEPRINTS.find(
        (b) => b.slug === id || b.id.toString() === id
    );

    if (!blueprint) {
        notFound();
    }

    return (
        <LayoutV1>
            <ProjectDetailsContent blueprint={blueprint} />
        </LayoutV1>
    );
};

export default ProjectDetailsPage;