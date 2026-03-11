# TODO — Jubilee Luxury Design

Quick-reference checklist of remaining items. See `docs/AUDIT_ACTION_PLAN.md` for full details, context, and recommended fixes.

---

## External Data Needed (from business owner)

- [ ] Social media URLs — Instagram, Facebook, LinkedIn (`src/components/Footer.tsx`)
- [ ] Stripe Payment Links for all 7 products (`src/data/products.ts`)
- [ ] Company legal data — CUI/CIF, J-number, capital social (legal pages)
- [ ] Real project photographs — 10–30 per project (replace stock/AI images)
- [ ] Client testimonials — minimum 5 with name + project reference
- [ ] Team photos and bios — founder + key designers (`src/pages/About.tsx`)
- [ ] Newsletter integration — Mailchimp/SendGrid API key, or remove section
- [ ] WhatsApp business number (optional, luxury segment standard)
- [ ] Before/after project photo pairs (optional)
- [ ] Service pricing ranges (`src/pages/Services.tsx`)
- [ ] Google Analytics measurement ID (GA4 or Plausible)

---

## Infrastructure

- [ ] **SPA prerendering** — crawlers get empty `<div id="root">` (critical for SEO)
- [ ] **sitemap.xml** — 28+ pages with no sitemap
- [ ] **Security headers** — CSP, X-Frame-Options via `netlify.toml`
- [ ] **Netlify config** — verify SPA redirects, build settings
- [ ] **Analytics** — no tracking installed

---

## Code Fixes

- [ ] **Portfolio filter bug** — `useState(t('portfolio.all'))` breaks on language switch (`src/pages/Portfolio.tsx`)
- [ ] **Empty team section** — renders blank cards (`src/pages/About.tsx` ~lines 106–110)
- [ ] **Identical service features** — all 3 tiers show same 6 features (`src/pages/Services.tsx` ~lines 13–51)
- [ ] **Code splitting** — no `React.lazy()`, full bundle on first load (`src/App.tsx`)
- [ ] **Error boundaries** — component errors = white screen (`src/App.tsx`)
- [ ] **Remove unused deps** — ~290KB: recharts, react-day-picker, date-fns, input-otp, react-resizable-panels, next-themes, cmdk (`package.json`)
- [ ] **Empty quality guarantee strings** — `qualityGuarantee`, `qualityDesc` empty (`src/contexts/LanguageContext.tsx`)

---

## SEO

- [ ] **Per-page meta tags** — all pages share same title/description (install `react-helmet-async`)
- [ ] **JSON-LD structured data** — zero structured data (LocalBusiness, Service, Product, BlogPosting)
- [ ] **Hreflang tags** — 3 languages, no `<link rel="alternate" hreflang>` tags

---

## Accessibility

- [ ] **Footer heading hierarchy** — H2 → H4 skip, should be H3 (`src/components/Footer.tsx` lines 135, 151, 167)
- [ ] **Image alt text in English** — should be Romanian or trilingual via `t()` (Home, Portfolio, About pages)
- [ ] **Prefers-reduced-motion** — animations ignore user preference (`src/index.css`)

---

## Content

- [ ] **Image deduplication** — 3 unique images across 8 slots (62.5% duplication, needs real photos)
- [ ] **Missing testimonials** — footer links to nonexistent section
- [ ] **Missing Testimoniale link target** — `/shop#testimonials` anchor doesn't exist

---

## Post-Launch Optimization

- [x] Image optimization — all images converted to WebP
- [ ] AVIF conversion for further compression (optional)
- [ ] Lazy loading for below-fold images
- [ ] Font loading optimization (reduce Google Fonts variants, self-host)
- [ ] Translation architecture (split 750+ line file into per-language JSON)
- [ ] Conversion tracking setup
- [ ] Uptime monitoring
