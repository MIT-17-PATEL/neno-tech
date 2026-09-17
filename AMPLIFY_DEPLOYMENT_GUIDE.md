# AWS Amplify Deployment Guide for Neno Technology

This guide outlines how to deploy the **Neno Technology Enterprise Website** (Next.js 16 App Router SSR with PostgreSQL and integrations) to **AWS Amplify Hosting**.

---

## 1. Architecture Overview

- **Framework**: Next.js 16 (App Router + React 19)
- **Deployment Type**: SSR (Server-Side Rendering + Static Site Generation)
- **Database**: AWS RDS PostgreSQL (`awsneno` on `neno-db.cu56aywm8089.us-east-1.rds.amazonaws.com`)
- **Build Configurations**: Pre-configured in [`amplify.yml`](./amplify.yml) and [`source/amplify.yml`](./source/amplify.yml).

---

## 2. Step-by-Step AWS Amplify Console Setup

### Step 1: Create a New App in AWS Amplify
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/amplify).
2. Ensure you are in your desired region (e.g., `us-east-1` to match your RDS instance).
3. Click **Create new app** (or **Host web app**).
4. Select **GitHub** as the repository provider and click **Next**.
5. Authorize AWS Amplify to access your repository and choose:
   - **Repository**: `MIT-17-PATEL/neno-tech` (or your repo name)
   - **Branch**: `ajay-fixes` (or `main`)
6. If connecting a monorepo or subdirectory:
   - Check **Connecting a monorepo? Pick a folder.**
   - Set **App root** to: `source`

---

### Step 2: Configure Build Settings
Amplify will automatically detect the [`amplify.yml`](./amplify.yml) file. Verify that the build specification matches:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - nvm use 20 || nvm use 22 || true
        - node -v
        - npm ci --cache .npm --prefer-offline
    build:
      commands:
        - env | grep -e NEXT_PUBLIC_ -e DATABASE_URL -e ODOO_ -e CONTACT_EXCEL_ -e MICROSOFT_EXCEL_ >> .env.production || true
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - .next/cache/**/*
      - .npm/**/*
      - node_modules/**/*
```

---

### Step 3: Add Environment Variables in AWS Amplify
In Amplify Console, go to **App settings** ➔ **Environment variables** ➔ **Manage variables**, and add the following:

| Key | Value | Purpose |
|-----|-------|---------|
| `DATABASE_URL` | `postgresql://postgres:TirthAshishkumarPatel02032005@neno-db.cu56aywm8089.us-east-1.rds.amazonaws.com:5432/awsneno` | AWS RDS PostgreSQL Connection |
| `ODOO_URL` | `https://neno-techy.odoo.com` | Odoo CRM API Endpoint |
| `ODOO_DB` | `neno-techy` | Odoo Database Name |
| `ODOO_USERNAME` | `mitpatel@nenotechnology.com` | Odoo API User |
| `ODOO_API_KEY` | `1bda2e5a828e0c7383f82aac45d685cd32b1ceac` | Odoo API Key |
| `MICROSOFT_EXCEL_WEBHOOK_URL` | *(your Power Automate webhook URL)* | Newsletter / Lead capture webhook |
| `CONTACT_EXCEL_WEBHOOK_URL` | *(your Contact Form webhook URL)* | Contact form webhook |
| `AMPLIFY_DIFF_DEPLOY` | `false` | Ensures clean incremental builds |

---

### Step 4: Configure Node.js Version (Build Image)
Under **App settings** ➔ **Build settings** ➔ **Build image settings**:
- Set **Build image** to: **Amazon Linux 2023** (or ensure Node.js 20+ is selected).
- In **Package version overrides**, you can optionally specify:
  - `Node.js version`: `20` (or `22`)

---

### Step 5: Save & Deploy
1. Click **Save and deploy**.
2. Amplify will execute:
   - **Provision**: Spin up the build container
   - **Build**: Run `npm ci` and `next build`
   - **Deploy**: Deploy SSR compute and static assets to CloudFront CDN
3. When the build completes with a green checkmark, click your **Amplify domain** (`https://*.amplifyapp.com`) to view the live site.

---

## 3. Database Security Group Access (AWS RDS)

Because your database is hosted on **AWS RDS** (`neno-db.cu56aywm8089.us-east-1.rds.amazonaws.com`), ensure the RDS Security Group allows incoming PostgreSQL traffic:
1. Go to **AWS RDS Console** ➔ **Databases** ➔ Select `neno-db`.
2. Under **Connectivity & security**, click the **VPC security groups**.
3. Under **Inbound rules**, verify that port `5432` (PostgreSQL) allows connections.
   - For public access: Type `PostgreSQL`, Port `5432`, Source `0.0.0.0/0` (or your VPC CIDR).

---

## 4. Custom Domain Setup (Optional)
To attach your custom domain (`nenotechnology.com`):
1. In Amplify Console, navigate to **App settings** ➔ **Domain management**.
2. Click **Add domain**.
3. Enter your domain name and follow the DNS verification steps (Amplify provisions free SSL certificates via AWS Certificate Manager).
