# Audit Action Plan — Jubilee Luxury Design

**Site:** designinteriorbucuresti.ro
**Audit date:** 5 March 2026
**Overall score:** 39 / 103 (38%)

---

## 1. Executive Summary

A comprehensive website audit was performed on 5 March 2026 covering 10 categories: SEO (3/15), CRO (2/12), Accessibility (4/10), Performance (6/10), Security (2/10), Content (5/10), Code Quality (4/10), Legal & Compliance (0/10 — BLOCKER), Mobile (7/8), UX & Design (6/8).

**Critical blockers identified:**
- Zero legal pages (GDPR non-compliant) — **FIXED**
- Contact form was decorative (no backend) — **FIXED**
- SPA renders empty `<div id="root"></div>` to crawlers — **FIXED** (35 routes prerendered at build time)
- All social links pointed to `#` — **NEEDS EXTERNAL INPUT**

**Post-remediation estimate:** ~75–80 / 103 after all code fixes applied (including SPA prerendering); remaining points require external input (real images, testimonials, social URLs, legal data, Stripe links).

---

## 2. Already Fixed Items

### 2.1 Legal & Compliance (was 0/10 BLOCKER → resolved)

| Change | File(s) |
|--------|---------|
| Trilingual privacy policy page | `src/pages/PoliticaConfidentialitate.tsx` (new) |
| Trilingual cookie policy page | `src/pages/PoliticaCookies.tsx` (new) |
| Trilingual terms & conditions page | `src/pages/TermeniConditii.tsx` (new) |
| Routes for all 3 legal pages | `src/App.tsx` |
| GDPR cookie consent banner (accept/decline/customize) | `src/components/CookieConsent.tsx` (new) |
| GDPR consent checkbox on contact form | `src/pages/Contact.tsx` |
| ANPC-SAL and ANPC-SOL links in footer | `src/components/Footer.tsx` lines 200–201 |
| "Cookie Settings" link in footer to re-open banner | `src/components/Footer.tsx` |
| Company data placeholders `[de completat]` in legal pages | All 3 legal page files |
| Back navigation on legal pages | All 3 legal page files |

### 2.2 Contact Form (was decorative → functional)

| Change | File(s) |
|--------|---------|
| Netlify Forms POST submission (`fetch('/')` with `form-name`) | `src/pages/Contact.tsx` |
| Hidden HTML form for Netlify detection | `index.html` lines 33–40 |
| Honeypot field for anti-spam | `src/pages/Contact.tsx` |
| Translated service dropdown (6 services, 3 languages) | `src/pages/Contact.tsx`, `src/contexts/LanguageContext.tsx` |
| Error toast on submission failure | `src/pages/Contact.tsx` |
| Removed Supabase entirely | Deleted `src/integrations/supabase/client.ts`, `src/integrations/supabase/types.ts`, `supabase/config.toml`; removed `@supabase/supabase-js` from `package.json` |

### 2.3 SEO Fixes

| Change | File(s) |
|--------|---------|
| `<html lang="en">` → `<html lang="ro">` | `index.html` line 2 |
| Dynamic `lang` attribute on language switch | `src/contexts/LanguageContext.tsx` |
| Replaced Lovable OG image with local `/open-graph.png` | `index.html` line 22 |
| Added `og:url`, `og:locale`, `og:site_name` meta tags | `index.html` lines 20–23 |
| Added `<link rel="canonical">` | `index.html` line 24 |
| Added `<meta name="robots" content="index, follow">` | `index.html` line 25 |
| Updated `twitter:image` to local URL | `index.html` line 29 |
| Replaced default Lovable favicon with branded favicon | `public/favicon.ico` |
| Created branded OG image | `public/open-graph.png` |

### 2.4 CRO — Dead CTAs Fixed

