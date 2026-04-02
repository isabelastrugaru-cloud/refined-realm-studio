# Jubilee Luxury Design — Multi-Site Interior Design

> **This is a multi-site codebase.** One repo produces two completely different websites — București and Marbella — each with its own domain, languages, contact details, and projects. The site is selected at build time via an environment variable.

## The Two Sites

| | București | Marbella |
|---|---|---|
| **Domain** | [designinteriorbucuresti.ro](https://designinteriorbucuresti.ro) | [designinteriormarbella.com](https://designinteriormarbella.com) |
| **Languages** | Romanian (default), English, Spanish | English (default), Spanish |
| **City** | București | Marbella |
| **Country** | Romania | Spain |
| **Email** | isabela@designinteriorbucuresti.ro | isabela@designinteriormarbella.com |

Everything else — branding, design, products, blog content — is shared.

## How Multi-Site Works

### Build-Time Selection

The `VITE_SITE` environment variable controls which site gets built:

```sh
VITE_SITE=bucuresti npm run build   # → designinteriorbucuresti.ro
VITE_SITE=marbella  npm run build   # → designinteriormarbella.com
```

If omitted, defaults to `bucuresti`.

### Site Configuration (`src/config/sites.ts`)

All site-specific values live in one file:

```ts
const sites = {
  bucuresti: {
    domain: 'designinteriorbucuresti.ro',
    city: 'București',
    country: 'Romania',
    countryLocalized: { ro: 'România', en: 'Romania', es: 'Rumanía' },
    defaultLanguage: 'ro',
    languages: ['ro', 'en', 'es'],
    email: 'isabela@designinteriorbucuresti.ro',
    // phone, address, maps, logo, etc.
  },
  marbella: {
    domain: 'designinteriormarbella.com',
    city: 'Marbella',
    country: 'Spain',
    countryLocalized: { ro: 'Spania', en: 'Spain', es: 'España' },
    defaultLanguage: 'en',
    languages: ['en', 'es'],
    email: 'isabela@designinteriormarbella.com',
    // ...
  },
};
```

### Translation Placeholders

Translation strings use `{{placeholders}}` that `t()` resolves from the active site config:

| Placeholder | Resolves to (București) | Resolves to (Marbella) |
|---|---|---|
| `{{city}}` | București | Marbella |
| `{{country}}` | România / Romania / Rumanía (per language) | Spania / Spain / España |
| `{{email}}` | isabela@designinteriorbucuresti.ro | isabela@designinteriormarbella.com |
| `{{domain}}` | designinteriorbucuresti.ro | designinteriormarbella.com |
| `{{address}}` | Str. Erou Iancu Nicolae 61, București | (TBD Marbella address) |
| `{{phone}}` | +40 752 490 173 | (TBD) |

Example in a translation file:
```ts
heroTitle: 'Interior Design {{city}}'
// → "Interior Design București" or "Interior Design Marbella"
```

### Per-Site Projects

Projects in `src/data/projectsData.ts` have a `sites[]` tag:

```ts
{ slug: 'penthouse-herastrau', sites: ['bucuresti'], ... }
// Only shows on the București site
```

To add a Marbella-only project, tag it `['marbella']`. To show on both, use `['bucuresti', 'marbella']`.

### Per-Site Languages

- The language selector only shows languages available for the current site
- `LanguageContext` defaults to the site's default language
- SEO hreflang tags only render for the site's languages

## Dev Toggle (Lovable / Local Development)

In development mode, a **floating toggle** appears in the bottom-right corner of every page:

```
┌─────────────────────────┐
│  [bucuresti] [marbella] │
└─────────────────────────┘
```

- The active site is highlighted in gold
- Click the other site to switch — the page reloads with the new site config
- The selection is saved in `localStorage` (`dev_site` key)
- **This toggle is completely removed in production builds** — it only exists when `import.meta.env.DEV` is true

This lets you (or Lovable) preview both sites without restarting the dev server or changing environment variables.

To reset to the default: clear `dev_site` from localStorage, or just click the site you want.

### Component: `src/components/DevSiteToggle.tsx`

Added to `Layout.tsx`. Returns `null` in production, so it's tree-shaken out of the bundle.

## Tech Stack

React 18 | TypeScript | Vite | Tailwind CSS | shadcn/ui | React Router v6 | TanStack Query

## Getting Started

```sh
npm install
npm run dev          # Dev server on localhost:8080 (use the toggle to switch sites)
npm run build        # Production build (VITE_SITE=bucuresti by default)
npm run lint         # ESLint
```

## Project Structure

```
src/
├── config/
│   └── sites.ts                 # Multi-site configuration (bucuresti, marbella)
├── translations/
│   ├── {ro,en,es}.ts            # Core translations with {{placeholders}}
│   └── blog/{ro,en,es}.ts      # Blog article translations
├── data/
│   ├── products.ts              # Shop products
│   └── projectsData.ts         # Projects with sites[] tags
├── contexts/
│   └── LanguageContext.tsx      # i18n provider, deepMerge, interpolation
├── components/
│   ├── DevSiteToggle.tsx        # Dev-only site switcher (bottom-right pill)
│   ├── Navigation.tsx           # Uses site.logo, site.phone, site.city
│   ├── Footer.tsx               # Uses site.email, site.address, site.mapsLink
│   ├── LanguageSelector.tsx     # Filtered to site.languages
│   ├── SEO.tsx                  # Uses site.url, site.name, filtered hreflang
│   └── ui/                     # 49 shadcn/ui components
├── pages/
│   ├── Home.tsx                 # Featured projects from siteProjects
│   ├── Portfolio.tsx            # Filtered by siteProjects
│   ├── Contact.tsx              # Uses site.* for all contact info
│   ├── blog/                   # 15 blog article pages
│   └── projects/               # 3 project detail pages
└── App.tsx                      # Routing
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Dev server on port 8080 (toggle between sites in browser) |
| `npm run build` | Production build with SSR prerendering (36 routes) |
| `VITE_SITE=marbella npm run build` | Build for Marbella specifically |
| `npm run lint` | ESLint |
| `npm run stripe:setup` | Create Stripe products and payment links |

## Deployment

Two separate Netlify sites, same repo:

```
GitHub Repo
  │
  ├── Netlify: designinteriorbucuresti.ro
  │     VITE_SITE=bucuresti
  │     SITE_URL=https://designinteriorbucuresti.ro
  │     FULFILLMENT_SUPPORT_EMAIL=isabela@designinteriorbucuresti.ro
  │
  └── Netlify: designinteriormarbella.com
        VITE_SITE=marbella
        SITE_URL=https://designinteriormarbella.com
        FULFILLMENT_SUPPORT_EMAIL=isabela@designinteriormarbella.com
```

Both auto-deploy on push to `main`. Each has its own env vars, domain, and SSL.

## Documentation

- [`docs/MULTI_SITE.md`](docs/MULTI_SITE.md) — Full architecture details, implementation status, remaining work
- [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) — Routing, design system, components
- [`docs/STRIPE_SETUP.md`](docs/STRIPE_SETUP.md) — Stripe setup and env vars
