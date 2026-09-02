# Neno Technology — Website Wireframe & Content Deck

**Prepared for:** AI Neno Innovation Private Limited (Neno Technology), GIFT City, Gandhinagar
**Purpose:** Hand this to a designer + developer. Every section below has a layout block (wireframe) and the exact copy that goes in it.
**Note:** Anything in `[SQUARE BRACKETS]` is a placeholder you must fill with real data — do not publish invented numbers or logos.

---

## 1. Positioning Foundation

Before layout, lock these. Every page inherits from here.

**One-line positioning**
> Neno Technology is an Agentic AI engineering company. We give you the engineers, the systems, and the strategy to put AI into production.

**The problem you solve**
Companies want AI in production but hit three walls: they can't hire AI engineers fast enough, they can't turn a demo into a real system, and they don't know what to build first. You solve all three — with people, with builds, and with advice.

**Four ways to work with Neno** (this is your entire site architecture)

| Pillar | What it is | Who buys it |
|---|---|---|
| **Hire** | Engineers on demand, embedded in your team | CTO / VP Eng / Delivery Head at IT companies & agencies |
| **Build** | We take the project end-to-end and ship it | Founders, product heads, enterprise IT |
| **Products** | Ready platforms — Voice AI, CRM, ERP, Dialer | Ops & business heads who want to buy, not build |
| **Advise** | Consulting + corporate training | CXOs, boards, L&D heads |

**Tone of voice:** Direct, engineer-to-engineer. No "revolutionary AI-powered synergy." Short sentences. Concrete claims. If you can't back a number, don't write one.

---

## 2. Sitemap

```
HOME
│
├── HIRE ENGINEERS  (money page — highest intent)
│   ├── Forward Deployed Engineer (FDE)
│   ├── AI / Agentic AI Engineer
│   ├── Claude & LLM Engineer
│   ├── Full Stack / Backend Engineer
│   ├── Software Product Developer
│   ├── Security Engineer
│   ├── UI/UX & Cloud Engineer
│   └── Application Support Team
│
├── SERVICES
│   ├── Agentic AI Development
│   ├── AI Product Development
│   ├── Vibe Coding Squads
│   ├── AI GTM (Go-To-Market)
│   ├── LLM Fine-Tuning & Deployment
│   └── Application Support & Modernization
│
├── PRODUCTS
│   ├── Neno Voice — Voice AI Agents
│   ├── Neno Dialer
│   ├── Neno CRM
│   └── Neno ERP
│
├── CONSULTING
│   ├── AI Strategy Consulting
│   ├── Software Product Consulting
│   ├── MVP → Production Consulting
│   └── Marketing & GTM Consulting
│
├── TRAINING
│   ├── Corporate AI Training
│   ├── Trainer on Demand
│   └── Education Consulting
│
├── INDUSTRIES
│   ├── Manufacturing
│   ├── BFSI & Fintech
│   ├── Healthcare
│   ├── Retail & D2C
│   └── IT Services & Agencies
│
├── CASE STUDIES  (index + individual story pages)
├── ABOUT US
│   ├── Our Story
│   ├── Leadership Board
│   └── Location — GIFT City
├── CAREERS
├── INSIGHTS  (blog — phase 2)
└── CONTACT / BOOK A CALL
```

**Navigation rule:** Max 6 items in the top nav. Anything more and people stop reading.

```
[ LOGO ]   Hire Engineers   Services   Products   Consulting   Company ▾   [ Book a Call ]
```
`Company ▾` holds: About, Industries, Case Studies, Training, Careers, Contact.

---

## 3. Global Elements

### 3.1 Header (sticky)

```
┌──────────────────────────────────────────────────────────────────────┐
│ [Neno Logo]   Hire Engineers  Services  Products  Consulting  Company▾ │
│                                                    [ Book a Call → ]  │
└──────────────────────────────────────────────────────────────────────┘
```
- CTA button is the only filled/coloured element in the header.
- On scroll: header shrinks, stays sticky. Mobile: hamburger, CTA stays visible.

### 3.2 Footer

