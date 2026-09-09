import { Metadata } from "next";
import Link from "next/link";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
    title: "Neno Products | AI Products for Modern Business Workflows",
    description: "Explore the Neno product suite — Neno Voice AI Agents, Neno Dialer, Neno CRM, and Neno ERP. Practical software connecting AI directly to your business workflows.",
};

const products = [
    {
        name: "Neno Voice",
        fullName: "Neno Voice — AI Voice Agents",
        tagline: "Voice agents that handle real conversations at scale. Inbound support, outbound follow-up, lead qualification and appointment booking — in natural language, in your customers' language.",
        supportingLabel: "AI Voice Agents",
        tag: "VOICE AI PLATFORM",
        featured: true,
        icon: "fas fa-microphone-alt",
        capabilities: [
            "Multilingual, including Indian languages",
            "Connects to your CRM, calendar and helpdesk",
            "Full call transcripts, recordings and analytics",
            "Human handoff when the agent should step back",
        ],
        ctaText: "Book a Neno Voice demo",
        ctaHref: "/contact-us?intent=neno-voice",
        detailHref: "/products/neno-voice",
    },
    {
        name: "Neno Dialer",
        fullName: "Neno Dialer",
        tagline: "An intelligent dialing platform for teams that run on outbound. Campaign management, smart routing, live agent assist and complete call analytics — with AI voice agents available on the same stack.",
        supportingLabel: "Intelligent Outbound Platform",
        tag: "OUTBOUND PLATFORM",
        featured: false,
        icon: "fas fa-phone-volume",
        capabilities: [
            "Campaign management",
            "Smart routing",
            "Live agent assist",
            "Complete call analytics",
            "AI voice agents on the same stack",
        ],
        ctaText: "See Neno Dialer",
        ctaHref: "/products/neno-dialer",
        detailHref: "/products/neno-dialer",
    },
    {
        name: "Neno CRM",
        fullName: "Neno CRM",
        tagline: "A CRM with AI built into the workflow, not bolted on. Automatic lead scoring, conversation summaries, next-best-action suggestions and pipeline forecasting.",
        supportingLabel: "AI-Powered CRM",
        tag: "AI-NATIVE CRM",
        featured: false,
        icon: "fas fa-users",
        capabilities: [
            "Automatic lead scoring",
            "Conversation summaries",
            "Next-best-action suggestions",
            "Pipeline forecasting",
            "AI-assisted sales workflows",
        ],
        ctaText: "See Neno CRM",
        ctaHref: "/products/neno-crm",
        detailHref: "/products/neno-crm",
    },
    {
        name: "Neno ERP",
        fullName: "Neno ERP",
        tagline: "Operations, inventory, finance and reporting in one system — configured to how your business actually runs, with AI-assisted reporting and anomaly detection.",
        supportingLabel: "AI-Powered ERP",
        tag: "ENTERPRISE ERP",
        featured: false,
        icon: "fas fa-layer-group",
        capabilities: [
            "Operations management",
            "Inventory",
            "Finance",
            "Reporting",
            "AI-assisted reporting",
            "Anomaly detection",
        ],
        ctaText: "See Neno ERP",
        ctaHref: "/products/neno-erp",
        detailHref: "/products/neno-erp",
    },
];

const ecosystemSteps = [
    {
        step: "01",
        name: "Neno Voice",
        role: "Conversations & Inbound/Outbound",
        desc: "Captures, qualifies, and books meetings autonomously in natural spoken language 24/7.",
        icon: "fas fa-microphone-alt",
        href: "/products/neno-voice",
    },
    {
        step: "02",
        name: "Neno Dialer",
        role: "High-Velocity Outreach",
        desc: "Powers sales teams with smart routing, parallel dialing, and live in-call AI coaching.",
        icon: "fas fa-phone-volume",
        href: "/products/neno-dialer",
    },
    {
        step: "03",
        name: "Neno CRM",
        role: "Revenue Intelligence",
        desc: "Aggregates pipeline signals, automatically scores deals, and suggests next actions.",
        icon: "fas fa-users",
        href: "/products/neno-crm",
    },
    {
        step: "04",
        name: "Neno ERP",
        role: "Operations & Fulfillment",
        desc: "Connects finance, inventory, and operations with real-time anomaly detection.",
        icon: "fas fa-layer-group",
        href: "/products/neno-erp",
    },
];

