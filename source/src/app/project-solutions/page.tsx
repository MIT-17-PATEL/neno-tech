import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { serviceCategories } from "@/data/nenoData";

const category = serviceCategories.find(c => c.slug === 'project-solutions')!;

export default function ProjectSolutionsPage() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="On demand Project & Solution" breadCrumb="Services / Project Solutions" />
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 style={{ color: "#ffffff" }}>{category.title}</h2>
                            <p className="lead" style={{ color: "#94a3b8" }}>{category.overview}</p>
                            
                            <h3 className="mt-40" style={{ color: "#ffffff" }}>Our Capabilities</h3>
                            <ul className="list-style-two mt-20 p-0" style={{ listStyle: "none" }}>
                                {category.capabilities.map((cap, index) => (
                                    <li key={index} className="mb-2 d-flex align-items-center" style={{ color: "#cbd5e1" }}><i className="fas fa-check-circle me-2" style={{ color: "#38bdf8" }}></i> {cap}</li>
                                ))}
                            </ul>
                            
                            <h3 className="mt-40" style={{ color: "#ffffff" }}>Key Benefits</h3>
                            <ul className="list-style-two mt-20 p-0" style={{ listStyle: "none" }}>
                                {category.benefits.map((benefit, index) => (
                                    <li key={index} className="mb-2 d-flex align-items-center" style={{ color: "#cbd5e1" }}><i className="fas fa-check-circle me-2" style={{ color: "#38bdf8" }}></i> {benefit}</li>
                                ))}
                            </ul>
                            
                            <h3 className="mt-40" style={{ color: "#ffffff" }}>Our Process</h3>
                            <ul className="list-style-two mt-20 p-0" style={{ listStyle: "none" }}>
                                {category.process.map((step, index) => (
                                    <li key={index} className="mb-2 d-flex align-items-center" style={{ color: "#cbd5e1" }}><i className="fas fa-check-circle me-2" style={{ color: "#38bdf8" }}></i> {step}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}>
                                <h4 style={{ color: "#ffffff" }}>Discuss Your Project</h4>
                                <p style={{ color: "#94a3b8" }}>Talk to our experts to get started on your customized project solution.</p>
                                <Link href="/contact-us" className="btn btn-style-one w-100 mt-20" style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}>
                                    Book a Call <i className="fas fa-arrow-right ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </LayoutV1>
        </div>
    );
}
