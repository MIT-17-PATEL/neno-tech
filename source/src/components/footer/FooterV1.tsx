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
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="f-item contact">
                                    <Link href="/" className="logo">
                                        <img src="/assets/img/logo-light.png" alt="Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain', transform: 'scale(2.5)', transformOrigin: 'left center' }} />
                                    </Link>
                                    <p>AI Neno Innovation Pvt. Ltd.</p>
                                    <p>B-508, 5th Floor, Tower B, GIFT City,<br/>Gandhinagar - 382355, Gujarat, India</p>
                                    <div className="badges">
                                        <Image src="/assets/img/badges/dpiit.svg" alt="DPIIT" width={80} height={60} />
                                        <Image src="/assets/img/badges/startup-india.svg" alt="Startup India" width={80} height={60} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 offset-xl-1 col-lg-7">
                                <div className="footer-style-one-items">

                                    <div className="f-item link">
                                        <h4 className="widget-title">Hire</h4>
                                        <ul>
                                            <li>
                                                <Link href="/services/engineer-on-demand">Engineers On Demand</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/engineer-on-demand">AI / ML Engineer</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/engineer-on-demand">Full Stack Engineer</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/engineer-on-demand">Data Engineer</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/engineer-on-demand">Security Engineer</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="f-item link">
                                        <h4 className="widget-title">Services</h4>
                                        <ul>
                                            <li>
                                                <Link href="/services">All Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/products">AI Products</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/consulting">Consulting</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/training">Training</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/engineer-on-demand">Engineers On Demand</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="f-item link">
                                        <h4 className="widget-title">Company</h4>
                                        <ul>
                                            <li>
                                                <Link href="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">Leadership</Link>
                                            </li>
                                            <li>
                                                <Link href="/project">Case Studies</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">Support</Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-bottom-inner">
                                    <div className="company-info">
                                        <p>
                                            <strong>AI Neno Innovation Pvt. Ltd.</strong>
                                            {" | "}B-508, 5th Floor, Tower B, GIFT City, Gandhinagar - 382355, Gujarat, India
                                        </p>
                                        <p>
                                            <a href="mailto:contact@nenotech.com">contact@nenotech.com</a>
                                            {" | "}
                                            <a href="tel:+919876543210">+91 98765 43210</a>
                                            {" | "}CIN: U72900GJ2025PTC150123
                                        </p>
                                    </div>
                                    <ul className="footer-item-social">
                                        <SocialV2 />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p>
                                    &copy; {(new Date().getFullYear())} Neno Technology &middot;{" "}
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                    {" · "}
                                    <Link href="/terms">Terms</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