```
┌──────────────────────────────────────────────────────────────────────┐
│  [Logo]                 HIRE          SERVICES       COMPANY          │
│  One-line positioning   FDE           Agentic AI     About Us         │
│                         AI Engineer   AI Products    Leadership       │
│  [DPIIT badge]          Claude Eng    Vibe Coding    Case Studies     │
│  [Startup India badge]  Full Stack    AI GTM         Careers          │
│                         Security      Fine-Tuning    Contact          │
│  ──────────────────────────────────────────────────────────────────   │
│  AI Neno Innovation Pvt. Ltd.  |  [Full GIFT City address]            │
│  [email]  |  [phone]  |  CIN: [___]                                   │
│  [LinkedIn] [X] [YouTube] [Instagram]                                 │
│  © 2026 Neno Technology  ·  Privacy Policy  ·  Terms                  │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 4. HOME PAGE

### 4.1 Hero

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   AI engineers and AI systems,                     [ Visual:         │
│   ready when you are.                                agentic         │
│                                                      workflow        │
│   Neno Technology gives you production-grade         animation /     │
│   AI talent and end-to-end AI builds — from          abstract        │
│   agentic systems to full product delivery.          graph ]         │
│                                                                      │
│   [ Hire an Engineer ]  [ Book a 30-min Call ]                       │
│                                                                      │
│   ✓ GIFT City, Gujarat   ✓ DPIIT Recognized   ✓ Serving IN/US/UK/UAE/AU │
└──────────────────────────────────────────────────────────────────────┘
```

**Copy:**
- **H1:** AI engineers and AI systems, ready when you are.
- **Sub:** Neno Technology is an Agentic AI engineering company. We give you vetted AI talent, ship AI products end-to-end, and advise the teams that have to make it work.
- **Primary CTA:** Hire an Engineer
- **Secondary CTA:** Book a 30-min Call

### 4.2 Trust Strip

```
┌──────────────────────────────────────────────────────────────────────┐
│         Trusted by teams building with AI                            │
│   [logo] [logo] [logo] [logo] [logo] [logo]   ← auto-scroll marquee   │
└──────────────────────────────────────────────────────────────────────┘
```
**Copy:** Trusted by teams building with AI
> ⚠️ Only use logos you have written permission for. If you have fewer than 5, use client *names* in text form instead of a weak logo row.

### 4.3 The Four Pillars (core section)

```
┌────────────────┬────────────────┬────────────────┬────────────────┐
│   [icon]       │   [icon]       │   [icon]       │   [icon]       │
│   HIRE         │   BUILD        │   PRODUCTS     │   ADVISE       │
│                │                │                │                │
│  Engineers     │  We take the   │  Voice AI,     │  Strategy,     │
│  embedded in   │  project and   │  CRM, ERP,     │  consulting    │
│  your team     │  ship it       │  Dialer        │  and training  │
│                │                │                │                │
│  Explore →     │  Explore →     │  Explore →     │  Explore →     │
└────────────────┴────────────────┴────────────────┴────────────────┘
```

**Copy:**
- **Section H2:** Four ways to work with us
- **Hire** — Engineers on demand. Forward deployed engineers, AI and agentic AI engineers, full-stack, security and support teams. Vetted, onboarded, and productive in weeks — not quarters.
- **Build** — On-demand projects and solutions. You describe the outcome. We scope it, build it, deploy it, and hand it over documented.
- **Products** — Ready-to-deploy platforms. Neno Voice, Dialer, CRM and ERP — built for businesses that want to buy the outcome, not manage a build.
- **Advise** — Consulting and corporate training. AI strategy, product direction, MVP-to-production, GTM, and hands-on training for your team.

### 4.4 Hire Engineers — featured block

```
┌──────────────────────────────────────────────────────────────────────┐
│  ENGINEERS ON DEMAND                                                 │
│  Your AI force, on your team, from week one.                         │
│                                                                      │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                     │
│  │  FDE    │ │   AI    │ │ Agentic │ │ Claude  │                     │
│  │         │ │Engineer │ │   AI    │ │Engineer │                     │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                     │
│  │Full     │ │Backend  │ │Security │ │  App    │                     │
│  │Stack    │ │         │ │         │ │ Support │                     │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘                     │
│                                                                      │
│                  [ See all roles & rates → ]                         │
└──────────────────────────────────────────────────────────────────────┘
```

