# Multi-Site Deployment — Design Document

## Goal

Deploy the same codebase as two distinct websites:

| Property | Site A (current) | Site B (new) |
|---|---|---|
| Domain | `designinteriorbucuresti.ro` | `designinteriormarbella.com` |
| Languages | RO (default), EN, ES | EN (default), ES |
| City | București | Marbella |
| Country | Romania / RO | Spain / ES |
| Brand name | Jubilee Luxury Design | Jubilee Luxury Design |
| Phone | +40 752 490 173 | Same for now (will change later) |
| Email | isabela@designinteriorbucuresti.ro | isabela@designinteriormarbella.com |
| Address | Str. Erou Iancu Nicolae 61, București | Same for now (will change later) |
| Google Maps | Current embed | Same for now (will change later) |
| Currency | EUR | EUR |
| Assets (logo, OG) | Same | Same |

## Approach: Build-Time Site Selection

A single `VITE_SITE` environment variable selects the active site configuration at **build time**. Each site is a separate Netlify deployment pointing to the same repo but with a different env var.

```
VITE_SITE=bucuresti  →  builds designinteriorbucuresti.ro
VITE_SITE=marbella   →  builds designinteriormarbella.com
```

### Why build-time, not runtime?

- SSR/prerender must know the site at build time (URLs, hreflang, JSON-LD)
- Vite tree-shakes unused code (e.g., RO translations on Marbella build)
- Netlify Forms, sitemap, robots.txt, OG images are all static
- No runtime overhead or hydration mismatch risk

## Implementation Status

### Done

#### 1. Site Configuration — `src/config/sites.ts`

Central config object per site. Every site-specific value lives here.

```ts
export interface SiteConfig {
  id: string;
  domain: string;
  url: string;
  name: string;
  defaultLanguage: Language;
  languages: Language[];
  city: string;
  country: string;
  countryLocalized: Record<string, string>;  // { ro: 'România', en: 'Romania', es: 'Rumanía' }
  countryCode: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: { street: string; locality: string; full: string; };
  mapsQuery: string;
  mapsLink: string;
  schedule: string[];
  ogImage: string;
  logo: string;
}
```

Selected at build time: `const siteId = import.meta.env.VITE_SITE || 'bucuresti';`

#### 2. Translation File Structure

Translations extracted from `LanguageContext.tsx` into separate files:

```
src/
├── contexts/
│   └── LanguageContext.tsx          # Provider, t() with interpolation, deepMerge
├── translations/
│   ├── ro.ts                       # Romanian core translations
│   ├── en.ts                       # English core translations
│   ├── es.ts                       # Spanish core translations
│   └── blog/
│       ├── ro.ts                   # Romanian blog article listings (12 articles)
│       ├── en.ts                   # English blog article listings
│       └── es.ts                   # Spanish blog article listings
```

`LanguageContext.tsx` deep-merges core + blog translations per language.

#### 3. Interpolation in `t()`

The `t()` function replaces placeholders with site-config values:

```ts
value
  .replace(/\{\{city\}\}/g, site.city)           // "București" or "Marbella"
  .replace(/\{\{phone\}\}/g, site.phoneDisplay)
  .replace(/\{\{email\}\}/g, site.email)
  .replace(/\{\{address\}\}/g, site.address.full)
  .replace(/\{\{domain\}\}/g, site.domain)
  .replace(/\{\{country\}\}/g, site.countryLocalized[language] || site.country)
```

`{{country}}` is language-aware: renders "România" in RO, "Romania" in EN, "Rumanía" in ES for the bucuresti site; "Spania"/"Spain"/"España" for marbella.

#### 4. Language Filtering

- `LanguageContext` defaults to `site.defaultLanguage` and only accepts languages in `site.languages`
- `LanguageSelector` filters the dropdown to `site.languages`
- `SEO` hreflang tags only render for `site.languages`

#### 5. Components Updated

| Component | Changes |
|---|---|
| `SEO.tsx` | `SITE_URL = site.url`, `SITE_NAME = site.name`, JSON-LD uses `site.*`, hreflang filtered |
| `Navigation.tsx` | `site.logo`, `site.city` in alt text, `site.phone` in CTA |
| `Footer.tsx` | `site.phoneDisplay`, `site.email`, `site.address.full`, `site.mapsLink`, `site.city` |
| `Contact.tsx` | `site.*` for all contact info, maps embed uses `site.mapsQuery` |
| `LanguageSelector.tsx` | Filtered to `site.languages` |
| `Services.tsx` | JSON-LD `@id` uses `site.url` |

#### 6. Legal Pages — Interpolated

All hardcoded values in PoliticaConfidentialitate, TermeniConditii, PoliticaCookies replaced:

| Hardcoded | Placeholder |
|---|---|
| `isabela@designinteriorbucuresti.ro` | `{{email}}` |
| `designinteriorbucuresti.ro` (domain in prose) | `{{domain}}` |
| `Str. Erou Iancu Nicolae 61, București/Bucharest/Bucarest` | `{{address}}` |
| `România/Romania/Rumanía` (jurisdiction) | `{{country}}` |
| `București/Bucharest/Bucarest` (jurisdiction city) | `{{city}}` |

