# Jubilee Luxury Design — Multi-Site Interior Design

Luxury interior design studio website deployed as two sites from a single codebase:

- [designinteriorbucuresti.ro](https://designinteriorbucuresti.ro) — Romanian (default), English, Spanish
- [designinteriormarbella.com](https://designinteriormarbella.com) — English (default), Spanish

## Tech Stack

React 18 | TypeScript | Vite | Tailwind CSS | shadcn/ui | React Router v6 | TanStack Query

## Getting Started

**Prerequisites**: Node.js (v18+) and npm

```sh
# Install dependencies
npm install

# Start development server (localhost:8080)
npm run dev

# Build for production (defaults to bucuresti)
npm run build

# Build for a specific site
VITE_SITE=marbella npm run build
```

## Multi-Site Architecture

A single `VITE_SITE` environment variable selects the site at **build time**:

```
VITE_SITE=bucuresti  →  designinteriorbucuresti.ro (RO/EN/ES)
VITE_SITE=marbella   →  designinteriormarbella.com (EN/ES)
```

Site-specific values (domain, city, languages, phone, email, address, maps) are defined in `src/config/sites.ts`. Translation strings use `{{city}}`, `{{email}}`, `{{address}}`, `{{domain}}`, `{{country}}` placeholders that `t()` resolves at runtime.

See [`docs/MULTI_SITE.md`](docs/MULTI_SITE.md) for full architecture details.

## Project Structure

```
src/
├── App.tsx                  # Routing configuration
├── index.css                # Design system (CSS variables)
├── config/
│   └── sites.ts             # Multi-site configuration (bucuresti, marbella)
├── assets/                  # Images (project photos, blog, logo)
├── components/
│   ├── Navigation.tsx       # Responsive nav bar
│   ├── Footer.tsx           # Site footer
│   ├── Layout.tsx           # Page layout wrapper
│   ├── LanguageSelector.tsx # Language switcher (filtered per site)
│   ├── CookieConsent.tsx    # GDPR cookie banner
│   └── ui/                  # 49 shadcn/ui components
├── contexts/
│   └── LanguageContext.tsx   # i18n provider with interpolation + deepMerge
├── translations/
│   ├── {ro,en,es}.ts        # Core translations per language
│   └── blog/{ro,en,es}.ts   # Blog article translations per language
├── data/
│   ├── products.ts          # Shop product definitions
│   └── projectsData.ts      # Projects with sites[] tags for per-site filtering
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
| `build` | `npm run build` | Production build (includes prerendering 36 routes) |
| `build:dev` | `npm run build:dev` | Development build |
| `lint` | `npm run lint` | Run ESLint |
| `stripe:setup` | `npm run stripe:setup` | Create/reuse Stripe products, prices, and payment links |
| `preview` | `npm run preview` | Preview production build |

## Key Features

- **Multi-site**: Single codebase, two deployments — București (RO/EN/ES) and Marbella (EN/ES)
- **Multilingual**: `t()` function with `{{placeholder}}` interpolation for site-specific values
- **Luxury design system**: Gold accent palette, Playfair Display + Inter fonts, custom animations
- **Digital products shop**: 7 products with Stripe checkout integration
- **Contact form**: Netlify Forms integration (no backend needed)
- **Blog**: 15 articles on interior design trends and tips
- **Portfolio**: Data-driven projects with `sites[]` tags for per-site filtering
- **Responsive**: Custom `nav` breakpoint at 1100px for navigation
- **SEO**: 36 routes prerendered at build time, per-page meta tags, hreflang (filtered per site), JSON-LD, Open Graph
- **GDPR**: Cookie consent banner, privacy policy, terms & conditions — all with interpolated placeholders

## Deployment

Deployed on **Netlify** — two separate sites pointing to the same repo:

| Site | Env Var | Domain |
|---|---|---|
| București | `VITE_SITE=bucuresti` | designinteriorbucuresti.ro |
| Marbella | `VITE_SITE=marbella` | designinteriormarbella.com |

Each deployment has its own Netlify env vars (`SITE_URL`, `FULFILLMENT_SUPPORT_EMAIL`, Stripe keys, etc.). All 36 routes are prerendered at build time (Vite SSR + `renderToString`).

## Documentation

- [`docs/MULTI_SITE.md`](docs/MULTI_SITE.md) — Multi-site architecture, implementation status, remaining work
- [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) — Full implementation details (routing, design system, components)
- [`docs/STRIPE_SETUP.md`](docs/STRIPE_SETUP.md) — Stripe product setup, Payment Links, Netlify env vars
