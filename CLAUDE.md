# CLAUDE.md — Project Guidance

## Project Identity

Romanian luxury interior design studio website — **Jubilee Luxury Design** brand. Domain: designinteriorbucuresti.ro. Deployed on Netlify.

## Commands

- `npm run dev` — dev server on **port 8080**
- `npm run build` — production build
- `npm run lint` — ESLint

## Architecture

- SPA with React Router v6, no backend/database
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
- 3 languages: Romanian (`ro`, default), English (`en`), Spanish (`es`)
- Dot-notation keys: e.g., `t('nav.home')`, `t('products.starterPack.title')`
- Translations defined in `src/contexts/LanguageContext.tsx`
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

## Legal Pages

Privacy policy (`/politica-confidentialitate`), terms (`/termeni-conditii`), cookies (`/cookies`) — all trilingual, content in page components.
