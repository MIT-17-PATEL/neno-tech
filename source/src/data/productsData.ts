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
        title: "Neno Voice: Voice AI Agents",
        pillBadge: "NENO VOICE",
        shortTitle: "Neno Voice",
        tagline: "Autonomous Voice AI Agents for Inbound & Outbound Telephony",
        description: "Deploy voice AI agents that handle inbound and outbound phone calls, qualify leads, schedule appointments, and resolve support queries with sub-200ms latency.",
        overview: "Neno Voice is our enterprise voice AI platform for high-volume telephony. Built on real-time speech-to-text, LLM reasoning, and low-latency voice synthesis, Neno Voice agents qualify inbound leads, run outbound campaigns, book calendar slots, and escalate complex calls to human teams with full context.",
        category: "Voice AI Platform",
        features: [
            "Real-time voice synthesis with sub-200ms response latency",
            "Multi-turn dialogue management with conversation memory",
            "Inbound and outbound call routing with configurable agent personas",
            "Live call transfer to human agents with full conversation context",
            "Custom knowledge base integration for domain-specific FAQs",
            "Post-call transcription, sentiment classification, and CRM logging",
            "Multi-language support for international operations",
            "Call recording with role-based access control and data retention rules"
        ],
        highlights: [
            { icon: "fas fa-bolt", label: "Voice Latency", value: "<200ms" },
            { icon: "fas fa-phone-alt", label: "Concurrent Calls", value: "High Capacity" },
            { icon: "fas fa-globe", label: "Languages", value: "12+" },
            { icon: "fas fa-clock", label: "Availability", value: "24/7/365" }
        ],
        useCases: [
            "High-volume inbound lead qualification for sales teams",
            "Automated appointment scheduling and reminder calls",
            "Tier-1 customer support triage and FAQ resolution",
            "Outbound follow-up campaigns for sales development"
        ],
        benefits: [
            "Handle simultaneous call spikes without queue bottlenecks",
            "Consistent conversation quality and prompt adherence on every call",
            "Lower per-call operational cost compared to outsourced call centers",
            "Round-the-clock availability for global prospect inquiry handling"
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
        tagline: "Outbound Sales Dialer with Live Objection Assistance",
        description: "An outbound sales dialer with automated voicemail drops, local presence dialing, and live objection-handling prompts to help sales teams execute calling campaigns.",
        overview: "Neno Dialer is an outbound calling system built for sales teams executing high-volume phone outreach. It provides multi-line dialing, routes live connections to available sales reps, automates voicemail delivery, and surfaces battlecard notes during calls with direct CRM integration.",
        category: "Sales Dialer Platform",
        features: [
            "Multi-line power dialing to minimize idle rep wait time",
            "Automated voicemail drop with pre-recorded audio files",
            "Local presence dialing to display regional area codes",
            "Live objection-handling scripts and competitor battlecard prompts",
            "Automatic call recording with structured summary generation",
            "CRM synchronization: automatic call logging to Salesforce and HubSpot",
            "Call analytics: talk-to-listen ratios and disposition tracking",
            "Compliance management: DNC registry checking and calling time-window rules"
        ],
        highlights: [
            { icon: "fas fa-tachometer-alt", label: "Dials Per Hour", value: "300+" },
            { icon: "fas fa-chart-line", label: "Connect Rate", value: "Optimized" },
            { icon: "fas fa-microphone-alt", label: "Call Recording", value: "Supported" },
            { icon: "fas fa-shield-alt", label: "Compliance", value: "TCPA / DNC" }
        ],
        useCases: [
            "SDR teams running high-volume cold outreach campaigns",
            "Account executives managing follow-up and re-engagement sequences",
            "Sales managers monitoring team performance and coaching live calls",
            "Revenue operations teams optimizing connect rates and pipeline velocity"
        ],
        benefits: [
            "Higher talk time per rep by eliminating manual dialing delays",
            "Reduced administrative burden through automatic call logging and notes",
            "Consistent objection handling using guided battlecard references",
            "Structured calling logs for sales performance review and coaching"
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
        tagline: "Pipeline Management with Automated Contact Enrichment",
        description: "A customer relationship management platform that automates contact enrichment, deal pipeline tracking, and follow-up tasks so sales teams spend less time on manual data entry.",
        overview: "Neno CRM is built for sales teams that need clear pipeline visibility without administrative overhead. It includes automatic firmographic enrichment, deal health indicators, weighted revenue forecasting, and structured task sequences. Neno CRM integrates natively with Neno Voice and Neno Dialer.",
        category: "AI-Native CRM",
        features: [
            "Contact and company enrichment: automatically populate firmographics from domain",
            "Deal health tracking: pipeline risk indicators and inactivity alerts",
            "Pipeline forecasting with weighted 30, 60, and 90-day revenue projections",
            "Automated follow-up task generation from meeting and call notes",
            "Native Neno Voice and Neno Dialer integration for unified activity logs",
            "Bi-directional email and calendar synchronization (Google Workspace & Outlook)",
            "Pre-meeting account briefs summarizing previous interactions",
            "Customizable pipeline stages, custom properties, and automation triggers"
        ],
        highlights: [
            { icon: "fas fa-brain", label: "Data Enrichment", value: "Automatic" },
            { icon: "fas fa-chart-bar", label: "Pipeline Forecast", value: "Real-time" },
            { icon: "fas fa-bolt", label: "Onboarding Time", value: "<1 Day" },
            { icon: "fas fa-sync", label: "Integrations", value: "Supported" }
        ],
        useCases: [
            "Sales teams replacing complex legacy CRM setups with a focused platform",
            "Teams seeking a unified CRM, dialer, and voice logging system",
            "Revenue operations teams requiring reliable stage conversion tracking",
            "Account managers monitoring renewals, expansions, and customer health"
        ],
        benefits: [
            "Substantially reduces manual contact entry and activity logging time",
            "Early identification of stagnant deals and pipeline risks",
            "Single data store unifying phone, voice agent, and email touchpoints",
            "Straightforward deployment and team adoption within 24 hours"
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
        tagline: "Modular ERP Platform for Finance, Inventory, and Operations",
        description: "A modular ERP platform that connects finance, inventory, procurement, and project tracking with automated reconciliations and real-time operational reports.",
        overview: "Neno ERP is a modular enterprise platform designed for growing businesses seeking unified operations. Key modules including finance, procurement, inventory, and project tracking operate independently or together, featuring automated invoice matching, inventory reorder triggers, and consolidated reporting.",
        category: "Enterprise ERP Platform",
        features: [
            "Financial accounting: general ledger, accounts payable/receivable, and bank reconciliation",
            "Automated expense validation and duplicate invoice detection",
            "Inventory and supply chain: stock tracking, reorder thresholds, and vendor records",
            "HR and payroll: employee records, leave management, and payroll exports",
            "Project management: project budgets, resource allocation, and milestone tracking",
            "Procurement: purchase orders, vendor approvals, and 3-way invoice matching",
            "Executive dashboards with real-time gross margin and cash flow metrics",
            "Multi-currency and multi-entity support for international business units"
        ],
        highlights: [
            { icon: "fas fa-layer-group", label: "Modules", value: "8 Active" },
            { icon: "fas fa-robot", label: "Automation", value: "Built-in" },
            { icon: "fas fa-building", label: "Multi-Entity", value: "Supported" },
            { icon: "fas fa-lock", label: "Compliance", value: "Audit-Ready" }
        ],
        useCases: [
            "Mid-market businesses replacing fragmented spreadsheets and basic accounting tools",
            "Multi-entity companies requiring consolidated balance sheets",
            "Distribution businesses managing multi-warehouse stock levels",
            "Professional services firms tracking billable hours and project profit margins"
        ],
        benefits: [
            "Replaces multiple disconnected tools with a unified operational database",
            "Automated bank feeds and reconciliation reducing month-end closing time",
            "Real-time inventory visibility preventing stockouts and excess storage",
            "Direct operational reporting for leadership without manual sheet consolidation"
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
