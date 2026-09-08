import LayoutV1 from "@/components/layouts/LayoutV1";
import ProjectV2 from "@/components/project/ProjectV2";

const ProjectPage = () => {
    return (
        <>
            <LayoutV1>
                <ProjectV2 sectionClass="default-padding-bottom pt-220 pt-md-110 pt-xs-70" />
            </LayoutV1>
        </>
    );
};

export default ProjectPage;
