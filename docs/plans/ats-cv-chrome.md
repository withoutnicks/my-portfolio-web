# ATS CV chrome (Space Grotesk, badges, buttons, icons)

Branch: `redesign/personal-homepage` (already exists; do not create another). Repo: `/home/without/workspace/projects/my-portfolio-web`.

This is a visual pass on the current one-page Astro site. Do not add routes, a contact form, React islands, Meteors, View Transitions, or sonner.

## Goal

Keep the **ATS/CV skeleton** (name, role, scannable left-aligned sections, dark page) and dress it with **badges, buttons, icons, and small SVG draws**. Bring **Space Grotesk** back as the only typeface. Emphasis is **white text**, never `<strong>` / `<b>` / `font-bold`.

Reference the current reading order (do not change it):

Hero → `#sobre-mi` → `#proyectos` → `#educacion` → `#habilidades` → `#contacto`

## Hard constraints

- Package manager: **pnpm**. Verify with `pnpm build` (`astro check && astro build`).
- **Do not** re-add `@astrojs/react` to `astro.config.mjs`. `src/components/atoms/*.tsx` stays dormant; do not import it.
- **Do not** re-add a `<form>`, Netlify attributes, or Toaster.
- **Do not** bring back Meteors or `ClientRouter`.
- **Do not** use `<strong>`, `<b>`, `font-bold`, `font-semibold`, or `font-extrabold` anywhere. Headings: size + `text-white` + `font-normal`. Inline emphasis in body copy: `<span class="text-white">`.
- UI copy stays Spanish. Do not rewrite biography facts (19 years, IDAT, Lima, project blurbs).
- Trust `src/` and `AGENTS.md`, not `README.md`.

## 1. Font: Space Grotesk only

`@fontsource-variable/space-grotesk` is already a dependency.

- `src/layouts/Layout.astro`: remove all `@fontsource/zilla-slab/*` imports. Add:

  ```ts
  import "@fontsource-variable/space-grotesk";
  ```

- `tailwind.config.mjs`: drop `serif` / Zilla. Make Space Grotesk the sans default. Confirm the `font-family` name from `node_modules/@fontsource-variable/space-grotesk/index.css` (usually `"Space Grotesk Variable"`). Example:

  ```js
  fontFamily: {
    sans: ["'Space Grotesk Variable'", "Space Grotesk", "system-ui", "sans-serif"],
    mono: ["ui-monospace", "SFMono-Regular"],
  },
  ```

- Replace every `font-serif` with nothing (inherit sans) or `font-sans`: `Header.astro`, `Hero.astro` h1, `SubtitleSection.astro`, `Projects.astro` h3, `Layout.astro` if any.
- Body already has `text-zinc-300`; leave it. Do not set a second display font (no Asimovian, no Varela, no Zilla).

## 2. Shared primitives (Astro, not React)

Add small Astro files under `src/components/astro/`. Classes live in `src/styles/globals.css` so Skills/Projects/Hero share one look.

### `globals.css`

Keep `@tailwind` directives, `scroll-behavior`, `.link`. Add:

```css
@layer components {
  .btn {
    @apply inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-transparent px-3 py-1.5 text-sm text-white transition-colors hover:bg-zinc-900;
  }
  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition-colors hover:bg-blue-700;
  }
  .badge {
    @apply inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-200;
  }
}
```

`.link` can stay for in-prose anchors (mailto in Contact). Action CTAs use `.btn` / `.btn-primary`.

Remove `.mask` / `.mask-squircle` if nothing else uses them after deleting the About image.

### `src/components/astro/Badge.astro`

Props: optional `class`. Slot = label (and optional icon). Root: `<span class="badge">`.

### `src/components/astro/Button.astro`

Polymorphic enough with two usages, or split:

- `Button.astro`: `<button type="button">` + `variant?: "outline" | "primary"` (outline = `.btn`, primary = `.btn-primary`).
- `LinkButton.astro`: `<a target="_blank" rel="noopener noreferrer">` + `href`, `variant`, slot for icon + text.

Do **not** import `buttonVariants` from `src/components/atoms/button.tsx`.

### Icons / draws (inline SVG, no React)

Do **not** import `@radix-ui/react-icons` or `src/components/atoms/icons.tsx` (both are React).

Create `src/components/astro/icons/` as `.astro` files (or one file with named exports is not possible in Astro — one component per icon is fine):

Action icons (simple 15×15 stroke/fill, `currentColor`, `aria-hidden="true"`):

- `Envelope.astro` — copy-email / mailto
- `FileText.astro` — CV
- `GitHub.astro`
- `LinkedIn.astro`
- `Code.astro` — repository
- `ExternalLink.astro` — visit / marketplace

Tech draws (copy the existing SVG markup from `src/components/atoms/icons.tsx`, drop the React `SVGProps` wrapper, keep `width="1em" height="1em"`):

- `AstroIcon.astro`
- `TailwindIcon.astro`
- `TypeScriptIcon.astro`
- `VSCodeIcon.astro`
- `JSONIcon.astro`

Map stack names → icon in `src/data/projects.ts` or a tiny helper in `src/lib/stack-icon.ts` that returns the component name. Simplest: in `Projects.astro`, a local map:

