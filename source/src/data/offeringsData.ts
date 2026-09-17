export interface OfferingOption {
    value: string;
    label: string;
    slug: string;
    aliases: string[];
}

export interface CategoryOfferingGroup {
    id: string;
    categoryLabel: string;
    subSelectLabel: string;
    options: OfferingOption[];
}

export const CATEGORY_OFFERINGS: CategoryOfferingGroup[] = [
    {
        id: "hire-engineers",
        categoryLabel: "Hire Engineers",
        subSelectLabel: "Select Role *",
        options: [
            {
                value: "Forward Deployed Engineer (FDE)",
                label: "Forward Deployed Engineer (FDE)",
                slug: "forward-deployed-engineer",
                aliases: ["forward-deployed-engineer", "fde", "forward-deployed", "forward_deployed_engineer"],
            },
            {
                value: "AI / Agentic AI Engineer",
                label: "AI / Agentic AI Engineer",
                slug: "agentic-ai-engineer",
                aliases: ["agentic-ai-engineer", "ai-agentic-ai-engineer", "ai-agentic", "agentic-ai", "ai-engineer", "agentic_ai_engineer"],
            },
            {
                value: "Claude & LLM Engineer",
                label: "Claude & LLM Engineer",
                slug: "claude-llm-engineer",
                aliases: ["claude-llm-engineer", "claude-engineer", "llm-engineer", "claude", "claude_llm_engineer"],
            },
            {
                value: "Full Stack / Backend Engineer",
                label: "Full Stack / Backend Engineer",
                slug: "full-stack-backend-engineer",
                aliases: ["full-stack-backend-engineer", "full-stack", "backend-engineer", "full-stack-engineer", "full_stack_backend_engineer"],
            },
            {
                value: "Software Product Developer",
                label: "Software Product Developer",
                slug: "software-product-developer",
                aliases: ["software-product-developer", "product-developer", "software-developer", "software_product_developer"],
            },
            {
                value: "Security Engineer",
                label: "Security Engineer",
                slug: "security-engineer",
                aliases: ["security-engineer", "security", "security_engineer"],
            },
            {
                value: "UI/UX & Cloud Engineer",
                label: "UI/UX & Cloud Engineer",
                slug: "ui-ux-cloud-engineer",
                aliases: ["ui-ux-cloud-engineer", "ui-ux", "cloud-engineer", "ui-ux-engineer", "ui_ux_cloud_engineer"],
            },
            {
                value: "Application Support Team",
                label: "Application Support Team",
                slug: "application-support-team",
                aliases: ["application-support-team", "application-support", "app-support", "support-team", "application_support_team"],
            },
        ],
    },
    {
        id: "services",
        categoryLabel: "Services",
        subSelectLabel: "Select Service *",
        options: [
            {
                value: "Agentic AI Development",
                label: "Agentic AI Development",
                slug: "agentic-ai-development",
                aliases: ["agentic-ai-development", "agentic-ai", "agentic-ai-dev", "agentic_ai_development"],
            },
            {
                value: "AI Product Development",
                label: "AI Product Development",
                slug: "ai-product-development",
                aliases: ["ai-product-development", "ai-product", "product-development", "ai_product_development"],
            },
            {
                value: "Vibe Coding Squads",
                label: "Vibe Coding Squads",
                slug: "vibe-coding-squads",
                aliases: ["vibe-coding-squads", "vibe-coding", "vibe-squads", "vibe_coding_squads"],
            },
            {
                value: "AI GTM (Go-To-Market)",
                label: "AI GTM (Go-To-Market)",
                slug: "ai-gtm",
                aliases: ["ai-gtm", "ai-gtm-go-to-market", "gtm", "go-to-market", "ai_gtm"],
            },
            {
                value: "LLM Fine-Tuning & Deployment",
                label: "LLM Fine-Tuning & Deployment",
                slug: "llm-fine-tuning-deployment",
                aliases: ["llm-fine-tuning-deployment", "llm-fine-tuning", "fine-tuning", "llm-deployment", "llm_fine_tuning_deployment"],
            },
            {
                value: "Application Support & Modernization",
                label: "Application Support & Modernization",
                slug: "application-support-modernization",
                aliases: ["application-support-modernization", "application-support-and-modernization", "app-support-modernization", "legacy-modernization", "application_support_modernization"],
            },
        ],
    },
    {
        id: "products",
        categoryLabel: "Products",
        subSelectLabel: "Select Product *",
        options: [
            {
                value: "Neno Voice: Voice AI Agents",
                label: "Neno Voice: Voice AI Agents",
                slug: "neno-voice",
                aliases: ["neno-voice", "neno-voice-voice-ai-agents", "neno-voice-:-voice-ai-agents", "voice-ai-agents", "voice-ai", "voice", "neno_voice"],
            },
            {
                value: "Neno Dialer",
                label: "Neno Dialer",
                slug: "neno-dialer",
                aliases: ["neno-dialer", "dialer", "ai-dialer", "neno_dialer"],
            },
            {
                value: "Neno CRM",
                label: "Neno CRM",
                slug: "neno-crm",
                aliases: ["neno-crm", "crm", "ai-crm", "neno_crm"],
            },
            {
                value: "Neno ERP",
                label: "Neno ERP",
                slug: "neno-erp",
                aliases: ["neno-erp", "erp", "ai-erp", "neno_erp"],
            },
        ],
    },
    {
        id: "consulting",
        categoryLabel: "Consulting",
        subSelectLabel: "Select Consulting Type *",
        options: [
            {
                value: "AI Strategy Consulting",
                label: "AI Strategy Consulting",
                slug: "ai-strategy",
                aliases: ["ai-strategy", "ai-strategy-consulting", "ai-strategy-advisory", "strategy", "ai_strategy"],
            },
            {
                value: "Software Product Consulting",
                label: "Software Product Consulting",
                slug: "software-product",
                aliases: ["software-product", "software-product-consulting", "product-consulting", "software_product"],
            },
            {
                value: "MVP → Production Consulting",
                label: "MVP → Production Consulting",
                slug: "mvp-to-production",
                aliases: ["mvp-to-production", "mvp-production-consulting", "mvp-production", "mvp-to-prod", "mvp_to_production"],
            },
            {
                value: "Marketing & GTM Consulting",
                label: "Marketing & GTM Consulting",
                slug: "marketing-gtm",
                aliases: ["marketing-gtm", "marketing-gtm-consulting", "marketing-consulting", "marketing_gtm"],
            },
        ],
    },
];