| Change | File(s) |
|--------|---------|
| Hero CTA → `/contact` | `src/pages/Home.tsx` |
| About CTA → `/despre` | `src/pages/Home.tsx` |
| Portfolio CTA → `/portofoliu` | `src/pages/Home.tsx` |
| Services CTA → `/contact` | `src/pages/Home.tsx` |
| Service cards → `/contact?service={id}` with pre-selection | `src/pages/Services.tsx` |
| Blog cards fully clickable as `<Link>` | `src/pages/Blog.tsx` |
| Portfolio cards fully clickable as `<Link>` | `src/pages/Portfolio.tsx` |

### 2.5 Accessibility Fixes

| Change | File(s) |
|--------|---------|
| `aria-label="Email newsletter"` on footer email input | `src/components/Footer.tsx` line 74 |
| `aria-label="Deschide meniul"` on hamburger button | `src/components/Navigation.tsx` line 71 |
| Skip-to-content link | `src/components/Navigation.tsx` lines 33–35 |
| `id="main-content"` on `<main>` element | `src/components/Layout.tsx` line 25 |
| Blog page: H2 → H1 for main heading | `src/pages/Blog.tsx` |

### 2.6 Broken Links Fixed

| Change | File(s) |
|--------|---------|
| Removed 3 broken blog article entries (`design-sustenabil-2026`, `ai-design-interior`, `materiale-viitorului-2026`) | `src/pages/Blog.tsx` |
| Footer legal links now point to valid routes | `src/components/Footer.tsx` |

### 2.7 Shop & Products

| Change | File(s) |
|--------|---------|
| Centralized product data (7 products) | `src/data/products.ts` (new) |
| Product detail page with features, buy button, related products | `src/pages/ProductDetail.tsx` (new) |
| Route `shop/:productId` | `src/App.tsx` |
| Refactored Shop to use shared product data | `src/pages/Shop.tsx` |
| Full product translations (title, description, longDescription, features) for all 7 products × 3 languages | `src/contexts/LanguageContext.tsx` |

### 2.8 Performance & Code Quality

| Change | File(s) |
|--------|---------|
| Vite host `"::"` → `"localhost"` (security) | `vite.config.ts` line 9 |
| `.env` and `.env.local` added to `.gitignore` | `.gitignore` lines 16–17 |
| Smooth scroll on route change | `src/components/Layout.tsx` line 18 |
| Hash-based scrolling for service card navigation | `src/components/Layout.tsx` lines 10–16 |
| `scroll-mt-32` on service cards for proper offset | `src/pages/Services.tsx` |
| Fixed `isActive` for nested routes | `src/components/Navigation.tsx` line 31 |

### 2.9 UX Polish

| Change | File(s) |
|--------|---------|
| Mobile menu z-index fix (header above overlay) | `src/components/Navigation.tsx` |
| Cookie banner Decline button styling on dark background | `src/components/CookieConsent.tsx` |
| Links, buttons, images set to non-draggable | Multiple components |
| `select-none` on interactive elements | Multiple components |
| Fixed luxury-glow animation visibility | `tailwind.config.ts`, `src/pages/Services.tsx` |
| Translated hardcoded duration strings | `src/pages/Services.tsx` |
| Fixed Google Maps embed URL | `src/pages/Contact.tsx` |
| Removed CUI/J-number from footer (kept in legal pages only) | `src/components/Footer.tsx` |
| Removed trailing space from aboutTitle translation | `src/contexts/LanguageContext.tsx` |
| Removed unused `X` import | `src/components/CookieConsent.tsx` |

### 2.10 Documentation

| Change | File(s) |
|--------|---------|
| Project implementation guide | `docs/IMPLEMENTATION.md` (new) |
| Claude project guidance | `CLAUDE.md` (new) |
| Replaced Lovable boilerplate README | `README.md` |

---

## 3. Remaining Code Fixes

### Phase 1 — Infrastructure (Highest Impact)

#### 3.1 SPA Prerendering / SSR — **FIXED**

**Problem:** Google crawlers received an empty `<div id="root"></div>` — no indexable content for any of the 28+ pages.

