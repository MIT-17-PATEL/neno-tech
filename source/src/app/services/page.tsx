import { Metadata } from "next";
import Link from "next/link";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
    title: "AI Engineering Services | Neno Technology",
    description: "End-to-end AI and software delivery — scoped, priced and built by a team that has done it before. Explore Agentic AI, AI Products, Vibe Coding Squads, AI GTM, LLM Fine-Tuning, and Application Modernization.",
};

const serviceCards = [
    {
        title: "Agentic AI Development",
        description: "Agents that do the work, not just answer questions. We build multi-step systems that use tools, call your APIs, handle failure, and stay observable in production.",
        badgeLabel: "Typical build:",
        badgeValue: "[4–12] weeks",
        href: "/services/agentic-ai-development",
        icon: "fas fa-robot",
        tag: "AUTONOMOUS AGENTS",
    },
    {
        title: "AI Product Development",
        description: "Take an AI product from idea to launch. Discovery, architecture, build, deploy, iterate — one accountable team.",
        badgeLabel: "Typical build:",
        badgeValue: "[8–16] weeks",
        href: "/services/ai-product-development",
        icon: "fas fa-cubes",
        tag: "END-TO-END PRODUCT",
    },
    {
        title: "Vibe Coding Squads",
        description: "An AI-native delivery squad that builds at a different speed. Engineers working with Claude and modern AI tooling as a core part of the workflow — with senior review and real engineering discipline on top, so speed never costs you quality.",
        badgeLabel: "Best for:",
        badgeValue: "MVPs, internal tools, rapid iteration",
        href: "/services/vibe-coding-squads",
        icon: "fas fa-bolt",
        tag: "HIGH-VELOCITY SQUAD",
    },
    {
        title: "AI GTM (Go-To-Market)",
        description: "AI applied to how you sell. Lead qualification agents, outbound systems, CRM intelligence, voice agents for follow-up, and pipeline analytics — built into your existing sales stack.",
        badgeLabel: "Best for:",
        badgeValue: "sales-led teams with volume",
        href: "/services/ai-gtm",
        icon: "fas fa-chart-line",
        tag: "REVENUE AUTOMATION",
    },
    {
        title: "LLM Fine-Tuning & Deployment",
        description: "When prompting isn't enough. Dataset preparation, fine-tuning, evaluation, and secure deployment — including private and on-premise setups for regulated data.",
        badgeLabel: "Best for:",
        badgeValue: "domain-specific accuracy, cost reduction, data-sensitive workloads",
        href: "/services/llm-fine-tuning-deployment",
        icon: "fas fa-brain",
        tag: "CUSTOM MODELS & PRIVACY",
    },
    {
        title: "Application Support & Modernization",
        description: "Keep what works, fix what doesn't, and bring AI to the rest. Support for existing applications, legacy modernization, and AI capability retrofitted into systems you already run.",
        badgeLabel: "Best for:",
        badgeValue: "teams with production systems and no bandwidth",
        href: "/services/application-support-modernization",
        icon: "fas fa-tools",
        tag: "SLA SUPPORT & REFACTORING",
    },
];

const deliverySteps = [
    {
        step: "01",
        title: "Discovery workshop",
        description: "We map the outcome, users, data and constraints. You get a written scope.",
        icon: "fas fa-compass",
    },
    {
        step: "02",
        title: "Architecture & estimate",
        description: "System design, stack decisions, timeline and fixed price. No surprises later.",
        icon: "fas fa-drafting-compass",
    },
    {
        step: "03",
        title: "Build in sprints",
        description: "Two-week sprints with a working demo at the end of each one.",
        icon: "fas fa-code-branch",
    },
    {
        step: "04",
        title: "Deploy & harden",
        description: "Production deployment, monitoring, evaluation and security review.",
        icon: "fas fa-shield-alt",
    },
    {
        step: "05",
        title: "Handover or run",
        description: "Full documentation and knowledge transfer — or we keep running it for you.",
        icon: "fas fa-check-circle",
    },
];

