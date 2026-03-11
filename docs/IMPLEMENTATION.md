# Implementation Documentation

## Project Overview

**Jubilee Luxury Design** — a luxury interior design studio website for [designinteriorbucuresti.ro](https://designinteriorbucuresti.ro). The site showcases the studio's portfolio, services, blog articles on interior design, and a digital products shop. It supports three languages (Romanian, English, Spanish) and is deployed on Netlify.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| TypeScript | 5.8 | Type safety |
| Vite | 5.4 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| shadcn/ui | — | Component library (Radix UI primitives) |
| React Router | 6.30 | Client-side routing |
| TanStack Query | 5.83 | Async state management |
| Lucide React | 0.462 | Icons |
| React Hook Form + Zod | 7.61 / 3.25 | Form handling & validation |
| react-helmet-async | 2.0 | Per-page meta tags (SSR-compatible) |
| Embla Carousel | 8.6 | Carousel component |

## Project Structure

```
src/
├── App.tsx                     # Root component, routing configuration
├── main.tsx                    # Entry point — hydrateRoot (prerendered) or createRoot (dev)
├── entry-server.tsx            # SSR render function for build-time prerendering
├── index.css                   # Design system CSS variables, Tailwind layers
├── vite-env.d.ts
├── assets/                     # Images (project photos, blog, shop hero, logo)
│   ├── blog/                   # Blog article images (*.webp)
│   ├── logo.svg
│   ├── hero-interior.webp
│   ├── shop-hero.webp
│   ├── penthouse-*.webp        # Project detail images
│   ├── villa-*.webp
│   ├── apartment-*.webp
│   └── ...
├── components/
│   ├── CookieConsent.tsx       # GDPR cookie consent banner
│   ├── Footer.tsx              # Site footer with links & social
│   ├── LanguageSelector.tsx    # RO/EN/ES language switcher dropdown
│   ├── Layout.tsx              # Page layout with Navigation + Footer + Outlet
│   ├── Navigation.tsx          # Main navigation bar (responsive at 1100px)
│   └── ui/                     # 49 shadcn/ui components
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       ├── sonner.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── tooltip.tsx
│       └── ... (49 total)
├── contexts/
│   └── LanguageContext.tsx      # i18n: translations for ro/en/es, useLanguage hook
├── data/
│   └── products.ts             # Shop product definitions (7 products)
├── hooks/
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/
│   └── utils.ts                # cn() utility (clsx + tailwind-merge)
└── pages/
    ├── Home.tsx
    ├── About.tsx
    ├── Portfolio.tsx
    ├── Services.tsx
    ├── Blog.tsx
    ├── Contact.tsx
    ├── Shop.tsx
    ├── ProductDetail.tsx
    ├── NotFound.tsx
    ├── PoliticaConfidentialitate.tsx
    ├── PoliticaCookies.tsx
    ├── TermeniConditii.tsx
    ├── blog/                   # 15 blog article pages
    │   ├── TendinteDesign2024.tsx
    │   ├── Tendinte2025.tsx
    │   ├── CasaInteligenta2025.tsx
    │   ├── CuloriSiTexturi2025.tsx
    │   ├── MinimalismulScandinav.tsx
    │   ├── DesignBiofil.tsx
    │   ├── BugetLimitat.tsx
    │   ├── SpatiiMici.tsx
    │   ├── PsihologiaCulorilor.tsx
    │   ├── IluminatPerfect.tsx
    │   ├── OpenSpace.tsx
    │   ├── ArtDeco.tsx
    │   ├── MaterialeNaturale.tsx
    │   ├── FinisajePremium.tsx
    │   └── MaterialeEcologice.tsx
    └── projects/               # 3 project detail pages
        ├── PenthouseHerastrau.tsx
        ├── VillaPipera.tsx
        └── ApartamentPrimaverii.tsx
```

Root files:
```
├── index.html                  # HTML entry point (OG tags, fonts, Netlify form)
├── package.json
├── scripts/
│   └── prerender.mjs           # Build-time prerender script (35 routes)
├── vite.config.ts              # Dev server on port 8080, @ alias
├── tailwind.config.ts          # Custom theme, nav breakpoint, animations
├── tsconfig.json               # Path aliases, relaxed strict mode
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── eslint.config.js
├── .gitignore
├── netlify.toml                # Netlify deploy config (if present)
├── public/
│   ├── favicon.ico
│   └── open-graph.png
└── assets/                     # Source assets (logo, favicon, OG image, PSD)
```

## Routing

All routes are defined in `src/App.tsx` under a shared `<Layout />` wrapper.

### Main Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page with hero, services overview, portfolio highlights |
| `/despre` | `About` | About the studio, team, philosophy |
| `/portofoliu` | `Portfolio` | Project gallery with filters |
| `/servicii` | `Services` | Service offerings with details |
| `/blog` | `Blog` | Blog listing page |
| `/contact` | `Contact` | Contact form (Netlify Forms) and info |
| `/shop` | `Shop` | Digital products store |
| `/shop/:productId` | `ProductDetail` | Individual product page with Stripe checkout |

### Project Detail Pages

| Route | Component |
|---|---|
| `/proiecte/penthouse-herastrau` | `PenthouseHerastrau` |
| `/proiecte/villa-pipera` | `VillaPipera` |
| `/proiecte/apartament-primaverii` | `ApartamentPrimaverii` |

### Blog Articles (15)

| Route | Component |
|---|---|
| `/blog/tendinte-design-2024` | `TendinteDesign2024` |
| `/blog/tendinte-2025` | `Tendinte2025` |
| `/blog/casa-inteligenta-2025` | `CasaInteligenta2025` |
| `/blog/culori-texturi-2025` | `CuloriSiTexturi2025` |
| `/blog/minimalismul-scandinav` | `MinimalismulScandinav` |
| `/blog/design-biofil` | `DesignBiofil` |
| `/blog/buget-limitat` | `BugetLimitat` |
| `/blog/spatii-mici` | `SpatiiMici` |
| `/blog/psihologia-culorilor` | `PsihologiaCulorilor` |
| `/blog/iluminat-perfect` | `IluminatPerfect` |
| `/blog/open-space` | `OpenSpace` |
| `/blog/art-deco` | `ArtDeco` |
| `/blog/materiale-naturale` | `MaterialeNaturale` |
| `/blog/finisaje-premium` | `FinisajePremium` |
| `/blog/materiale-ecologice` | `MaterialeEcologice` |

### Legal Pages

| Route | Component |
|---|---|
| `/politica-confidentialitate` | `PoliticaConfidentialitate` |
| `/termeni-conditii` | `TermeniConditii` |
| `/cookies` | `PoliticaCookies` |

### Catch-All

| Route | Component |
|---|---|
| `*` | `NotFound` |

## Pages Summary

- **Home**: Hero section, services overview, featured projects, testimonials, call-to-action
- **About (Despre)**: Studio history, team members, design philosophy, values
- **Portfolio (Portofoliu)**: Gallery grid of completed projects with category filters
- **Project Detail**: Individual project showcase with image galleries (4 images each), description, specifications
- **Services (Servicii)**: Detailed service offerings (residential, commercial, consulting)
- **Blog**: Article listing with cards; 15 individual article pages covering design trends, tips, and materials
- **Contact**: Contact form (Netlify Forms), studio address, phone, email, map
- **Shop**: Digital product catalog with category filters (toate, pachete, ebook, cad, template)
- **Product Detail**: Individual product page with description, pricing, and Stripe checkout link
- **Legal Pages**: Privacy policy, terms & conditions, cookie policy — all trilingual

## Components

### App-Level Components

| Component | File | Purpose |
|---|---|---|
| `Layout` | `components/Layout.tsx` | Wraps pages with Navigation + Footer, uses `<Outlet />` |
| `Navigation` | `components/Navigation.tsx` | Responsive nav bar, collapses at `nav` breakpoint (1100px) |
| `Footer` | `components/Footer.tsx` | Site footer with links, social icons, legal links |
| `LanguageSelector` | `components/LanguageSelector.tsx` | Dropdown to switch between RO/EN/ES |
| `CookieConsent` | `components/CookieConsent.tsx` | GDPR cookie consent banner |

### shadcn/ui Components (49)

Located in `src/components/ui/`. Full list: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip, use-toast.

## Design System

### Colors

Defined as HSL CSS variables in `src/index.css`:

| Token | HSL Value | Usage |
|---|---|---|
| `--luxury` | `45 85% 60%` | Primary gold accent |
| `--luxury-dark` | `42 55% 32%` | Dark gold variant |
| `--premium` | `35 25% 88%` | Premium beige background |
| `--accent` | `45 65% 75%` | Champagne gold |
| `--primary` | `0 0% 8%` | Deep sophisticated black |
| `--secondary` | `35 20% 92%` | Warm beige |
| `--muted` | `30 15% 95%` | Muted warm neutrals |
| `--background` | `0 0% 99%` | Near-white background |
| `--foreground` | `0 0% 5%` | Near-black text |

### Fonts

| Font | Tailwind Class | Usage |
|---|---|---|
| Playfair Display | `font-playfair` | Headings, display text |
| Inter | `font-inter` | Body text, UI elements |

### Gradients

| Token | Value |
|---|---|
| `--gradient-hero` | `linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 12%))` |
| `--gradient-gold` | `linear-gradient(135deg, hsl(45 85% 60%), hsl(45 75% 70%))` |
| `--gradient-beige` | `linear-gradient(180deg, hsl(35 25% 88%), hsl(35 20% 92%))` |

### Shadows

| Token | Usage |
|---|---|
| `shadow-luxury` | Large drop shadow for hero elements |
| `shadow-gold` | Gold-tinted glow shadow |
| `shadow-subtle` | Subtle card shadows |

### Animations

Custom keyframes defined in `tailwind.config.ts`:
- `fade-in` — fade in with slight upward movement (0.6s)
- `fade-in-up` — fade in with larger upward movement (0.8s)
- `slide-in-right` — slide in from right (0.5s)
- `scale-in` — scale from 95% to 100% (0.4s)
- `luxury-glow` — pulsing gold glow box-shadow (5s infinite)
- `accordion-down` / `accordion-up` — Radix accordion animations

### Custom Breakpoint

The navigation uses a custom `nav` breakpoint at **1100px** defined in `tailwind.config.ts`:

```ts
screens: {
  'sm': '640px',
  'md': '768px',
  'nav': '1100px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

Note: `nav` is placed between `md` and `lg` in the config but sorts to 1100px by value.

### Dark Mode

Class-based dark mode is configured (`darkMode: ["class"]`) with dark theme variables defined in `src/index.css` under `.dark`.

## Internationalization (i18n)

### Architecture

- **Context**: `src/contexts/LanguageContext.tsx` provides `LanguageProvider` and `useLanguage` hook
- **Languages**: Romanian (`ro`, default), English (`en`), Spanish (`es`)
- **Translation function**: `t(key)` uses dot-notation keys (e.g., `nav.home`, `products.starterPack.title`)
- **Persistence**: Selected language stored in `localStorage` under key `language`
- **HTML lang**: `document.documentElement.lang` is updated on language change

### Usage

```tsx
const { t, language, setLanguage } = useLanguage();

// In JSX:
<h1>{t('home.hero.title')}</h1>
```

### Translation Key Structure

Translations are organized as nested objects with dot-notation access:
- `nav.*` — navigation labels
- `home.*` — home page content
- `about.*` — about page content
- `services.*` — services page content
- `portfolio.*` — portfolio page content
- `blog.*` — blog page content
- `contact.*` — contact page content
- `shop.*` — shop page content
- `products.*` — product details (title, description, features per product)
- `footer.*` — footer content
- `cookies.*` — cookie consent text
- `legal.*` — legal page content

## Data Layer

### Products

Defined in `src/data/products.ts`. Each product has:

```ts
interface Product {
  id: string;           // URL slug (e.g., "starter-pack")
  translationKey: string; // Key for translations (e.g., "starterPack")
  price: string;        // Display price (e.g., "€20")
  category: string[];   // Filter categories
  stripeLink?: string;  // Stripe checkout URL
}
```

**7 products**:

| ID | Price | Categories |
|---|---|---|
| `starter-pack` | €20 | pachete |
| `bathroom-complete` | €50 | pachete, ebook, cad, template |
| `beige-contract` | €20 | template |
| `green-presentation` | €20 | template |
| `kitchen-ebook` | €50 | ebook, cad |
| `bathroom-v2` | €50 | pachete, ebook, cad, template |
| `millwork-guide` | €50 | ebook |

Product translations are stored in `LanguageContext.tsx` under `products.{translationKey}.*`.

## Forms & Integrations

### Contact Form (Netlify Forms)

The contact form on `/contact` uses Netlify Forms:
- Form submits via POST to `/` with a hidden `form-name` field
- No backend server required — Netlify processes submissions automatically
- Form fields are validated with React Hook Form + Zod

### Stripe Integration

Products link to external Stripe checkout pages via `stripeLink` in product data. No server-side Stripe integration — checkout is handled entirely by Stripe's hosted pages.

### No Backend

Supabase was previously integrated but has been **removed**. The project has no backend, no database, and no server-side API. All data is static, forms go through Netlify, and payments go through Stripe.

## SEO

### SPA Prerendering

All 35 routes are prerendered at build time so crawlers receive full HTML content instead of an empty `<div id="root">`.

**Build pipeline:** `vite build` → `vite build --ssr` → `node scripts/prerender.mjs`

- `src/entry-server.tsx` — exports a `render(url)` function using `renderToString` + `StaticRouter` + `HelmetProvider`
- `scripts/prerender.mjs` — iterates all routes, calls `render()`, injects HTML + Helmet tags into `index.html`, writes static files
- `src/main.tsx` — uses `hydrateRoot` when prerendered content is detected, `createRoot` otherwise (dev mode)
- `dist/server/` is cleaned up automatically after prerendering

Each prerendered page includes per-page `<title>`, `<meta description>`, canonical URL, hreflang tags, Open Graph tags, and JSON-LD structured data via `react-helmet-async`.

### Meta Tags

Configured in `index.html` (defaults) and per-page via `<SEO>` component (`react-helmet-async`):
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- Canonical URL
- Hreflang tags (ro, en, es, x-default)
- JSON-LD structured data (LocalBusiness, Service)
- Robots meta tag
- Romanian language attribute (`lang="ro"`)
- Favicon and apple-touch-icon

## Styling Architecture

### CSS Variables

All design tokens are defined as CSS custom properties in `src/index.css` using HSL values (without the `hsl()` wrapper — Tailwind adds it).

### Tailwind Theme Extension

`tailwind.config.ts` extends the default theme with:
- Custom colors referencing CSS variables
- Custom font families (Playfair Display, Inter)
- Custom gradients, shadows, and transitions referencing CSS variables
- Custom animations and keyframes
- Custom `nav` breakpoint at 1100px

### Utility Function

`src/lib/utils.ts` exports `cn()` which combines `clsx` and `tailwind-merge` for conditional class composition:

```ts
import { cn } from "@/lib/utils";
cn("px-4 py-2", isActive && "bg-primary text-white")
```