**Resolution:** Vite SSR build + `renderToString` (no Puppeteer or headless browser needed).

- **Approach:** Custom prerender script using React's `renderToString` with `StaticRouter` and `HelmetProvider`
- **Files added/modified:**
  - `src/entry-server.tsx` — server-side render function exporting `render(url)`
  - `scripts/prerender.mjs` — build-time prerender script that generates static HTML for all routes
  - `src/main.tsx` — updated to use `hydrateRoot` instead of `createRoot` when prerendered HTML is present
  - `package.json` — build pipeline: `vite build` → `vite build --ssr` → `node scripts/prerender.mjs`
- **Result:** 35 routes prerendered with full HTML content, including Helmet meta tags (title, canonical, hreflang, OG, JSON-LD structured data)
- `dist/server/` cleaned up automatically after prerender step

#### 3.2 sitemap.xml

**Problem:** No sitemap for 28+ pages and 15+ blog articles.

**Recommended fix:**
- Install `vite-plugin-sitemap` or create a manual `public/sitemap.xml`
- Include all public routes with `lastmod` dates
- Submit to Google Search Console

**File:** `public/sitemap.xml` (new) or `vite.config.ts` (plugin config)

#### 3.3 Security Headers

**Problem:** No Content-Security-Policy, X-Frame-Options, or other security headers.

**Recommended fix:** Create or update `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://www.google.com"
```

**File:** `netlify.toml` (new or update)

### Phase 2 — SEO

#### 3.4 Per-Page Meta Tags

**Problem:** All 28 pages share the same `<title>` and `<meta description>` from `index.html`.

**Recommended fix:**
- Install `react-helmet-async`
- Add `<Helmet>` in each page component with unique title, description, canonical URL
- Each page needs distinct metadata (e.g., "Servicii Design Interior Bucuresti | Jubilee Luxury Design")

**Files affected:** `package.json`, `src/App.tsx` (wrap with `HelmetProvider`), all files in `src/pages/`

#### 3.5 JSON-LD Structured Data

**Problem:** Zero structured data on the site.

**Recommended schemas:**
- `LocalBusiness` — on every page (name, address, phone, opening hours)
- `Service` — on `/servicii`
- `BlogPosting` — on each blog article
- `Product` — on each shop product
- `BreadcrumbList` — on all pages
- `FAQPage` — if FAQ section is added
- `Organization` — site-wide

**Files affected:** `index.html` (global schemas), page components (page-specific schemas)

#### 3.6 Hreflang Tags

**Problem:** 3 languages (ro, en, es) but no `<link rel="alternate" hreflang="...">` tags.

**Note:** Current implementation uses the same URLs for all languages (content switched via JS). Full hreflang support would require URL-based language routing (e.g., `/en/about`, `/es/about`), which is a larger architectural change. As a minimum, add `hreflang` tags pointing to the canonical URL with `x-default`.

**Files affected:** `index.html` or per-page via `react-helmet-async`

### Phase 3 — Code Quality

#### 3.7 Portfolio Filter Bug

**Problem:** `useState(t('portfolio.all'))` initializes filter state with a translated string. When the user switches language, the state retains the old language's string and filtering breaks.

**File:** `src/pages/Portfolio.tsx`

**Recommended fix:**
```tsx
// Before (broken):
const [filter, setFilter] = useState(t('portfolio.all'));

// After (fixed):
const [filter, setFilter] = useState('all');
// Then compare against 'all' key, not translated string
```

#### 3.8 About Page — Empty Team Section

**Problem:** Team array is defined but the rendered output produces empty cards.

**File:** `src/pages/About.tsx` — around lines 106–110

**Recommended fix:** Either populate with real team data or remove the section entirely until data is available.

#### 3.9 Services — Identical Package Features

**Problem:** All 3 service tiers (Basic, Premium, Luxury) display the same 6 features, making them indistinguishable.

**File:** `src/pages/Services.tsx` — around lines 13–51

