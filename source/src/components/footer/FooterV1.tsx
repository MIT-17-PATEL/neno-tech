import Image from "next/image";
import Link from "next/link";
import SocialV2 from "../social/SocialV2";

interface DataType {
    sectionClass?: string;
}

const FooterV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <footer className={`footer-style-one box-layout ${sectionClass ? sectionClass : ""}`}>
                <div className="footer-shape">
                    <Image src="/assets/img/shape/globe.png" alt="Image Not Found" width={750} height={160} />
                </div>
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Contact Us</h4>
                                    <p>
                                        San Francisco, CA & Global Engineering Hubs
                                    </p>
                                    <ul className="contact">
                                        <li>
                                            <p>Phone Number</p>
                                            <h4><a href="tel:+15550192834">+1 (555) 019-2834</a></h4>
                                        </li>
                                        <li>
                                            <p>Email</p>
                                            <h4><a href="mailto:contact@nenotech.com">contact@nenotech.com</a></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 offset-xl-1 col-lg-7">
                                <div className="footer-style-one-items">

                                    <div className="f-item link">
                                        <h4 className="widget-title">Company</h4>
                                        <ul>
                                            <li>
                                                <Link href="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/team">Leadership</Link>
                                            </li>
                                            <li>
                                                <Link href="/project">Case Studies</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="f-item link">
                                        <h4 className="widget-title">Services</h4>
                                        <ul>
                                            <li>
                                                <Link href="/services/engineer-on-demand">Engineer on Demand</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/products">Proprietary Products</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/consulting">Strategic Consulting</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/training">Training & Bootcamps</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="f-item link">
                                        <h4 className="widget-title">Products</h4>
                                        <ul>
                                            <li>
                                                <Link href="/services/products/crm">AI CRM</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/products/erp">Enterprise ERP</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/products/voice-ai">Voice AI</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/products/digital-products">Digital Products</Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Footer Bottom */}
                <div className="footer-bottom-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="logo">
                                        <Link href="/">
                                            <img src="/assets/img/logo-light.png" alt="Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain', transform: 'scale(2.5)', transformOrigin: 'left center' }} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <ul className="footer-item-social text-end">
                                        <SocialV2 />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; {(new Date().getFullYear())} Neno Technologies. All Rights Reserved</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link href="/about-us">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
