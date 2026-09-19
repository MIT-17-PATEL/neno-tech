# API Inventory & Migration Specification

This document catalogues all backend API routes discovered in `source/src/app/api/` of the Next.js project and specifies their migration status in AWS Lambda (`source/neno-lambda-rds-test/index.mjs`).

---

## Complete Route Inventory

| METHOD | PATH | SOURCE FILE | AUTH | DATABASE | STATUS |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/test` | *Standalone connectivity test* | None | RDS Connectivity Check | **Migrated** |
| **GET** | `/api/case-studies` | *Standalone endpoint* | None (Read-only) | `case_studies` | **Migrated** |
| **POST** | `/api/case-studies` | *Standalone endpoint* | None / Admin | `case_studies` | **Migrated** |
| **GET** | `/api/blogs` | `src/app/api/blogs/route.ts` | None (Public) | `blogs` (with fallback) | **Migrated** |
| **POST** | `/api/careers-apply` | `src/app/api/careers-apply/route.ts` | None (Public) | None (MS Excel Webhook) | **Migrated** |
| **POST** | `/api/contact-lead` | `src/app/api/contact-lead/route.ts` | None (Public) | None (Power Automate) | **Migrated** |
| **POST** | `/api/odoo-lead` | `src/app/api/odoo-lead/route.ts` | None (Public) | None (Odoo JSON-RPC) | **Migrated** |
| **POST** | `/api/admin/auth` | `src/app/api/admin/auth/route.ts` | Public (Credentials) | `users` | **Migrated** |
| **GET** | `/api/admin/blogs` | `src/app/api/admin/blogs/route.ts` | Admin Session / Token | `blogs` | **Migrated** |
| **POST** | `/api/admin/blogs` | `src/app/api/admin/blogs/route.ts` | Admin Session / Token | `blogs` | **Migrated** |
| **PUT** | `/api/admin/blogs/{id}` | `src/app/api/admin/blogs/[id]/route.ts` | Admin Session / Token | `blogs` | **Migrated** |
| **DELETE** | `/api/admin/blogs/{id}` | `src/app/api/admin/blogs/[id]/route.ts` | Admin Session / Token | `blogs` | **Migrated** |
| **GET** | `/api/admin/content/{collection}` | `src/app/api/admin/content/[collection]/route.ts` | Admin Session / Token | `case_studies`, `projects` | **Migrated** |
| **POST** | `/api/admin/content/{collection}` | `src/app/api/admin/content/[collection]/route.ts` | Admin Session / Token | `case_studies`, `projects` | **Migrated** |
| **PUT** | `/api/admin/content/{collection}/{id}` | `src/app/api/admin/content/[collection]/[id]/route.ts` | Admin Session / Token | `case_studies`, `projects` | **Migrated** |
| **DELETE** | `/api/admin/content/{collection}/{id}` | `src/app/api/admin/content/[collection]/[id]/route.ts` | Admin Session / Token | `case_studies`, `projects` | **Migrated** |
| **GET** | `/api/admin/settings` | `src/app/api/admin/settings/route.ts` | Admin Session / Token | `users` | **Migrated** |
| **PUT** | `/api/admin/settings` | `src/app/api/admin/settings/route.ts` | Admin Session / Token | `users` | **Migrated** |
| **OPTIONS** | `/*` | *CORS Preflight* | None | None | **Migrated** |

---

## Centralized Admin Security Gateway

All routes under `/api/admin/*` are strictly guarded by a centralized authentication gate in `index.mjs` before route dispatch or database access:

```text
Incoming Request
      │
      ▼
Is Path in `/api/admin/*` Scope?
      ├── NO  ──► Public Route Handler (Blogs, Leads, Case Studies, Test)
      │
      └── YES ──► Is it strictly `POST /api/admin/auth`?
                    ├── YES ──► Public Login / Logout Route
                    │
                    └── NO  ──► 🔒 `requireAdminAuth(event)`
                                      │
                                      ├── Missing / Invalid / Expired Token
                                      │     └──► ❌ HTTP 401 Unauthorized (Immediate exit, 0 DB queries)
                                      │
                                      └── Valid Session / Bearer Token
                                            └──► ✅ Allowed: Execute Protected Admin DB Query
```

- **Protection against bypasses**:
  - Normalizes multiple slashes (`//api//admin//blogs` -> `/api/admin/blogs`)
  - Strips trailing slashes (`/api/admin/blogs/` -> `/api/admin/blogs`)
  - Decodes URL-encoded slashes iteratively (`%2f` -> `/`)
  - Normalizes casing (case-insensitive scope check)
  - Strips query parameters before route checking
  - Strips API Gateway stage prefixes if present
- **Token verification**:
  - Checks cookies (`neno-admin-session`), Authorization header (`Bearer <token>`), and `x-admin-token`.
  - Verifies HMAC-SHA256 signature using `crypto.timingSafeEqual` and checks database user existence.

---

## Detailed Route Specifications

### 1. Public & Testing Endpoints

#### `GET /test`
- **Purpose**: Validates Lambda execution and connectivity to AWS RDS PostgreSQL.
- **Database**: Executes `SELECT NOW() AS current_time;`.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Lambda connected to PostgreSQL successfully!",
    "database": "<DB_NAME>",
    "current_time": "<TIMESTAMP>"
  }
  ```

#### `GET /api/case-studies`
- **Purpose**: Public read-only listing of case studies.
- **Database**: Executes `SELECT * FROM case_studies ORDER BY created_at DESC;`.
- **Response**: `{ "success": true, "data": [...] }`.

#### `POST /api/case-studies`
- **Purpose**: Direct insertion of case studies.
- **Body**: `{ title, slug, category, client, publishDate, shortDescription, content, link, status }`.
- **Database**: Parameterized `INSERT INTO case_studies ... RETURNING *`.
- **Response**: HTTP 201 with created record.

#### `GET /api/blogs`
- **Purpose**: Returns published blogs (`status = 'Published'`) ordered by publish date.
- **Database**: Table `blogs` (or `blog_posts` view).
- **Fallback**: If the database is empty or unreachable during build/initialization, returns 6 default baseline AI agency articles from `BlogV1Data`.
- **Response**: HTTP 200 JSON array of formatted blog objects.

---

### 2. Lead Generation & External Integrations

#### `POST /api/contact-lead`
- **Purpose**: General inquiry and consultation form submissions.
- **Body**: `{ name, email, phone, company, country, state, city, designation, category, role, interest, requirements, countryCode, dialCode }`.
- **Database**: None.
- **Integration**: Power Automate / Microsoft Excel webhook via `CONTACT_EXCEL_WEBHOOK_URL`.
- **Response**: HTTP 200 `{ "success": true, "message": "Thanks for contacting us! We'll get back to you shortly.", "data": contactData }`.

#### `POST /api/careers-apply`
- **Purpose**: Job application submissions with optional resume details.
- **Body**: `{ name, email, phone, location, position, experience, portfolio, message, resumeFileName, resumeContent }`.
- **Database**: None.
- **Integration**: Microsoft Excel webhook via `MICROSOFT_EXCEL_WEBHOOK_URL`.
- **Response**: HTTP 200 `{ "success": true, "message": "Thank you! Your application has been received...", "data": applicationData }`.

#### `POST /api/odoo-lead`
- **Purpose**: Submits enterprise leads directly into Odoo CRM (`crm.lead`).
- **Body**: `{ name, email, phone, city, location, company, designation, position, role, category, interest, requirements, message, experience, portfolio }`.
- **Database**: None.
- **Integration**: Odoo JSON-RPC API (`/jsonrpc` with `execute_kw`) with automatic fallback to Web Session (`/web/session/authenticate` + `/web/dataset/call_kw`).
- **Response**: HTTP 200 `{ "success": true, "message": "Your application has been submitted successfully to our CRM!", "leadId": 123 }`.

---

### 3. Admin Authentication & Management

#### `POST /api/admin/auth`
- **Purpose**: Admin login and logout.
- **Body**:
  - Login: `{ "email": "...", "password": "..." }`
  - Logout: `{ "action": "logout" }`
- **Database**: Checks `users` table password hash using `crypto.scryptSync`. Includes fallback for default admin credentials (`admin@neno.com` / `admin123`).
- **Cookie / Header**: Sets `neno-admin-session=<HMAC-token>` cookie (`SameSite=Lax; HttpOnly; Secure`) and returns `token` in JSON body for cross-domain Bearer authorization.

#### `GET /api/admin/blogs`
- **Auth**: Admin authentication required (Cookie or `Authorization: Bearer <token>`).
- **Database**: `SELECT * FROM blogs ORDER BY updated_at DESC`.

#### `POST /api/admin/blogs`
- **Auth**: Admin authentication required.
- **Body**: `{ title, slug, category, author, publishDate, readingTime, shortDescription, content, buttonText, buttonLink, status }`.
- **Database**: Parameterized `INSERT INTO blogs (...) VALUES (...) RETURNING ...`.

#### `PUT /api/admin/blogs/{id}`
- **Auth**: Admin authentication required.
- **Database**: Parameterized `UPDATE blogs SET ... WHERE id=$1 RETURNING ...`.

#### `DELETE /api/admin/blogs/{id}`
- **Auth**: Admin authentication required.
- **Database**: Parameterized `DELETE FROM blogs WHERE id=$1`.

#### `GET /api/admin/content/{collection}`
- **Auth**: Admin authentication required.
- **Supported Collections**:
  - `case-studies` -> table `case_studies`
  - `projects` -> table `projects`
- **Database**: Parameterized `SELECT ... FROM "<tableForCollection>" ORDER BY updated_at DESC`.

#### `POST /api/admin/content/{collection}`
- **Auth**: Admin authentication required.
- **Database**: Parameterized `INSERT INTO "<tableForCollection>" (...) VALUES (...) RETURNING ...`.

#### `PUT /api/admin/content/{collection}/{id}`
- **Auth**: Admin authentication required.
- **Database**: Parameterized `UPDATE "<tableForCollection>" SET ... WHERE id=$1 RETURNING ...`.

#### `DELETE /api/admin/content/{collection}/{id}`
- **Auth**: Admin authentication required.
- **Database**: Parameterized `DELETE FROM "<tableForCollection>" WHERE id=$1`.

#### `GET /api/admin/settings`
- **Auth**: Admin authentication required.
- **Database**: `SELECT name, email, role FROM users ORDER BY created_at LIMIT 1`.

#### `PUT /api/admin/settings`
- **Auth**: Admin authentication required.
- **Body**:
  - Profile update: `{ name, email }`
  - Password change: `{ currentPassword, newPassword }`
- **Database**: Updates `users` table with scrypt salt/hash for password changes, or updates name and email.
