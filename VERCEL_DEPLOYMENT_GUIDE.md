# Vercel Deployment Guide for Neno Technology

This guide provides step-by-step instructions to deploy the Neno Technology Next.js web application to **[Vercel](https://vercel.com)** with optimal performance, zero build errors, and full CRM integration support.

---

## Prerequisites

1. A **GitHub** account with access to [`https://github.com/MIT-17-PATEL/neno-tech.git`](https://github.com/MIT-17-PATEL/neno-tech.git).
2. A **Vercel** account ([sign up for free](https://vercel.com/signup) using your GitHub account).
3. (Optional) Your Odoo CRM and Power Automate webhook URLs.

---

## Step-by-Step Deployment to Vercel

### Step 1: Import Project into Vercel

1. Log in to [vercel.com](https://vercel.com/dashboard).
2. Click **"Add New..."** > **"Project"**.
3. Under **"Import Git Repository"**, select `neno-tech`.

---

### Step 2: Configure Root Directory (CRITICAL)

Because the Next.js application resides inside the `source/` folder:

1. In the **"Configure Project"** screen, locate **"Root Directory"**.
2. Click **"Edit"** next to `./`.
3. Select or enter:
   ```
   source
   ```
4. Click **"Continue"**.

> **Framework Preset**: Vercel will automatically detect **Next.js**.
> **Build Command**: `next build` (or `npm run build`)
> **Output Directory**: `.next`
> **Install Command**: `npm install`

---

### Step 3: Configure Environment Variables

Under the **"Environment Variables"** section in Vercel, add the following keys (also documented in `.env.example`):

| Variable Name | Required | Description | Example |
|---|---|---|---|
| `ODOO_URL` | Optional | Base URL of your Odoo CRM instance | `https://your-company.odoo.com` |
| `ODOO_DB` | Optional | Odoo database name | `production_db` |
| `ODOO_USERNAME` | Optional | User email/login with CRM write access | `admin@your-company.com` |
| `ODOO_API_KEY` | Optional | Odoo external API Key | `your_generated_api_key` |
| `CONTACT_EXCEL_WEBHOOK_URL` | Optional | Power Automate / Logic Apps webhook for consultations | `https://prod-xx.westus.logic.azure.com/...` |
| `MICROSOFT_EXCEL_WEBHOOK_URL` | Optional | Power Automate / Logic Apps webhook for career applications | `https://prod-xx.westus.logic.azure.com/...` |

> *Note: If credentials are not provided, the application will still deploy and run smoothly. All forms feature graceful fallbacks to ensure user forms never fail or crash.*

---

### Step 4: Click Deploy

1. Click the **"Deploy"** button.
2. Vercel will:
   - Install dependencies (`npm install`)
   - Compile static pages and serverless API functions (`npm run build`)
   - Assign you a production URL (e.g., `https://neno-tech.vercel.app`)

---

### Step 5: (Optional) Add Custom Domain

1. In your Vercel Project Dashboard, navigate to **Settings** > **Domains**.
2. Enter your custom domain (e.g. `nenotechnology.com` or `www.nenotechnology.com`).
3. Follow the DNS instructions provided by Vercel:
   - **A Record**: `76.76.21.21`
   - **CNAME Record**: `cname.vercel-dns.com`
4. SSL/TLS certificates will be automatically provisioned by Let's Encrypt via Vercel.

---

## Architecture & Serverless Endpoints

The project builds cleanly with **Next.js 16 (App Router)** and **Turbopack**:

- **Static Pages (SSG/ISR)**: Over 84 static routes (Services, Consulting, Team, About, Industries, Blog, etc.) are pre-rendered for instant global edge delivery.
- **Serverless API Functions**:
  - `POST /api/contact-lead`: Handles consultation inquiries, validates phone numbers & data, and forwards leads to Power Automate.
  - `POST /api/careers-apply`: Handles job candidate applications and resumes.
  - `POST /api/odoo-lead`: Direct external JSON-RPC CRM lead creation in Odoo.
- **Security Headers**: Standard enterprise headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) are configured in `next.config.ts`.

---

## Verifying the Deployment

Once deployed:
1. Visit your Vercel URL (e.g. `https://your-project.vercel.app`).
2. Test navigation across key pages (`/services`, `/consulting`, `/careers`, `/contact-us`).
3. Submit a test consultation via `/contact-us` or the Consultation modal to verify API response.
4. Check the **Runtime Logs** in the Vercel Dashboard under **Logs** to observe real-time API execution.
