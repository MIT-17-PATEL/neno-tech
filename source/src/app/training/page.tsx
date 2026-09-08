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
                                <h2>{category.title}</h2>
                                <p className="lead">{category.overview}</p>

                                <h3 className="mt-40">Programs & Education Services</h3>
                                <div className="row mt-20">
                                    {category.children.map(item => (
                                        <div className="col-md-6 mb-30" key={item.slug}>
                                            <div className="p-4 bg-gray rounded-4 h-100 shadow-sm">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <p className="small text-muted">{item.overview}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar bg-gray p-4 rounded-4">
                                    <h4>Upskill Your Team</h4>
                                    <p>Custom curriculum and practitioner-led bootcamps tailored to your team's technical stack and growth objectives.</p>
                                    <Link href="/contact-us" className="btn btn-style-one w-100 mt-20">
                                        Inquire About Training <i className="fas fa-arrow-right" />
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
