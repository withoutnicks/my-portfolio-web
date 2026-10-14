# AGENTS.md

Personal Astro 5 + Tailwind 3 portfolio. One route: `src/pages/index.astro`. Dark, first-person homepage — intentionally *not* a shadcn-style landing and *not* a LaTeX/document theme.

Do not treat `README.md` as structural truth. It still lists a proposed tree, dead aliases (`@ui`, `@react`), `*Component.astro` names, and an Astro 5 migration — the app is already Astro 5. Trust `tsconfig.json`, `package.json`, and `src/`.

## Commands

- Package manager: **pnpm** (`pnpm-lock.yaml`). `pnpm-workspace.yaml` is **not** a monorepo; it only `allowBuilds` for `esbuild` and `sharp`.
- `pnpm dev` — `localhost:4321`
- `pnpm build` — `astro check && astro build` (typecheck + production build)
- `pnpm preview` — production preview
- No test runner, no lint/format script. `.eslintrc.cjs` is leftover; eslint is not a dependency. Do not invent `pnpm lint` / `pnpm test`.

## Layout

Reading order: purpose (Hero) → `#sobre-mi` → `#proyectos` → `#educacion` → `#habilidades` → `#contacto`. Section `id`s back the in-page nav in the header. Layout is an ATS/CV-style resume: badges for stacks, icon buttons for CTAs, no photos in sections (Hero keeps a small byline photo).

- `src/layouts/Layout.astro` owns chrome: Header/Footer, `globals.css`, Space Grotesk `@fontsource` import, meta/OG. No View Transitions and no Toaster.
- `src/components/{Hero,About,Projects,Studies,Skills,Contact}.astro` — one section per file; each (except Hero) wraps itself in `<section id="…">` + `SubtitleSection` (`src/components/astro/SubtitleSection.astro`).
- `src/components/astro/` — UI primitives: `Badge.astro`, `Button.astro`, `LinkButton.astro`, and `icons/` (inline-SVG action + tech icons, Astro not React).
- `src/components/views/` — Header (name + in-page nav), Footer (`@views/*`).
- `src/data/projects.ts` — plain data (`stack: string[]`, `links: {text, href}[]`). No JSX in data. Types in `src/types.ts`.
- `src/components/atoms/` — shadcn React primitives kept as a dormant library: **nothing imports them and the `react()` integration was removed from `astro.config.mjs`**. To use one again: re-add `react()` to the config first. `molecules/` no longer exists.
- Aliases (`tsconfig.json`): `@/*`, `@components/*`, `@layouts/*`, `@pages/*`, `@styles/*`, `@lib/*`, `@atoms/*`, `@astro/*`, `@views/*`. `@icons/*` is defined but `src/components/icons` does not exist.

## Scripts

The page has exactly one client script: copy-email in `Hero.astro` (`#btnCopyEmail`, toggles `#copyEmailLabel`). Plain `<script>` (bundled, runs once); no View Transitions, so no `astro:page-load` listener is needed.

Design notes for the current look live in `docs/plans/ats-cv-chrome.md`.

## Tailwind

- `@astrojs/tailwind` with `applyBaseStyles: false` — keep the `@tailwind` directives in `src/styles/globals.css`.
- Tailwind **3** (`tailwind.config.mjs`), `darkMode: ["class"]` (inherited from shadcn; the page itself is hardcoded dark `bg-black`, `dark:` variants never activate).
- Fonts: **Space Grotesk only** (`font-sans`, imported in Layout via `@fontsource-variable/space-grotesk`). No display/serif font.
- `globals.css` component classes: `.btn`, `.btn-primary`, `.badge` (chips), `.card` (project entry), `.link` (white underline).
- Emphasis is always `<span class="text-white">` — never `<strong>` or `<b>`. Body copy uses `text-zinc-300/400`. Headings use `text-white` + weight (`font-bold` for display name, `font-semibold` for section/subsection).

## Content

- UI copy is Spanish (`<html lang="es">`). Static files live in `public/`, referenced as root paths (`/profile.webp`, `/cv_gcaycho.pdf`). `/about.webp` is unused since the Sobre mí section is text only.
- **There is deliberately no contact form.** Contact section lists only GitHub and LinkedIn (both as `.btn` with icon). Email copy + CV stay in the Hero section. Do not re-add Netlify Forms.
