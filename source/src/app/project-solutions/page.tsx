import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { serviceCategories } from "@/data/nenoData";

const category = serviceCategories.find(c => c.slug === 'project-solutions')!;

export default function ProjectSolutionsPage() {
    return (
        <LayoutV1>
            <BreadCrumb title="On demand Project & Solution" breadCrumb="Services / Project Solutions" />
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>{category.title}</h2>
                            <p className="lead">{category.overview}</p>
                            
                            <h3 className="mt-40">Our Capabilities</h3>
                            <ul className="list-style-two mt-20">
                                {category.capabilities.map((cap, index) => (
                                    <li key={index}><i className="fas fa-check-circle text-primary"></i> {cap}</li>
                                ))}
                            </ul>
                            
                            <h3 className="mt-40">Key Benefits</h3>
                            <ul className="list-style-two mt-20">
                                {category.benefits.map((benefit, index) => (
                                    <li key={index}><i className="fas fa-check-circle text-primary"></i> {benefit}</li>
                                ))}
                            </ul>
                            
                            <h3 className="mt-40">Our Process</h3>
                            <ul className="list-style-two mt-20">
                                {category.process.map((step, index) => (
                                    <li key={index}><i className="fas fa-check-circle text-primary"></i> {step}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar bg-gray p-4 rounded-4">
                                <h4>Discuss Your Project</h4>
                                <p>Talk to our experts to get started on your customized project solution.</p>
                                <Link href="/contact-us" className="btn btn-style-one w-100 mt-20">
                                    Book a Call <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
}
