import React from "react";
import Link from "next/link";

/* ==============================================================================
   TODO: Replace with finalized legal content reviewed by legal counsel
   This is professional placeholder content for Neno Technology's Terms of Service.
============================================================================== */

const TermsContent: React.FC = () => {
    return (
        <div className="neno-legal-section py-120">
            <div className="container">
                <div className="neno-legal-container">
                    {/* Header */}
                    <div className="neno-legal-header text-center">
                        <div className="neno-legal-badge">Legal Documentation</div>
                        <h1 className="neno-legal-title">Terms of Service</h1>
                        <p className="neno-legal-updated">
                            <i className="far fa-calendar-alt me-2" />
                            Last Updated: September 9, 2026
                        </p>
                    </div>

                    {/* Notice Disclaimer */}
                    <div className="neno-legal-notice">
                        <i className="fas fa-info-circle neno-legal-notice-icon" />
                        <div>
                            <strong>Notice:</strong> Please read these Terms of Service carefully before utilizing Neno Technology&apos;s website or engaging our AI engineering, staff augmentation, and consulting services.
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="neno-legal-body">
                        {/* 1. Acceptance of Terms */}
                        <section className="neno-legal-block">
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing our website (<Link href="/">https://nenotechnology.com</Link>), submitting an inquiry, or entering into a Master Services Agreement (MSA) or Statement of Work (SOW) with Neno Technology (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) agree to be bound by these Terms of Service and our Privacy Policy.
                            </p>
                            <p>
                                If you are agreeing on behalf of an enterprise or other legal entity, you represent and warrant that you possess full authority to bind that entity to these Terms.
                            </p>
                        </section>

                        {/* 2. Description of Services */}
                        <section className="neno-legal-block">
                            <h2>2. Description of Services</h2>
                            <p>
                                Neno Technology delivers high-velocity Agentic AI engineering, software development, and technical consulting solutions, including without limitation:
                            </p>
                            <ul>
                                <li><strong>AI & Agentic Engineering:</strong> Custom LLM development, LangGraph and multi-agent workflow systems, RAG architecture, and inference optimization.</li>
                                <li><strong>Hire Engineers / Staff Augmentation:</strong> Deployment of vetted Forward Deployed Engineers (FDE), Claude/LLM engineers, AI engineers, and full-stack squads embedded directly into client workflows.</li>
                                <li><strong>Consulting & Solutions:</strong> AI roadmapping, architecture blueprints, security audits, evaluation benchmarks, and enterprise integrations.</li>
                            </ul>
                            <p>
                                Specific service scopes, timelines, deliverables, and fees are governed by mutually executed Statements of Work (SOW) or engagement contracts.
                            </p>
                        </section>

                        {/* 3. User & Client Responsibilities */}
                        <section className="neno-legal-block">
                            <h2>3. User & Client Responsibilities</h2>
                            <p>When using our website or contracting our engineering services, you agree to:</p>
                            <ul>
                                <li>Provide accurate, complete, and timely information, documentation, and technical access required for project execution.</li>
                                <li>Refrain from using our systems or deliverables for unlawful, fraudulent, or harmful purposes, including the generation of malicious code or non-compliant content.</li>
                                <li>Maintain confidentiality regarding any proprietary methodologies, non-public technical frameworks, or pricing details disclosed by Neno Technology.</li>
                                <li>Ensure that all data, datasets, and intellectual property shared with our teams comply with applicable data protection regulations.</li>
                            </ul>
                        </section>

                        {/* 4. Intellectual Property */}
                        <section className="neno-legal-block">
                            <h2>4. Intellectual Property Rights</h2>
                            <p>
                                <strong>Client Deliverables:</strong> Unless otherwise specified in an executed SOW, upon full payment of all contractual fees, the Client owns the custom code, models, and deliverables specifically created for the Client under that agreement.
                            </p>
                            <p>
                                <strong>Neno Technology Pre-Existing IP:</strong> Neno Technology retains all rights, title, and interest in its pre-existing frameworks, proprietary libraries, toolsets, know-how, and generic components developed independently of the client engagement.
                            </p>
                            <p>
                                <strong>Website Content:</strong> All trademarks, logos, visual assets, text, and design elements displayed on this website remain the sole intellectual property of Neno Technology.
                            </p>
                        </section>

                        {/* 5. Payment & Refund Terms */}
                        <section className="neno-legal-block">
                            <h2>5. Payment & Refund Terms</h2>
                            <ul>
                                <li><strong>Invoicing:</strong> Fees for engineering squads, dedicated engineers, or milestone-based projects are invoiced in accordance with the payment schedule detailed in the relevant SOW.</li>
                                <li><strong>Payment Terms:</strong> Invoices are payable within the net timeframe specified on each invoice (typically Net 15 or Net 30) via approved electronic transfer or wire methods.</li>
                                <li><strong>Retainers & Deposits:</strong> Initial onboarding retainers and milestone deposits are non-refundable once engineering sprints commence, except as expressly provided in a formal agreement.</li>
                                <li><strong>Disputes:</strong> Any invoice disputes must be communicated in writing within 10 business days of invoice receipt.</li>
                            </ul>
                        </section>

                        {/* 6. Limitation of Liability */}
                        <section className="neno-legal-block">
                            <h2>6. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by applicable law, in no event shall Neno Technology, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, goodwill, or business interruption) arising out of or related to your use of our website or services.
                            </p>
                            <p>
                                Our total aggregate liability under any claim arising from these Terms or our services shall not exceed the total fees paid by you to Neno Technology in the three (3) months preceding the incident giving rise to liability.
                            </p>
                        </section>

                        {/* 7. Termination */}
                        <section className="neno-legal-block">
                            <h2>7. Termination</h2>
                            <p>
                                Either party may terminate an ongoing services engagement in accordance with the notice provisions set forth in the applicable Statement of Work (typically requiring written notice).
                            </p>
                            <p>
                                We reserve the right to suspend or terminate access to our website or services immediately if we reasonably determine that you have violated these Terms or engaged in unauthorized or unlawful conduct.
                            </p>
                        </section>

                        {/* 8. Governing Law & Jurisdiction */}
                        <section className="neno-legal-block">
                            <h2>8. Governing Law & Dispute Resolution</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the substantive laws of India, without regard to its conflict of law principles.
                            </p>
                            <p>
                                Any legal action, suit, or proceeding arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the competent courts located in Gandhinagar / Ahmedabad, Gujarat, India.
                            </p>
                        </section>

                        {/* 9. Changes to Terms */}
                        <section className="neno-legal-block">
                            <h2>9. Modifications to Terms</h2>
                            <p>
                                We may update or modify these Terms of Service from time to time. Updated versions will be published on this page with an updated &ldquo;Last Updated&rdquo; date. Continued interaction with our website or engagement of our services following revisions constitutes full acceptance of the modified Terms.
                            </p>
                        </section>

                        {/* 10. Contact Information */}
                        <section className="neno-legal-block">
                            <h2>10. Contact Information</h2>
                            <p>
                                For questions, legal inquiries, or formal notices regarding these Terms of Service, please contact:
                            </p>
                            <div className="neno-legal-contact-card">
                                <h4>Neno Technology Legal Department</h4>
                                <p><strong>Headquarters:</strong> 13th Floor, GIFT Tower One, GIFT City, Gandhinagar, Gujarat, India</p>
                                <p><strong>Email:</strong> <a href="mailto:legal@nenotechnology.com">legal@nenotechnology.com</a> / <a href="mailto:contact@nenotechnology.com">contact@nenotechnology.com</a></p>
                                <p><strong>General Inquiries:</strong> <Link href="/contact-us">Contact Us Page</Link></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsContent;
