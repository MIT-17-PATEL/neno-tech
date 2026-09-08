import ProjectV1Data from '@/assets/jsonData/project/ProjectV1Data.json';
import Image from "next/image";
import Link from 'next/link';

interface DataType {
    id: number;
    thumbFull: string;
    title: string;
}

interface ProjectSingleProps {
    projectInfo: DataType;
    totalProjects: number;
    sectionClass?: string;
}

const ProjectDetailsContent = ({ projectInfo, totalProjects }: ProjectSingleProps) => {
    const { id, thumbFull, title } = projectInfo || {};

    // Projects Navigation 
    const currentId = id ? parseInt(id.toString(), 10) : 1;

    // Calculate the previous and next IDs dynamically
    const previousId = currentId === 1 ? totalProjects : currentId - 1;
    const nextId = currentId === totalProjects ? 1 : currentId + 1;

    // Get the previous and next project titles
    const previousProject = ProjectV1Data.find((project) => project.id === previousId);
    const nextProject = ProjectV1Data.find((project) => project.id === nextId);

    // Get the first two words of the project title
    const getFirstTwoWords = (text?: string) => text?.split(' ').slice(0, 2).join(' ') || "No Title";

    return (
        <>
            <div className="project-details-items default-padding-bottom mt-200 mt-md-110 mt-xs-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-thumb mb-110 mb-md-50 mb-xs-30">
                                <Image src={`/assets/img/projects/${thumbFull}`} alt="Image Not Found" width={1500} height={750} />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="project-details-main-info">
                                <h2 className="title">{title}</h2>
                                <p>
                                    This focus on leveraging advanced technology—like AI, automation, and data-driven insights—to help businesses or individuals overcome challenges and achieve unprecedented growth. Below are some key details that could be associated with this statement.
                                </p>
                                <ul className="project-info-list">
                                    <li>
                                        <div className="left-info">
                                            <h4>Strategy</h4>
                                        </div>
                                        <div className="right-info">
                                            <ul className="list-style-two">
                                                <li>Machine Learning</li>
                                                <li>Ai Development</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="left-info">
                                            <h4>Design</h4>
                                        </div>
                                        <div className="right-info">
                                            <ul className="list-style-two">
                                                <li>Branding</li>
                                                <li>Neural Networks</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="left-info">
                                            <h4>Clients</h4>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Roboko Limited <br /> 25 November, 2025
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-items bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="thumb-grid">
                                <Image src="/assets/img/thumb/3.jpg" alt="Thumb" width={800} height={900} />
                                <Image src="/assets/img/projects/2.jpg" alt="Thumb" width={800} height={900} />
                            </div>
                        </div>
                        <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15">
                            <div className="check-list">
                                <div className="single-list">
                                    <h4>Operational Efficiency</h4>
                                    <p>
                                        Tempor nonummy metus lobortis. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum potenti. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle.
                                    </p>
                                </div>
                                <div className="single-list">
                                    <h4>Offer functionalities</h4>
                                    <ul className="list-style-one">
                                        <li>Cloud Infrastructure</li>
                                        <li>Machine Learning Models</li>
                                        <li>APIs (Application Programming Interfaces)</li>
                                        <li>Data Management</li>
                                        <li>Natural Language Processing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-items default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item-grid-container">
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3><strong>01</strong> Background</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence. devonshire dispatched remarkably on estimating.
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                        </div>
                                    </div>
                                    <Image src="/assets/img/banner/3.jpg" alt="Image Not Found" width={2000} height={930} />
                                </div>
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3><strong>02</strong> The Challenges</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence devonshire dispatched remarkably on estimating.
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <h4>Continue indulged speaking the was out horrible for domestic.</h4>
                                            <ul className="list-style-one">
                                                <li>Social media marketing</li>
                                                <li>Search engine optimization (seo)</li>
                                                <li>Public Relations</li>
                                            </ul>
                                            <Image src="/assets/img/thumb/4.jpg" alt="Image Not Found" width={1500} height={780} />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3><strong>03</strong> The Solution</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence devonshire dispatched remarkably on estimating.
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-pagination default-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            {/* Project Pagination */}
                            <div className="project-paginvation-items">
                                <div className="project-previous">
                                    <Link href={`/project-details/${previousId}`}>
                                        <div className="icon"><i className="fas fa-angle-double-left" /></div>
                                        <div className="nav-title"> Previus Post <h5>{getFirstTwoWords(previousProject?.title)}</h5></div>
                                    </Link>
                                </div>
                                <div className="project-all">
                                    <Link href="#" scroll={false}><i className="fas fa-th-large" /></Link>
                                </div>
                                <div className="project-next">
                                    <Link href={`/project-details/${nextId}`}>
                                        <div className="nav-title">Next Post <h5>{getFirstTwoWords(nextProject?.title)}</h5></div>
                                        <div className="icon"><i className="fas fa-angle-double-right" /></div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;
