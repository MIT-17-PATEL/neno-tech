import { Metadata } from "next";
import Link from "next/link";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata: Metadata = {
    title: "Hire AI Engineers | Neno Technology",
    description: "Neno Hire places vetted AI, agentic, and full-stack engineers directly into your team.",
};

const values = [
    ["fas fa-layer-group", "5-stage vetting", "Every engineer clears a five-stage funnel covering fundamentals, hands-on AI work, system design, communication and a client-style trial task."],
    ["fas fa-bolt", "Fast placement", "Bench capacity available now. Shortlist in [X] days, onboarding in [X]."],
    ["fas fa-globe", "Overlapping hours", "Teams working across India, US, UK, UAE and Australia time zones."],
    ["fas fa-arrows-alt-h", "Scale up or down", "Start with one engineer. Grow to a squad. Stop with [X] days' notice."],
];

const roles = [
    ["fas fa-rocket", "Forward Deployed Engineer (FDE)", "Sits with your customers and your product team. Turns real deployment friction into shipped fixes. Best when your AI product needs to survive contact with real users.", "Python/TypeScript · LLM APIs · integrations · customer-facing debugging", "/hire-engineers/forward-deployed-engineer"],
    ["fas fa-brain", "AI Engineer", "Builds and ships AI features into production — RAG pipelines, evaluation harnesses, inference optimisation, model integration.", "Python · LangChain/LlamaIndex · vector DBs · evals · MLOps", "/contact-us?intent=hire-ai-engineer"],
    ["fas fa-robot", "Agentic AI Engineer", "Designs multi-step agent systems that actually complete tasks — tool use, orchestration, memory, guardrails and failure handling.", "agent frameworks · tool/function calling · orchestration · observability", "/hire-engineers/agentic-ai-engineer"],
    ["fas fa-comments", "Claude & LLM Engineer", "Specialists in Anthropic's Claude and the wider LLM stack — prompt architecture, context engineering, MCP integrations, fine-tuning and cost/latency tuning.", "Claude API · MCP · prompt & context engineering · fine-tuning · evaluation", "/hire-engineers/claude-llm-engineer"],
    ["fas fa-cubes", "Software Product Developer", "Owns a product surface end to end — discovery, architecture, build, release. For teams that need a builder, not just a coder.", "product thinking · full-stack delivery · release ownership", "/hire-engineers/software-product-developer"],
    ["fas fa-code", "Full Stack Engineer", "Frontend to database, one owner. React/Next on the front, Node/Python behind it.", "React · Next.js · Node · Python · SQL/NoSQL", "/hire-engineers/full-stack-backend-engineer"],
    ["fas fa-server", "Backend Engineer", "APIs, data pipelines and services that stay up under load.", "Python/Node/Go · REST & GraphQL · Postgres · queues · caching", "/hire-engineers/full-stack-backend-engineer"],
    ["fas fa-shield-alt", "Security Engineer", "Application and cloud security — reviews, hardening, compliance readiness, and security review of AI systems including prompt injection and data-leakage risk.", "appsec · cloud security · threat modelling · compliance", "/hire-engineers/security-engineer"],
    ["fas fa-pencil-ruler", "UI/UX Engineer", "Interfaces people can actually use — design systems, prototypes, and front-end implementation.", "Figma · design systems · React implementation · accessibility", "/hire-engineers/ui-ux-cloud-engineer"],
    ["fas fa-cloud", "Cloud & DevOps Engineer", "Infrastructure, CI/CD, cost control and reliable deploys on AWS, Azure or GCP.", "AWS/Azure/GCP · Docker · Kubernetes · Terraform · CI/CD", "/hire-engineers/ui-ux-cloud-engineer"],
    ["fas fa-headset", "Application Support Team", "Keep your existing applications running. Monitoring, bug fixes, upgrades, and a documented SLA — including legacy systems your in-house team doesn't want to touch.", "L1–L3 support · [X]-hour response SLA · handover documentation", "/hire-engineers/application-support-team"],
] as const;

