import React from "react";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { ServiceItem, serviceItems } from "@/data/servicesData";

interface ServiceDetailPageProps {
    service: ServiceItem;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb
                    title={service.pillBadge}
                    breadCrumb={`Home / Services / ${service.shortTitle}`}
                />

                <div className="services-details-area default-padding" style={{ paddingTop: "40px" }}>
                    <div className="container">
                        <div className="row">
                            {/* Main Content Column */}
                            <div className="col-lg-8">
                                <div className="service-details-content">
                                    <h1
                                        className="title mb-3"
                                        style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0f172a", letterSpacing: "-0.5px" }}
                                    >
                                        {service.title}
                                    </h1>
                                    <p className="lead text-muted mb-4" style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
                                        {service.description}
                                    </p>

                                    {/* Overview Card */}
                                    <div className="p-4 bg-gray rounded-4 mb-40 border-0" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                                            <h4 className="fw-bold mb-0" style={{ color: "#0f172a" }}>Service Overview</h4>
                                            <span
                                                className="badge p-2 px-3"
                                                style={{ background: "#EEF2FF", color: "#4F46E5", border: "1px solid #C0D8FF", borderRadius: "9999px", fontWeight: "600" }}
                                            >
                                                <i className="far fa-clock me-1" /> Typical: {service.duration}
                                            </span>
                                        </div>
                                        <p className="mb-0" style={{ lineHeight: "1.8", color: "#475569" }}>
                                            {service.overview}
                                        </p>
                                    </div>