```ts
const stackIcon = {
  Astro: AstroIcon,
  "Tailwind CSS": TailwindIcon,
  TypeScript: TypeScriptIcon,
  "VS Code": VSCodeIcon,
  JSON: JSONIcon,
};
```

Keep `stack: string[]` on the type; do not put components in `src/data/projects.ts`.

## 3. Section-by-section UI

ATS layout: left-aligned, tight vertical rhythm (`py-8` sections, `max-w-3xl` already on Layout). Dark `bg-black`. No full-viewport hero, no centered display headings.

### Header (`src/components/views/Header.astro`)

- Name: `font-sans text-white`, not serif.
- Nav links unchanged (`#sobre-mi` etc.).
- Optional: tiny GitHub + LinkedIn icon buttons on the right of the nav (`.btn` size icon, `size-8`, `p-0 justify-center`). If it wraps badly on mobile, skip and leave them in Contact only.

### Hero (`src/components/Hero.astro`)

Keep profile.webp (small, byline). Keep copy-email script (plain `<script>`, no `astro:page-load`).

- h1: Space Grotesk, `text-white`, `font-normal`, larger size (`text-4xl`).
- Subline stays zinc.
- Purpose paragraph: `Astro` and `React` as `<span class="text-white">`, not strong.
- Replace text `.link` CTAs with buttons:

  - Copy email: `<button id="btnCopyEmail" class="btn">` + Envelope icon + “Copiar email”. On success, swap label to “Copiado” for 2s (keep existing JS; it currently sets `textContent`, which would wipe the icon — change JS to toggle a `data-copied` attribute or swap only a `<span>` label, not the whole button).
  - Ver CV: `LinkButton` `.btn-primary` + FileText + `/cv_gcaycho.pdf`.

### Sobre mí (`src/components/About.astro`)

- **Delete** the `/about.webp` `<img>` and the flex row that existed only to sit beside it. Text column only.
- Replace every `<strong class="text-white">` with `<span class="text-white">`. Keep the emojis.
- Keep `#sobre-mi` and `SubtitleSection`.

### Proyectos (`src/components/Projects.astro`)

ATS entry: title row, then badges, then blurb, then actions.

Each `<li>`:

1. Optional small draw: `<img src={poster} />` only if you add an optional `poster?: string` on `Project` pointing at existing `/poster/web.svg` and `/poster/speed.svg`. Keep it small (`h-10` or `h-12`), not the old full card. If it fights the CV look, skip posters and only use tech icons — **prefer tech icons in badges; posters are optional**.
2. `h3` name: `text-white font-normal`.
3. Stack as `<Badge>` list, each badge = tech icon + name.
4. Description: zinc, no strong.
5. Links as `LinkButton` `.btn`: Repositorio + `Code` icon; Sitio/Marketplace + `ExternalLink` icon.

### Educación (`src/components/Studies.astro`)

Keep the timeline. Title `font-normal text-white`. Keep the small IDAT logo (`/idat.webp`) as a draw. No `font-semibold`.

### Habilidades (`src/components/Skills.astro`)

Replace the comma string with badge groups:

```
Lenguajes:     [TypeScript] [CSS] [SQL]
Frameworks:    [Astro] [React] [Next.js]
```

Use tech icons on Astro / TypeScript where we have SVGs; CSS, SQL, React, Next.js can be text-only badges (do not invent new large icon sets).

`dt` zinc, `dd` flex wrap gap-2 of `Badge`s.

### Contacto (`src/components/Contact.astro`)

No form. Keep the intro sentence.

Replace the definition list with a button row (ATS contact line):

- `mailto:` `.btn` + Envelope + email
- CV `.btn` + FileText
- GitHub `.btn` + GitHub icon + withoutnicks
- LinkedIn `.btn` + LinkedIn icon + grardocaycho

Mailto may keep `.link` in the paragraph if you mention the address in prose; the actions themselves are buttons.

### SubtitleSection

`font-sans text-white font-normal text-2xl`, keep the bottom border. Not centered, not hover-underline.

### Footer

Unchanged aside from inheriting Space Grotesk.

## 4. Copy / emphasis audit

Grep before finishing:

```
<strong|<b |font-bold|font-semibold|font-extrabold|font-serif|zilla
```

Expected: zero matches in `src/`.

## 5. AGENTS.md

Update the Fonts / Tailwind bullets:

- Body + headings = Space Grotesk (`font-sans`), imported in Layout.
- `.btn`, `.btn-primary`, `.badge` in `globals.css`.
- New Astro primitives: `Badge.astro`, `LinkButton.astro`, `astro/icons/*`.
- Atoms remain dormant; React integration stays off.
- Sobre mí has no photo.
- Emphasis = `text-white` spans, never strong/bold.
- Still no contact form.

## 6. Verify

```bash
pnpm build
```

Must be 0 errors. Dist should **not** emit a React `client.*.js` chunk. HTML should contain `#sobre-mi` … `#contacto`, no `<form>`, no `<strong>`. Copy-email still works (label span, icon remains).

Commit on `redesign/personal-homepage` only if the user asked to commit; otherwise leave the diff. Do not push unless asked.

## Out of scope

- React, shadcn atoms, next-themes, sonner
- Contact form / Netlify
- Meteors, light theme, Zilla/Asimovian
- New pages, blog, now-page
- Rewriting README
- Deleting unused npm deps (react, fontsource extras) unless you are already touching `package.json`; leaving unused deps is fine
