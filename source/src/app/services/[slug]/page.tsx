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
                                    <h1 className="title mb-3" style={{ fontSize: "2.4rem", fontWeight: "700" }}>{service.title}</h1>
                                    <p className="lead text-muted mb-4">{service.description}</p>
                                    
                                    <div className="p-4 bg-gray rounded-4 mb-40 border-0">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="fw-bold mb-0">Service Overview</h4>
                                            <span className="badge bg-primary text-white p-2">
                                                <i className="far fa-clock me-1" /> Typical Build: {service.typicalBuild}
                                            </span>
                                        </div>
                                        <p className="mb-0" style={{ lineHeight: "1.8" }}>{service.overview}</p>
                                    </div>

                                    {/* Capabilities */}
                                    <h3 className="mt-40 mb-20 fw-bold">Capabilities & Technical Scope</h3>
                                    <div className="row g-3 mb-40">
                                        {service.capabilities.map((cap, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div className="p-3 bg-gray rounded-3 h-100 d-flex align-items-start shadow-xs">
                                                    <i className="fas fa-check-circle text-primary mt-1 me-2 flex-shrink-0" />
                                                    <span>{cap}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Deliverables */}
                                    <h3 className="mt-40 mb-20 fw-bold">Key Project Deliverables</h3>
                                    <ul className="check-list mb-40">
                                        {service.deliverables.map((deliv, index) => (
                                            <li key={index} className="mb-3 d-flex align-items-center">
                                                <i className="fas fa-cube text-primary me-2" />
                                                <span>{deliv}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <h3 className="mt-40 mb-20 fw-bold">Technologies & Frameworks</h3>
                                    <div className="d-flex flex-wrap gap-2 mb-40">
                                        {service.technologies.map((tech) => (
                                            <span 
                                                className="badge bg-dark text-light px-3 py-2 fs-6 rounded-3" 
                                                key={tech}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* 5-Step Delivery Process */}
                                    <div className="p-4 bg-gray rounded-4 mb-40">
                                        <h4 className="fw-bold mb-3">Our 5-Step Delivery Process</h4>
                                        <div className="row g-3">
                                            <div className="col-md-4">
                                                <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                                    <span className="badge bg-primary text-white mb-2">Step 01</span>
                                                    <h6 className="fw-bold">Discovery Workshop</h6>
                                                    <p className="small text-muted mb-0">Outcome mapping, data scoping & written estimate.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                                    <span className="badge bg-primary text-white mb-2">Step 02</span>
                                                    <h6 className="fw-bold">Architecture & Design</h6>
                                                    <p className="small text-muted mb-0">System architecture, stack selection & fixed pricing.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                                    <span className="badge bg-primary text-white mb-2">Step 03</span>
                                                    <h6 className="fw-bold">Sprint Builds</h6>
                                                    <p className="small text-muted mb-0">Two-week agile sprints with live functioning demos.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                                    <span className="badge bg-primary text-white mb-2">Step 04</span>
                                                    <h6 className="fw-bold">Deploy & Harden</h6>
                                                    <p className="small text-muted mb-0">Production deployment, evaluation testing & security review.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <div className="p-3 bg-white rounded-3 shadow-xs h-100">
                                                    <span className="badge bg-primary text-white mb-2">Step 05</span>
                                                    <h6 className="fw-bold">Handover & SLA Run</h6>
                                                    <p className="small text-muted mb-0">Documentation, IP transfer & ongoing maintenance option.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-lg-4">
                                <div className="sidebar sticky-top" style={{ top: "100px" }}>
                                    {/* Start Project Card */}
                                    <div className="bg-gray p-4 rounded-4 shadow-sm mb-30">
                                        <h4 className="fw-bold mb-3">Ship Your AI System</h4>
                                        <p className="text-muted small">
                                            Speak directly with our technical leads to scope your requirement, review architectures, and get a fixed timeline.
                                        </p>
                                        <Link href="/contact-us" className="btn btn-style-one w-100 mt-20 text-center">
                                            Book Scoping Call <i className="fas fa-arrow-right ms-1" />
                                        </Link>
                                    </div>

                                    {/* All Services Navigation */}
                                    <div className="bg-gray p-4 rounded-4 shadow-sm">
                                        <h5 className="fw-bold mb-3">All Services</h5>
                                        <ul className="list-unstyled mb-0">
                                            {nenoServices.map((otherService) => (
                                                <li key={otherService.slug} className="mb-2">
                                                    <Link 
                                                        href={otherService.href}
                                                        className={`d-block p-2 rounded-2 small text-decoration-none ${
                                                            otherService.slug === service.slug 
                                                                ? 'bg-primary text-white fw-bold' 
                                                                : 'text-dark hover-primary'
                                                        }`}
                                                    >
                                                        <i className={`fas fa-chevron-right me-2 ${otherService.slug === service.slug ? 'text-white' : 'text-primary'}`} />
                                                        {otherService.title}
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