**Copy:**
- **H2:** Engineers on demand
- **Sub:** Hire engineers who already work with LLMs, agents and modern stacks every day. Contract, contract-to-hire, or a full embedded squad.
- **Micro-line under CTA:** Typical placement: [X] business days from brief to first day.

### 4.5 How We Work

```
┌──────────────────────────────────────────────────────────────────────┐
│   01 ─────── 02 ─────── 03 ─────── 04                                │
│   Discovery  Match /     Build /    Handover                         │
│              Scope       Deploy     & Support                        │
└──────────────────────────────────────────────────────────────────────┘
```

**Copy:**
1. **Discovery** — A 30-minute call. We map the outcome you want, your stack, and your constraints.
2. **Match or Scope** — For hiring, we shortlist from our vetted bench. For builds, you get a fixed scope, timeline and price.
3. **Build & Deploy** — Our engineers work inside your process — your tools, your standups, your repo.
4. **Handover & Support** — Documentation, knowledge transfer, and an ongoing support option.

### 4.6 Case Study Highlight

```
┌──────────────────────────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                │
│  │ [Client]     │  │ [Client]     │  │ [Client]     │                │
│  │ Challenge →  │  │ Challenge →  │  │ Challenge →  │                │
│  │ Result:      │  │ Result:      │  │ Result:      │                │
│  │ [metric]     │  │ [metric]     │  │ [metric]     │                │
│  │ Read story → │  │ Read story → │  │ Read story → │                │
│  └──────────────┘  └──────────────┘  └──────────────┘                │
└──────────────────────────────────────────────────────────────────────┘
```
**Copy:** **H2:** Customer success stories · **Sub:** Real deployments, real numbers. · **CTA:** View all case studies →

### 4.7 Industries Strip

```
┌──────────────────────────────────────────────────────────────────────┐
│  Manufacturing │ BFSI & Fintech │ Healthcare │ Retail & D2C │ IT Services │
└──────────────────────────────────────────────────────────────────────┘
```
**Copy:** **H2:** Industries we build for

### 4.8 Closing CTA