const techStackCategories = [
    {
        category: "LLMs",
        icon: "fas fa-brain",
        description: "Frontier and open weights models tailored for intelligence, cost, and low latency.",
        technologies: [
            { name: "Anthropic Claude 3.7 / 3.5", note: "Complex Reasoning" },
            { name: "OpenAI GPT-4o", note: "Multimodal & Speed" },
            { name: "Meta Llama 3.3", note: "Open Weights / Private" },
            { name: "Mistral Large / Codestral", note: "Code & Efficient Inference" },
            { name: "Google Gemini 2.0 / 1.5 Pro", note: "Long Context" },
        ],
    },
    {
        category: "AI / Agent Frameworks",
        icon: "fas fa-robot",
        description: "Orchestration, memory, guardrails, and deterministic tool-calling frameworks.",
        technologies: [
            { name: "LangGraph", note: "Stateful Agent Graphs" },
            { name: "LangChain & LlamaIndex", note: "RAG & Indexing" },
            { name: "CrewAI & AutoGen", note: "Multi-Agent Swarms" },
            { name: "Model Context Protocol (MCP)", note: "Standardized Tooling" },
            { name: "Semantic Kernel & DSPy", note: "Programmatic Prompting" },
        ],
    },
    {
        category: "Cloud",
        icon: "fas fa-cloud",
        description: "Enterprise-grade cloud infrastructure with high availability and compliance.",
        technologies: [
            { name: "AWS (Bedrock / SageMaker)", note: "Enterprise Cloud" },
            { name: "GCP Vertex AI", note: "AI Platform" },
            { name: "Cloudflare Workers / AI", note: "Edge Computing" },
            { name: "Vercel", note: "Frontend & Edge" },
            { name: "Microsoft Azure OpenAI", note: "Compliant VPC" },
        ],
    },
    {
        category: "Data / Databases",
        icon: "fas fa-database",
        description: "Low-latency vector storage, relational backends, and caching layers.",
        technologies: [
            { name: "PostgreSQL & pgvector", note: "Relational + Vectors" },
            { name: "Pinecone", note: "Serverless Vector Index" },
            { name: "Qdrant & Weaviate", note: "High-Scale Vectors" },
            { name: "Redis", note: "Session Memory & Caching" },
            { name: "Supabase / Prisma", note: "Data Access Layer" },
        ],
    },
    {
        category: "Infrastructure / DevOps",
        icon: "fas fa-server",
        description: "Production CI/CD, container orchestration, inference engines, and observability.",
        technologies: [
            { name: "Docker & Kubernetes", note: "Containerization" },
            { name: "Terraform", note: "Infrastructure as Code" },
            { name: "vLLM / TensorRT-LLM", note: "Fast GPU Serving" },
            { name: "Datadog / LangSmith", note: "Observability & Evals" },
            { name: "GitHub Actions", note: "Automated CI/CD" },
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="include-breadcrumb" id="services-page">
            <LayoutV1>
                <main>
                    {/* 1. HERO SECTION */}
                    <section className="container services-hero text-center">
                        <span className="services-pill">NENO SERVICES</span>
                        <h1 className="services-hero-title">
                            You describe the outcome. We ship the system.
                        </h1>
                        <p className="services-hero-subtext">
                            End-to-end AI and software delivery — scoped, priced and built by a team that has done it before.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                            <Link href="/contact-us?intent=services" className="btn btn-style-one services-btn-primary">
                                Book a Discovery Call <i className="fas fa-arrow-right ms-2" />
                            </Link>
                            <Link href="#services-grid" className="btn services-btn-secondary">
                                Explore Services <i className="fas fa-arrow-down ms-2" />
                            </Link>
                        </div>
                    </section>

                    {/* 2. 6 SERVICE CARDS (2x3 Grid on Desktop) */}
                    <section className="services-section services-subtle" id="services-grid">
                        <div className="container">
                            <div className="services-heading text-center mx-auto">
                                <span>WHAT WE DELIVER</span>
                                <h2>Engineered for production. Built to scale.</h2>
                                <p>
                                    Explore our six core engineering service pillars designed to take your AI initiatives from initial architecture to resilient production deployment.
                                </p>
                            </div>

                            <div className="row g-4 mt-2">
                                {serviceCards.map((service) => (
                                    <div className="col-lg-6 col-md-6" key={service.title}>
                                        <Link href={service.href} className="service-card-link text-decoration-none">
                                            <article className="service-card h-100 d-flex flex-column">
                                                <div className="d-flex align-items-start justify-content-between mb-3">
                                                    <div className="service-icon">
                                                        <i className={service.icon} />
                                                    </div>
                                                    <span className="service-tag">
                                                        {service.tag}
                                                    </span>
                                                </div>

                                                <h3 className="service-title">{service.title}</h3>
                                                <p className="service-description flex-grow-1">
                                                    {service.description}
                                                </p>

                                                <div className="service-meta-box">
                                                    <div className="service-badge-info">
                                                        <strong className="badge-label">{service.badgeLabel}</strong>
                                                        <span className="badge-value">{service.badgeValue}</span>
                                                    </div>
                                                </div>

                                                <div className="service-action">
                                                    <span>Explore service</span>
                                                    <i className="fas fa-arrow-right ms-2" />
                                                </div>
                                            </article>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. DELIVERY PROCESS (5-Step Timeline/Stepper) */}
                    <section className="services-section">
                        <div className="container">
                            <div className="services-heading text-center mx-auto">
                                <span>DELIVERY PROCESS</span>
                                <h2>From concept to production in five disciplined steps.</h2>
                                <p>
                                    Our battle-tested methodology eliminates guesswork, keeps pricing predictable, and guarantees tangible working software at every stage.
                                </p>
                            </div>

                            <div className="delivery-timeline mt-5">
                                {deliverySteps.map((stepItem, index) => (
                                    <article className="delivery-stage" key={stepItem.step}>
                                        <div className="delivery-stage-marker">
                                            <span className="delivery-stage-number">{stepItem.step}</span>
                                        </div>
                                        <div className="delivery-stage-content">
                                            <div className="delivery-stage-badge">
                                                Step {index + 1}
                                            </div>
                                            <h3 className="delivery-stage-title">{stepItem.title}</h3>
                                            <p className="delivery-stage-desc">{stepItem.description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. TECH STACK (Organized Technology Ecosystem) */}
                    <section className="services-section services-subtle" id="tech-stack">
                        <div className="container">
                            <div className="services-heading text-center mx-auto">
                                <span>TECHNOLOGY STACK</span>
                                <h2>Enterprise ecosystem & modern AI tooling.</h2>
                                <p>
                                    We select and architect with production-grade frameworks, foundation models, and cloud infrastructure engineered for low latency, maximum security, and high availability.
                                </p>
                            </div>

                            <div className="row g-4 mt-4">
                                {techStackCategories.map((group) => (
                                    <div className="col-lg-4 col-md-6" key={group.category}>
                                        <div className="tech-category-card h-100">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="tech-category-icon me-3">
                                                    <i className={group.icon} />
                                                </div>
                                                <div>
                                                    <h4 className="tech-category-title mb-0">{group.category}</h4>
                                                    <span className="tech-category-count">{group.technologies.length} Frameworks</span>
                                                </div>
                                            </div>
                                            <p className="tech-category-desc">{group.description}</p>
                                            <div className="tech-chips-list">
                                                {group.technologies.map((t) => (
                                                    <div className="tech-chip" key={t.name}>
                                                        <span className="tech-chip-name">{t.name}</span>
                                                        <span className="tech-chip-note">{t.note}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5. CTA BAND */}
                    <section className="container services-cta-wrap">
                        <div className="services-cta-banner text-center">
                            <span className="services-pill">NENO SERVICES</span>
                            <h2 className="services-cta-title">
                                You describe the outcome. We ship the system.
                            </h2>
                            <p className="services-cta-subtext">
                                Speak directly with our technical leads to scope your requirements, review architecture choices, and get a clear timeline and fixed price.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                                <Link
                                    href="/contact-us?intent=services"
                                    className="btn btn-style-one services-btn-primary"
                                >
                                    Book a Discovery Call <i className="fas fa-arrow-right ms-2" />
                                </Link>
                                <Link
                                    href="/hire-engineers"
                                    className="btn services-btn-secondary"
                                >
                                    Hire Engineers Instead
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </LayoutV1>

            <style>{`
                #services-page {
                    --ink: #0f172a;
                    --muted: #64748b;
                    --indigo: #4f46e5;
                    --soft: #eef2ff;
                    --border: #e2e8f0;
                    --card-bg: #ffffff;
                    --card-border: #e2e8f0;
                    --card-hover-border: #c0d8ff;
                }

                /* Hero Section */
                .services-hero {
                    max-width: 920px;
                    padding: 130px 16px 72px;
                }
                .services-pill, .services-heading > span {
                    color: var(--indigo);
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.6px;
                }
                .services-pill {
                    background: var(--soft);
                    border: 1px solid #c0d8ff;
                    border-radius: 999px;
                    padding: 6px 18px;
                    margin-bottom: 16px;
                }
                .services-hero-title {
                    color: var(--ink);
                    font-size: clamp(2.35rem, 4.5vw, 3.6rem);
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    line-height: 1.15;
                    margin: 16px 0 18px;
                }
                .services-hero-subtext {
                    color: var(--muted);
                    font-size: 1.15rem;
                    line-height: 1.7;
                    margin: 0 auto;
                    max-width: 680px;
                }

                /* Buttons */
                .services-btn-primary, .services-btn-secondary {
                    border-radius: 10px;
                    font-weight: 600;
                    padding: 13px 24px;
                    font-size: 15px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }
                .services-btn-primary {
                    background: var(--indigo);
                    border: 1px solid var(--indigo);
                    color: #fff;
                }
                .services-btn-primary:hover {
                    background: #4338ca;
                    border-color: #4338ca;
                    color: #fff;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(79,70,229,0.25);
                }
                .services-btn-secondary {
                    background: #fff;
                    border: 1px solid var(--border);
                    color: var(--ink);
                }
                .services-btn-secondary:hover {
                    border-color: #c0d8ff;
                    color: var(--indigo);
                    background: #f8fafc;
                    transform: translateY(-1px);
                }

                /* General Section Styles */
                .services-section {
                    padding: 84px 0;
                }
                .services-subtle {
                    background: #f8fafc;
                }
                .services-heading {
                    max-width: 720px;
                }
                .services-heading > span {
                    margin-bottom: 12px;
                }
                .services-heading h2 {
                    color: var(--ink);
                    font-size: clamp(1.8rem, 3.2vw, 2.5rem);
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    line-height: 1.2;
                    margin: 0;
                }
                .services-heading p {
                    color: var(--muted);
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 14px auto 0;
                }

                /* Service Cards - 2x3 Grid */
                .service-card-link {
                    color: inherit;
                    display: block;
                    height: 100%;
                }
                .service-card {
                    background: var(--card-bg);
                    border: 1px solid var(--card-border);
                    border-radius: 18px;
                    padding: 32px;
                    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
                    cursor: pointer;
                }
                .service-card-link:hover .service-card {
                    border-color: var(--card-hover-border);
                    box-shadow: 0 14px 36px rgba(79, 70, 229, 0.09);
                    transform: translateY(-4px);
                }
                .service-icon {
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
                .service-tag {
                    background: #f1f5f9;
                    color: #475569;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    padding: 4px 10px;
                    border-radius: 6px;
                }
                .service-title {
                    color: var(--ink);
                    font-size: 1.3rem;
                    font-weight: 700;
                    line-height: 1.35;
                    margin: 12px 0 10px;
                }
                .service-description {
                    color: var(--muted);
                    font-size: 14.5px;
                    line-height: 1.65;
                    margin-bottom: 20px;
                }
                .service-meta-box {
                    background: #f8fafc;
                    border: 1px solid #edf2f7;
                    border-radius: 10px;
                    padding: 12px 16px;
                    margin-bottom: 20px;
                }
                .service-badge-info {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: baseline;
                    gap: 6px;
                    font-size: 13.5px;
                    line-height: 1.5;
                }
                .badge-label {
                    color: var(--ink);
                    font-weight: 700;
                }
                .badge-value {
                    color: var(--indigo);
                    font-weight: 600;
                }
                .service-action {
                    border-top: 1px solid #f1f5f9;
                    color: var(--indigo);
                    font-size: 14px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    padding-top: 16px;
                    margin-top: auto;
                    transition: transform 0.2s ease;
                }
                .service-card-link:hover .service-action i {
                    transform: translateX(4px);
                    transition: transform 0.2s ease;
                }

                /* Delivery Process (Horizontal Desktop / Vertical Mobile Stepper) */
                .delivery-timeline {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 16px;
                    position: relative;
                }
                .delivery-timeline::before {
                    background: #c0d8ff;
                    content: "";
                    height: 2px;
                    left: 10%;
                    position: absolute;
                    right: 10%;
                    top: 24px;
                    z-index: 0;
                }
                .delivery-stage {
                    padding: 0 10px;
                    position: relative;
                    text-align: center;
                    z-index: 1;
                }
                .delivery-stage-marker {
                    margin-bottom: 20px;
                }
                .delivery-stage-number {
                    align-items: center;
                    background: var(--indigo);
                    border: 5px solid #ffffff;
                    box-shadow: 0 0 0 1px #c0d8ff;
                    border-radius: 50%;
                    color: #fff;
                    display: flex;
                    font-size: 13px;
                    font-weight: 700;
                    height: 48px;
                    justify-content: center;
                    margin: 0 auto;
                    width: 48px;
                }
                .delivery-stage-badge {
                    background: var(--soft);
                    color: var(--indigo);
                    font-size: 11px;
                    font-weight: 700;
                    display: inline-block;
                    padding: 2px 8px;
                    border-radius: 999px;
                    margin-bottom: 8px;
                    border: 1px solid #c0d8ff;
                }
                .delivery-stage-title {
                    color: var(--ink);
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.35;
                    margin: 0 0 8px;
                }
                .delivery-stage-desc {
                    color: var(--muted);
                    font-size: 13.5px;
                    line-height: 1.6;
                    margin: 0;
                }

                /* Tech Stack Cards & Grid */
                .tech-category-card {
                    background: #ffffff;
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 24px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                .tech-category-card:hover {
                    border-color: #c0d8ff;
                    box-shadow: 0 10px 28px rgba(79,70,229,0.06);
                }
                .tech-category-icon {
                    align-items: center;
                    background: var(--soft);
                    border-radius: 10px;
                    color: var(--indigo);
                    display: flex;
                    font-size: 18px;
                    height: 42px;
                    justify-content: center;
                    width: 42px;
                    flex-shrink: 0;
                }
                .tech-category-title {
                    color: var(--ink);
                    font-size: 17px;
                    font-weight: 700;
                }
                .tech-category-count {
                    color: var(--muted);
                    font-size: 12px;
                    font-weight: 600;
                }
                .tech-category-desc {
                    color: var(--muted);
                    font-size: 13.5px;
                    line-height: 1.55;
                    margin-bottom: 16px;
                }
                .tech-chips-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .tech-chip {
                    background: #f8fafc;
                    border: 1px solid #eef2f6;
                    border-radius: 8px;
                    padding: 8px 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;
                }
                .tech-chip-name {
                    color: var(--ink);
                    font-size: 13px;
                    font-weight: 600;
                }
                .tech-chip-note {
                    color: var(--indigo);
                    font-size: 11.5px;
                    font-weight: 600;
                    background: #ffffff;
                    padding: 2px 8px;
                    border-radius: 4px;
                    border: 1px solid #e2e8f0;
                    white-space: nowrap;
                }

                /* CTA Banner */
                .services-cta-wrap {
                    padding: 0 16px 88px;
                }
                .services-cta-banner {
                    background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
                    border: 1px solid #c0d8ff;
                    border-radius: 20px;
                    padding: 64px 32px;
                }
                .services-cta-title {
                    color: var(--ink);
                    font-size: clamp(1.8rem, 3.2vw, 2.6rem);
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    line-height: 1.2;
                    margin: 16px 0 12px;
                }
                .services-cta-subtext {
                    color: var(--muted);
                    font-size: 16px;
                    line-height: 1.7;
                    margin: 0 auto 24px;
                    max-width: 620px;
                }

                /* Responsive Breakpoints */
                @media (max-width: 991.98px) {
                    .services-section {
                        padding: 68px 0;
                    }
                    .delivery-timeline {
                        grid-template-columns: 1fr;
                        gap: 0;
                        max-width: 620px;
                        margin: 0 auto;
                    }
                    .delivery-timeline::before {
                        bottom: 24px;
                        height: auto;
                        left: 24px;
                        right: auto;
                        top: 24px;
                        width: 2px;
                    }
                    .delivery-stage {
                        align-items: flex-start;
                        display: flex;
                        padding: 0 0 32px;
                        text-align: left;
                    }
                    .delivery-stage:last-child {
                        padding-bottom: 0;
                    }
                    .delivery-stage-marker {
                        flex: 0 0 48px;
                        margin: 0 20px 0 0;
                    }
                    .delivery-stage-number {
                        margin: 0;
                    }
                }

                @media (max-width: 767.98px) {
                    .services-hero {
                        padding: 100px 16px 52px;
                    }
                    .services-hero-title {
                        font-size: 2.1rem;
                    }
                    .services-hero-subtext {
                        font-size: 1rem;
                    }
                    .services-btn-primary, .services-btn-secondary {
                        width: 100%;
                    }
                    .services-section {
                        padding: 52px 0;
                    }
                    .service-card {
                        padding: 24px;
                    }
                    .service-title {
                        font-size: 1.2rem;
                    }
                    .services-cta-wrap {
                        padding-bottom: 60px;
                    }
                    .services-cta-banner {
                        padding: 44px 20px;
                    }
                }
            `}</style>
        </div>
    );
}
