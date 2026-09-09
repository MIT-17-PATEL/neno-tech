import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nenoServices } from "@/data/nenoData";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return nenoServices.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = nenoServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title={service.title} breadCrumb={`Home / Services / ${service.shortTitle || service.title}`} />
                
                <div className="services-details-area default-padding">
                    <div className="container">
                        <div className="row">
                            {/* Main Content */}
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h1 className="title mb-3" style={{ fontSize: "2.6rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px" }}>{service.title}</h1>
                                    <p className="lead mb-4" style={{ color: "#94a3b8", fontSize: "1.15rem", lineHeight: "1.7" }}>{service.description}</p>
                                    
                                    <div className="p-4 rounded-4 mb-40 border-0" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="fw-bold mb-0" style={{ color: "#ffffff" }}>Service Overview</h4>
                                            <span className="badge p-2 px-3" style={{ background: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)", borderRadius: "9999px", fontWeight: "600" }}>
                                                <i className="far fa-clock me-1" /> Typical Build: {service.typicalBuild}
                                            </span>
                                        </div>
                                        <p className="mb-0" style={{ lineHeight: "1.8", color: "#94a3b8" }}>{service.overview}</p>
                                    </div>

                                    {/* Capabilities */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>Capabilities & Technical Scope</h3>
                                    <div className="row g-3 mb-40">
                                        {service.capabilities.map((cap, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div className="p-3 rounded-3 h-100 d-flex align-items-start" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(12px)" }}>
                                                    <i className="fas fa-check-circle mt-1 me-2 flex-shrink-0" style={{ color: "#38bdf8" }} />
                                                    <span style={{ color: "#e2e8f0", fontSize: "14.5px", fontWeight: "500" }}>{cap}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Deliverables */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>Key Project Deliverables</h3>
                                    <ul className="check-list mb-40 p-0" style={{ listStyle: "none" }}>
                                        {service.deliverables.map((deliv, index) => (
                                            <li key={index} className="mb-3 d-flex align-items-center p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                <div className="me-3 d-flex align-items-center justify-content-center rounded-2 flex-shrink-0" style={{ width: "36px", height: "36px", background: "rgba(99, 102, 241, 0.15)", color: "#818cf8", border: "1px solid rgba(99, 102, 241, 0.3)" }}>
                                                    <i className="fas fa-cube" />
                                                </div>
                                                <span style={{ color: "#ffffff", fontWeight: "600", fontSize: "15px" }}>{deliv}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#ffffff" }}>Technologies & Frameworks</h3>
                                    <div className="d-flex flex-wrap gap-2 mb-40">
                                        {service.technologies.map((tech) => (
                                            <span 
                                                className="badge px-3 py-2 fs-6 rounded-3" 
                                                key={tech}
                                                style={{ background: "rgba(255, 255, 255, 0.05)", color: "#e2e8f0", fontWeight: "500", border: "1px solid rgba(255, 255, 255, 0.1)" }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* 5-Step Delivery Process */}
                                    <div className="p-4 rounded-4 mb-40" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px" }}>
                                        <h4 className="fw-bold mb-3" style={{ color: "#ffffff" }}>Our 5-Step Delivery Process</h4>
                                        <div className="row g-3">
                                            <div className="col-md-4">
                                                <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                    <span className="badge mb-2" style={{ background: "#38bdf8", color: "#070913", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "6px" }}>Step 01</span>
                                                    <h6 className="fw-bold" style={{ color: "#ffffff" }}>Discovery Workshop</h6>
                                                    <p className="small mb-0" style={{ color: "#94a3b8" }}>Outcome mapping, data scoping & written estimate.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                    <span className="badge mb-2" style={{ background: "#38bdf8", color: "#070913", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "6px" }}>Step 02</span>
                                                    <h6 className="fw-bold" style={{ color: "#ffffff" }}>Architecture & Design</h6>
                                                    <p className="small mb-0" style={{ color: "#94a3b8" }}>System architecture, stack selection & fixed pricing.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                    <span className="badge mb-2" style={{ background: "#38bdf8", color: "#070913", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "6px" }}>Step 03</span>
                                                    <h6 className="fw-bold" style={{ color: "#ffffff" }}>Sprint Builds</h6>
                                                    <p className="small mb-0" style={{ color: "#94a3b8" }}>Two-week agile sprints with live functioning demos.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                    <span className="badge mb-2" style={{ background: "#38bdf8", color: "#070913", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "6px" }}>Step 04</span>
                                                    <h6 className="fw-bold" style={{ color: "#ffffff" }}>Deploy & Harden</h6>
                                                    <p className="small mb-0" style={{ color: "#94a3b8" }}>Production deployment, evaluation testing & security review.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "14px" }}>
                                                    <span className="badge mb-2" style={{ background: "#38bdf8", color: "#070913", fontSize: "11px", fontWeight: "700", padding: "4px 8px", borderRadius: "6px" }}>Step 05</span>
                                                    <h6 className="fw-bold" style={{ color: "#ffffff" }}>Handover & SLA Run</h6>
                                                    <p className="small mb-0" style={{ color: "#94a3b8" }}>Documentation, IP transfer & ongoing maintenance option.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div
                                className="col-lg-4"
                                style={{ position: "sticky", top: "110px", alignSelf: "start", zIndex: 10, maxHeight: "calc(100vh - 7rem)", overflowY: "auto" }}
                            >
                                <div className="sidebar">
                                    {/* Start Project Card */}
                                    <div className="p-4 mb-30" style={{ background: "linear-gradient(135deg, rgba(20, 26, 48, 0.95) 0%, rgba(13, 18, 34, 0.95) 100%)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "22px", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6)" }}>
                                        <h4 className="fw-bold mb-3" style={{ color: "#ffffff" }}>Ship Your AI System</h4>
                                        <p className="small mb-3" style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                                            Speak directly with our technical leads to scope your requirement, review architectures, and get a fixed timeline.
                                        </p>
                                        <Link href="/contact-us" className="btn btn-style-one w-100 py-3 text-center" style={{ borderRadius: "10px", fontWeight: "600" }}>
                                            Book Scoping Call <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>

                                    {/* All Services Navigation */}
                                    <div className="p-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "22px" }}>
                                        <h5 className="fw-bold mb-3" style={{ color: "#ffffff" }}>All Services</h5>
                                        <ul className="list-unstyled mb-0">
                                            {nenoServices.map((otherService) => (
                                                <li key={otherService.slug} className="mb-2">
                                                    <Link 
                                                        href={otherService.href}
                                                        className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 small text-decoration-none"
                                                        style={{
                                                            background: otherService.slug === service.slug ? "rgba(99, 102, 241, 0.25)" : "rgba(255, 255, 255, 0.04)",
                                                            color: otherService.slug === service.slug ? "#ffffff" : "#94a3b8",
                                                            border: otherService.slug === service.slug ? "1px solid rgba(99, 102, 241, 0.5)" : "1px solid rgba(255, 255, 255, 0.06)",
                                                            transition: "all 0.2s ease"
                                                        }}
                                                    >
                                                        <span>{otherService.title}</span>
                                                        <i className={`fas fa-chevron-right small ${otherService.slug === service.slug ? 'text-white' : 'text-muted'}`} />
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
