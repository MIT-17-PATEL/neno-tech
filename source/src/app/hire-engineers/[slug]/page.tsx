import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hireEngineersRoles } from "@/data/nenoData";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return hireEngineersRoles.map((role) => ({
        slug: role.slug,
    }));
}

export default async function HireEngineerDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const role = hireEngineersRoles.find((r) => r.slug === slug);

    if (!role) {
        notFound();
    }

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title={role.title} breadCrumb={`Home / Hire Engineers / ${role.shortTitle || role.title}`} />
                
                <div className="services-details-area default-padding">
                    <div className="container">
                        <div className="row">
                            {/* Main Content */}
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h1 className="title mb-3" style={{ fontSize: "2.4rem", fontWeight: "700" }}>{role.title}</h1>
                                    <p className="lead text-muted mb-4">{role.description}</p>
                                    
                                    <div className="p-4 bg-gray rounded-4 mb-40 border-0">
                                        <h4 className="fw-bold mb-3">Role Overview</h4>
                                        <p className="mb-0" style={{ lineHeight: "1.8" }}>{role.overview}</p>
                                    </div>

                                    {/* Capabilities */}
                                    <h3 className="mt-40 mb-20 fw-bold">Core Capabilities & Responsibilities</h3>
                                    <div className="row g-3 mb-40">
                                        {role.capabilities.map((cap, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div className="p-3 bg-gray rounded-3 h-100 d-flex align-items-start shadow-xs">
                                                    <i className="fas fa-check-circle text-primary mt-1 me-2 flex-shrink-0" />
                                                    <span>{cap}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Technologies & Tools */}
                                    <h3 className="mt-40 mb-20 fw-bold">Technologies & Tech Stack</h3>
                                    <div className="d-flex flex-wrap gap-2 mb-40">
                                        {role.technologies.map((tech) => (
                                            <span 
                                                className="badge bg-dark text-light px-3 py-2 fs-6 rounded-3" 
                                                key={tech}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Ideal Use Cases */}
                                    <h3 className="mt-40 mb-20 fw-bold">When to Hire This Role</h3>
                                    <ul className="check-list mb-40">
                                        {role.useCases.map((useCase, index) => (
                                            <li key={index} className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-arrow-alt-circle-right text-primary me-2" />
                                                <span>{useCase}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Why Neno Hire */}
                                    <div className="p-4 bg-gray rounded-4 mb-40">
                                        <h4 className="fw-bold mb-3">Why Hire via Neno Technology?</h4>
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-shield-alt text-primary fs-4 me-3" />
                                                    <div>
                                                        <strong className="d-block">5-Stage Vetting</strong>
                                                        <span className="small text-muted">Rigorous technical testing</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-clock text-primary fs-4 me-3" />
                                                    <div>
                                                        <strong className="d-block">Fast 48h Match</strong>
                                                        <span className="small text-muted">Pre-screened bench candidates</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-sync text-primary fs-4 me-3" />
                                                    <div>
                                                        <strong className="d-block">Risk-Free Trial</strong>
                                                        <span className="small text-muted">Zero friction replacement</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-handshake text-primary fs-4 me-3" />
                                                    <div>
                                                        <strong className="d-block">Direct IP Assignment</strong>
                                                        <span className="small text-muted">100% owned by your company</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-lg-4">
                                <div className="sidebar sticky-top" style={{ top: "100px" }}>
                                    {/* Hire Card */}
                                    <div className="bg-gray p-4 rounded-4 shadow-sm mb-30">
                                        <h4 className="fw-bold mb-3">Hire {role.shortTitle || role.title}</h4>
                                        <p className="text-muted small">
                                            Get paired with vetted senior engineers matched to your tech stack within 48 hours.
                                        </p>
                                        <div className="mb-3">
                                            <strong className="small text-uppercase text-secondary d-block mb-2">Available Models:</strong>
                                            {role.engagementOptions.map((opt, i) => (
                                                <div key={i} className="small mb-1 d-flex align-items-center">
                                                    <i className="fas fa-check text-success me-2" />
                                                    <span>{opt}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href="/contact-us" className="btn btn-style-one w-100 mt-20 text-center">
                                            Request Candidates <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>

                                    {/* All Roles Navigation */}
                                    <div className="bg-gray p-4 rounded-4 shadow-sm">
                                        <h5 className="fw-bold mb-3">All Engineering Roles</h5>
                                        <ul className="list-unstyled mb-0">
                                            {hireEngineersRoles.map((otherRole) => (
                                                <li key={otherRole.slug} className="mb-2">
                                                    <Link 
                                                        href={otherRole.href}
                                                        className={`d-block p-2 rounded-2 small text-decoration-none ${
                                                            otherRole.slug === role.slug 
                                                                ? 'bg-primary text-white fw-bold' 
                                                                : 'text-dark hover-primary'
                                                        }`}
                                                    >
                                                        <i className={`fas fa-chevron-right me-2 ${otherRole.slug === role.slug ? 'text-white' : 'text-primary'}`} />
                                                        {otherRole.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutV1>
        </div>
    );
}
