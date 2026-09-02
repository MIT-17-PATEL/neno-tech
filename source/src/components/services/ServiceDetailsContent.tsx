"use client"
import Image from "next/image";
import PriceV3Data from "@/assets/jsonData/price/PriceV3Data.json";
import SinglePriceV3 from "../price/SinglePriceV3";
import FaqV1Data from "@/assets/jsonData/faq/FaqV1Data.json";
import SingleFaqV1 from "../faq/SingleFaqV1";
import Link from "next/link";
import ServiceV8Data from "@/assets/jsonData/services/ServiceV8Data.json"
import { usePathname } from "next/navigation";

interface DataType {
    thumb: string;
    title: string;
}

const ServiceDetailsContent = ({ serviceInfo }: { serviceInfo: DataType }) => {
    const { thumb, title } = serviceInfo

    const pathname = usePathname(); // 🔥 get current URL

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-35 pl-md-15 pl-xs-15">
                                <h2 className="title">{title}</h2>
                                <p>
                                    We denounce with righteous indign nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology.
                                </p>
                                <div className="thumb mt-50">
                                    <Image src={`/assets/img/services/${thumb}`} alt="Thumb" width={1200} height={610} />
                                </div>
                                <div className="features mt-50 mt-xs-30">
                                    <h2 className="title">Included service features</h2>
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-12 col-md-6">
                                            <ul className="list-style-one">
                                                <li>Natural language processing</li>
                                                <li>Analyze and understand language</li>
                                                <li>Including text and speech</li>
                                                <li>Computer vision service</li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-7 col-lg-12 col-md-6 mt-xs-30">
                                            <p>
                                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-20 mt-xs-5">
                                    <h2 className="title">What we do?</h2>
                                    <p>
                                        Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.  pleasures have to be repudiated and annoyances accepted.
                                    </p>
                                </div>

                                <div className="pricing-items mt-60 mt-xs-30">
                                    <div className="heading">
                                        <h2 className="title">Affordable deals & prices</h2>
                                    </div>
                                    <div className="row">
                                        {PriceV3Data.map(plan =>
                                            <div className="col-xl-6 col-lg-12 col-md-6" key={plan.id}>
                                                <SinglePriceV3 plan={plan} />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="accordion-style-one-items mt-60 mt-xs-40">
                                    <div className="heading">
                                        <h2 className="title">AI queries? expert answer</h2>
                                    </div>
                                    <div className="accordion" id="faqAccordion">
                                        {FaqV1Data.map(faq =>
                                            <SingleFaqV1 faq={faq} key={faq.id} />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="service-sidebar-items">

                                    {/* Single Widget */}
                                    <div className="single-widget services-list-widget">
                                        <div className="content">
                                            <ul>
                                                {ServiceV8Data.map((list) => {
                                                    const isActive = pathname === `/services-details/${list.id}`;
                                                    return (
                                                        <li
                                                            key={list.id}
                                                            className={isActive ? "current-menu-item" : ""}
                                                        >
                                                            <Link href={`/services-details/${list.id}`}>
                                                                {list.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* End Single Widget */}
                                    <div className="single-widget bg-dark quick-contact-widget text-light"
                                        style={{ backgroundImage: 'url(/assets/img/shape/banner-3.jpg)' }}>
                                        <div className="content">
                                            <h3>Need Help?</h3>
                                            <p>
                                                Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.
                                            </p>
                                            <h4><a href="mailto:info@digital.com">info@digital.com</a></h4>
                                            <Link className="btn mt-10 btn btn-style-one" href="/contact-us">
                                                Contact Us <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;