const capabilities = [
    {
        title: "Voice",
        desc: "Customer conversations handled naturally by AI voice agents.",
        icon: "fas fa-microphone-alt",
    },
    {
        title: "Sales",
        desc: "Smarter lead qualification, follow-up, routing and pipeline intelligence.",
        icon: "fas fa-chart-line",
    },
    {
        title: "Operations",
        desc: "Connected workflows across inventory, finance and business operations.",
        icon: "fas fa-cogs",
    },
    {
        title: "Intelligence",
        desc: "AI-generated summaries, recommendations, forecasting and anomaly detection.",
        icon: "fas fa-brain",
    },
    {
        title: "Integrations",
        desc: "Connect CRM, calendars, helpdesks and existing business systems.",
        icon: "fas fa-plug",
    },
    {
        title: "Human + AI",
        desc: "AI handles repetitive work while humans step in when judgment or escalation is required.",
        icon: "fas fa-user-shield",
    },
];

const securityFeatures = [
    { title: "Role-based access", desc: "Granular permission controls per user & team", icon: "fas fa-user-lock" },
    { title: "Encryption in transit & at rest", desc: "TLS 1.3 & AES-256 encrypted storage", icon: "fas fa-lock" },
    { title: "Audit logs", desc: "Comprehensive event & access trail tracking", icon: "fas fa-clipboard-check" },
    { title: "Private cloud", desc: "Dedicated VPC isolation on AWS / GCP", icon: "fas fa-cloud" },
    { title: "On-premise deployment", desc: "Self-hosted air-gapped options for compliance", icon: "fas fa-server" },
];

