import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { serviceCategories } from "@/data/nenoData";

const category = serviceCategories.find(c => c.slug === 'products')!;

export default function ProductsPage() {
    return (
        <LayoutV1>
            <BreadCrumb title="Proprietary Products" breadCrumb="Services / Products" />
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-heading text-center mb-50">
                                <h4 className="sub-title">Software Solutions</h4>
                                <h2 className="title">Purpose-Built Software Products</h2>
                                <p className="mt-20">{category.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {category.children.map(prod => (
                            <div className="col-lg-6 mb-40" key={prod.slug}>
                                <div className="p-5 border-0 bg-gray rounded-4 shadow-sm h-100">
                                    <h3>{prod.title}</h3>
                                    <p className="lead text-muted">{prod.description}</p>
                                    <p>{prod.overview}</p>
                                    <h5 className="mt-3">Capabilities</h5>
                                    <ul>
                                        {prod.capabilities?.map(c => (
                                            <li key={c}>• {c}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <strong>Tech Stack:</strong>
                                        <div className="d-flex flex-wrap gap-1 mt-2">
                                            {prod.technologies?.map(t => (
                                                <span className="badge bg-dark text-light p-2" key={t}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-30">
                                        <Link href="/contact-us" className="btn btn-style-one border-dark">
                                            Request Demo <i className="fas fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
}