```
┌──────────────────────────────────────────────────────────────────────┐
│              Tell us what you're trying to ship.                     │
│        We'll tell you what it takes — people, plan and price.        │
│                                                                      │
│              [ Book a 30-min Call ]   [ Send a Brief ]               │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 5. HIRE ENGINEERS (Pillar Page)

> This is your highest-converting page. Give it the most design attention.

```
┌──────────────────────────────────────────────────────────────────────┐
│  HERO                                                                │
│  Hire AI engineers who ship.                                         │
│  Vetted engineers embedded in your team — contract, C2H, or squad.   │
│  [ Share your requirement ]  [ See roles ]                           │
├──────────────────────────────────────────────────────────────────────┤
│  WHY NENO — 4 stat/value cards                                       │
│  [Vetting]  [Speed]  [Timezone]  [Flexibility]                       │
├──────────────────────────────────────────────────────────────────────┤
│  ROLES — grid of 8-10 role cards (each expands or links to sub-page) │
├──────────────────────────────────────────────────────────────────────┤
│  VETTING FUNNEL — 5-stage horizontal stepper                         │
├──────────────────────────────────────────────────────────────────────┤
│  ENGAGEMENT MODELS — 3-column comparison table                       │
├──────────────────────────────────────────────────────────────────────┤
│  FAQ accordion                                                       │
├──────────────────────────────────────────────────────────────────────┤
│  CTA band                                                            │
└──────────────────────────────────────────────────────────────────────┘
```

### Copy — Hero
- **H1:** Hire AI engineers who ship.
- **Sub:** Neno Hire places vetted AI, agentic and full-stack engineers directly into your team. They use your tools, join your standups, and start delivering in weeks.

### Copy — Why Neno (4 cards)
- **5-stage vetting** — Every engineer clears a five-stage funnel covering fundamentals, hands-on AI work, system design, communication and a client-style trial task.
- **Fast placement** — Bench capacity available now. Shortlist in [X] days, onboarding in [X].
- **Overlapping hours** — Teams working across India, US, UK, UAE and Australia time zones.
- **Scale up or down** — Start with one engineer. Grow to a squad. Stop with [X] days' notice.

### Copy — Role Cards

**Forward Deployed Engineer (FDE)**
Sits with your customers and your product team. Turns real deployment friction into shipped fixes. Best when your AI product needs to survive contact with real users.
*Skills: Python/TypeScript · LLM APIs · integrations · customer-facing debugging*

**AI Engineer**
Builds and ships AI features into production — RAG pipelines, evaluation harnesses, inference optimisation, model integration.
*Skills: Python · LangChain/LlamaIndex · vector DBs · evals · MLOps*

**Agentic AI Engineer**
Designs multi-step agent systems that actually complete tasks — tool use, orchestration, memory, guardrails and failure handling.
*Skills: agent frameworks · tool/function calling · orchestration · observability*

**Claude & LLM Engineer**
Specialists in Anthropic's Claude and the wider LLM stack — prompt architecture, context engineering, MCP integrations, fine-tuning and cost/latency tuning.
*Skills: Claude API · MCP · prompt & context engineering · fine-tuning · evaluation*

**Software Product Developer**
Owns a product surface end to end — discovery, architecture, build, release. For teams that need a builder, not just a coder.
*Skills: product thinking · full-stack delivery · release ownership*

**Full Stack Engineer**
Frontend to database, one owner. React/Next on the front, Node/Python behind it.
*Skills: React · Next.js · Node · Python · SQL/NoSQL*

**Backend Engineer**
APIs, data pipelines and services that stay up under load.
*Skills: Python/Node/Go · REST & GraphQL · Postgres · queues · caching*

**Security Engineer**
Application and cloud security — reviews, hardening, compliance readiness, and security review of AI systems including prompt injection and data-leakage risk.
*Skills: appsec · cloud security · threat modelling · compliance*

**UI/UX Engineer**
Interfaces people can actually use — design systems, prototypes, and front-end implementation.
*Skills: Figma · design systems · React implementation · accessibility*

**Cloud & DevOps Engineer**
Infrastructure, CI/CD, cost control and reliable deploys on AWS, Azure or GCP.
*Skills: AWS/Azure/GCP · Docker · Kubernetes · Terraform · CI/CD*

**Application Support Team**
Keep your existing applications running. Monitoring, bug fixes, upgrades, and a documented SLA — including legacy systems your in-house team doesn't want to touch.
*Coverage: L1–L3 support · [X]-hour response SLA · handover documentation*

### Copy — Vetting Funnel (5 stages)
1. **Screening** — Profile, stack depth and real project history.
2. **Technical assessment** — Live coding and hands-on AI/LLM task.
3. **System design** — Architecture, trade-offs, and scale thinking.
4. **Communication round** — English fluency and client-readiness.
5. **Trial task** — A scoped, client-style deliverable before we ever propose them to you.

### Copy — Engagement Models (comparison table)

| | **Dedicated Engineer** | **Squad** | **Contract-to-Hire** |
|---|---|---|---|
| Best for | One clear gap | A full workstream | Building a permanent team |
| Team size | 1–2 engineers | 3–8 engineers + lead | 1+ |
| Commitment | Monthly | Monthly | 3–6 months, then convert |
| Includes | Engineer, your process | Engineer(s), tech lead, delivery cadence | Engineer + conversion path |
| Notice | [X] days | [X] days | Per agreement |
| Pricing | [₹/$ per month] | [₹/$ per month] | [Rate + conversion fee] |

### Copy — FAQ
- *How fast can an engineer start?* — [X] business days from an agreed brief, subject to bench availability.
- *Who manages the engineer?* — You do, day to day. We handle contracts, payroll, HR and back-up cover.
- *What if the fit isn't right?* — Free replacement within the first [X] days, no questions.
- *Do they work in our time zone?* — Yes. We staff for a minimum [X]-hour overlap with your working day.
- *Can they sign our NDA and IP agreements?* — Yes. All engineers work under NDA, and IP assigns to you.
- *Do you support existing/legacy applications?* — Yes, that's a dedicated offering. See Application Support.

---

## 6. SERVICES (Pillar Page)

```
┌──────────────────────────────────────────────────────────────────────┐
│  HERO: You describe the outcome. We ship the system.                 │
├──────────────────────────────────────────────────────────────────────┤
│  6 SERVICE CARDS (2×3 grid) — each links to a detail page            │
├──────────────────────────────────────────────────────────────────────┤
│  DELIVERY PROCESS — 5-step timeline                                  │
├──────────────────────────────────────────────────────────────────────┤
│  TECH STACK — logo grid (LLMs, frameworks, cloud, data)              │
├──────────────────────────────────────────────────────────────────────┤
│  CTA band                                                            │
└──────────────────────────────────────────────────────────────────────┘
```

### Copy — Hero
- **H1:** You describe the outcome. We ship the system.
- **Sub:** End-to-end AI and software delivery — scoped, priced and built by a team that has done it before.

### Copy — Service Cards

**Agentic AI Development**
Agents that do the work, not just answer questions. We build multi-step systems that use tools, call your APIs, handle failure, and stay observable in production.
*Typical build: [4–12] weeks*

**AI Product Development**
Take an AI product from idea to launch. Discovery, architecture, build, deploy, iterate — one accountable team.
*Typical build: [8–16] weeks*

**Vibe Coding Squads**
An AI-native delivery squad that builds at a different speed. Engineers working with Claude and modern AI tooling as a core part of the workflow — with senior review and real engineering discipline on top, so speed never costs you quality.
*Best for: MVPs, internal tools, rapid iteration*

**AI GTM (Go-To-Market)**
AI applied to how you sell. Lead qualification agents, outbound systems, CRM intelligence, voice agents for follow-up, and pipeline analytics — built into your existing sales stack.
*Best for: sales-led teams with volume*

**LLM Fine-Tuning & Deployment**
When prompting isn't enough. Dataset preparation, fine-tuning, evaluation, and secure deployment — including private and on-premise setups for regulated data.
*Best for: domain-specific accuracy, cost reduction, data-sensitive workloads*

**Application Support & Modernization**
Keep what works, fix what doesn't, and bring AI to the rest. Support for existing applications, legacy modernization, and AI capability retrofitted into systems you already run.
*Best for: teams with production systems and no bandwidth*

### Copy — Delivery Process
1. **Discovery workshop** — We map the outcome, users, data and constraints. You get a written scope.
2. **Architecture & estimate** — System design, stack decisions, timeline and fixed price. No surprises later.
3. **Build in sprints** — Two-week sprints with a working demo at the end of each one.
4. **Deploy & harden** — Production deployment, monitoring, evaluation and security review.
5. **Handover or run** — Full documentation and knowledge transfer — or we keep running it for you.

---

## 7. PRODUCTS

```
┌──────────────────────────────────────────────────────────────────────┐
│  HERO: Platforms you can deploy, not projects you have to manage.    │
├──────────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────┐  ┌───────────────────────┐                │
│  │ [Product screenshot]  │  │ [Product screenshot]  │                │
│  │ NENO VOICE            │  │ NENO DIALER           │                │
│  │ copy + bullets        │  │ copy + bullets        │                │
│  │ [ Book a demo ]       │  │ [ Book a demo ]       │                │
│  └───────────────────────┘  └───────────────────────┘                │
│  ┌───────────────────────┐  ┌───────────────────────┐                │
│  │ NENO CRM              │  │ NENO ERP              │                │
│  └───────────────────────┘  └───────────────────────┘                │
├──────────────────────────────────────────────────────────────────────┤
│  INTEGRATIONS strip  ·  SECURITY & COMPLIANCE strip                  │
├──────────────────────────────────────────────────────────────────────┤
│  CTA: Book a product demo                                            │
└──────────────────────────────────────────────────────────────────────┘
```

### Copy

**Neno Voice — AI Voice Agents**
Voice agents that handle real conversations at scale. Inbound support, outbound follow-up, lead qualification and appointment booking — in natural language, in your customers' language.
- Multilingual, including Indian languages
- Connects to your CRM, calendar and helpdesk
- Full call transcripts, recordings and analytics
- Human handoff when the agent should step back
*CTA: Book a Neno Voice demo*

**Neno Dialer**
An intelligent dialing platform for teams that run on outbound. Campaign management, smart routing, live agent assist and complete call analytics — with AI voice agents available on the same stack.
*CTA: See Neno Dialer*

**Neno CRM**
A CRM with AI built into the workflow, not bolted on. Automatic lead scoring, conversation summaries, next-best-action suggestions and pipeline forecasting.
*CTA: See Neno CRM*

**Neno ERP**
Operations, inventory, finance and reporting in one system — configured to how your business actually runs, with AI-assisted reporting and anomaly detection.
*CTA: See Neno ERP*

**Security strip copy:** Your data stays yours. Role-based access, encryption in transit and at rest, audit logs, and on-premise or private-cloud deployment where you need it.

---

## 8. CONSULTING

```
┌──────────────────────────────────────────────────────────────────────┐
│  HERO: Before you build, know what to build.                         │
├──────────────────────────────────────────────────────────────────────┤
│  4 CONSULTING TRACKS (2×2 grid) — each with deliverables list        │
├──────────────────────────────────────────────────────────────────────┤
│  ENGAGEMENT FORMATS: Workshop │ Sprint │ Retainer  (3 cards, pricing)│
├──────────────────────────────────────────────────────────────────────┤
│  ADVISOR PROFILE — Tirth Patel + team credentials                    │
├──────────────────────────────────────────────────────────────────────┤
│  CTA: Book a consulting call                                         │
└──────────────────────────────────────────────────────────────────────┘
```

### Copy — Hero
- **H1:** Before you build, know what to build.
- **Sub:** Most AI projects fail on direction, not on engineering. We help you pick the right problem, the right architecture and the right sequence.

### Copy — Tracks

**AI Strategy Consulting**
Where AI actually creates value in your business — and where it won't. We audit your processes, size the opportunities, and give you a prioritised roadmap with costs and expected returns.
*Deliverables: AI opportunity audit · prioritised roadmap · build-vs-buy recommendation · budget model*

**Software Product Consulting**
Product direction for teams that are stuck. Architecture review, scope discipline, team structure and a delivery plan you can hold people to.
*Deliverables: architecture review · product roadmap · team & hiring plan · technical risk register*

**MVP → Production Consulting**
The hardest gap in AI. Your demo works; your production system doesn't. We cover reliability, evaluation, cost, latency, security and monitoring — everything a prototype quietly skipped.
*Deliverables: production readiness assessment · evaluation framework · cost & latency plan · deployment architecture*

**Marketing & GTM Consulting**
Positioning, channel strategy and an AI-assisted go-to-market motion — from messaging through to the systems that run the pipeline.
*Deliverables: positioning & messaging · channel plan · AI GTM system design · pipeline metrics*

### Copy — Engagement Formats

| **Workshop** | **Sprint** | **Retainer** |
|---|---|---|
| Half or full day, on-site or online | 2–4 weeks, deep dive | Monthly ongoing advisory |
| Alignment and direction | A decision-ready plan | Continuous CXO-level input |
| From [₹/$ ___] | From [₹/$ ___] | From [₹/$ ___] /month |

---

## 9. TRAINING

```
┌──────────────────────────────────────────────────────────────────────┐
│  HERO: Your team, working with AI — not around it.                   │
├──────────────────────────────────────────────────────────────────────┤
│  3 OFFERINGS: Corporate Training │ Trainer on Demand │ Education      │
├──────────────────────────────────────────────────────────────────────┤
│  SAMPLE CURRICULUM — module accordion                                │
├──────────────────────────────────────────────────────────────────────┤
│  PROOF: photos from past sessions + [X] professionals trained         │
├──────────────────────────────────────────────────────────────────────┤
│  CTA: Request a training proposal                                    │
└──────────────────────────────────────────────────────────────────────┘
```

### Copy

**Corporate AI Training**
Hands-on AI training for teams that need to use it on Monday, not admire it in a slide deck. Built around your actual workflows — sales, operations, finance, HR or engineering.
*Format: 2-hour, half-day or multi-day · on-site or online*

**Trainer on Demand**
Bring in a specialist trainer for a session, a cohort or a full programme. Agentic AI, LLM engineering, prompt and context engineering, AI for business functions.

**Education Consulting**
For colleges and institutions: AI curriculum design, faculty enablement and industry-aligned programme structure.

**Sample modules:**
1. What AI can and cannot do for your business — the honest version
2. Working with LLMs day to day: prompting, context and verification
3. Agentic AI: tools, workflows and where they break
4. Function-specific labs — your team's real tasks, rebuilt with AI
5. Governance, security and responsible use
6. Building your internal AI playbook

---

## 10. INDUSTRIES

```
┌──────────────────────────────────────────────────────────────────────┐
│  HERO + 5 industry cards, each with: problems → what we build → link  │
└──────────────────────────────────────────────────────────────────────┘
```

**Manufacturing** — Production planning, quality inspection, maintenance prediction, supply chain visibility, and AI agents for vendor and order coordination.
**BFSI & Fintech** — Document processing, KYC automation, risk analysis, customer service agents, and compliance-grade deployments.
**Healthcare** — Patient intake and follow-up voice agents, clinical documentation support, appointment operations.
**Retail & D2C** — Demand forecasting, customer service automation, catalogue intelligence, personalised outreach.
**IT Services & Agencies** — Bench augmentation, white-label AI delivery, and AI capability your clients are already asking for.

---

## 11. CASE STUDIES

**Index page:** filterable card grid (by service / industry).
**Card:** `[Client logo] · Industry tag · Headline result · One-line challenge · Read story →`

**Story page template:**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [Client name] — [Result headline]                                   │
│  Industry · Services used · Duration                                 │
├──────────────────────────────────────────────────────────────────────┤
│  THE CHALLENGE     (2–3 paragraphs)                                  │
│  WHAT WE BUILT     (2–3 paragraphs + architecture diagram)           │
│  THE RESULT        (3 metric tiles)                                  │
│  CLIENT QUOTE      (with name, title, photo)                         │
├──────────────────────────────────────────────────────────────────────┤
│  Next case study →   |   [ Start a similar project ]                 │
└──────────────────────────────────────────────────────────────────────┘
```
> Publish only with written client approval. Where a client won't be named, anonymise as "A [industry] company with [size]" — still credible, still legal.