const stages = [
    ["01", "Screening", "Profile, stack depth and real project history."],
    ["02", "Technical assessment", "Live coding and hands-on AI/LLM task."],
    ["03", "System design", "Architecture, trade-offs, and scale thinking."],
    ["04", "Communication round", "English fluency and client-readiness."],
    ["05", "Trial task", "A scoped, client-style deliverable before we ever propose them to you."],
];

const models = [
    ["Dedicated Engineer", "One clear gap", "1–2 engineers", "Monthly", "Engineer, your process", "[X] days", "[₹/$ per month]"],
    ["Squad", "A full workstream", "3–8 engineers + lead", "Monthly", "Engineer(s), tech lead, delivery cadence", "[X] days", "[₹/$ per month]"],
    ["Contract-to-Hire", "Building a permanent team", "1+", "3–6 months, then convert", "Engineer + conversion path", "Per agreement", "[Rate + conversion fee]"],
];
const modelLabels = ["Best for", "Team size", "Commitment", "Includes", "Notice", "Pricing"];

const faqs = [
    ["How fast can an engineer start?", "[X] business days from an agreed brief, subject to bench availability."],
    ["Who manages the engineer?", "You do, day to day. We handle contracts, payroll, HR and back-up cover."],
    ["What if the fit isn't right?", "Free replacement within the first [X] days, no questions."],
    ["Do they work in our time zone?", "Yes. We staff for a minimum [X]-hour overlap with your working day."],
    ["Can they sign our NDA and IP agreements?", "Yes. All engineers work under NDA, and IP assigns to you."],
    ["Do you support existing/legacy applications?", "Yes, that's a dedicated offering. See Application Support."],
];