export const CATEGORY_OPTIONS = [
    "Hire Engineers",
    "Services",
    "Products",
    "Consulting",
    "General Inquiry",
];

/**
 * Resolve category and offering from query parameter
 */
export function resolveOfferingFromParam(param?: string | null): {
    category: string;
    offering?: string;
} {
    if (!param) {
        return { category: "General Inquiry" };
    }

    const normalized = param.toLowerCase().trim().replace(/_/g, "-");

    // Check if the parameter directly matches a category
    if (["hire-engineers", "hire", "engineers"].includes(normalized)) {
        return { category: "Hire Engineers", offering: CATEGORY_OFFERINGS[0].options[0].value };
    }
    if (["services", "service"].includes(normalized)) {
        return { category: "Services", offering: CATEGORY_OFFERINGS[1].options[0].value };
    }
    if (["products", "product"].includes(normalized)) {
        return { category: "Products", offering: CATEGORY_OFFERINGS[2].options[0].value };
    }
    if (["consulting", "advisory"].includes(normalized)) {
        return { category: "Consulting", offering: CATEGORY_OFFERINGS[3].options[0].value };
    }
    if (["general", "inquiry", "general-inquiry", "other"].includes(normalized)) {
        return { category: "General Inquiry" };
    }

    // Direct mapping for capability blueprints
    if (["autonomous-revenue-engine", "revenue-engine", "revenue-ops"].includes(normalized)) {
        return { category: "Products", offering: "Neno CRM" };
    }
    if (["autonomous-contact-centre", "autonomous-contact-center", "contact-centre", "contact-center"].includes(normalized)) {
        return { category: "Products", offering: "Neno Voice: Voice AI Agents" };
    }
    if (["agentic-talent-desk", "talent-desk", "talent-ops"].includes(normalized)) {
        return { category: "Hire Engineers", offering: "AI / Agentic AI Engineer" };
    }
    if (["bid-tender-response-factory", "bid-tender", "tender-factory", "rfp-factory"].includes(normalized)) {
        return { category: "Services", offering: "Agentic AI Development" };
    }
    if (["autonomous-back-office", "back-office", "zero-headcount", "zero-headcount-company"].includes(normalized)) {
        return { category: "Products", offering: "Neno ERP" };
    }

    // Match against each group's items
    for (const group of CATEGORY_OFFERINGS) {
        for (const opt of group.options) {
            if (
                opt.slug.toLowerCase() === normalized ||
                opt.value.toLowerCase() === normalized ||
                opt.aliases.some((alias) => alias === normalized || normalized.includes(alias) || alias.includes(normalized))
            ) {
                return {
                    category: group.categoryLabel,
                    offering: opt.value,
                };
            }
        }
    }

    return { category: "General Inquiry" };
}
