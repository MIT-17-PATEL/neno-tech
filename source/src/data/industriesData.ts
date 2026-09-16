export interface IndustryItem {
    id: string;
    title: string;
    badge: string;
    icon: string;
    summary: string;
    challengeText: string;
    whatWeBuildTitle: string;
    whatWeBuild: string[];
    capabilities: string[];
    ctaText: string;
    ctaHref: string;
}

export const industriesData: IndustryItem[] = [
    {
        id: "manufacturing",
        title: "Manufacturing",
        badge: "INDUSTRY 01",
        icon: "fas fa-industry",
        summary: "Production planning, quality inspection, maintenance prediction, supply chain visibility, and AI agents for vendor and order coordination.",
        challengeText: "Unplanned machinery downtime, manual QA inspection bottlenecks, siloed inventory data, and friction in multi-tier supplier order management.",
        whatWeBuildTitle: "What We Build",
        whatWeBuild: [
            "AI-powered production scheduling & dynamic floor dispatch",
            "Computer vision pipelines for automated defect & quality inspection",
            "Predictive maintenance models with real-time IoT anomaly detection",
            "Supply chain visibility hubs & autonomous vendor coordination agents",
            "Automated purchase order parsing and inventory reconciliation"
        ],
        capabilities: [
            "Predictive Maintenance",
            "Computer Vision QA",
            "Supply Chain Agents",
            "Vendor Coordination"
        ],
        ctaText: "Explore Manufacturing Solutions",
        ctaHref: "/contact-us?industry=manufacturing"
    },
    {
        id: "bfsi-fintech",
        title: "BFSI & Fintech",
        badge: "INDUSTRY 02",
        icon: "fas fa-landmark",
        summary: "Document processing, KYC automation, risk analysis, customer service agents, and compliance-grade deployments.",
        challengeText: "High-latency loan underwriting, manual document parsing overhead, evolving AML regulatory scrutiny, and peak customer support volumes.",
        whatWeBuildTitle: "What We Build",
        whatWeBuild: [
            "Intelligent document processing (IDP) & unstructured statement OCR",
            "Autonomous KYC, AML and identity verification workflows",
            "Real-time fraud scoring & algorithmic risk assessment engines",
            "<200ms voice AI & chat agents for 24/7 financial support",
            "SOC2/ISO/HIPAA compliance-grade private VPC deployments"
        ],
        capabilities: [
            "KYC / AML Automation",
            "Document Processing",
            "Voice AI Underwriting",
            "Compliance-Grade VPC"
        ],
        ctaText: "Explore BFSI & Fintech Solutions",
        ctaHref: "/contact-us?industry=bfsi-fintech"
    },
    {
        id: "healthcare",
        title: "Healthcare",
        badge: "INDUSTRY 03",
        icon: "fas fa-heartbeat",
        summary: "Patient intake and follow-up voice agents, clinical documentation support, appointment operations.",
        challengeText: "Provider burnout from clinical note charting, high no-show rates, backlogged insurance pre-authorizations, and fragmented patient communication.",
        whatWeBuildTitle: "What We Build",
        whatWeBuild: [
            "Conversational voice AI for 24/7 patient intake & pre-visit triage",
            "Clinical ambient documentation & structured EHR summarization",
            "Automated appointment scheduling, confirmations & care follow-ups",
            "Medical insurance claims pre-check & adjudication swarms",
            "HIPAA-compliant, encrypted on-prem and private cloud pipelines"
        ],
        capabilities: [
            "Patient Voice Agents",
            "Clinical Note AI",
            "EHR Integration",
            "HIPAA Compliant"
        ],
        ctaText: "Explore Healthcare Solutions",
        ctaHref: "/contact-us?industry=healthcare"
    },
    {
        id: "retail-d2c",
        title: "Retail & D2C",
        badge: "INDUSTRY 04",
        icon: "fas fa-shopping-bag",
        summary: "Demand forecasting, customer service automation, catalogue intelligence, personalised outreach.",
        challengeText: "Stockouts and overstock margins, high customer ticket volumes during sales peaks, catalogue tagging inconsistencies, and cart abandonment.",
        whatWeBuildTitle: "What We Build",
        whatWeBuild: [
            "Deep learning SKU-level demand forecasting & dynamic inventory planning",
            "Autonomous 24/7 support agents for order tracking, exchanges & returns",
            "Automated catalogue metadata enrichment, visual search & SEO tagging",
            "Hyper-personalized outreach, predictive re-orders & lifecycle messaging",
            "Unified commerce analytics linking CRM, ERP, and storefront data"
        ],
        capabilities: [
            "Demand Forecasting",
            "Catalogue Intelligence",
            "Automated Returns",
            "Personalized Outreach"
        ],
        ctaText: "Explore Retail & D2C Solutions",
        ctaHref: "/contact-us?industry=retail-d2c"
    },
    {
        id: "it-services-agencies",
        title: "IT Services & Agencies",
        badge: "INDUSTRY 05",
        icon: "fas fa-laptop-code",
        summary: "Bench augmentation, white-label AI delivery, and AI capability your clients are already asking for.",
        challengeText: "Client demand for cutting-edge Agentic AI outstripping internal bench skills, slow delivery timelines, and risk of commoditized services.",
        whatWeBuildTitle: "What We Build",
        whatWeBuild: [
            "Embedded forward-deployed AI engineers & specialized engineering squads",
            "White-label AI platforms (Voice Agents, Custom LLMs, RAG & Multi-Agent)",
            "Rapid MVP-to-Production sprint delivery (working prototypes in 14 days)",
            "Pre-sales AI solution architecture & technical RFP support",
            "Full knowledge transfer & internal AI capability enablement"
        ],
        capabilities: [
            "Bench Augmentation",
            "White-Label Delivery",
            "14-Day MVP Sprints",
            "Pre-Sales AI Architects"
        ],
        ctaText: "Explore IT Services Solutions",
        ctaHref: "/contact-us?industry=it-services"
    }
];