**Recommended fix:** Differentiate features per tier. Example:
- Basic: 2D floor plan, color palette, furniture list
- Premium: 3D renders, site visits, custom furniture sourcing
- Luxury: Full project management, artisan coordination, smart home integration

#### 3.10 Code Splitting

**Problem:** All 28 page components are imported statically — no `React.lazy()`, full bundle loaded on first visit.

**File:** `src/App.tsx`

**Recommended fix:**
```tsx
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
// ... all page imports

// Wrap routes in <Suspense fallback={<LoadingSpinner />}>
```

#### 3.11 Error Boundaries

**Problem:** Any component error results in a full white screen.

**Recommended fix:** Add an `ErrorBoundary` component wrapping the main route outlet. Can use `react-error-boundary` package or a simple class component.

**Files affected:** `src/App.tsx` or `src/components/Layout.tsx`

#### 3.12 Remove Unused Dependencies

**Problem:** ~290KB of unused packages in the bundle.

| Package | Size (approx) | Reason unused |
|---------|---------------|---------------|
| `recharts` | ~200KB gzip | No charts on site |
| `react-day-picker` + `date-fns` | ~40KB | Calendar component unused |
| `input-otp` | ~10KB | OTP input not used |
| `react-resizable-panels` | ~15KB | Resizable panels not used |
| `next-themes` | ~5KB | Dark mode toggle doesn't exist |
| `cmdk` | ~20KB | Command palette not used |

**File:** `package.json` — remove from `dependencies`, then `npm install`

**Note:** Verify each package is truly unused by searching for imports before removing.

### Phase 4 — Accessibility

#### 3.13 Footer Heading Hierarchy

**Problem:** Footer headings skip from H2 (brand) to H4 (section titles), violating heading hierarchy.

**File:** `src/components/Footer.tsx` — lines 135, 151, 167

**Recommended fix:** Change `<h4>` tags to `<h3>`.

#### 3.14 Image Alt Text Language

**Problem:** Image alt texts are in English (e.g., "Interior design luxury bedroom") on a Romanian-default site.

**Files affected:** `src/pages/Home.tsx`, `src/pages/Portfolio.tsx`, `src/pages/About.tsx`, and other pages with images.

**Recommended fix:** Use `t()` function for alt text with translations in all 3 languages, or at minimum translate to Romanian.

#### 3.15 Prefers-Reduced-Motion

**Problem:** Fade-in, scale-in, and luxury-glow animations ignore `prefers-reduced-motion` user preference.

**File:** `src/index.css` or `tailwind.config.ts`

**Recommended fix:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Phase 5 — Content Quality

#### 3.16 Image Deduplication

**Problem:** Only 3 unique images used across 8 display slots (62.5% duplication). `hero-interior.webp` appears 4×, `luxury-bedroom.webp` 3×, `luxury-kitchen.webp` 3×.

**Resolution:** Requires real project photography from the business owner. See Section 4.

#### 3.17 Missing Testimonials Section

**Problem:** Footer links "Testimoniale" to `/shop#testimonials` but no testimonials section exists.

**Resolution:** Either create a testimonials section with real reviews, or remove the link. Requires external input.

#### 3.18 Empty Quality Guarantees

**Problem:** `qualityGuarantee` and `qualityDesc` translation strings are empty.

**File:** `src/contexts/LanguageContext.tsx`

**Resolution:** Populate with actual guarantee text or remove the section if not needed.

---

## 4. Items Needing External Input

These items **cannot be resolved with code changes alone** — they require data or decisions from the business owner.

