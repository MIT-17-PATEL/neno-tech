import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { serviceCategories } from "@/data/nenoData";

const category = serviceCategories.find(c => c.slug === 'engineer-on-demand')!;

export default function EngineerOnDemandPage() {
    return (
        <LayoutV1>
            <BreadCrumb title="Engineer on Demand" breadCrumb="Services / Engineer on Demand" />
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <h2 className="title">{category.title}</h2>
                                <p className="lead">{category.overview}</p>
                                
                                <h3 className="mt-40">Precision Engineering Roles</h3>
                                <div className="row mt-20">
                                    {category.children.map(eng => (
                                        <div className="col-md-6 mb-30" key={eng.slug}>
                                            <div className="card h-100 p-4 border-0 bg-gray shadow-sm rounded-4">
                                                <h4>{eng.title}</h4>
                                                <p>{eng.description}</p>
                                                <div className="mt-auto pt-2">
                                                    <strong>Technologies:</strong>
                                                    <div className="d-flex flex-wrap gap-1 mt-2">
                                                        {eng.technologies?.map(t => (
                                                            <span className="badge bg-dark text-light p-2" key={t}>{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="mt-40">Key Benefits</h3>
                                <ul className="check-list mt-20">
                                    {category.benefits.map(b => (
                                        <li key={b} className="mb-2"><i className="fas fa-check-circle text-success me-2" />{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar bg-gray p-4 rounded-4">
                                <h4>Need Custom Talent?</h4>
                                <p>Get a curated shortlist of engineers within 48 hours matched precisely to your technical stack and team culture.</p>
                                <Link href="/contact-us" className="btn btn-style-one w-100 mt-20">
                                    Request Engineers <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
}