---

## 12. ABOUT US

```
┌──────────────────────────────────────────────────────────────────────┐
│  HERO: Built in GIFT City. Deployed worldwide.                       │
├──────────────────────────────────────────────────────────────────────┤
│  OUR STORY — 2-3 paragraphs + founding timeline                      │
├──────────────────────────────────────────────────────────────────────┤
│  LEADERSHIP BOARD — photo cards with name, role, one-line bio, LinkedIn│
├──────────────────────────────────────────────────────────────────────┤
│  CREDENTIALS — DPIIT · Startup India · [certifications] · [memberships]│
├──────────────────────────────────────────────────────────────────────┤
│  OFFICE & LOCATION — photos + embedded map + full address            │
├──────────────────────────────────────────────────────────────────────┤
│  CTA: Work with us  |  Join us                                       │
└──────────────────────────────────────────────────────────────────────┘
```

### Copy — Our Story
> Neno Technology was built on a simple observation: every company wants AI in production, and almost none of them have the engineers to get it there.
>
> We started as an AI engineering team in GIFT City, Gujarat, and grew into four connected practices — placing engineers, building AI systems, shipping our own products, and advising the leaders who have to make the call. AI Neno Innovation Private Limited is DPIIT-recognized under Startup India.
>
> What ties it together is the same thing throughout: engineers who have actually shipped AI to production, working directly with the people who need it.