export default function HireEngineersPage() {
    return (
        <div className="include-breadcrumb" id="hire-engineers-page">
            <LayoutV1>
                <main>
                    <section className="container hire-hero text-center">
                        <span className="hire-pill">NENO HIRE</span>
                        <h1>Hire AI engineers who ship.</h1>
                        <p>Neno Hire places vetted AI, agentic and full-stack engineers directly into your team. They use your tools, join your standups, and start delivering in weeks.</p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                            <Link href="/contact-us?intent=hire-engineers" className="btn btn-style-one hire-primary">Share your requirement <i className="fas fa-arrow-right ms-2" /></Link>
                            <Link href="#roles" className="btn hire-secondary">See roles</Link>
                        </div>
                    </section>

                    <section className="hire-section hire-subtle">
                        <div className="container">
                            <div className="hire-heading text-center mx-auto"><span>WHY NENO</span><h2>Engineers built for the work ahead.</h2></div>
                            <div className="row g-4 mt-1">{values.map(([icon, title, text]) => <div className="col-lg-3 col-md-6" key={title}><article className="hire-card h-100"><div className="hire-icon"><i className={icon} /></div><h3>{title}</h3><p>{text}</p></article></div>)}</div>
                        </div>
                    </section>

                    <section className="hire-section" id="roles">
                        <div className="container">
                            <div className="hire-heading text-center mx-auto"><span>SPECIALIST ROLES</span><h2>Bring in exactly the capability you need.</h2><p>From a single embedded engineer to a complete product squad, we match the role to the work.</p></div>
                            <div className="row g-4 mt-1">{roles.map(([icon, title, description, skills, href]) => <div className="col-lg-4 col-md-6" key={title}><Link href={href} className="hire-role h-100 text-decoration-none"><div className="hire-icon"><i className={icon} /></div><h3>{title}</h3><p>{description}</p><div className="hire-skills"><strong>Skills:</strong> {skills}</div><div className="hire-link">Explore role <i className="fas fa-arrow-right" /></div></Link></div>)}</div>
                        </div>
                    </section>

                    <section className="hire-section hire-subtle">
                        <div className="container">
                            <div className="hire-heading text-center mx-auto"><span>HOW WE VET</span><h2>Five stages. No guesswork.</h2><p>We look beyond a résumé, so your shortlist is ready to contribute from the start.</p></div>
                            <div className="hire-timeline mt-5">{stages.map(([number, title, text]) => <article className="hire-stage" key={number}><div className="hire-stage-number">{number}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
                        </div>
                    </section>

                    <section className="hire-section">
                        <div className="container">
                            <div className="hire-heading text-center mx-auto"><span>ENGAGEMENT MODELS</span><h2>Flexible around the way you build.</h2><p>Choose a structure that fits this quarter, with room to adapt as your priorities change.</p></div>
                            <div className="hire-table mt-5"><div className="table-responsive"><table className="table mb-0"><thead><tr><th> </th>{models.map((model) => <th key={model[0]}>{model[0]}</th>)}</tr></thead><tbody>{modelLabels.map((label, index) => <tr key={label}><th>{label}</th>{models.map((model) => <td key={model[0]}>{model[index + 1]}</td>)}</tr>)}</tbody></table></div></div>
                            <div className="row g-4 hire-model-cards">{models.map((model) => <div className="col-md-4" key={model[0]}><article className="hire-card h-100"><h3>{model[0]}</h3>{modelLabels.map((label, index) => <p className="hire-model-line" key={label}><strong>{label}</strong><span>{model[index + 1]}</span></p>)}</article></div>)}</div>
                        </div>
                    </section>

                    <section className="hire-section hire-subtle">
                        <div className="container">
                            <div className="hire-heading text-center mx-auto"><span>FAQ</span><h2>Questions, answered.</h2></div>
                            <div className="accordion hire-accordion mx-auto mt-5" id="hireFaqAccordion">{faqs.map(([question, answer], index) => { const collapseId = `hire-faq-${index}`; const headingId = `hire-faq-heading-${index}`; return <div className="accordion-style-one-item" key={question}><h3 className="accordion-header" id={headingId}><button className={`accordion-button ${index === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded={index === 0} aria-controls={collapseId}>{question}</button></h3><div id={collapseId} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={headingId} data-bs-parent="#hireFaqAccordion"><div className="accordion-body"><p>{answer}</p></div></div></div>; })}</div>
                        </div>
                    </section>

                    <section className="container hire-final-wrap"><div className="hire-final text-center"><span className="hire-pill">NENO HIRE</span><h2>Ready to add engineers who ship?</h2><p>Tell us what you need. We&apos;ll help define the brief and put the right people in front of you.</p><Link href="/contact-us?intent=hire-engineers" className="btn btn-style-one hire-primary">Share your requirement <i className="fas fa-arrow-right ms-2" /></Link></div></section>
                </main>
            </LayoutV1>
            <style>{`
                #hire-engineers-page { --ink:#0f172a; --muted:#64748b; --indigo:#4f46e5; --soft:#eef2ff; --border:#e2e8f0; }
                .hire-hero { max-width:880px; padding:130px 12px 78px; }.hire-pill,.hire-heading>span { color:var(--indigo); display:inline-block; font-size:12px; font-weight:700; letter-spacing:.6px; }.hire-pill { background:var(--soft); border:1px solid #c0d8ff; border-radius:999px; padding:6px 18px; }.hire-hero h1,.hire-heading h2,.hire-final h2 { color:var(--ink); font-weight:700; letter-spacing:-.5px; line-height:1.1; }.hire-hero h1 { font-size:clamp(2.35rem,5vw,3.7rem); margin:16px 0; }.hire-hero>p { color:var(--muted); font-size:1.1rem; line-height:1.7; margin:auto; max-width:690px; }
                .hire-primary,.hire-secondary { border-radius:10px; font-weight:600; padding:13px 22px; }.hire-primary { background:var(--indigo); border-color:var(--indigo); color:#fff; }.hire-primary:hover { color:#fff; }.hire-secondary { background:#fff; border:1px solid var(--border); color:var(--ink); }.hire-secondary:hover { border-color:#c0d8ff; color:var(--indigo); }
                .hire-section { padding:88px 0; }.hire-subtle { background:#f8fafc; }.hire-heading { max-width:680px; }.hire-heading>span { margin-bottom:12px; }.hire-heading h2,.hire-final h2 { font-size:clamp(1.8rem,3.3vw,2.55rem); margin:0; }.hire-heading>p { color:var(--muted); line-height:1.7; margin:14px auto 0; }
                .hire-card,.hire-role { background:#fff; border:1px solid var(--border); border-radius:16px; padding:28px; }.hire-card h3,.hire-role h3,.hire-stage h3 { color:var(--ink); font-size:18px; font-weight:700; line-height:1.35; margin:18px 0 10px; }.hire-card p,.hire-role p,.hire-stage p { color:var(--muted); font-size:14px; line-height:1.65; margin:0; }.hire-icon { align-items:center; background:var(--soft); border-radius:12px; color:var(--indigo); display:flex; font-size:19px; height:48px; justify-content:center; width:48px; }
                .hire-role { color:inherit; display:flex; flex-direction:column; height:100%; transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease; }.hire-role:hover { border-color:#c0d8ff; box-shadow:0 12px 32px rgba(79,70,229,.1); transform:translateY(-4px); }.hire-skills { border-top:1px solid #f1f5f9; color:var(--muted); font-size:13px; line-height:1.6; margin-top:20px; padding-top:16px; }.hire-skills strong { color:var(--ink); }.hire-link { color:var(--indigo); font-size:14px; font-weight:600; margin-top:auto; padding-top:18px; }.hire-link i { font-size:12px; margin-left:6px; }
                .hire-timeline { display:grid; grid-template-columns:repeat(5,1fr); position:relative; }.hire-timeline::before { background:#c0d8ff; content:""; height:1px; left:9%; position:absolute; right:9%; top:24px; }.hire-stage { padding:0 16px; position:relative; text-align:center; z-index:1; }.hire-stage-number { align-items:center; background:var(--indigo); border:5px solid #f8fafc; border-radius:50%; color:#fff; display:flex; font-size:12px; font-weight:700; height:48px; justify-content:center; margin:auto; width:48px; }.hire-stage h3 { margin-top:20px; }
                .hire-table { border:1px solid var(--border); border-radius:16px; overflow:hidden; }.hire-table table { min-width:760px; }.hire-table th,.hire-table td { border-color:var(--border); color:var(--muted); font-size:14px; line-height:1.5; padding:18px 20px; vertical-align:middle; }.hire-table thead th { background:var(--soft); color:var(--ink); font-size:16px; }.hire-table tbody th { background:#f8fafc; color:var(--ink); min-width:125px; }.hire-model-cards { display:none; }.hire-model-line { border-top:1px solid #f1f5f9; display:flex; flex-direction:column; gap:3px; margin-top:13px!important; padding-top:13px; }.hire-model-line strong { color:var(--ink); font-size:12px; }
                .hire-accordion { max-width:850px; }.hire-final-wrap { padding:0 12px 88px; }.hire-final { background:linear-gradient(135deg,#f8fafc 0%,#eef2ff 100%); border:1px solid #c0d8ff; border-radius:18px; padding:64px 28px; }.hire-final h2 { margin:16px 0 12px; }.hire-final p { color:var(--muted); line-height:1.7; margin:0 auto 24px; max-width:590px; }
                @media (max-width:991.98px) { .hire-section { padding:70px 0; }.hire-timeline { gap:0; grid-template-columns:1fr; margin:auto; max-width:650px; }.hire-timeline::before { bottom:24px; height:auto; left:24px; right:auto; top:24px; width:1px; }.hire-stage { align-items:flex-start; display:flex; padding:0 0 28px; text-align:left; }.hire-stage:last-child { padding-bottom:0; }.hire-stage-number { flex:0 0 48px; margin:0 18px 0 0; }.hire-stage h3 { margin:2px 0 7px; } }
                @media (max-width:767.98px) { .hire-hero { padding:100px 20px 58px; }.hire-hero h1 { font-size:2.25rem; }.hire-hero>p { font-size:1rem; }.hire-hero .btn { width:100%; }.hire-section { padding:58px 0; }.hire-card,.hire-role { padding:24px; }.hire-table { display:none; }.hire-model-cards { display:flex; margin-top:32px; }.hire-final-wrap { padding-bottom:60px; }.hire-final { padding:48px 22px; }.accordion-style-one-item button.accordion-button { font-size:16px; padding:20px 62px 20px 20px; }.accordion-style-one-item button.accordion-button::before { right:18px; top:16px; }.accordion-style-one-item .accordion-body { padding:20px; } }
            `}</style>
        </div>
    );
}
