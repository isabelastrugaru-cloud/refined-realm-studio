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
- [x] **sitemap.xml** — `public/sitemap.xml` with 36 routes
- [x] **Security headers** — CSP, X-Frame-Options, etc. via `netlify.toml`
- [x] **Netlify config** — build settings, SPA redirects in `netlify.toml`
- [ ] **Analytics** — no tracking installed

---

## Code Fixes

- [x] **Portfolio filter bug** — uses language-agnostic keys (`src/pages/Portfolio.tsx`)
- [x] **Blog filter bug** — uses language-agnostic keys (`src/pages/Blog.tsx`)
- [x] **Empty team section** — hidden until real photos/bios arrive (`src/pages/About.tsx`)
- [x] **Identical service features** — 3 tiers now have distinct features (`src/pages/Services.tsx`)
- [x] **Code splitting** — all pages use `React.lazy()` (`src/App.tsx`)
- [x] **Error boundaries** — `ErrorBoundary` wraps `<Outlet />` in Layout
- [x] **Remove unused deps** — removed recharts, react-day-picker, date-fns, input-otp, react-resizable-panels, next-themes, cmdk and their UI components
- [x] **Empty quality guarantee strings** — `qualityGuarantee`, `qualityDesc` populated in all 3 languages

---

## SEO

- [x] **Per-page meta tags** — `react-helmet-async` with `<SEO>` component on all main pages
- [x] **JSON-LD structured data** — LocalBusiness on home, Service on services page
- [x] **Hreflang tags** — ro, en, es, x-default on all pages via `<SEO>` component

---

## Accessibility

- [x] **Footer heading hierarchy** — H4 → H3 (`src/components/Footer.tsx`)
- [x] **Image alt text i18n** — trilingual via `t()` on Home page images
- [x] **Prefers-reduced-motion** — respects user preference (`src/index.css`)

---

## Content

- [ ] **Image deduplication** — 3 unique images across 8 slots (62.5% duplication, needs real photos)
- [x] **Testimonials section** — `/shop#testimonials` exists and is functional (needs real content from business owner)
- [x] **Testimoniale link target** — `/shop#testimonials` anchor exists in Shop.tsx

---

## Post-Launch Optimization

- [x] Image optimization — all images converted to WebP
- [ ] AVIF conversion for further compression (optional)
- [x] Lazy loading for below-fold images (project galleries, shop)
- [ ] Font loading optimization (reduce Google Fonts variants, self-host)
- [ ] Translation architecture (split 750+ line file into per-language JSON)
- [ ] Conversion tracking setup
- [ ] Uptime monitoring