### Copy — Leadership section
- **H2:** Leadership Board
- **Card format:** `[Photo] · Name · Role · One line on what they own · [LinkedIn]`
- **Tirth Patel — Founder & CEO:** Founder of Neno Technology, co-founder of Gujarat AI Society and Agentic Bharat, TEDx speaker. Works directly with clients on AI strategy and delivery.
- `[Add remaining leadership — 3 to 6 people maximum. An empty leadership page is worse than none.]`

### Copy — Location
> **Neno Technology**
> AI Neno Innovation Private Limited
> [Full address], GIFT City, Gandhinagar, Gujarat, India
> [Embedded Google Map]
> Visiting? [email] · [phone]

---

## 13. CONTACT / BOOK A CALL

```
┌───────────────────────────────┬──────────────────────────────────────┐
│  Tell us what you need.       │   FORM                               │
│                               │   Name*        Work email*           │
│  We reply within [X] hours    │   Company*     Phone                 │
│  on business days.            │   Country                            │
│                               │   I'm looking for* ▾                 │
│  [email]                      │     · Hiring engineers               │
│  [phone / WhatsApp]           │     · A project built                │
│  [GIFT City address]          │     · A product demo                 │
│                               │     · Consulting                     │
│  [ Or book directly → ]       │     · Corporate training             │
│  (Calendly / Cal.com embed)   │   Tell us about it (textarea)        │
│                               │   [ Send ]                           │
└───────────────────────────────┴──────────────────────────────────────┘
```
**Form rules:** 6 fields maximum before the submit button. Every extra field costs you leads. Route submissions by the "I'm looking for" dropdown straight into your CRM.