#### 7. Blog Listings — Translated

`Blog.tsx` article data (titles, excerpts, dates) moved to `t()` keys:
- `t('blog.articles.tendinte2025.title')`, etc.
- Translations in `src/translations/blog/{ro,en,es}.ts` (12 articles)

#### 8. Data-Driven Projects — `src/data/projectsData.ts`

Projects defined with `sites[]` tags for per-site filtering:

```ts
export const allProjects: ProjectData[] = [
  { slug: 'penthouse-herastrau', sites: ['bucuresti'], ... },
  { slug: 'villa-pipera', sites: ['bucuresti'], ... },
  { slug: 'apartament-primaverii', sites: ['bucuresti'], ... },
  // Future: { slug: 'villa-marbella', sites: ['marbella'], ... },
];
export const siteProjects = allProjects.filter(p => p.sites.includes(site.id));
```

`Portfolio.tsx` and `Home.tsx` use `siteProjects` for filtering.
Project titles/descriptions use `t('projectsList.{key}.title')`.

#### 9. Build Pipeline

`scripts/prerender.mjs` reads `VITE_SITE` to set:
- Default language for localStorage mock
- Site URL for window.location mock

Both builds verified: `VITE_SITE=bucuresti` and `VITE_SITE=marbella` — 36/36 routes prerendered.

### Remaining

#### Blog Article Pages (15 files)

The 15 individual blog article page components (`src/pages/blog/*.tsx`) still contain hardcoded Romanian text. These need to be translated to `t()` keys with EN and ES translations added to the blog translation files. This is the largest remaining effort.

#### Sitemap/Robots Generation

`public/sitemap.xml` and `public/robots.txt` are still static with hardcoded `designinteriorbucuresti.ro` URLs. A build-time generation script should:
- Use `site.url` as base URL
- Exclude project routes not in `siteProjects` (future)
- Generate `robots.txt` pointing to correct sitemap

#### Project Detail Refactor (future)

The 3 separate project page components (`PenthouseHerastrau.tsx`, `VillaPipera.tsx`, `ApartamentPrimaverii.tsx`) could be consolidated into a single `ProjectDetail.tsx` reading content by ID from translations. Not blocking — works as-is.

## Files Modified (summary)

| File | Change |
|---|---|
| `src/config/sites.ts` | **NEW** — site configuration with `countryLocalized` |
| `src/contexts/LanguageContext.tsx` | Imports translations, `deepMerge`, interpolation with `{{country}}`, language filtering |
| `src/translations/{ro,en,es}.ts` | **NEW** — core translations with `{{city}}`/`{{email}}`/`{{address}}`/`{{domain}}` placeholders |
| `src/translations/blog/{ro,en,es}.ts` | **NEW** — blog article listing translations (12 articles) |
| `src/data/projectsData.ts` | **NEW** — project definitions with `sites[]` tags, `siteProjects` export |
| `src/components/SEO.tsx` | `site.*` for URL, name, JSON-LD, filtered hreflang |
| `src/components/Navigation.tsx` | `site.logo`, `site.city`, `site.phone` |
| `src/components/Footer.tsx` | `site.*` for all contact info |
| `src/components/LanguageSelector.tsx` | Filtered to `site.languages` |
| `src/pages/Contact.tsx` | `site.*` for phone, email, address, maps |
| `src/pages/Services.tsx` | JSON-LD `@id` uses `site.url` |
| `src/pages/Blog.tsx` | Article data from `t()` keys |
| `src/pages/Portfolio.tsx` | Uses `siteProjects` + translated titles |
| `src/pages/Home.tsx` | Uses `siteProjects` + translated titles |
| `src/pages/PoliticaConfidentialitate.tsx` | `{{email}}`, `{{domain}}`, `{{address}}` interpolation |
| `src/pages/TermeniConditii.tsx` | `{{email}}`, `{{domain}}`, `{{address}}`, `{{city}}`, `{{country}}` interpolation |
| `src/pages/PoliticaCookies.tsx` | `{{email}}` interpolation |
| `scripts/prerender.mjs` | Reads `VITE_SITE` for language/URL |

## Deployment Topology

```
GitHub Repo (single)
  │
  ├── Netlify Site A (designinteriorbucuresti.ro)
  │     VITE_SITE=bucuresti
  │     SITE_URL=https://designinteriorbucuresti.ro
  │     FULFILLMENT_SUPPORT_EMAIL=isabela@designinteriorbucuresti.ro
  │     STRIPE_SECRET_KEY=sk_live_...
  │     ...
  │
  └── Netlify Site B (designinteriormarbella.com)
        VITE_SITE=marbella
        SITE_URL=https://designinteriormarbella.com
        FULFILLMENT_SUPPORT_EMAIL=isabela@designinteriormarbella.com
        STRIPE_SECRET_KEY=sk_live_...  (same or different Stripe account)
        ...
```

Both sites auto-deploy on push to `main`. Each has its own Netlify env vars, domain, and SSL certificate.
