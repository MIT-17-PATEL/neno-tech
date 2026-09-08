import ProjectV2Data from "@/assets/jsonData/project/ProjectV2Data.json"
import SingleProjectV2 from "./SingleProjectV2";

interface DataType {
    sectionClass?: string;
}

const ProjectV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`project-style-two-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="site-heading">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-large">Selected <strong>Work</strong></h2>
                            </div>
                            <div className="col-lg-6 offset-lg-3">
                                <p>
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-style-two-items">
                                {ProjectV2Data.map(project =>
                                    <SingleProjectV2 project={project} key={project.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV2;