export default function ProductsPage() {
    return (
        <div className="include-breadcrumb" id="products-page">
            <LayoutV1>
                <main>
                    {/* 1. PRODUCTS HERO */}
                    <section className="container products-hero text-center">
                        <span className="products-pill">NENO PRODUCTS</span>
                        <h1 className="products-hero-title">
                            AI products built for the way your business works.
                        </h1>
                        <p className="products-hero-subtext">
                            From voice agents and intelligent sales systems to AI-powered CRM and ERP platforms, Neno builds practical software that connects AI directly to your business workflows.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                            <Link href="/contact-us?intent=products" className="btn btn-style-one products-btn-primary">
                                Book a Demo <i className="fas fa-arrow-right ms-2" />
                            </Link>
                            <Link href="#product-showcase" className="btn products-btn-secondary">
                                Explore Products <i className="fas fa-arrow-down ms-2" />
                            </Link>
                        </div>
                    </section>

                    {/* 2. PRODUCT SHOWCASE */}
                    <section className="products-section products-subtle" id="product-showcase">
                        <div className="container">
                            <div className="products-heading text-center mx-auto">
                                <span>PRODUCT SHOWCASE</span>
                                <h2>Practical software engineered for business impact.</h2>
                                <p>
                                    Discover our standalone and integrated product platforms built to automate workflows, accelerate sales, and unify operations.
                                </p>
                            </div>

                            <div className="row g-4 mt-3">
                                {products.map((prod) => (
                                    <div className="col-lg-6 col-md-6" key={prod.name}>
                                        <article className={`product-card h-100 d-flex flex-column ${prod.featured ? "product-card-featured" : ""}`}>
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="product-icon">
                                                    <i className={prod.icon} />
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="product-supporting-label">{prod.supportingLabel}</span>
                                                    <span className="product-tag">{prod.tag}</span>
                                                </div>
                                            </div>

                                            <h3 className="product-title">{prod.fullName}</h3>
                                            <p className="product-desc flex-grow-1">{prod.tagline}</p>

                                            <div className="product-capabilities-box">
                                                <h4 className="capabilities-label">Key Capabilities</h4>
                                                <ul className="capabilities-list">
                                                    {prod.capabilities.map((cap) => (
                                                        <li key={cap}>
                                                            <i className="fas fa-check-circle" />
                                                            <span>{cap}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="product-actions mt-auto d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3">
                                                <Link href={prod.ctaHref} className="btn btn-style-one product-btn">
                                                    {prod.ctaText} <i className="fas fa-arrow-right ms-2" />
                                                </Link>
                                                <Link href={prod.detailHref} className="product-detail-link">
                                                    Learn more <i className="fas fa-chevron-right ms-1" />
                                                </Link>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. PRODUCT ECOSYSTEM / CONNECTION VISUAL */}
                    <section className="products-section" id="ecosystem">
                        <div className="container">
                            <div className="products-heading text-center mx-auto">
                                <span>ECOSYSTEM WORKFLOW</span>
                                <h2>How Neno products connect together.</h2>
                                <p>
                                    Neno Voice, Dialer, CRM, and ERP can operate independently or combine into an end-to-end operational fabric.
                                </p>
                            </div>

                            <div className="ecosystem-flow mt-5">
                                {ecosystemSteps.map((item, idx) => (
                                    <div className="ecosystem-step" key={item.name}>
                                        <div className="ecosystem-step-badge">Step {item.step}</div>
                                        <div className="ecosystem-card">
                                            <div className="ecosystem-icon mb-2">
                                                <i className={item.icon} />
                                            </div>
                                            <h4 className="ecosystem-title">{item.name}</h4>
                                            <span className="ecosystem-role">{item.role}</span>
                                            <p className="ecosystem-desc">{item.desc}</p>
                                            <Link href={item.href} className="ecosystem-link">
                                                Explore <i className="fas fa-arrow-right ms-1" />
                                            </Link>
                                        </div>
                                        {idx < ecosystemSteps.length - 1 && (
                                            <div className="ecosystem-connector">
                                                <i className="fas fa-arrow-right d-none d-lg-inline-block" />
                                                <i className="fas fa-arrow-down d-inline-block d-lg-none" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. PRODUCT CAPABILITIES */}
                    <section className="products-section products-subtle" id="capabilities">
                        <div className="container">
                            <div className="products-heading text-center mx-auto">
                                <span>PRODUCT CAPABILITIES</span>
                                <h2>One connected product ecosystem.</h2>
                                <p>
                                    Neno products are designed to work independently or together, giving teams a connected layer across customer conversations, sales, operations and business intelligence.
                                </p>
                            </div>

                            <div className="row g-4 mt-4">
                                {capabilities.map((cap) => (
                                    <div className="col-lg-4 col-md-6" key={cap.title}>
                                        <div className="capability-card h-100">
                                            <div className="capability-icon mb-3">
                                                <i className={cap.icon} />
                                            </div>
                                            <h3 className="capability-title">{cap.title}</h3>
                                            <p className="capability-desc mb-0">{cap.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5. SECURITY STRIP */}
                    <section className="products-section" id="security">
                        <div className="container">
                            <div className="security-box p-4 p-md-5 rounded-4">
                                <div className="text-center mx-auto" style={{ maxWidth: "700px" }}>
                                    <span className="security-pill">ENTERPRISE TRUST</span>
                                    <h2 className="security-title">Your data stays yours.</h2>
                                    <p className="security-copy">
                                        Role-based access, encryption in transit and at rest, audit logs, and on-premise or private-cloud deployment where you need it.
                                    </p>
                                </div>

                                <div className="row g-3 mt-4 pt-2">
                                    {securityFeatures.map((sec) => (
                                        <div className="col-lg col-md-4 col-sm-6" key={sec.title}>
                                            <div className="security-item text-center h-100 p-3 rounded-3">
                                                <div className="security-icon mb-2">
                                                    <i className={sec.icon} />
                                                </div>
                                                <h4 className="security-item-title mb-1">{sec.title}</h4>
                                                <p className="security-item-desc mb-0">{sec.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. FINAL CTA */}
                    <section className="container products-cta-wrap">
                        <div className="products-cta-banner text-center">
                            <span className="products-pill">NENO PRODUCTS</span>
                            <h2 className="products-cta-title">
                                See what Neno can automate for your business.
                            </h2>
                            <p className="products-cta-subtext">
                                Tell us where the bottleneck is. We'll show you which Neno product — or combination of products — fits.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                                <Link
                                    href="/contact-us?intent=products"
                                    className="btn btn-style-one products-btn-primary"
                                >
                                    Talk to Neno <i className="fas fa-arrow-right ms-2" />
                                </Link>
                                <Link
                                    href="#product-showcase"
                                    className="btn products-btn-secondary"
                                >
                                    Explore all products
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </LayoutV1>

            <style>{`
                #products-page {
                    --ink: #0f172a;
                    --muted: #64748b;
                    --indigo: #4f46e5;
                    --soft: #eef2ff;
                    --border: #e2e8f0;
                    --card-bg: #ffffff;
                }

                /* Hero Section */
                .products-hero {
                    max-width: 920px;
                    padding: 130px 16px 72px;
                }
                .products-pill, .products-heading > span, .security-pill {
                    color: var(--indigo);
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.6px;
                }
                .products-pill, .security-pill {
                    background: var(--soft);
                    border: 1px solid #c0d8ff;
                    border-radius: 999px;
                    padding: 6px 18px;
                    margin-bottom: 16px;
                }
                .products-hero-title {
                    color: var(--ink);
                    font-size: clamp(2.35rem, 4.5vw, 3.6rem);
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    line-height: 1.15;
                    margin: 16px 0 18px;
                }
                .products-hero-subtext {
                    color: var(--muted);
                    font-size: 1.15rem;
                    line-height: 1.7;
                    margin: 0 auto;
                    max-width: 720px;
                }

                /* Buttons */
                .products-btn-primary, .products-btn-secondary {
                    border-radius: 10px;
                    font-weight: 600;
                    padding: 13px 24px;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }
                .products-btn-primary {
                    background: var(--indigo);
                    border: 1px solid var(--indigo);
                    color: #fff;
                }
                .products-btn-primary:hover {
                    background: #4338ca;
                    border-color: #4338ca;
                    color: #fff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(79,70,229,0.25);
                }
                .products-btn-secondary {
                    background: #fff;
                    border: 1px solid var(--border);
                    color: var(--ink);
                }
                .products-btn-secondary:hover {
                    border-color: #c0d8ff;
                    color: var(--indigo);
                    background: #f8fafc;
                    transform: translateY(-1px);
                }

                /* Sections */
                .products-section {
                    padding: 84px 0;
                }
                .products-subtle {
                    background: #f8fafc;
                }
                .products-heading {
                    max-width: 720px;
                }
                .products-heading > span {
                    margin-bottom: 12px;
                }
                .products-heading h2 {
                    color: var(--ink);
                    font-size: clamp(1.8rem, 3.2vw, 2.5rem);
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    line-height: 1.2;
                    margin: 0;
                }
                .products-heading p {
                    color: var(--muted);
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 14px auto 0;
                }

                /* Product Cards */
                .product-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 18px;
                    padding: 32px;
                    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
                }
                .product-card:hover {
                    border-color: #c0d8ff;
                    box-shadow: 0 14px 36px rgba(79, 70, 229, 0.09);
                    transform: translateY(-4px);
                }
                .product-card-featured {
                    border-color: #c0d8ff;
                    box-shadow: 0 4px 20px rgba(79, 70, 229, 0.05);
                }
                .product-icon {
                    align-items: center;
                    background: var(--soft);
                    border-radius: 12px;
                    color: var(--indigo);
                    display: flex;
                    font-size: 20px;
                    height: 48px;
                    justify-content: center;
                    width: 48px;
                    flex-shrink: 0;
                }
                .product-supporting-label {
                    background: #f8fafc;
                    color: var(--indigo);
                    border: 1px solid #c0d8ff;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 3px 8px;
                    border-radius: 6px;
                }
                .product-tag {
                    background: #f1f5f9;
                    color: #475569;
                    font-size: 10.5px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    padding: 4px 8px;
                    border-radius: 6px;
                }
                .product-title {
                    color: var(--ink);
                    font-size: 1.35rem;
                    font-weight: 700;
                    line-height: 1.35;
                    margin: 10px 0 10px;
                }
                .product-desc {
                    color: var(--muted);
                    font-size: 14.5px;
                    line-height: 1.65;
                    margin-bottom: 20px;
                }
                .product-capabilities-box {
                    background: #f8fafc;
                    border: 1px solid #edf2f7;
                    border-radius: 12px;
                    padding: 16px 18px;
                    margin-bottom: 20px;
                }
                .capabilities-label {
                    color: var(--ink);
                    font-size: 12.5px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 10px;
                }
                .capabilities-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .capabilities-list li {
                    display: flex;
                    align-items: flex-start;
                    font-size: 13.5px;
                    color: #334155;
                    line-height: 1.5;
                }
                .capabilities-list li i {
                    color: var(--indigo);
                    margin-top: 3px;
                    margin-right: 8px;
                    font-size: 13px;
                    flex-shrink: 0;
                }
                .product-btn {
                    background: var(--indigo);
                    border: 1px solid var(--indigo);
                    color: #fff;
                    font-size: 13.5px;
                    padding: 10px 18px;
                    border-radius: 8px;
                    font-weight: 600;
                }
                .product-btn:hover {
                    color: #fff;
                }
                .product-detail-link {
                    color: var(--indigo);
                    font-size: 13.5px;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                }
                .product-detail-link:hover {
                    text-decoration: underline;
                }

                /* Ecosystem Flow */
                .ecosystem-flow {
                    display: flex;
                    align-items: stretch;
                    justify-content: center;
                    gap: 12px;
                    position: relative;
                }
                .ecosystem-step {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex: 1;
                    min-width: 0;
                }
                .ecosystem-step-badge {
                    display: none;
                }
                .ecosystem-card {
                    background: #ffffff;
                    border: 1px solid var(--border);
                    border-radius: 14px;
                    padding: 20px 18px;
                    flex: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.2s ease;
                }
                .ecosystem-card:hover {
                    border-color: #c0d8ff;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(79, 70, 229, 0.08);
                }
                .ecosystem-icon {
                    color: var(--indigo);
                    font-size: 18px;
                }
                .ecosystem-title {
                    color: var(--ink);
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 2px;
                }
                .ecosystem-role {
                    color: var(--indigo);
                    font-size: 11.5px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    display: block;
                }
                .ecosystem-desc {
                    color: var(--muted);
                    font-size: 13px;
                    line-height: 1.5;
                    margin-bottom: 12px;
                    flex-grow: 1;
                }
                .ecosystem-link {
                    color: var(--indigo);
                    font-size: 12.5px;
                    font-weight: 600;
                    text-decoration: none;
                    margin-top: auto;
                }
                .ecosystem-connector {
                    color: #94a3b8;
                    font-size: 16px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Capabilities Grid */
                .capability-card {
                    background: #ffffff;
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 26px;
                    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }
                .capability-card:hover {
                    border-color: #c0d8ff;
                    box-shadow: 0 10px 28px rgba(79, 70, 229, 0.06);
                    transform: translateY(-3px);
                }
                .capability-icon {
                    align-items: center;
                    background: var(--soft);
                    border-radius: 10px;
                    color: var(--indigo);
                    display: flex;
                    font-size: 18px;
                    height: 42px;
                    justify-content: center;
                    width: 42px;
                }
                .capability-title {
                    color: var(--ink);
                    font-size: 17px;
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                .capability-desc {
                    color: var(--muted);
                    font-size: 14px;
                    line-height: 1.6;
                }

                /* Security Strip */
                .security-box {
                    background: #ffffff;
                    border: 1px solid #c0d8ff;
                    box-shadow: 0 6px 28px rgba(79, 70, 229, 0.04);
                }
                .security-title {
                    color: var(--ink);
                    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
                    font-weight: 700;
                    margin: 12px 0 10px;
                }
                .security-copy {
                    color: var(--muted);
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 0 auto;
                }
                .security-item {
                    background: #f8fafc;
                    border: 1px solid #eef2f6;
                    transition: all 0.2s ease;
                }
                .security-item:hover {
                    border-color: #c0d8ff;
                    background: #ffffff;
                    transform: translateY(-2px);
                }
                .security-icon {
                    color: var(--indigo);
                    font-size: 18px;
                }
                .security-item-title {
                    color: var(--ink);
                    font-size: 13.5px;
                    font-weight: 700;
                }
                .security-item-desc {
                    color: var(--muted);
                    font-size: 12px;
                    line-height: 1.45;
                }

                /* Final CTA Banner */
                .products-cta-wrap {
                    padding: 0 16px 88px;
                }
                .products-cta-banner {
                    background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
                    border: 1px solid #c0d8ff;
                    border-radius: 20px;
                    padding: 64px 32px;
                }
                .products-cta-title {
                    color: var(--ink);
                    font-size: clamp(1.8rem, 3.2vw, 2.6rem);
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    line-height: 1.2;
                    margin: 16px 0 12px;
                }
                .products-cta-subtext {
                    color: var(--muted);
                    font-size: 16px;
                    line-height: 1.7;
                    margin: 0 auto 24px;
                    max-width: 620px;
                }

                /* Responsive Breakpoints */
                @media (max-width: 991.98px) {
                    .products-section {
                        padding: 68px 0;
                    }
                    .ecosystem-flow {
                        flex-direction: column;
                        max-width: 600px;
                        margin: 0 auto;
                        gap: 16px;
                    }
                    .ecosystem-step {
                        flex-direction: column;
                        width: 100%;
                    }
                    .ecosystem-card {
                        width: 100%;
                    }
                    .ecosystem-connector {
                        padding: 4px 0;
                    }
                }

                @media (max-width: 767.98px) {
                    .products-hero {
                        padding: 100px 16px 52px;
                    }
                    .products-hero-title {
                        font-size: 2.1rem;
                    }
                    .products-hero-subtext {
                        font-size: 1rem;
                    }
                    .products-btn-primary, .products-btn-secondary {
                        width: 100%;
                    }
                    .products-section {
                        padding: 52px 0;
                    }
                    .product-card {
                        padding: 24px;
                    }
                    .product-title {
                        font-size: 1.25rem;
                    }
                    .products-cta-wrap {
                        padding-bottom: 60px;
                    }
                    .products-cta-banner {
                        padding: 44px 20px;
                    }
                }
            `}</style>
        </div>
    );
}
