import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CapabilityBlueprint, CAPABILITY_BLUEPRINTS } from '@/data/blueprintsData';

interface ProjectDetailsProps {
    blueprint?: CapabilityBlueprint;
    projectInfo?: {
        id?: number | string;
        slug?: string;
        title?: string;
        [key: string]: unknown;
    };
    totalProjects?: number;
}

const ProjectDetailsContent: React.FC<ProjectDetailsProps> = ({ blueprint: propBlueprint, projectInfo }) => {
    // Resolve blueprint either from explicit prop or projectInfo
    const blueprint: CapabilityBlueprint = propBlueprint || (() => {
        const identifier = projectInfo?.slug || (projectInfo?.id ? String(projectInfo.id) : "");
        const found = CAPABILITY_BLUEPRINTS.find(
            (b) => b.slug === identifier || b.id.toString() === identifier
        );
        return found || CAPABILITY_BLUEPRINTS[0];
    })();

    const currentIndex = CAPABILITY_BLUEPRINTS.findIndex((b) => b.id === blueprint.id);
    const previousBlueprint = CAPABILITY_BLUEPRINTS[(currentIndex - 1 + CAPABILITY_BLUEPRINTS.length) % CAPABILITY_BLUEPRINTS.length];
    const nextBlueprint = CAPABILITY_BLUEPRINTS[(currentIndex + 1) % CAPABILITY_BLUEPRINTS.length];

    return (
        <article className="blueprint-detail-wrapper">
            <div className="container">
                {/* Hero Header */}
                <header className="blueprint-detail-hero">
                    <nav aria-label="Breadcrumb" className="mb-25">
                        <ul className="d-flex align-items-center gap-2 text-muted list-unstyled font-sm">
                            <li><Link href="/" className="text-muted text-decoration-none">Home</Link></li>
                            <li><span className="text-secondary">/</span></li>
                            <li><Link href="/#projects" className="text-muted text-decoration-none">Blueprints</Link></li>
                            <li><span className="text-secondary">/</span></li>
                            <li className="text-light" aria-current="page">{blueprint.title}</li>
                        </ul>
                    </nav>

                    <div className="blueprint-category-pill">
                        ENGAGEMENT BLUEPRINT · {blueprint.categoryTag}
                    </div>

                    <h1 className="blueprint-headline">{blueprint.positioningLine}</h1>
                    <p className="blueprint-subheadline">{blueprint.subtitle}</p>

                    {/* Target KPIs Banner */}
                    <div className="blueprint-metrics-banner">
                        {blueprint.targetMetrics.map((m, idx) => (
                            <div key={idx} className="blueprint-metric-card">
                                <div className="blueprint-metric-value">{m.val}</div>
                                <div className="blueprint-metric-title">{m.label}</div>
                                {m.method && (
                                    <div className="blueprint-metric-method">
                                        Method: {m.method}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Honesty & Transparency Disclaimer Banner */}
                    <div className="blueprint-disclaimer-banner" role="note">
                        <i className="fas fa-shield-alt" aria-hidden="true" />
                        <div>
                            <p>
                                <strong>Engineering Capability Blueprint:</strong> This document details Neno Technology&apos;s architectural design, agent mesh topology, and target SLAs for enterprise deployments. Client case studies with production telemetry are published under written mutual NDA.
                            </p>
                        </div>
                    </div>

                    {/* Dashboard Screenshot Visual */}
                    <div className="blueprint-hero-image-wrap">
                        <Image
                            src={`/assets/img/projects/${blueprint.thumbFull}`}
                            alt={`${blueprint.title} Architectural Dashboard`}
                            width={1200}
                            height={800}
                            style={{ width: "100%", height: "auto", display: "block" }}
                            priority
                        />
                    </div>
                </header>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* 1. The Operational Problem */}
                        <section className="blueprint-section-card">
                            <h2 className="blueprint-section-title">
                                <i className="fas fa-exclamation-triangle" aria-hidden="true" />
                                The Operational Problem
                            </h2>
                            <p className="blueprint-prose">{blueprint.fullProblem}</p>
                        </section>

                        {/* 2. Agent Mesh Topology Table */}
                        <section className="blueprint-section-card">
                            <h2 className="blueprint-section-title">
                                <i className="fas fa-network-wired" aria-hidden="true" />
                                Agent Mesh Topology
                            </h2>
                            <p className="blueprint-prose mb-30">
                                Coordinated autonomous sub-agents executing specialized domain tasks under a deterministic supervisor state machine.
                            </p>

                            <div className="table-responsive">
                                <table className="blueprint-agent-table">
                                    <thead>
                                        <tr>
                                            <th>Agent Node</th>
                                            <th>Core Engineering Responsibility</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {blueprint.agentMesh.map((agent, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <div className="blueprint-agent-name-cell">
                                                        <span
                                                            className="blueprint-agent-dot"
                                                            style={{
                                                                backgroundColor: agent.color || "#6d6df6",
                                                                color: agent.color || "#6d6df6"
                                                            }}
                                                        />
                                                        {agent.name}
                                                    </div>
                                                </td>
                                                <td>{agent.responsibility}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 3. Orchestration Pattern */}
                        <section className="blueprint-section-card">
                            <h2 className="blueprint-section-title">
                                <i className="fas fa-project-diagram" aria-hidden="true" />
                                Orchestration Pattern
                            </h2>
                            <p className="blueprint-prose">{blueprint.orchestrationPattern}</p>
                        </section>

                        {/* 4. End-to-End Workflow */}
                        <section className="blueprint-section-card">
                            <h2 className="blueprint-section-title">
                                <i className="fas fa-stream" aria-hidden="true" />
                                End-to-End Execution Flow
                            </h2>
                            <p className="blueprint-prose mb-20">
                                Step-by-step event loop from inbound trigger to verified transactional completion.
                            </p>

                            <div className="blueprint-workflow-grid">
                                {blueprint.workflowSteps.map((wf) => (
                                    <div key={wf.step} className="blueprint-workflow-step">
                                        <span className="blueprint-step-num">STEP {wf.step}</span>
                                        <h3 className="blueprint-step-title">{wf.title}</h3>
                                        <p className="blueprint-step-desc">{wf.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5. Full Stack Architecture Breakdown */}
                        <section className="blueprint-section-card">
                            <h2 className="blueprint-section-title">
                                <i className="fas fa-layer-group" aria-hidden="true" />
                                Full Stack Architecture
                            </h2>
                            <p className="blueprint-prose mb-20">
                                Production stack components configured for horizontal scalability, sub-second latency, and data isolation.
                            </p>

                            <div className="blueprint-stack-grid">
                                <div className="blueprint-stack-item">
                                    <div className="blueprint-stack-header">
                                        <i className="fas fa-desktop" aria-hidden="true" />
                                        Frontend & Interface
                                    </div>
                                    <div className="blueprint-stack-content">{blueprint.fullStack.frontend}</div>
                                </div>
                                <div className="blueprint-stack-item">
                                    <div className="blueprint-stack-header">
                                        <i className="fas fa-server" aria-hidden="true" />
                                        Backend & Queues
                                    </div>
                                    <div className="blueprint-stack-content">{blueprint.fullStack.backend}</div>
                                </div>
                                <div className="blueprint-stack-item">
                                    <div className="blueprint-stack-header">
                                        <i className="fas fa-brain" aria-hidden="true" />
                                        AI & Orchestration
                                    </div>
                                    <div className="blueprint-stack-content">{blueprint.fullStack.aiOrchestration}</div>
                                </div>
                                <div className="blueprint-stack-item">
                                    <div className="blueprint-stack-header">
                                        <i className="fas fa-database" aria-hidden="true" />
                                        Data & Vector Storage
                                    </div>
                                    <div className="blueprint-stack-content">{blueprint.fullStack.dataStorage}</div>
                                </div>
                                <div className="blueprint-stack-item">
                                    <div className="blueprint-stack-header">
                                        <i className="fas fa-plug" aria-hidden="true" />
                                        Integrations & Connectors
                                    </div>
                                    <div className="blueprint-stack-content">{blueprint.fullStack.integrations}</div>
                                </div>
                                <div className="blueprint-stack-item">
                                    <div className="blueprint-stack-header">
                                        <i className="fas fa-shield-alt" aria-hidden="true" />
                                        Infrastructure & Security
                                    </div>
                                    <div className="blueprint-stack-content">{blueprint.fullStack.infrastructure}</div>
                                </div>
                            </div>
                        </section>

                        {/* 6. What We Deliver */}
                        <section className="blueprint-section-card">
                            <h2 className="blueprint-section-title">
                                <i className="fas fa-box-open" aria-hidden="true" />
                                What We Deliver
                            </h2>
                            <p className="blueprint-prose">{blueprint.whatWeDeliver}</p>
                        </section>

                        {/* 7. Target Outcome Model */}
                        <section className="blueprint-section-card">
                            <h2 className="blueprint-section-title">
                                <i className="fas fa-chart-line" aria-hidden="true" />
                                Target Outcome Model
                            </h2>
                            <p className="blueprint-prose mb-30">{blueprint.outcomeModel.description}</p>

                            <div className="blueprint-metrics-banner">
                                {blueprint.outcomeModel.kpis.map((kpi, idx) => (
                                    <div key={idx} className="blueprint-metric-card">
                                        <div className="blueprint-metric-value">{kpi.target}</div>
                                        <div className="blueprint-metric-title">{kpi.title}</div>
                                        <div className="blueprint-metric-method">{kpi.measurement}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 8. The Hard Part — Engineering Depth */}
                        <section className="blueprint-hard-part-card">
                            <div className="blueprint-hard-part-title">
                                <i className="fas fa-microchip" aria-hidden="true" />
                                The Hard Part
                                <span className="blueprint-hard-part-badge">ENGINEERING DEPTH</span>
                            </div>
                            <p className="blueprint-prose text-light" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                                {blueprint.theHardPart}
                            </p>
                        </section>

                        {/* Navigation between Blueprints */}
                        <nav aria-label="Blueprint Navigation" className="d-flex justify-content-between align-items-center flex-wrap gap-3 pt-30 pb-30 border-top border-bottom border-secondary border-opacity-25 my-50">
                            <Link href={`/project-details/${previousBlueprint.slug}`} className="text-decoration-none d-flex align-items-center gap-3">
                                <i className="fas fa-arrow-left text-primary" aria-hidden="true" />
                                <div>
                                    <span className="d-block font-xs text-secondary text-uppercase">Previous Blueprint</span>
                                    <strong className="text-light">{previousBlueprint.title}</strong>
                                </div>
                            </Link>
                            <Link href={`/project-details/${nextBlueprint.slug}`} className="text-decoration-none d-flex align-items-center gap-3 text-end">
                                <div>
                                    <span className="d-block font-xs text-secondary text-uppercase">Next Blueprint</span>
                                    <strong className="text-light">{nextBlueprint.title}</strong>
                                </div>
                                <i className="fas fa-arrow-right text-primary" aria-hidden="true" />
                            </Link>
                        </nav>

                        {/* Call to Action Box */}
                        <section className="blueprint-cta-box">
                            <h3>Ready to deploy this capability into production?</h3>
                            <p>
                                Work directly with Neno Technology&apos;s forward-deployed engineering squads to scope, build, and deploy this blueprint inside your cloud environment.
                            </p>
                            <Link
                                href={`/contact?interest=${blueprint.inquiryParam}`}
                                className="blueprint-cta-btn"
                                id={`cta-talk-engineers-${blueprint.slug}`}
                            >
                                <i className="fas fa-comments" aria-hidden="true" />
                                Talk to the engineering team
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectDetailsContent;
