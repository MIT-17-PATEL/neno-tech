import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { hireEngineersRoles } from "@/data/nenoData";

export default function HireEngineersPage() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Hire Engineers" breadCrumb="Home / Hire Engineers" />
                
                {/* Hero / Overview Section */}
                <div className="services-details-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-50">
                                <h1 className="title" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
                                    Hire AI Engineers Who Ship.
                                </h1>
                                <p className="lead mx-auto text-muted mt-3" style={{ maxWidth: "850px", fontSize: "1.2rem", lineHeight: "1.7" }}>
                                    Neno Hire places vetted AI, agentic, and full-stack engineers directly into your team. 
                                    They use your tools, join your daily standups, and start delivering in weeks.
                                </p>
                                <div className="d-flex justify-content-center gap-3 mt-4">
                                    <Link href="/contact-us" className="btn btn-style-one">
                                        Share Your Requirement <i className="fas fa-arrow-right" />
                                    </Link>
                                    <a href="#roles-grid" className="btn btn-style-one btn-border">
                                        Explore Roles <i className="fas fa-chevron-down" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 4 Value Pillars */}
                        <div className="row g-4 mb-60">
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 bg-gray rounded-4 h-100 shadow-sm border-0">
                                    <div className="mb-3 text-primary fs-3"><i className="fas fa-user-shield" /></div>
                                    <h4 className="fs-5 fw-bold">5-Stage Vetting</h4>
                                    <p className="small text-muted mb-0">Every engineer clears technical coding, AI architecture, and a client-style trial task.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 bg-gray rounded-4 h-100 shadow-sm border-0">
                                    <div className="mb-3 text-primary fs-3"><i className="fas fa-bolt" /></div>
                                    <h4 className="fs-5 fw-bold">Fast Placement</h4>
                                    <p className="small text-muted mb-0">Bench capacity ready to deploy. Curated shortlists in 48 hours, onboarded in days.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 bg-gray rounded-4 h-100 shadow-sm border-0">
                                    <div className="mb-3 text-primary fs-3"><i className="fas fa-globe-americas" /></div>
                                    <h4 className="fs-5 fw-bold">Overlapping Hours</h4>
                                    <p className="small text-muted mb-0">Engineers working across US, UK, UAE, Australia, and India timezones for maximum overlap.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="p-4 bg-gray rounded-4 h-100 shadow-sm border-0">
                                    <div className="mb-3 text-primary fs-3"><i className="fas fa-chart-line" /></div>
                                    <h4 className="fs-5 fw-bold">Scale Up or Down</h4>
                                    <p className="small text-muted mb-0">Start with a single engineer or scale up to an entire autonomous squad on flexible terms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Roles Grid */}
                        <div id="roles-grid" className="pt-20 mb-60">
                            <div className="text-center mb-40">
                                <h2 className="title">Engineers on Demand</h2>
                                <p className="text-muted">Explore dedicated role specializations available for immediate placement.</p>
                            </div>
                            <div className="row g-4">
                                {hireEngineersRoles.map(role => (
                                    <div className="col-lg-6 col-md-6" key={role.slug}>
                                        <div className="card h-100 p-4 border-0 bg-gray shadow-sm rounded-4 d-flex flex-column justify-content-between">
                                            <div>
                                                <h3 className="fs-4 fw-bold mb-3">{role.title}</h3>
                                                <p className="text-muted mb-3">{role.description}</p>
                                                <div className="mb-3">
                                                    <strong className="d-block mb-2 small text-uppercase fw-bold text-secondary">Key Capabilities:</strong>
                                                    <ul className="list-unstyled mb-0">
                                                        {role.capabilities.slice(0, 3).map((cap, i) => (
                                                            <li key={i} className="small mb-1 d-flex align-items-center">
                                                                <i className="fas fa-check text-primary me-2" />
                                                                {cap}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="mb-4">
                                                    <strong className="d-block mb-2 small text-uppercase fw-bold text-secondary">Tech Stack:</strong>
                                                    <div className="d-flex flex-wrap gap-1">
                                                        {role.technologies.slice(0, 5).map(tech => (
                                                            <span className="badge bg-dark text-light p-2 small" key={tech}>{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-3 border-top mt-auto">
                                                <Link href={role.href} className="btn btn-sm btn-style-one w-100 text-center">
                                                    View Role & Hire <i className="fas fa-arrow-right ms-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5-Stage Vetting Stepper */}
                        <div className="p-5 bg-gray rounded-4 shadow-sm mb-60">
                            <div className="text-center mb-40">
                                <h3 className="fw-bold">Our 5-Stage Vetting Funnel</h3>
                                <p className="text-muted">Only the top 2% of engineering applicants clear our stringent evaluation process.</p>
                            </div>
                            <div className="row g-3 text-center">
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">01</span>
                                        <h5 className="fs-6 fw-bold">Screening</h5>
                                        <p className="small text-muted mb-0">Profile depth & verified production history</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">02</span>
                                        <h5 className="fs-6 fw-bold">Tech Assessment</h5>
                                        <p className="small text-muted mb-0">Live coding & hands-on AI/LLM task</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">03</span>
                                        <h5 className="fs-6 fw-bold">System Design</h5>
                                        <p className="small text-muted mb-0">Architecture, trade-offs & scale thinking</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">04</span>
                                        <h5 className="fs-6 fw-bold">Communication</h5>
                                        <p className="small text-muted mb-0">Fluency & client-readiness</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                        <span className="badge bg-primary text-white rounded-pill mb-2">05</span>
                                        <h5 className="fs-6 fw-bold">Trial Task</h5>
                                        <p className="small text-muted mb-0">Scoped, client-style deliverable</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Engagement Models */}
                        <div className="mb-60">
                            <div className="text-center mb-40">
                                <h3 className="fw-bold">Flexible Engagement Models</h3>
                                <p className="text-muted">Choose the collaboration format that fits your product roadmap and timeline.</p>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="p-4 bg-gray rounded-4 h-100 shadow-sm border-0 d-flex flex-column">
                                        <h4 className="fw-bold">Dedicated Engineer</h4>
                                        <p className="text-muted small">Best for targeted bandwidth gaps and specialized skillsets.</p>
                                        <ul className="check-list mt-3 mb-4 flex-grow-1 small">
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />1–2 dedicated engineers</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Embedded into your daily workflow</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Flexible monthly commitment</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Replacement guarantee</li>
                                        </ul>
                                        <Link href="/contact-us" className="btn btn-style-one w-100 text-center">Get Started</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="p-4 bg-gray rounded-4 h-100 shadow-sm border border-primary d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="fw-bold">Autonomous Squad</h4>
                                            <span className="badge bg-primary text-white">Popular</span>
                                        </div>
                                        <p className="text-muted small">A full multi-disciplinary team ready to take ownership of a workstream.</p>
                                        <ul className="check-list mt-3 mb-4 flex-grow-1 small">
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />3–8 engineers + Tech Lead</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Structured delivery cadence</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Cross-functional (AI, Frontend, Backend, QA)</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Monthly milestone billing</li>
                                        </ul>
                                        <Link href="/contact-us" className="btn btn-style-one w-100 text-center">Scale a Squad</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="p-4 bg-gray rounded-4 h-100 shadow-sm border-0 d-flex flex-column">
                                        <h4 className="fw-bold">Contract-to-Hire</h4>
                                        <p className="text-muted small">Evaluate top engineering talent before transitioning them to full-time employees.</p>
                                        <ul className="check-list mt-3 mb-4 flex-grow-1 small">
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />1+ senior engineers</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />3–6 month evaluation period</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Seamless permanent conversion path</li>
                                            <li className="mb-2"><i className="fas fa-check text-primary me-2" />Zero recruiting hassle</li>
                                        </ul>
                                        <Link href="/contact-us" className="btn btn-style-one w-100 text-center">Explore C2H</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Bar */}
                        <div className="p-5 bg-dark text-light rounded-4 text-center shadow-lg">
                            <h3 className="text-white fw-bold mb-3">Ready to Accelerate Your Engineering Roadmap?</h3>
                            <p className="text-light-50 mb-4 mx-auto" style={{ maxWidth: "650px" }}>
                                Tell us about the roles you need. Receive a curated shortlist of pre-vetted engineers within 48 hours.
                            </p>
                            <Link href="/contact-us" className="btn btn-style-one">
                                Request Engineers Now <i className="fas fa-arrow-right ms-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </LayoutV1>
        </div>
    );
}
