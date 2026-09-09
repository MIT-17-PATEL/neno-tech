import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { serviceCategories } from "@/data/nenoData";

const category = serviceCategories.find(c => c.slug === 'training')!;

export default function TrainingPage() {
    return (
        <div className="include-breadcrumb">
            <LayoutV1>
                <BreadCrumb title="Training & Education" breadCrumb="Services / Training" />
                <div className="services-details-area default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 style={{ color: "#ffffff" }}>{category.title}</h2>
                                <p className="lead" style={{ color: "#94a3b8" }}>{category.overview}</p>

                                <h3 className="mt-40" style={{ color: "#ffffff" }}>Programs & Education Services</h3>
                                <div className="row mt-20">
                                    {category.children.map(item => (
                                        <div className="col-md-6 mb-30" key={item.slug}>
                                            <div className="p-4 rounded-4 h-100" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}>
                                                <h4 style={{ color: "#ffffff" }}>{item.title}</h4>
                                                <p style={{ color: "#cbd5e1" }}>{item.description}</p>
                                                <p className="small text-muted" style={{ color: "#94a3b8" }}>{item.overview}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.035)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(16px)" }}>
                                    <h4 style={{ color: "#ffffff" }}>Upskill Your Team</h4>
                                    <p style={{ color: "#94a3b8" }}>Custom curriculum and practitioner-led bootcamps tailored to your team's technical stack and growth objectives.</p>
                                    <Link href="/contact-us" className="btn btn-style-one w-100 mt-20" style={{ background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)", border: "none", color: "#ffffff", borderRadius: "10px", fontWeight: "600" }}>
                                        Inquire About Training <i className="fas fa-arrow-right ms-2" />
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
