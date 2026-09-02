import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json';

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ProjectV1Data.find(project => project.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                {data && <ProjectDetailsContent projectInfo={data} totalProjects={ProjectV1Data.length} />}
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;