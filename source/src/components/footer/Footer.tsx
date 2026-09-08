import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
    sectionClass?: string;
}

const Footer: React.FC<FooterProps> = ({ sectionClass = "" }) => {
    return (
        <footer className={`neno-site-footer ${sectionClass}`}>
            {/* Ambient Background Glow Effect */}
            <div className="neno-footer-ambient-glow" aria-hidden="true" />

            <div className="container">
                {/* Main Footer Section */}
                <div className="neno-footer-main">
                    <div className="row g-4 justify-content-between">
                        {/* Left Column: Brand & Company Info */}
                        <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="neno-footer-brand-block">
                                <Link href="/" className="neno-footer-logo-link" aria-label="Neno Technology Home">
                                    <img
                                        src="/assets/img/logo-white.png"
                                        alt="Neno Technology"
                                        className="neno-footer-logo-img"
                                    />
                                </Link>
                                
                                <p className="neno-footer-desc">
                                    Neno Technology is an Agentic AI engineering company. We give you the engineers, 
                                    the systems, and the strategy to put AI into production.
                                </p>

                                {/* Social Links */}
                                <div className="neno-footer-social-wrap">
                                    <ul className="neno-footer-social-list">
                                        <li>
                                            <a 
                                                href="https://www.linkedin.com/in/tirth-patel-nenotechnology/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                                className="neno-social-btn"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://x.com/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                aria-label="X (Twitter)"
                                                className="neno-social-btn"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.instagram.com/tirthpatel00/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                aria-label="Instagram"
                                                className="neno-social-btn"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.facebook.com/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                                className="neno-social-btn"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Startup India Badge */}
                                <div className="neno-footer-badge-wrap">
                                    <span className="neno-badge-label">Recognized by</span>
                                    <div className="neno-badge-img-container">
                                        <Image
                                            src="/assets/img/badges/startup-india.png"
                                            alt="Startup India"
                                            width={140}
                                            height={36}
                                            className="neno-startup-badge"
                                            style={{ objectFit: 'contain', width: 'auto', height: '32px' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Navigation Columns */}
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="neno-footer-nav-grid">
                                {/* Column 1: Hire */}
                                <div className="neno-footer-col">
                                    <h4 className="neno-footer-heading">Hire</h4>
                                    <ul className="neno-footer-links">
                                        <li>
                                            <Link href="/engineer-on-demand">Engineers On Demand</Link>
                                        </li>
                                        <li>
                                            <Link href="/engineer-on-demand">AI / ML Engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="/engineer-on-demand">Full Stack Engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="/engineer-on-demand">Data Engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="/engineer-on-demand">Security Engineer</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2: Services */}
                                <div className="neno-footer-col">
                                    <h4 className="neno-footer-heading">Services</h4>
                                    <ul className="neno-footer-links">
                                        <li>
                                            <Link href="/services">All Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/products">AI Products</Link>
                                        </li>
                                        <li>
                                            <Link href="/consulting">Consulting</Link>
                                        </li>
                                        <li>
                                            <Link href="/training">Training</Link>
                                        </li>
                                        <li>
                                            <Link href="/engineer-on-demand">Engineers On Demand</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 3: Company */}
                                <div className="neno-footer-col">
                                    <h4 className="neno-footer-heading">Company</h4>
                                    <ul className="neno-footer-links">
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
                                            <Link href="/careers">Careers</Link>
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

                {/* Bottom Footer Section */}
                <div className="neno-footer-bottom">
                    <div className="neno-footer-bottom-inner">
                        <div className="neno-footer-copyright">
                            <p>© {new Date().getFullYear()} Neno Technology</p>
                        </div>
                        <div className="neno-footer-legal-links">
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <span className="neno-legal-divider" aria-hidden="true">|</span>
                            <Link href="/terms">Terms</Link>
                            <span className="neno-legal-divider" aria-hidden="true">|</span>
                            <Link href="/contact-us">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