                                    {/* Core Capabilities */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#0f172a" }}>
                                        Core Capabilities & Scope
                                    </h3>
                                    <div className="row g-3 mb-40">
                                        {service.capabilities.map((cap, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div
                                                    className="p-3 bg-gray rounded-3 h-100 d-flex align-items-start"
                                                    style={{ background: "#F8FAFC", border: "1px solid #EDF2F7" }}
                                                >
                                                    <i className="fas fa-check-circle text-primary mt-1 me-2 flex-shrink-0" style={{ color: "#4F46E5" }} />
                                                    <span style={{ color: "#334155", fontSize: "14.5px", fontWeight: "500" }}>{cap}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Deliverables */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#0f172a" }}>
                                        Tangible Deliverables You Receive
                                    </h3>
                                    <ul className="check-list mb-40 p-0" style={{ listStyle: "none" }}>
                                        {service.deliverables.map((deliv, index) => (
                                            <li
                                                key={index}
                                                className="d-flex align-items-start mb-3"
                                                style={{ color: "#334155", fontSize: "15px" }}
                                            >
                                                <i className="fas fa-arrow-right me-3 mt-1 flex-shrink-0" style={{ color: "#4F46E5" }} />
                                                <span>{deliv}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technology Stack */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#0f172a" }}>
                                        Technology Stack
                                    </h3>
                                    <div className="d-flex flex-wrap gap-2 mb-40">
                                        {service.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="badge"
                                                style={{
                                                    background: "#F8FAFC",
                                                    color: "#334155",
                                                    border: "1px solid #E2E8F0",
                                                    padding: "8px 14px",
                                                    borderRadius: "8px",
                                                    fontSize: "13px",
                                                    fontWeight: "500"
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Engagement Process */}
                                    <h3 className="mt-40 mb-20 fw-bold" style={{ color: "#0f172a" }}>
                                        How We Deliver
                                    </h3>
                                    <div className="row g-3 mb-40">
                                        {service.process.map((step, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div
                                                    className="p-4 rounded-3 h-100"
                                                    style={{ background: "#F8FAFC", border: "1px solid #EDF2F7" }}
                                                >
                                                    <div
                                                        className="mb-2 fw-bold"
                                                        style={{ color: "#4F46E5", fontSize: "13px", letterSpacing: "1px" }}
                                                    >
                                                        STEP {step.step}
                                                    </div>
                                                    <h5 className="fw-bold mb-2" style={{ color: "#0f172a", fontSize: "16px" }}>{step.title}</h5>
                                                    <p className="mb-0 small" style={{ color: "#64748B", lineHeight: "1.6" }}>{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Benefits & Use Cases */}
                                    <div className="row g-4 mb-40">
                                        <div className="col-md-6">
                                            <div className="p-4 rounded-4 h-100" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
                                                <h5 className="fw-bold mb-3" style={{ color: "#166534" }}>
                                                    <i className="fas fa-check-double me-2" /> Business Impact
                                                </h5>
                                                <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                    {service.benefits.map((b, idx) => (
                                                        <li key={idx} className="small mb-2 d-flex align-items-start" style={{ color: "#14532D" }}>
                                                            <i className="fas fa-check text-success me-2 mt-1 flex-shrink-0" />
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-4 rounded-4 h-100" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                                                <h5 className="fw-bold mb-3" style={{ color: "#1E40AF" }}>
                                                    <i className="fas fa-lightbulb me-2" /> Common Scenarios
                                                </h5>
                                                <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                                    {service.useCases.map((u, idx) => (
                                                        <li key={idx} className="small mb-2 d-flex align-items-start" style={{ color: "#1E3A8A" }}>
                                                            <i className="fas fa-arrow-right text-primary me-2 mt-1 flex-shrink-0" />
                                                            <span>{u}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Column */}
                            <div className="col-lg-4 mt-md-50 mt-xs-40">
                                <div className="service-sidebar sticky-top" style={{ top: "110px", zIndex: 10 }}>
                                    {/* CTA Box */}
                                    <div
                                        className="sidebar-widget p-4 rounded-4 mb-4"
                                        style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)", border: "1px solid #C0D8FF" }}
                                    >
                                        <span
                                            className="badge mb-2"
                                            style={{ background: "#F0F6FF", border: "1px solid #C0D8FF", color: "#4F46E5", padding: "4px 10px", borderRadius: "9999px", fontSize: "11.5px", fontWeight: "700" }}
                                        >
                                            GET STARTED
                                        </span>
                                        <h4 className="fw-bold mb-2" style={{ color: "#0f172a" }}>Start Your {service.shortTitle} Project</h4>
                                        <p className="small text-muted mb-3" style={{ lineHeight: "1.6" }}>
                                            Connect with our engineers to scope your {service.shortTitle} initiative and get a delivery roadmap.
                                        </p>
                                        <Link
                                            href={`/contact-us?service=${service.slug}`}
                                            className="btn btn-style-one w-100 py-3 d-flex align-items-center justify-content-center"
                                            style={{ background: "#4F46E5", border: "1px solid #4F46E5", borderRadius: "10px", fontWeight: "600", color: "#ffffff" }}
                                        >
                                            <span>Schedule 30-Min Call</span>
                                            <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </div>

                                    {/* All Services Navigation */}
                                    <div className="sidebar-widget p-4 rounded-4 mb-4" style={{ background: "#ffffff", border: "1px solid #E2E8F0" }}>
                                        <h5 className="fw-bold mb-3" style={{ color: "#0f172a", fontSize: "17px" }}>
                                            All Services
                                        </h5>
                                        <ul className="p-0 m-0" style={{ listStyle: "none" }}>
                                            {serviceItems.map((s) => {
                                                const isActive = s.slug === service.slug;
                                                return (
                                                    <li key={s.slug} className="mb-2">
                                                        <Link
                                                            href={s.href}
                                                            className="d-flex align-items-center justify-content-between p-2 px-3 rounded-3 text-decoration-none"
                                                            style={{
                                                                background: isActive ? "#4F46E5" : "#F8FAFC",
                                                                color: isActive ? "#ffffff" : "#0f172a",
                                                                border: isActive ? "1px solid #4F46E5" : "1px solid #EDF2F7",
                                                                fontSize: "14px"
                                                            }}
                                                        >
                                                            <span>{s.title}</span>
                                                            <i className={`fas fa-chevron-right small ${isActive ? "text-white" : "text-muted"}`} />
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    {/* Hire Engineers CTA */}
                                    <div
                                        className="sidebar-widget p-4 rounded-4"
                                        style={{ background: "#0f172a", color: "#ffffff", border: "1px solid #1e293b" }}
                                    >
                                        <div className="d-flex align-items-center mb-3">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center me-2"
                                                style={{ width: "32px", height: "32px", background: "rgba(112, 165, 255, 0.2)", color: "#70A5FF" }}
                                            >
                                                <i className="fas fa-users" />
                                            </div>
                                            <h5 className="fw-bold mb-0 text-white" style={{ fontSize: "16px" }}>Need Engineers?</h5>
                                        </div>
                                        <p className="small mb-3" style={{ color: "#94A3B8", lineHeight: "1.5" }}>
                                            Need hands-on engineers to implement this? Hire forward-deployed engineers or dedicated AI pods within 48 hours.
                                        </p>
                                        <Link
                                            href="/hire-engineers"
                                            className="btn btn-outline-light btn-sm w-100 py-2 d-flex align-items-center justify-content-center"
                                            style={{ borderRadius: "8px", fontWeight: "600", borderColor: "#334155" }}
                                        >
                                            <span>Hire Engineers On Demand</span>
                                            <i className="fas fa-arrow-right ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Banner */}
                <section className="consulting-cta-section mb-80" style={{ padding: "40px 0 60px 0" }}>
                    <div className="container">
                        <div
                            className="consulting-cta-box text-center p-5 rounded-4"
                            style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)", border: "1px solid #C0D8FF" }}
                        >
                            <span
                                className="badge mb-3"
                                style={{ background: "#F0F6FF", border: "1px solid #C0D8FF", color: "#4F46E5", padding: "6px 16px", borderRadius: "9999px", fontWeight: "700" }}
                            >
                                ENGINEERING SERVICES
                            </span>
                            <h2 className="fw-bold mb-3" style={{ color: "#0f172a", fontSize: "32px" }}>
                                Ready to Start Your {service.shortTitle} Project?
                            </h2>
                            <p className="text-muted mx-auto mb-4" style={{ maxWidth: "620px", fontSize: "16px", lineHeight: "1.6" }}>
                                Let's discuss your requirements and define a clear delivery plan. No fluff — just senior engineers and measurable outcomes.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <Link
                                    href={`/contact-us?service=${service.slug}`}
                                    className="btn btn-style-one px-4 py-3"
                                    style={{ background: "#4F46E5", border: "1px solid #4F46E5", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}
                                >
                                    Book a Discovery Call <i className="fas fa-arrow-right ms-2" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="btn btn-style-two px-4 py-3"
                                    style={{ background: "#ffffff", border: "1px solid #E2E8F0", color: "#0f172a", borderRadius: "10px", fontWeight: "600" }}
                                >
                                    View All Services <i className="fas fa-th-large ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutV1>
        </div>
    );
}
