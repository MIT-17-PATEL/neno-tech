import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { nenoServices } from "@/data/nenoData";

export default function ServicesPage() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Services" breadCrumb="Home / Services" />

                <div className="services-details-area default-padding">
                    <div className="container">
                        {/* Hero */}
                        <div className="row">
                            <div className="col-lg-12 text-center mb-50">
                                <h1 className="title" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
                                    You Describe the Outcome. We Ship the System.
                                </h1>
                                <p className="lead mx-auto text-muted mt-3" style={{ maxWidth: "850px", fontSize: "1.2rem", lineHeight: "1.7" }}>
                                    End-to-end AI and software delivery — scoped, priced, and built by senior engineering squads that have done it before.
                                </p>
                                <div className="d-flex justify-content-center gap-3 mt-4">
                                    <Link href="/contact-us" className="btn btn-style-one">
                                        Book a Scoping Call <i className="fas fa-arrow-right" />
                                    </Link>
                                    <a href="#services-grid" className="btn btn-style-one btn-border">
                                        Explore Services <i className="fas fa-chevron-down" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 6 Services Grid */}
                        <div id="services-grid" className="pt-20 mb-60">
                            <div className="text-center mb-40">
                                <h2 className="title">Core Service Capabilities</h2>
                                <p className="text-muted">High-impact engineering services tailored for modern AI-driven organizations.</p>
                            </div>
                            <div className="row g-4">
                                {nenoServices.map(service => (
                                    <div className="col-lg-4 col-md-6" key={service.slug}>
                                        <div className="card h-100 p-4 border-0 bg-gray shadow-sm rounded-4 d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <span className="badge bg-primary text-white small">
                                                        <i className="far fa-clock me-1" /> {service.typicalBuild}
                                                    </span>
                                                </div>
                                                <h3 className="fs-5 fw-bold mb-3">{service.title}</h3>
                                                <p className="text-muted small mb-3">{service.description}</p>
                                                
                                                <div className="mb-3">
                                                    <strong className="d-block mb-2 small text-uppercase fw-bold text-secondary">Key Capabilities:</strong>
                                                    <ul className="list-unstyled mb-0">
                                                        {service.capabilities.slice(0, 3).map((cap, i) => (
                                                            <li key={i} className="small mb-1 d-flex align-items-center">
                                                                <i className="fas fa-check text-primary me-2 flex-shrink-0" />
                                                                <span>{cap}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="mb-4">
                                                    <strong className="d-block mb-2 small text-uppercase fw-bold text-secondary">Tech Stack:</strong>
                                                    <div className="d-flex flex-wrap gap-1">
                                                        {service.technologies.slice(0, 4).map(tech => (
                                                            <span className="badge bg-dark text-light p-2 small" key={tech}>{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-3 border-top mt-auto">
                                                <Link href={service.href} className="btn btn-sm btn-style-one w-100 text-center">
                                                    Explore Service <i className="fas fa-arrow-right ms-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5-Step Delivery Process */}
                        <div className="p-5 bg-gray rounded-4 shadow-sm mb-60">
                            <div className="text-center mb-40">
                                <h3 className="fw-bold">Our 5-Step Delivery Lifecycle</h3>
                                <p className="text-muted">Predictable, transparent delivery from discovery to post-launch scaling.</p>
                            </div>
                            <div className="row g-3 text-center">
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">01</span>
                                        <h5 className="fs-6 fw-bold">Discovery</h5>
                                        <p className="small text-muted mb-0">Scope mapping, data review & written plan</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">02</span>
                                        <h5 className="fs-6 fw-bold">Architecture</h5>
                                        <p className="small text-muted mb-0">System design & fixed price estimate</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">03</span>
                                        <h5 className="fs-6 fw-bold">Sprint Builds</h5>
                                        <p className="small text-muted mb-0">Bi-weekly iterations with functioning demos</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">04</span>
                                        <h5 className="fs-6 fw-bold">Deploy & Harden</h5>
                                        <p className="small text-muted mb-0">Security, evaluation & production launch</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">05</span>
                                        <h5 className="fs-6 fw-bold">Handover / Run</h5>
                                        <p className="small text-muted mb-0">IP transfer & SLA maintenance</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-5 bg-dark text-light rounded-4 text-center shadow-lg">
                            <h3 className="text-white fw-bold mb-3">Have a Project in Mind?</h3>
                            <p className="text-light-50 mb-4 mx-auto" style={{ maxWidth: "650px" }}>
                                Share your technical specifications or schedule a consultation with our architects.
                            </p>
                            <Link href="/contact-us" className="btn btn-style-one">
                                Schedule a 30-Min Call <i className="fas fa-arrow-right ms-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </LayoutV1>
        </div>
    );
}
