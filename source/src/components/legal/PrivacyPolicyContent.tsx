import React from "react";
import Link from "next/link";

/* ==============================================================================
   TODO: Replace with finalized legal content reviewed by legal counsel
   This is professional placeholder content for Neno Technology's Privacy Policy.
============================================================================== */

const PrivacyPolicyContent: React.FC = () => {
    return (
        <div className="neno-legal-section py-120">
            <div className="container">
                <div className="neno-legal-container">
                    {/* Header */}
                    <div className="neno-legal-header text-center">
                        <div className="neno-legal-badge">Legal Documentation</div>
                        <h1 className="neno-legal-title">Privacy Policy</h1>
                        <p className="neno-legal-updated">
                            <i className="far fa-calendar-alt me-2" />
                            Last Updated: September 9, 2026
                        </p>
                    </div>

                    {/* Notice Disclaimer */}
                    <div className="neno-legal-notice">
                        <i className="fas fa-info-circle neno-legal-notice-icon" />
                        <div>
                            <strong>Notice:</strong> This Privacy Policy explains how Neno Technology collects, uses, and safeguards your personal information when you visit our website, engage our AI engineering and consulting services, or interact with our platforms.
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="neno-legal-body">
                        {/* 1. Introduction */}
                        <section className="neno-legal-block">
                            <h2>1. Introduction</h2>
                            <p>
                                Neno Technology (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates as an Agentic AI engineering company headquartered at GIFT City, Gandhinagar, Gujarat, India. We are dedicated to protecting your personal data and respecting your privacy rights.
                            </p>
                            <p>
                                This Privacy Policy describes our practices regarding information collected through our website (<Link href="/">https://nenotechnology.com</Link>), client portals, consultation forms, and during the provision of our AI development, forward-deployed engineering, and consulting services.
                            </p>
                        </section>

                        {/* 2. Information We Collect */}
                        <section className="neno-legal-block">
                            <h2>2. Information We Collect</h2>
                            <p>We may collect information about you in the following categories:</p>
                            
                            <h3>A. Personal Information You Provide</h3>
                            <ul>
                                <li><strong>Contact Data:</strong> Name, professional email address, phone number, company name, and job title when you submit contact forms, book discovery calls, or apply for open roles.</li>
                                <li><strong>Project & Inquiry Data:</strong> Technical requirements, project briefs, team specifications, and communication logs shared during scoping discussions.</li>
                                <li><strong>Employment & Candidate Data:</strong> Resumes, portfolios, work histories, and technical assessment outcomes if you apply to join our engineering squads.</li>
                            </ul>

                            <h3>B. Information Collected Automatically</h3>
                            <ul>
                                <li><strong>Device & Log Data:</strong> IP address, browser type and version, operating system, referring URLs, access dates and timestamps.</li>
                                <li><strong>Usage Analytics:</strong> Page navigation paths, time spent on specific pages, scroll depth, and interaction with UI components.</li>
                            </ul>
                        </section>

                        {/* 3. How We Use Your Information */}
                        <section className="neno-legal-block">
                            <h2>3. How We Use Your Information</h2>
                            <p>We utilize collected information for the following operational and business purposes:</p>
                            <ul>
                                <li>To deliver, maintain, and optimize our AI engineering, staff augmentation, and advisory services.</li>
                                <li>To respond to your inquiries, schedule discovery sessions, and provide customized engineering proposals.</li>
                                <li>To manage client engagements, project deliverables, billing, and administrative communication.</li>
                                <li>To evaluate candidates for technical squads and engineering positions.</li>
                                <li>To monitor website performance, enhance cybersecurity, and prevent fraudulent activity.</li>
                                <li>To comply with statutory and regulatory obligations.</li>
                            </ul>
                        </section>

                        {/* 4. Data Sharing & Third Parties */}
                        <section className="neno-legal-block">
                            <h2>4. Data Sharing & Third Parties</h2>
                            <p>
                                We do not sell, rent, or trade your personal information. We only disclose your data under the following circumstances:
                            </p>
                            <ul>
                                <li><strong>Service Providers:</strong> Trusted cloud infrastructure providers (e.g., AWS, GCP), analytics tools, communication platforms, and CRM systems operating under strict non-disclosure and data processing agreements.</li>
                                <li><strong>Enterprise Engagements:</strong> With your explicit consent, when deploying embedded engineers or collaborative teams within your infrastructure.</li>
                                <li><strong>Legal & Compliance Requirements:</strong> When mandated by court orders, applicable statutes, or law enforcement authorities.</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition, subject to standard confidentiality protections.</li>
                            </ul>
                        </section>

                        {/* 5. Data Security */}
                        <section className="neno-legal-block">
                            <h2>5. Data Security</h2>
                            <p>
                                We implement industry-grade administrative, technical, and physical safeguards designed to prevent unauthorized access, disclosure, alteration, or destruction of your information. These measures include encrypted data transmissions (HTTPS/TLS), role-based access controls, and regular infrastructure reviews.
                            </p>
                            <p>
                                While we employ best practices to protect your data, no internet transmission or electronic storage method can guarantee absolute security.
                            </p>
                        </section>

                        {/* 6. Cookies & Tracking Technologies */}
                        <section className="neno-legal-block">
                            <h2>6. Cookies & Tracking Technologies</h2>
                            <p>
                                Our website uses essential and performance cookies to remember user preferences, maintain session state, and aggregate anonymous traffic metrics. You may adjust your browser settings to reject cookies; however, certain site features may function with reduced capabilities.
                            </p>
                        </section>

                        {/* 7. Your Rights & Choices */}
                        <section className="neno-legal-block">
                            <h2>7. Your Rights & Choices</h2>
                            <p>Depending on your geographic jurisdiction, you may hold specific rights regarding your personal information, including:</p>
                            <ul>
                                <li><strong>Access:</strong> Request confirmation of whether we process your data and obtain a copy.</li>
                                <li><strong>Correction:</strong> Request rectification of inaccurate or incomplete personal records.</li>
                                <li><strong>Erasure:</strong> Request the deletion of your personal information where applicable by law.</li>
                                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time via the unsubscribe links in our emails.</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact our privacy team at <a href="mailto:privacy@nenotechnology.com">privacy@nenotechnology.com</a>.
                            </p>
                        </section>

                        {/* 8. Children&apos;s Privacy */}
                        <section className="neno-legal-block">
                            <h2>8. Children&apos;s Privacy</h2>
                            <p>
                                Our website and services are directed exclusively to commercial enterprises and professionals aged 18 and older. We do not knowingly collect personal data from individuals under 18 years of age.
                            </p>
                        </section>

                        {/* 9. Changes to This Policy */}
                        <section className="neno-legal-block">
                            <h2>9. Changes to This Policy</h2>
                            <p>
                                We reserve the right to revise this Privacy Policy periodically to reflect technological, operational, or legal developments. When changes occur, we will update the &ldquo;Last Updated&rdquo; date at the top of this document. Continued use of our website or services constitutes acknowledgment of the revised terms.
                            </p>
                        </section>

                        {/* 10. Contact Information */}
                        <section className="neno-legal-block">
                            <h2>10. Contact Information</h2>
                            <p>
                                If you have questions, feedback, or concerns regarding this Privacy Policy or our data handling practices, please contact us:
                            </p>
                            <div className="neno-legal-contact-card">
                                <h4>Neno Technology</h4>
                                <p><strong>Headquarters:</strong> 13th Floor, GIFT Tower One, GIFT City, Gandhinagar, Gujarat, India</p>
                                <p><strong>Email:</strong> <a href="mailto:privacy@nenotechnology.com">privacy@nenotechnology.com</a> / <a href="mailto:contact@nenotechnology.com">contact@nenotechnology.com</a></p>
                                <p><strong>General Inquiries:</strong> <Link href="/contact-us">Contact Us Page</Link></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyContent;
