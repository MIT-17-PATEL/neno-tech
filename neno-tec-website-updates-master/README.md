# Nenotechnology — AI & Software Innovation Lab

A high-performance, visually polished agency website built with React, TypeScript, Vite, Framer Motion, and Tailwind CSS.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server + production build)
- **Framer Motion** (animations)
- **Tailwind CSS** (styling via CDN)
- **Lucide React** (icons)

## Run Locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run preview
```

---

## Google Sheets Contact Form Setup

The contact form submits data to a Google Sheet via a Google Apps Script web app. Follow these steps:

### 1. Create a Google Sheet

- Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
- In **Row 1**, add these headers:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Company | Phone | Service | Budget | Timeline | Message |

### 2. Create the Apps Script

- In your Google Sheet, go to **Extensions → Apps Script**.
- Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // The website submits via a hidden HTML form, so data arrives
    // as URL-encoded form parameters accessible via e.parameter.
    var p = e.parameter || {};

    sheet.appendRow([
      p.submittedAt || new Date().toISOString(),
      p.name || '',
      p.email || '',
      p.company || '',
      p.phone || '',
      p.service || '',
      p.budget || '',
      p.timeline || '',
      p.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Nenotechnology Contact Form API' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

- Save the project (name it anything, e.g. "Contact Form Handler").

### 3. Deploy as Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon and select **Web app**.
3. Set **Execute as:** `Me`
4. Set **Who has access:** `Anyone`
5. Click **Deploy**.
6. Authorize the script when prompted.
7. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/ABC.../exec`).

### 4. Configure the Environment Variable

Create a `.env.local` file in the project root:

```
VITE_SHEET_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Replace with the URL you copied from step 3.

### 5. Test

Run the dev server (`npm run dev`), fill out the contact form, and submit. The data should appear as a new row in your Google Sheet.

---

## Project Structure

```
├── App.tsx                 # Main app layout + scroll progress bar
├── index.tsx               # React entry point
├── index.html              # HTML shell, fonts, Tailwind CDN, SEO meta
├── components/
│   ├── Navbar.tsx           # Fixed header + mobile menu
│   ├── Hero.tsx             # Full-screen hero with animated sphere
│   ├── About.tsx            # Mission statement with word reveal
│   ├── Stats.tsx            # Key metrics cards
│   ├── Services.tsx         # Service offerings accordion
│   ├── Projects.tsx         # Sticky-scroll case study cards
│   ├── Process.tsx          # 4-step methodology
│   ├── Team.tsx             # Founders section
│   ├── Pricing.tsx          # Pricing tiers
│   ├── FAQ.tsx              # Frequently asked questions
│   ├── Contact.tsx          # Contact form → Google Sheets
│   ├── Footer.tsx           # Footer with links + social
│   └── CustomCursor.tsx     # Custom cursor (desktop only)
├── .env.local.example       # Environment variable template
├── vite.config.ts
├── tsconfig.json
└── package.json
```
