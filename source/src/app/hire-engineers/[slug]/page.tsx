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
                                    <h1 className="title mb-3" style={{ fontSize: "2.6rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px" }}>{role.title}</h1>
                                    <p className="lead mb-4" style={{ color: "#94a3b8", fontSize: "1.15rem", lineHeight: "1.7" }}>{role.description}</p>
                                    
                                    <div className="p-4 rounded-4 mb-40 border-0" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                                        <h4 className="fw-bold mb-3" style={{ color: "#ffffff" }}>Role Overview</h4>
                                        <p className="mb-0" style={{ lineHeight: "1.8", color: "#94a3b8" }}>{role.overview}</p>
                                    </div>


                                    {/* Technologies & Tools */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>Technologies & Tech Stack</h3>
                                    <div className="d-flex flex-wrap gap-2 mb-40">
                                        {role.technologies.map((tech) => (
                                            <span 
                                                className="badge px-3 py-2 fs-6 rounded-3" 
                                                key={tech}
                                                style={{ background: "rgba(255, 255, 255, 0.05)", color: "#e2e8f0", fontWeight: "500", border: "1px solid rgba(255, 255, 255, 0.1)" }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Ideal Use Cases */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>When to Hire This Role</h3>
                                    <ul className="check-list mb-40 p-0" style={{ listStyle: "none" }}>
                                        {role.useCases.map((useCase, index) => (
                                            <li key={index} className="mb-3 d-flex align-items-center p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                <i className="fas fa-arrow-alt-circle-right me-3 fs-5" style={{ color: "#38bdf8" }} />
                                                <span style={{ color: "#ffffff", fontWeight: "500" }}>{useCase}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Why Neno Hire */}
                                    <div className="p-4 rounded-4 mb-40" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px" }}>
                                        <h4 className="fw-bold mb-3" style={{ color: "#ffffff" }}>Why Hire via Neno Technology?</h4>
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-shield-alt fs-4 me-3" style={{ color: "#38bdf8" }} />
                                                    <div>
                                                        <strong className="d-block" style={{ color: "#ffffff" }}>5-Stage Vetting</strong>
                                                        <span className="small" style={{ color: "#94a3b8" }}>Rigorous technical testing</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-clock fs-4 me-3" style={{ color: "#38bdf8" }} />
                                                    <div>
                                                        <strong className="d-block" style={{ color: "#ffffff" }}>Fast 48h Match</strong>
                                                        <span className="small" style={{ color: "#94a3b8" }}>Pre-screened bench candidates</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-sync fs-4 me-3" style={{ color: "#38bdf8" }} />
                                                    <div>
                                                        <strong className="d-block" style={{ color: "#ffffff" }}>Risk-Free Trial</strong>
                                                        <span className="small" style={{ color: "#94a3b8" }}>Zero friction replacement</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-handshake fs-4 me-3" style={{ color: "#38bdf8" }} />
                                                    <div>
                                                        <strong className="d-block" style={{ color: "#ffffff" }}>Direct IP Assignment</strong>
                                                        <span className="small" style={{ color: "#94a3b8" }}>100% owned by your company</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div
                                className="col-lg-4 sticky-sidebar-col sidebar-scroll-container"
                                style={{ position: "sticky", top: "110px", alignSelf: "start", zIndex: 10, maxHeight: "calc(100vh - 7rem)", overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                <div className="sidebar">
                                    {/* Hire Card */}
                                    <div className="p-4 mb-30" style={{ background: "linear-gradient(135deg, rgba(20, 26, 48, 0.95) 0%, rgba(13, 18, 34, 0.95) 100%)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "22px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)" }}>
                                        <h4 className="fw-bold mb-3" style={{ color: "#ffffff" }}>Hire {role.shortTitle || role.title}</h4>
                                        <p className="small mb-3" style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                                            Get paired with vetted senior engineers matched to your tech stack within 48 hours.
                                        </p>
                                        <div className="mb-3">
                                            <strong className="small text-uppercase d-block mb-2" style={{ color: "#38bdf8", letterSpacing: "0.5px" }}>Available Models:</strong>
                                            {role.engagementOptions.map((opt, i) => (
                                                <div key={i} className="small mb-1 d-flex align-items-center" style={{ color: "#e2e8f0" }}>
                                                    <i className="fas fa-check me-2" style={{ color: "#4ade80" }} />
                                                    <span>{opt}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href={`/contact-us?role=${role.slug}`} className="btn btn-style-one sidebar-cta-btn w-100 py-3 text-center" style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", borderRadius: "10px", fontWeight: "600", color: "#ffffff" }}>
                                            Request Candidates <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>

                                    {/* All Roles Navigation */}
                                    <div className="p-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "22px" }}>
                                        <h5 className="fw-bold mb-3" style={{ color: "#ffffff" }}>All Engineering Roles</h5>
                                        <ul className="list-unstyled mb-0">
                                            {hireEngineersRoles.map((otherRole) => (
                                                <li key={otherRole.slug} className="mb-2">
                                                    <Link 
                                                        href={otherRole.href}
                                                        className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 small text-decoration-none"
                                                        style={{
                                                            background: otherRole.slug === role.slug ? "rgba(99, 102, 241, 0.25)" : "rgba(255, 255, 255, 0.04)",
                                                            color: otherRole.slug === role.slug ? "#ffffff" : "#94a3b8",
                                                            border: otherRole.slug === role.slug ? "1px solid rgba(99, 102, 241, 0.5)" : "1px solid rgba(255, 255, 255, 0.06)",
                                                            transition: "all 0.2s ease"
                                                        }}
                                                    >
                                                        <span>{otherRole.title}</span>
                                                        <i className={`fas fa-chevron-right small ${otherRole.slug === role.slug ? 'text-white' : 'text-muted'}`} />
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
