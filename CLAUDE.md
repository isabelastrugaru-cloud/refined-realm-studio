# CLAUDE.md — Project Guidance

## Project Identity

Luxury interior design studio website — **Jubilee Luxury Design** brand. Multi-site: `designinteriorbucuresti.ro` (RO/EN/ES) and `designinteriormarbella.com` (EN/ES). Deployed on Netlify.

## Commands

- `npm run dev` — dev server on **port 8080**
- `npm run build` — production build
- `npm run lint` — ESLint

## Architecture

- SPA with React Router v6, no backend/database
- **Multi-site**: `VITE_SITE=bucuresti|marbella` env var selects site at build time
- Site config: `src/config/sites.ts` — domain, city, languages, phone, email, address, maps, etc.
- Contact form: Netlify Forms (POST to `/` with `form-name` field)
- Shop checkout: external Stripe links (no server-side Stripe)
- Supabase was removed — do not add database dependencies

## Path Alias

`@/` maps to `src/` (configured in vite.config.ts and tsconfig.json)

## TypeScript

- Strict mode is OFF (`strict: false`)
- `noImplicitAny: false`, `strictNullChecks: false`

## Styling

- Tailwind CSS + shadcn/ui components
- Use `cn()` from `@/lib/utils` for conditional classes
- All colors defined as HSL CSS variables in `src/index.css`
- Luxury gold: `hsl(45 85% 60%)` — CSS var `--luxury`
- Premium beige: `hsl(35 25% 88%)` — CSS var `--premium`
- Fonts: **Playfair Display** (`font-playfair`) for headings, **Inter** (`font-inter`) for body
- Dark mode: class-based (`darkMode: ["class"]`)

## Custom Breakpoint

Navigation uses a `nav` breakpoint at **1100px** (defined in tailwind.config.ts between `md` and `lg`). Use `nav:` prefix for navigation-specific responsive styles.

## Translations / i18n

- All user-facing text must use the `t()` function from `useLanguage()` hook
- 3 languages: Romanian (`ro`), English (`en`), Spanish (`es`) — available languages filtered per site
- Dot-notation keys: e.g., `t('nav.home')`, `t('products.starterPack.title')`
- Core translations: `src/translations/{ro,en,es}.ts`
- Blog translations: `src/translations/blog/{ro,en,es}.ts`
- Merged in `src/contexts/LanguageContext.tsx` via `deepMerge`
- **Interpolation**: use `{{city}}`, `{{email}}`, `{{address}}`, `{{domain}}`, `{{country}}` in translation strings — `t()` replaces them with values from `src/config/sites.ts`
- `{{country}}` is language-aware (e.g., "România" in RO, "Romania" in EN)
- Language persisted in localStorage, HTML `lang` attribute updated automatically
- When adding new text, add translations for all 3 languages

## Products

- Defined in `src/data/products.ts` (7 products: eBooks, templates, CAD, packages)
- Product translations in LanguageContext under `products.{translationKey}.*`
- Each product has: `id` (URL slug), `translationKey`, `price`, `category[]`, optional `stripeLink`

## Component Conventions

- shadcn/ui components: `@/components/ui/` (49 components)
- Page components: `src/pages/` (route-level)
- Shared components: `src/components/` (Navigation, Footer, Layout, CookieConsent, LanguageSelector)
- Blog articles: `src/pages/blog/`
- Project details: `src/pages/projects/`

## Form Handling

Contact form uses Netlify Forms:
- POST to `/` with hidden `form-name` field
- Validated with React Hook Form + Zod
- No backend endpoint needed

## Images

- All images use **WebP** format (`.webp`) — do not add `.jpg` or `.png` source images
- Stored in `src/assets/`, referenced via ESM imports
- Blog images in `src/assets/blog/`
- Public static assets in `public/` (favicon, OG image)
- Source design files in root `assets/` (logo PSD, etc.)

## Projects

- Defined in `src/data/projectsData.ts` with `sites[]` tags (e.g., `['bucuresti']`)
- `siteProjects` export filters by current site — used in `Portfolio.tsx` and `Home.tsx`
- Project titles/descriptions use `t('projectsList.{key}.title')`
- To add a site-specific project, tag it with the site ID

## Legal Pages

Privacy policy (`/politica-confidentialitate`), terms (`/termeni-conditii`), cookies (`/cookies`) — all trilingual, content in page components. Hardcoded city/email/domain/address replaced with `{{interpolation}}` placeholders.