---

## 14. Design Direction

- **Layout:** Generous whitespace, one idea per screen. Max content width ~1200px.
- **Type:** One strong sans for headings (Geist, Inter Tight or Satoshi), one readable sans for body (Inter). Two weights only.
- **Colour:** Near-black base + off-white background + one accent used sparingly (CTAs, links, key numbers only). Resist gradient-everything — it dates fast.
- **Motion:** Subtle fade/slide on scroll. Nothing that delays reading.
- **Imagery:** Real office photos, real team photos, real product screenshots. Avoid glowing-brain and robot-handshake stock imagery — it signals that you have nothing real to show.
- **Mobile:** Design mobile first. A large share of your Indian traffic and most LinkedIn traffic is mobile.

**Build stack recommendation:** Next.js + Tailwind, hosted on Vercel, with a headless CMS (Sanity or Payload) for case studies, roles and blog so your team can publish without a developer.

---

## 15. Conversion & Measurement

**CTA hierarchy (never more than two on a screen):**
- Primary: *Book a Call*
- Secondary: *Share your requirement* / *See roles* / *Book a demo*

**Track from day one:** form submissions by type · calls booked · time on Hire page · case study reads · CTA click-through · traffic source. Set up GA4 + a call-booking tool + CRM routing before launch, not after.

