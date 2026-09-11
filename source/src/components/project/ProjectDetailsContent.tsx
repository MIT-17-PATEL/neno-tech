import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetailsProps {
    projectInfo: {
        id?: number | string;
        title?: string;
        thumbFull?: string;
        category?: string;
        [key: string]: any;
    };
    totalProjects?: number;
}

const ProjectDetailsContent: React.FC<ProjectDetailsProps> = ({ projectInfo }) => {
    const { title = "Enterprise AI Implementation", thumbFull = "1.jpg" } = projectInfo || {};

    const previousId = 1;
    const nextId = 2;
    const previousProject = { title: "Voice AI Agent" };
    const nextProject = { title: "Enterprise CRM Platform" };

    const getFirstTwoWords = (text?: string) => {
        if (!text) return "";
        return text.split(" ").slice(0, 2).join(" ");
    };

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
                                    Engineering production-grade AI systems, automated workflows, and robust data pipelines to solve high-friction operational bottlenecks. Below is an overview of the system architecture, challenges addressed, and delivery milestones.
                                </p>
                                <ul className="project-info-list">
                                    <li>
                                        <div className="left-info">
                                            <h4>Strategy</h4>
                                        </div>
                                        <div className="right-info">
                                            <ul className="list-style-two">
                                                <li>Agentic Workflows</li>
                                                <li>LLM Orchestration</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="left-info">
                                            <h4>Architecture</h4>
                                        </div>
                                        <div className="right-info">
                                            <ul className="list-style-two">
                                                <li>Event-Driven Microservices</li>
                                                <li>Vector Retrieval & Guardrails</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="left-info">
                                            <h4>Delivery</h4>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Neno Engineering Squad <br /> Production Release
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
                                        The implementation automated repetitive high-volume manual tasks across teams, standardizing data extraction and decision workflows with verifiable latency and error thresholds.
                                    </p>
                                </div>
                                <div className="single-list">
                                    <h4>Core Capabilities</h4>
                                    <ul className="list-style-one">
                                        <li>High-Throughput Cloud Infrastructure</li>
                                        <li>Domain-Adapted Machine Learning Models</li>
                                        <li>Secure REST and Webhook APIs</li>
                                        <li>Structured Data Management and Caching</li>
                                        <li>Deterministic Guardrails & Error Fallbacks</li>
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
                                                The client required a modern, fault-tolerant system capable of handling complex business transactions and real-time user inquiries with high reliability. Previous manual interventions resulted in queue delays and operational overhead.
                                            </p>
                                            <p>
                                                Our forward-deployed engineering squad integrated directly with their technical leads to inspect their data pipelines, define rigorous integration specifications, and establish verifiable service level agreements.
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
                                                Key architectural challenges included unstructured data ingestion, maintaining sub-second API response times during traffic spikes, and preventing hallucination in high-stakes workflow routing.
                                            </p>
                                            <p>
                                                We introduced deterministic validation layers, robust token caching, and automated regression testing suites to ensure consistent output quality across every deployment.
                                            </p>
                                            <h4>Engineered for Reliability & Scale</h4>
                                            <ul className="list-style-one">
                                                <li>Automated data validation and schema enforcement</li>
                                                <li>Real-time telemetry and error tracing with Datadog</li>
                                                <li>Multi-region fallback and disaster recovery</li>
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
                                                We deployed an end-to-end agentic architecture paired with real-time analytics dashboards. The solution automates complex query routing, handles edge-case recovery automatically, and integrates with the client&apos;s internal databases.
                                            </p>
                                            <p>
                                                Following production rollout, the team achieved immediate reduction in response turnaround times, continuous uptime compliance, and a maintainable modular codebase with complete technical documentation.
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
                            <div className="project-paginvation-items">
                                <div className="project-previous">
                                    <Link href={`/project-details/${previousId}`}>
                                        <div className="icon"><i className="fas fa-angle-double-left" /></div>
                                        <div className="nav-title"> Previous Case <h5>{getFirstTwoWords(previousProject?.title)}</h5></div>
                                    </Link>
                                </div>
                                <div className="project-all">
                                    <Link href="/case-studies"><i className="fas fa-th-large" /></Link>
                                </div>
                                <div className="project-next">
                                    <Link href={`/project-details/${nextId}`}>
                                        <div className="nav-title">Next Case <h5>{getFirstTwoWords(nextProject?.title)}</h5></div>
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
