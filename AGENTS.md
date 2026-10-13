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

Reading order: purpose (Hero) → `#sobre-mi` → `#proyectos` → `#educacion` → `#habilidades` → `#contacto`. Section `id`s back the in-page nav in the header.

- `src/layouts/Layout.astro` owns chrome: Header/Footer, `globals.css`, Zilla Slab `@fontsource` imports, meta/OG. No View Transitions and no Toaster.
- `src/components/{Hero,About,Projects,Studies,Skills,Contact}.astro` — one section per file; each (except Hero) wraps itself in `<section id="…">` + `SubtitleSection` (`src/components/astro/SubtitleSection.astro`).
- `src/components/views/` — Header (name + in-page nav), Footer (`@views/*`).
- `src/data/projects.ts` — plain data (`stack: string[]`, `links: {text, href}[]`). No JSX in data. Types in `src/types.ts`.
- `src/components/atoms/` — shadcn React primitives kept as a dormant library: **nothing imports them and the `react()` integration was removed from `astro.config.mjs`**. To use one again: re-add `react()` to the config first. `molecules/` no longer exists.
- Aliases (`tsconfig.json`): `@/*`, `@components/*`, `@layouts/*`, `@pages/*`, `@styles/*`, `@lib/*`, `@atoms/*`, `@astro/*`, `@views/*`. `@icons/*` is defined but `src/components/icons` does not exist.

## Scripts

The page has exactly one client script: copy-email in `Hero.astro` (`#btnCopyEmail`). Plain `<script>` (bundled, runs once); no View Transitions, so no `astro:page-load` listener is needed.

## Tailwind

- `@astrojs/tailwind` with `applyBaseStyles: false` — keep the `@tailwind` directives in `src/styles/globals.css`.
- Tailwind **3** (`tailwind.config.mjs`), `darkMode: ["class"]` (inherited from shadcn; the page itself is hardcoded dark `bg-black`, `dark:` variants never activate).
- Fonts: body = system sans; headings = `font-serif` = Zilla Slab (imported in Layout via `@fontsource/zilla-slab`).
- `.link` in `globals.css` is the shared link style (white + underline). `mask` / `mask-squircle` utilities power the About photo.

## Content

- UI copy is Spanish (`<html lang="es"`). Static files live in `public/`, referenced as root paths (`/profile.webp`, `/about.webp`, `/cv_gcaycho.pdf`).
- **There is deliberately no contact form.** Contact is a mailto + CV/GitHub/LinkedIn link list. Do not re-add Netlify Forms.
