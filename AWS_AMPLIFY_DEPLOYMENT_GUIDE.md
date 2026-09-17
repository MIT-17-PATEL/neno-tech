# Deploying Neno Technology Website on AWS Amplify Hosting

This guide provides step-by-step instructions for deploying the **Neno Technology** Next.js App Router project to **AWS Amplify Hosting**.

---

## 1. Prerequisites
- An active **AWS Account** with access to the AWS Amplify Console.
- Your code pushed to a Git provider (GitHub, GitLab, Bitbucket, or AWS CodeCommit).
- A remote PostgreSQL database (e.g. AWS RDS, Neon, Supabase, or Railway) if you are using the Admin & Blog features.

---

## 2. Configuration File (`amplify.yml`)
An [amplify.yml](file:///c:/Users/allle/OneDrive/Desktop/neno-tech/amplify.yml) build specification file has been added to the root of the repository:

```yaml
version: 1
applications:
  - appRoot: source
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci --cache .npm --prefer-offline
        build:
          commands:
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

## 3. Step-by-Step Deployment in AWS Amplify Console

### Step 3.1: Create New App in AWS Amplify
1. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify/).
2. Click **Create new app** (or **Deploy an app**).
3. Select **GitHub** (or your Git provider) and click **Next**.
4. Authorize AWS Amplify to access your repository and choose `MIT-17-PATEL/neno-tech`.
5. Select your target deployment branch (`main` or `mit-dev`).

### Step 3.2: Configure Monorepo / App Root
Because the Next.js application is located inside the `source/` folder:
- If prompted with **"Connecting a monorepo?"**, check the box and set the **App root** to: `source`.
- Amplify will automatically detect the build settings from the root [amplify.yml](file:///c:/Users/allle/OneDrive/Desktop/neno-tech/amplify.yml).

### Step 3.3: Set Node.js Version
To ensure Next.js 16 and React 19 build smoothly:
1. In the **Build settings** section (or under **App settings** > **Build image settings**), verify the build image is using **Node.js 20.x or 22.x**.
2. If needed, add an environment variable:
   - `_CUSTOM_IMAGE`: `amplify:al2023`
   - or set `nvm use 20` in the preBuild commands.

### Step 3.4: Configure Environment Variables
Under **Advanced settings** -> **Environment variables**, add the following keys:

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `DATABASE_URL` | `postgresql://user:pass@host:5432/nenodb?sslmode=require` | Remote PostgreSQL database string |
| `ODOO_URL` | `https://your-company.odoo.com` | Odoo ERP instance URL |
| `ODOO_DB` | `your_odoo_database` | Odoo Database name |
| `ODOO_USERNAME` | `admin@your-company.com` | Odoo user email |
| `ODOO_API_KEY` | `your_odoo_api_key` | Odoo API key |
| `CONTACT_EXCEL_WEBHOOK_URL` | `https://prod-xx.westus.logic.azure.com/...` | Power Automate / Logic App webhook for contact forms |
| `MICROSOFT_EXCEL_WEBHOOK_URL` | `https://prod-xx.westus.logic.azure.com/...` | Power Automate / Logic App webhook for career applications |

### Step 3.5: Save and Deploy
1. Click **Save and Deploy**.
2. AWS Amplify will provision a build container, install dependencies, run the Next.js production build, and host the site.
3. Once completed, Amplify will provide your live URL (e.g. `https://main.d123456789.amplifyapp.com`).

---

## 4. Setting up a Custom Domain & SSL
1. In the Amplify console, navigate to **App settings** > **Domain management**.
2. Click **Add domain**.
3. Enter your custom domain (e.g. `nenotechnology.com`).
4. Follow the DNS instructions to add CNAME/ALIAS records to your DNS provider (e.g., Route 53, GoDaddy, Cloudflare).
5. AWS Amplify will automatically provision and renew a free SSL/TLS certificate.

---

## 5. Local Build Verification
You can test the build locally before pushing:
```bash
cd source
npm run build
```
