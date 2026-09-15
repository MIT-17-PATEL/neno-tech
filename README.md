# Neno Technology - AI Agency & Technology Template
 
A responsive, multi-page AI agency and technology website built with Next.js, React, and TypeScript. The template includes multiple home-page variations, service and project pages, blog layouts, team profiles, pricing, contact content, and dark-mode page variants.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Bootstrap 5
- Swiper, GSAP, and React Spring for interactive UI and animation

## Requirements

- Node.js 20.9 or later
- npm 10 or later (or another compatible package manager)

## Getting started

From this `source` directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The root route renders the AI Agency dark landing page.

## Available commands

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Starts the local development server.       |
| `npm run build` | Creates an optimized production build.     |
| `npm run start` | Runs the production server after building. |
| `npm run lint`  | Runs ESLint across the project.            |

## Project structure

```text
src/
  app/          Route-based pages and layouts
  components/   Reusable UI sections and page content
  hooks/        Shared React hooks
  data/         Application data and configuration
  types/        TypeScript declaration files
public/
  assets/       Images, fonts, styles, and JSON content data
```

## Customization

- Update page content in `src/app` and reusable sections in `src/components`.
- Edit the JSON files in `public/assets/jsonData` for template content such as services, projects, testimonials, pricing, and FAQs.
- Replace images and branding assets in `public/assets/img`.
- Global styles are loaded from `public/assets/css` in `src/app/layout.tsx`.

## Documentation

Additional template documentation is available in the sibling `../documentation` directory. Open `../documentation/index.html` in a browser to view it.

## License

Refer to the license terms supplied with the template package before redistributing or using it commercially.