| # | Item | Current State | What's Needed | Where It Goes |
|---|------|---------------|---------------|---------------|
| 1 | Social media URLs | `#` placeholder links | Instagram, Facebook, LinkedIn profile URLs | `src/components/Footer.tsx` lines 44–56 |
| 2 | Stripe Payment Links | All 7 products show "Coming Soon" | Stripe Payment Link URL per product | `src/data/products.ts` — `stripeLink` field |
| 3 | Company registration data | `[de completat]` markers | CUI/CIF, Nr. inregistrare (J-number), capital social | `src/pages/PoliticaConfidentialitate.tsx`, `TermeniConditii.tsx` |
| 4 | Real project photographs | 3 unique AI/stock images | 10–30 real photos per project (industry standard: 10–20) | `src/assets/`, referenced in portfolio/project pages |
| 5 | Client testimonials | None | 5–10 real testimonials with client name + project | Homepage section, possibly dedicated page |
| 6 | Team photos and bios | Empty team section | Founder photo + name, key designers | `src/pages/About.tsx` |
| 7 | Newsletter backend | Footer email input with no backend | Mailchimp/SendGrid integration, or remove section | `src/components/Footer.tsx` |
| 8 | WhatsApp business number | Not implemented | Phone number for WhatsApp widget (luxury segment standard) | New component |
| 9 | Before/after project photos | Not implemented | Photo pairs from real projects | Portfolio/project pages |
| 10 | Video content | None | Project walkthroughs, team intro | Homepage, portfolio |
| 11 | Service pricing ranges | No pricing info | At minimum orientation ranges per service tier | `src/pages/Services.tsx` |
| 12 | Google Analytics property | No analytics installed | GA4 measurement ID or Plausible domain | `index.html` or analytics component |

---

## 5. Technical Improvements for Post-Launch

These are lower-priority optimizations that improve performance and maintainability but are not blockers.

### 5.1 Image Optimization Pipeline
- All images converted to WebP (done) — consider AVIF for further compression
- Add `loading="lazy"` to all below-fold images (currently 0 of 8 have lazy loading)
- Consider `vite-plugin-image-optimizer` or `sharp` in build pipeline

### 5.2 Font Loading Optimization
- Currently loading 11+ Google Fonts variants, many unused
- Audit actual usage and reduce to only needed weights/styles
- Consider `font-display: swap` for all font faces
- Self-host fonts for better performance and privacy

### 5.3 Translation Architecture
- `LanguageContext.tsx` is 750+ lines with all translations inline
- Split into `src/i18n/ro.json`, `src/i18n/en.json`, `src/i18n/es.json`
- Consider `react-i18next` or `lingui` for better tooling and lazy loading of language packs

### 5.4 Netlify Configuration
- Verify `netlify.toml` has SPA redirect: `/* /index.html 200`
- Add build command and publish directory
- Configure headers (see Section 3.3)
- Set up branch deploy previews

### 5.5 Monitoring & Analytics
- Install GA4 or Plausible for traffic analytics
- Set up Netlify Analytics for server-side metrics
- Configure conversion tracking for contact form submissions
- Set up uptime monitoring (UptimeRobot, Pingdom)

---

## 6. Verification Steps

After implementing remaining fixes, verify with:

### Automated
- [x] `npm run build` — zero errors (35/35 routes prerendered)
- [ ] `npm run lint` — zero warnings
- [ ] Lighthouse audit — target 90+ on all categories
- [ ] axe DevTools — zero accessibility violations
- [ ] Google Rich Results Test — structured data valid

### Manual
- [ ] All 3 languages display correctly on every page
- [ ] Portfolio filter works after language switch (fix 3.7)
- [ ] Contact form submits successfully on Netlify
- [ ] Cookie consent banner appears on first visit
- [ ] Cookie preferences persist across sessions
- [ ] All legal pages accessible and content complete
- [ ] Mobile navigation opens/closes correctly
- [ ] Service cards scroll to correct position from direct link
- [ ] Shop products link to detail pages
- [ ] All footer links resolve (no `#` placeholders remaining)

### SEO (after prerendering)
- [ ] `curl -s https://designinteriorbucuresti.ro | grep "<h1>"` returns content
- [ ] Google Search Console — no crawl errors
- [ ] sitemap.xml accessible and valid
- [ ] Structured data validates in Schema.org validator
