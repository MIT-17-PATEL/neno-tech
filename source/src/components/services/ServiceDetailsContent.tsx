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
                                    Neno Technology delivers comprehensive engineering and digital solutions tailored to your business needs. Our team combines deep technical expertise with industry best practices to deliver results that scale.
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
                                                Our services are built on proven methodologies and cutting-edge technologies. From AI-powered solutions to cloud-native architectures, we deliver scalable, secure, and maintainable software that drives measurable business outcomes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-20 mt-xs-5">
                                    <h2 className="title">What we offer</h2>
                                    <p>
                                        We provide end-to-end technology solutions including engineering talent, custom software development, strategic consulting, and training programs. Our solutions are designed to help businesses accelerate digital transformation and achieve sustainable growth through technology.
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
                                        <h2 className="title">Frequently asked questions</h2>
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
                                                Ready to discuss your project? Reach out to our team and we'll connect you with the right experts to help you achieve your technology goals.
                                            </p>
                                            <h4><a href="mailto:info@nenotechnology.com">info@nenotechnology.com</a></h4>
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