**Lead magnets worth building (phase 2):**
- "AI Engineer Hiring Guide" — role definitions, rate benchmarks, interview questions
- "MVP to Production Checklist" — 40-point readiness list
- Rate calculator on the Hire page

---

## 16. Build Sequence

**Phase 1 — Launch (weeks 1–4)**
Home · Hire Engineers · Services · Products · About · Contact
*Goal: a credible, converting site that can take real traffic.*

**Phase 2 — Depth (weeks 5–8)**
Individual role pages · individual service pages · Consulting · Training · Industries · 3 case studies · Careers
*Goal: SEO surface area and sales enablement.*

**Phase 3 — Compounding (ongoing)**
Insights/blog · lead magnets · more case studies · localised pages for US/UK/UAE/AU

---

## 17. Content Checklist Before Launch

Collect these — the site can't go live convincingly without them:

- [ ] Final logo files (SVG) and brand colours
- [ ] 5–8 client logos **with written permission**
- [ ] 3 case studies with client-approved metrics
- [ ] Leadership photos and bios (3–6 people)
- [ ] Office and team photographs
- [ ] Product screenshots or demo recordings for Voice, Dialer, CRM, ERP
- [ ] Real numbers: engineers on bench, placement time, projects delivered, people trained
- [ ] Full registered address, CIN, GST, contact email and phone
- [ ] Privacy Policy and Terms (required — you handle client data)
- [ ] Pricing or "from" ranges for each engagement model
