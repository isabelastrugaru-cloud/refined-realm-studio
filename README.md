# Design Interior București — Jubilee Luxury Design

Luxury interior design studio website for [designinteriorbucuresti.ro](https://designinteriorbucuresti.ro).

## Tech Stack

React 18 | TypeScript | Vite | Tailwind CSS | shadcn/ui | React Router v6 | TanStack Query

## Getting Started

**Prerequisites**: Node.js (v18+) and npm

```sh
# Install dependencies
npm install

# Start development server (localhost:8080)
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── App.tsx                  # Routing configuration
├── index.css                # Design system (CSS variables)
├── assets/                  # Images (project photos, blog, logo)
├── components/
│   ├── Navigation.tsx       # Responsive nav bar
│   ├── Footer.tsx           # Site footer
│   ├── Layout.tsx           # Page layout wrapper
│   ├── LanguageSelector.tsx # RO/EN/ES switcher
│   ├── CookieConsent.tsx    # GDPR cookie banner
│   └── ui/                  # 49 shadcn/ui components
├── contexts/
│   └── LanguageContext.tsx   # i18n translations (ro/en/es)
├── data/
│   └── products.ts          # Shop product definitions
├── hooks/                   # Custom hooks (use-mobile, use-toast)
├── lib/
│   └── utils.ts             # cn() utility
└── pages/
    ├── Home.tsx, About.tsx, Portfolio.tsx, Services.tsx,
    │   Blog.tsx, Contact.tsx, Shop.tsx, ProductDetail.tsx
    ├── blog/                # 15 blog article pages
    ├── projects/            # 3 project detail pages
    └── PoliticaConfidentialitate.tsx, TermeniConditii.tsx, PoliticaCookies.tsx
```

## Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start dev server on port 8080 |
| `build` | `npm run build` | Production build (includes prerendering 35 routes) |
| `build:dev` | `npm run build:dev` | Development build |
| `lint` | `npm run lint` | Run ESLint |
| `preview` | `npm run preview` | Preview production build |

## Key Features

- **Multilingual**: Romanian (default), English, Spanish — all UI text translated
- **Luxury design system**: Gold accent palette, Playfair Display + Inter fonts, custom animations
- **Digital products shop**: 7 products with Stripe checkout integration
- **Contact form**: Netlify Forms integration (no backend needed)
- **Blog**: 15 articles on interior design trends and tips
- **Portfolio**: 3 detailed project showcases with image galleries
- **Responsive**: Custom `nav` breakpoint at 1100px for navigation
- **SEO**: 35 routes prerendered at build time, per-page meta tags, hreflang, JSON-LD, Open Graph, Twitter Cards
- **GDPR**: Cookie consent banner, privacy policy, terms & conditions

## Deployment

Deployed on **Netlify** with built-in form processing. All 35 routes are prerendered at build time (Vite SSR + `renderToString`) so crawlers receive full HTML. No backend server or database required.

## Documentation

See [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) for full implementation details including routing, design system, components, and architecture.
