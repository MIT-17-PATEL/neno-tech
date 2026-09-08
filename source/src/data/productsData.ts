export interface ProductItem {
    slug: string;
    title: string;
    pillBadge: string;
    shortTitle: string;
    tagline: string;
    description: string;
    overview: string;
    category: string;
    features: string[];
    highlights: {
        icon: string;
        label: string;
        value: string;
    }[];
    useCases: string[];
    benefits: string[];
    integrations: string[];
    process: {
        step: string;
        title: string;
        desc: string;
    }[];
    href: string;
}

export const productItems: ProductItem[] = [
    {
        slug: "neno-voice",
        title: "Neno Voice — Voice AI Agents",
        pillBadge: "NENO VOICE",
        shortTitle: "Neno Voice",
        tagline: "Autonomous Voice AI Agents That Work 24/7",
        description: "Deploy intelligent voice AI agents that handle inbound and outbound calls with human-like conversation — qualifying leads, booking appointments, and resolving support queries around the clock.",
        overview: "Neno Voice is Neno Technology's enterprise voice AI platform — a production-grade system that deploys autonomous conversational agents capable of handling real telephone calls with human-like fluency. Powered by advanced LLMs with real-time speech synthesis, Neno Voice agents can qualify inbound leads, conduct outbound prospecting campaigns, schedule appointments, handle tier-1 support calls, and escalate complex queries to human agents seamlessly. Built for high-volume enterprise workloads with sub-200ms voice latency.",
        category: "Voice AI Platform",
        features: [
            "Real-time voice synthesis with <200ms latency for natural conversations",
            "Multi-turn dialogue management with contextual memory across the call",
            "Inbound & outbound call handling with configurable agent personas",
            "Live call transfer to human agents with full context handoff",
            "Custom knowledge base integration for domain-specific Q&A",
            "Post-call transcription, sentiment analysis & CRM logging",
            "Multi-language support: English, Spanish, French, German & more",
            "HIPAA & SOC2-compliant call recording and data handling"
        ],
        highlights: [
            { icon: "fas fa-bolt", label: "Voice Latency", value: "<200ms" },
            { icon: "fas fa-phone-alt", label: "Concurrent Calls", value: "Unlimited" },
            { icon: "fas fa-globe", label: "Languages", value: "12+" },
            { icon: "fas fa-clock", label: "Availability", value: "24/7/365" }
        ],
        useCases: [
            "High-volume inbound lead qualification for sales teams",
            "Automated appointment scheduling and reminder calls",
            "Tier-1 customer support triage and FAQ resolution",
            "Outbound prospecting campaigns for B2B sales development"
        ],
        benefits: [
            "Handle 1000s of concurrent calls without additional headcount",
            "Consistent, on-brand conversation quality across every call",
            "Reduce cost-per-interaction by 70–85% vs. live agent teams",
            "24/7 coverage eliminating after-hours missed opportunities"
        ],
        integrations: [
            "Twilio / Vonage / Bandwidth (telephony)",
            "Salesforce / HubSpot / Neno CRM",
            "Google Calendar / Calendly (scheduling)",
            "Zendesk / Freshdesk (support ticketing)",
            "Slack / Teams (escalation alerts)",
            "AWS / GCP (cloud infrastructure)",
            "Anthropic Claude / OpenAI (LLM backbone)",
            "ElevenLabs / Cartesia (voice synthesis)"
        ],
        process: [
            { step: "01", title: "Agent Configuration", desc: "Define your agent's persona, knowledge base, conversation flows, escalation triggers, and CRM integration mappings." },
            { step: "02", title: "Telephony Integration", desc: "Connect your existing phone numbers or provision new DID numbers. Configure inbound routing rules and outbound campaign lists." },
            { step: "03", title: "Testing & Quality Assurance", desc: "Run comprehensive test calls across all dialogue branches, edge cases, and escalation scenarios before going live." },
            { step: "04", title: "Go Live & Monitor", desc: "Launch the agent with real-time call monitoring dashboard, sentiment analytics, and continuous conversation quality improvement." }
        ],
        href: "/products/neno-voice"
    },
    {
        slug: "neno-dialer",
        title: "Neno Dialer",
        pillBadge: "NENO DIALER",
        shortTitle: "Neno Dialer",
        tagline: "AI-Powered Power Dialer for High-Velocity Sales Teams",
        description: "A high-velocity sales dialer that combines AI-powered conversation intelligence, automated voicemail drops, local presence, and real-time coaching to help sales reps connect more and sell faster.",
        overview: "Neno Dialer is an enterprise-grade outbound calling platform engineered for sales teams that live on the phone. It eliminates the friction of manual dialing with parallel power dialing, instantly routes connected calls to available reps, drops pre-recorded voicemails automatically, and provides real-time AI coaching overlays that surface objection-handling scripts and competitor battlecards mid-call — all integrated directly with your CRM.",
        category: "Sales Dialer Platform",
        features: [
            "Parallel power dialing: call 3–10 lines simultaneously per rep",
            "AI voicemail drop: one-click pre-recorded voicemail insertion",
            "Local presence dialing: match caller ID area code to prospect location",
            "Real-time AI coaching: live objection scripts & battlecard overlays",
            "Automatic call recording with AI-generated call summaries & action items",
            "CRM sync: auto-log calls, notes, and next steps to Salesforce / HubSpot",
            "Conversation intelligence: talk/listen ratio, keyword alerts & sentiment tracking",
            "Built-in compliance: DNC registry scrubbing & TCPA compliance tools"
        ],
        highlights: [
            { icon: "fas fa-tachometer-alt", label: "Dials Per Hour", value: "300+" },
            { icon: "fas fa-chart-line", label: "Connect Rate Lift", value: "3–5x" },
            { icon: "fas fa-microphone-alt", label: "Call Recording", value: "100%" },
            { icon: "fas fa-shield-alt", label: "Compliance", value: "TCPA / DNC" }
        ],
        useCases: [
            "SDR teams running high-volume cold outreach campaigns",
            "Account executives managing follow-up and re-engagement sequences",
            "Sales managers monitoring team performance and coaching live calls",
            "Revenue operations teams optimizing connect rates and pipeline velocity"
        ],
        benefits: [
            "3–5x increase in daily conversations per sales rep",
            "Reduce admin time with automatic CRM logging and call summaries",
            "Faster rep ramp-up with real-time AI coaching and battlecard overlays",
            "Full conversation intelligence for data-driven sales coaching and QA"
        ],
        integrations: [
            "Salesforce / HubSpot / Neno CRM",
            "Outreach / Salesloft / Apollo",
            "Slack / Teams (real-time alerts)",
            "Gong / Chorus (conversation intelligence sync)",
            "ZoomInfo / Apollo / Clay (prospect data)",
            "Twilio (telephony infrastructure)",
            "Google Workspace / Microsoft 365",
            "Zapier / Make (custom automation)"
        ],
        process: [
            { step: "01", title: "Team Onboarding", desc: "Connect your CRM, import prospect lists, configure call dispositions, and set up rep seats with role-based permissions." },
            { step: "02", title: "Campaign Configuration", desc: "Define dialing campaigns with call scripts, voicemail templates, local presence settings, and DNC compliance filters." },
            { step: "03", title: "AI Coaching Setup", desc: "Upload competitor battlecards, objection-handling frameworks, and product positioning for real-time coaching overlays." },
            { step: "04", title: "Launch & Optimize", desc: "Go live with full call recording, real-time dashboards, and weekly conversation intelligence reports for continuous improvement." }
        ],
        href: "/products/neno-dialer"
    },
    {
        slug: "neno-crm",
        title: "Neno CRM",
        pillBadge: "NENO CRM",
        shortTitle: "Neno CRM",
        tagline: "AI-Native CRM Built for Modern Revenue Teams",
        description: "An AI-native customer relationship management platform that automates contact enrichment, pipeline forecasting, deal scoring, and follow-up sequences — so your team focuses on selling, not data entry.",
        overview: "Neno CRM is purpose-built for AI-first revenue teams who are tired of fighting legacy CRM complexity. It combines automatic contact and company enrichment, AI-powered deal health scoring, intelligent pipeline forecasting, and one-click follow-up sequence generation — eliminating the manual CRM administration overhead that kills sales velocity. Neno CRM connects natively with Neno Voice and Neno Dialer for a unified revenue platform.",
        category: "AI-Native CRM",
        features: [
            "AI contact & company enrichment: auto-populate firmographics from email or domain",
            "AI deal health scoring: probability-weighted pipeline with risk flag alerts",
            "Intelligent pipeline forecasting with rolling 30/60/90-day revenue projections",
            "One-click follow-up sequence generation from previous call/email context",
            "Native Neno Voice & Neno Dialer integration for unified call logging",
            "Email and calendar sync: Gmail, Outlook & Google Calendar bi-directional",
            "AI meeting prep briefs: auto-generated account summaries before calls",
            "Custom pipeline stages, fields & automation workflows per team"
        ],
        highlights: [
            { icon: "fas fa-brain", label: "AI Enrichment", value: "Auto" },
            { icon: "fas fa-chart-bar", label: "Forecast Accuracy", value: "±8%" },
            { icon: "fas fa-bolt", label: "Setup Time", value: "<1 Day" },
            { icon: "fas fa-sync", label: "Integrations", value: "50+" }
        ],
        useCases: [
            "Sales teams replacing Salesforce or HubSpot with an AI-native alternative",
            "Startups needing CRM + dialer + voice in one unified platform",
            "Revenue operations teams seeking accurate pipeline forecasting",
            "Account management teams tracking renewal risk and expansion signals"
        ],
        benefits: [
            "Eliminate 5–10 hours per week of manual CRM data entry per rep",
            "AI deal scoring identifying at-risk opportunities before they churn",
            "Unified platform: CRM + Voice + Dialer on a single data model",
            "Sub-1-day implementation vs. 3–6 month Salesforce deployments"
        ],
        integrations: [
            "Gmail / Google Workspace",
            "Microsoft Outlook / 365",
            "Neno Voice (native)",
            "Neno Dialer (native)",
            "Slack / Teams",
            "ZoomInfo / Apollo / Clay (enrichment)",
            "Stripe / Chargebee (revenue data)",
            "Zapier / Make / n8n (automation)"
        ],
        process: [
            { step: "01", title: "Data Import & Migration", desc: "Import your existing contacts, companies, and deal history from Salesforce, HubSpot, or a CSV export in under 1 hour." },
            { step: "02", title: "Pipeline Configuration", desc: "Define your custom pipeline stages, deal fields, team structure, and automation rules aligned with your sales process." },
            { step: "03", title: "Integrations & Enrichment", desc: "Connect your email, calendar, and enrichment providers. Neno AI will auto-enrich all existing contacts on day one." },
            { step: "04", title: "Team Activation", desc: "Onboard your team with role-based views, AI coaching setup, and a live pipeline review with your revenue operations team." }
        ],
        href: "/products/neno-crm"
    },
    {
        slug: "neno-erp",
        title: "Neno ERP",
        pillBadge: "NENO ERP",
        shortTitle: "Neno ERP",
        tagline: "AI-Augmented Enterprise Resource Planning for Growing Businesses",
        description: "A modular, AI-augmented ERP platform that unifies finance, operations, HR, and supply chain — with intelligent automation, real-time analytics, and a clean interface designed for modern teams.",
        overview: "Neno ERP is a modular enterprise resource planning platform built for mid-market and scaling businesses that need operational clarity without the implementation complexity of SAP or Oracle. Each module — finance, procurement, inventory, HR, and project management — operates independently or as a unified suite, with AI-powered anomaly detection, automated reconciliation, demand forecasting, and executive dashboards that turn operational data into actionable insight.",
        category: "Enterprise ERP Platform",
        features: [
            "Financial management: GL, AP/AR, bank reconciliation & multi-currency support",
            "AI-powered expense anomaly detection & automated audit flagging",
            "Inventory & supply chain: demand forecasting, reorder automation & supplier management",
            "HR & payroll: employee lifecycle, leave management & payroll processing",
            "Project management: budget tracking, resource allocation & milestone reporting",
            "Procurement: purchase orders, vendor management & 3-way invoice matching",
            "Real-time executive dashboards with drill-down operational analytics",
            "Multi-entity & multi-currency support for global operations"
        ],
        highlights: [
            { icon: "fas fa-layer-group", label: "Modules", value: "8+" },
            { icon: "fas fa-robot", label: "AI Automation", value: "Built-in" },
            { icon: "fas fa-building", label: "Multi-Entity", value: "Supported" },
            { icon: "fas fa-lock", label: "Security", value: "SOC2 Ready" }
        ],
        useCases: [
            "Mid-market businesses replacing QuickBooks or legacy ERP systems",
            "Multi-entity organizations needing consolidated financial reporting",
            "Manufacturing and distribution companies managing complex supply chains",
            "Professional services firms tracking project profitability and resource utilization"
        ],
        benefits: [
            "Unified operations eliminating the need for 5–10 disconnected SaaS tools",
            "AI anomaly detection catching financial errors and fraud before they escalate",
            "Real-time inventory optimization reducing carrying costs by 20–30%",
            "Executive dashboards providing board-level operational visibility in real time"
        ],
        integrations: [
            "QuickBooks / Xero (migration)",
            "Stripe / Chargebee (revenue)",
            "Shopify / WooCommerce (e-commerce)",
            "ADP / Gusto (payroll sync)",
            "Neno CRM (native revenue sync)",
            "AWS / Azure (infrastructure)",
            "Plaid (bank feeds)",
            "Slack / Teams (operational alerts)"
        ],
        process: [
            { step: "01", title: "Business Process Mapping", desc: "We map your current workflows, chart of accounts, entity structure, and integration dependencies before any configuration." },
            { step: "02", title: "Module Configuration", desc: "We configure the modules relevant to your operations, set up approval workflows, and import historical financial data." },
            { step: "03", title: "Integrations & Testing", desc: "We connect your existing systems, run parallel testing against your legacy platform, and validate data integrity across all modules." },
            { step: "04", title: "Go-Live & Training", desc: "We execute the cutover, train all team roles, and provide 30-day hypercare support to ensure operational stability post-launch." }
        ],
        href: "/products/neno-erp"
    }
];

export function getProductBySlug(slug: string): ProductItem | undefined {
    return productItems.find(p => p.slug === slug);
}
