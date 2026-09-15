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
                        <div className="col-xl-3 col-lg-4 col-md-12">
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

                                {/* Social Links & Startup India Badge Actions Row */}
                                <div className="neno-footer-actions-row">
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
                                                    href="https://www.facebook.com/tirth.patel.152216/"
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
                        </div>

                        {/* Right Section: Navigation Columns */}
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="neno-footer-nav-grid">
                                {/* Column 1: Hire */}
                                <div className="neno-footer-col">
                                    <h4 className="neno-footer-heading">Hire</h4>
                                    <ul className="neno-footer-links">
                                        <li>
                                            <Link href="/hire-engineers">Hire Engineers</Link>
                                        </li>
                                        <li>
                                            <Link href="/hire-engineers/forward-deployed-engineer">Forward Deployed Engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="/hire-engineers/ai-agentic-ai-engineer">AI / Agentic AI Engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="/hire-engineers/claude-llm-engineer">Claude & LLM Engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="/hire-engineers/full-stack-backend-engineer">Full Stack / Backend Engineer</Link>
                                        </li>
                                        <li>
                                            <Link href="/hire-engineers/security-engineer">Security Engineer</Link>
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
                                            <Link href="/services/agentic-ai-development">Agentic AI Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/ai-product-development">AI Product Development</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/vibe-coding-squads">Vibe Coding Squads</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/ai-gtm">AI GTM</Link>
                                        </li>
                                        <li>
                                            <Link href="/services/llm-fine-tuning-deployment">LLM Fine-Tuning & Deployment</Link>
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

                                {/* Column 4: Our Offices */}
                                <div className="neno-footer-col neno-footer-col-offices">
                                    <h4 className="neno-footer-heading">Our Offices</h4>
                                    <div className="neno-footer-offices-list">
                                        <div className="neno-footer-office-item">
                                            <h5 className="neno-office-city">Gandhinagar (HQ)</h5>
                                            <p className="neno-office-address">
                                                13th Floor, GIFT Tower One, GIFT City, Gandhinagar, Gujarat
                                            </p>
                                        </div>
                                        <div className="neno-footer-office-item">
                                            <h5 className="neno-office-city">Mumbai</h5>
                                            <p className="neno-office-address">
                                                Mathuradas Mill Compound, Peninsula Spenta, 1, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013
                                            </p>
                                        </div>
                                        <div className="neno-footer-office-item">
                                            <h5 className="neno-office-city">Ahmedabad</h5>
                                            <p className="neno-office-address">
                                                Opp. The National Higher Secondary School, Bhuyangdev, Sola Rd, Nr. Parshwanath Jain Mandir, Vardhmannagar Society, C.P. Nagar-1, Ahmedabad, Gujarat 380063
                                            </p>
                                        </div>
                                    </div>
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
