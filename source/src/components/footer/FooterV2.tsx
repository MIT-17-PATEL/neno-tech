import Link from "next/link";
import SocialV2 from "../social/SocialV2";
import Image from "next/image";
import FooterNewsletter from "../form/FooterNewsletter";

const FooterV2 = () => {
    return (
        <>
            <footer className="footer-style-two bg-dark text-light">
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="f-item about">
                                    <div className="logo">
                                        <img src="/assets/img/logo-light.png" alt="Image Not Found" style={{ height: '70px', width: 'auto', objectFit: 'contain', transform: 'scale(2.5)', transformOrigin: 'left center' }} />
                                    </div>
                                    <div className="newsletter-style-one">
                                        <h4>Newsletter Subscribe</h4>
                                        <FooterNewsletter />
                                    </div>
                                    <ul className="footer-item-social">
                                        <SocialV2 />
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                                <h2 className="gradient-text">Prepare to be <br /> discover AI power</h2>
                                <div className="row">

                                    {/* Single Item */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="f-item link">
                                            <h4 className="widget-title">Company</h4>
                                            <ul>
                                                <li>
                                                    <Link href="/about-us">About</Link>
                                                </li>
                                                <li>
                                                    <Link href="/about-us-2">Expertise</Link>
                                                </li>
                                                <li>
                                                    <Link href="/about-us">Sustainability</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-with-sidebar">News & Media</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single Item */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="f-item link">
                                            <h4 className="widget-title">Services</h4>
                                            <ul>
                                                <li>
                                                    <Link href="/services-details/1">Machine Learning</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services-details/2">Chatbot</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services-details/3">Ai Development</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services-details/4">Data Science</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single Item */}
                                    <div className="col-lg-4">
                                        <div className="f-item contact">
                                            <h4 className="widget-title"> Contact</h4>
                                            <ul className="contact">
                                                <li>
                                                    <p>Phone Number</p>
                                                    <h4><a href="tel:+4733378901">+012-3455700</a></h4>
                                                </li>
                                                <li>
                                                    <p>Email</p>
                                                    <h4><a href="mailto:someone@example.com">info@robok.com</a></h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; <a href="https://themeforest.net/user/validthemes" target="_blank" rel="noopener noreferrer">validthemes</a> {(new Date().getFullYear())}. All Rights Reserved</p>
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

export default FooterV2;
