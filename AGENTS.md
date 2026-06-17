# AGENTS.md — Hasil Paudyal Portfolio

Guidance for AI agents working on this repo. It deliberately does **not** restate the
user-facing copy (project blurbs, poems, quotes, page text) — read that straight from the
files. This file explains the **structure, the methods, where things live, and the
non-obvious gotchas** so you don't waste time looping through files or hallucinate.

The site is updated rarely (~monthly), so reading the actual content files when needed is fine.

---

## Stack & commands

- Vue 3 (**Options API**) · Vite · **bootstrap-vue-next** (Bootstrap 5) · vue-router 5 · SCSS (dart-sass).
- `npm run dev` (localhost:5173) · `npm run build` (→ `dist/`) · `npm run preview`.
- **Always `npm run build` to verify after changes** — it's the real check.
- `npm run build:seo` = `vite build` + **prerender** (`scripts/prerender.mjs`): snapshots every route in `sitemap.xml` into static `dist/<route>/index.html` so non-JS crawlers (social cards, Bing) get correct per-page tags. Needs a local Chrome (`puppeteer-core`; set `CHROME_PATH` to override). **This is the deploy command** — plain `build` ships an empty SPA shell with only the homepage's static tags. See the SEO section.
- `npm run lint` (ESLint v10 flat config in `eslint.config.js`) and `npm run lint:fix` both work. Config = `@eslint/js` recommended + `eslint-plugin-vue` `flat/recommended`. Build is still the primary correctness check; lint is for style/quality. `package.json` is `"type": "module"`.
- Active branch is **`vue`** (the Vue 3 rewrite). `master` is a legacy Laravel version — ignore it.
- `dist/` is gitignored; everything in `public/` is copied verbatim into the build.

---

## Where everything lives — read this first

**Content is NOT centralized and NOT generated.** The same facts (bio, degree, skills,
career, technologies) are **duplicated by hand** across multiple files. There is no single
source of truth. When you change a *fact*, you must update **every** copy:

- `src/views/Home.vue`
- `src/views/HireHasil.vue`
- `public/llms.txt`
- `public/llms-full.txt`
- `src/mixins/seoMixins.js` → the `personSchema` const (only if it's a schema fact: job title, degree, profile links)

Repo map:

| Path | What it is |
|---|---|
| `src/mixins/projectsMixins.js` | `projects` array (all project data) + helper methods |
| `src/mixins/quotesMixins.js` | `quotes` array + methods |
| `src/mixins/poemsMixins.js` | `poems` array + methods |
| `src/mixins/seoMixins.js` | `applySeo()` head injection + schema.org builders (NOT a content list) |
| `src/views/*.vue` | Pages; they consume the mixins |
| `src/App.vue` | Global shell: nav, theme picker, avatar rotation, footer quote, loading spinner, all global CSS |
| `src/router.js` | Routes |
| `src/state.js` | `appState.routeLoading` reactive flag only |
| `src/main.js` | App bootstrap; skips the artificial route-loading delay when `window.__PRERENDER_INJECTED` is set (prerender) |
| `scripts/prerender.mjs` | Post-build snapshot prerenderer (reads routes from `sitemap.xml`) |
| `public/` | `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `site.webmanifest`, tech logos, photos, `og-image.jpg`, favicon/PWA icons (`apple-touch-icon.png`, `icon-192/512.png`, `favicon-32x32.png`) |

---

## Mixins — methods & data shapes (so you don't re-read them)

**`projectsMixins.js`** — `import { projectsMixins }`, used as a Vue mixin.

Project object shape:
```
{ name, tagLine, coverImage(DEAD — see Images), type:'it'|'ee', urlSlug, id,
  website?, sourceCode?, technologies:[string], contributionLevels:{Label:number},
  details:[{ title, titleIcon, paragraphs?:[{text}], lists?:[{badge, text}] }] }
```
> ⚠️ Within each object, **`urlSlug` appears BEFORE `id`**. Matters if you regex-parse the file (it broke a naive id→slug pairing).

Methods:
- `getAllProjects()` → **shuffled** (`_.shuffle`) copy that **only picks** `name, tagLine, coverImage, technologies, type, urlSlug, id, contributionLevels`. `details`/`website`/`sourceCode` are **not** included — use `getProjectDetails(id)` for those.
- `getProjectDetails(id)` → full object.
- `getProjectUrlSlug(id)`, `getProjectPageTitle(id)`.
- `getProjectPageDescription(id)` → first paragraph trimmed to ~158 chars (for meta description / tooltips).
- `getVariant(label)` → Bootstrap color variant for a contribution/badge label (Backend→warning, Security/Hardware→danger, Frontend→primary, etc.). Add a `case` here if you introduce a new label and want a specific color.
- `getProjectTechnologies()` → de-duped `Set` of `{tech, projCount}` across all projects. **Feeds the auto-generated "Tech Stacks & Platforms" grid on HireHasil** (that grid is built from project data, it is NOT a hand-written list). ⚠️ Dedup is by **exact string**, so inconsistent names (`'Java'` vs `'JAVA'`, `'React Native'` vs `'ReactNative'`) render as **duplicate chips**. Keep tech strings consistent.

**`quotesMixins.js`** — quote shape `{ id, urlSlug, quoteLines:[string] }`. Methods: `getAllquotes()`, `getRandomQuote()` (the latter powers the App.vue footer).

**`poemsMixins.js`** — poem shape `{ id, urlSlug, name, poemParas:[{ paraLines:[string] }] }`. Method: `getAllpoems()`.

**`seoMixins.js`** exports **one** mixin, `seoMixins`, with a single entry point + schema builders. Every view imports `{ seoMixins }` and calls `applySeo()` once in `created()`. It mutates `document.head` directly (there is no vue-meta).
- `applySeo({ title, description, image, keywords, url, type, schema })` — sets `<title>`, description, OG, Twitter Card, **canonical**, `og:url`, **`og:type`** (`'website'`|`'article'`|`'profile'`), and **JSON-LD**. Add a new head concern *here* and every page gets it. `image` defaults to `og-image.jpg`. **canonical/`og:url` are always built from the production origin (`SITE_URL` const), not `window.location.origin`** — so prerender (localhost) and dev don't emit a wrong canonical; only the path comes from the route. Pass `url` to override. `schema` may be one object or an array; pass nothing to clear (so stale JSON-LD never lingers across SPA routes). After running it dispatches a `seo-ready` DOM event (a hook for the prerenderer).
- Schema builders (also methods on the mixin): `seoPerson()` → the schema.org **Person** (the `personSchema` const at the top — name, jobTitle, `alumniOf`, `hasCredential` = degree, `sameAs` links; update those facts here). `seoBreadcrumb([{name, path}])` → `BreadcrumbList`. `seoCreativeWork({name, description, path, type, extra})` → a CreativeWork-family node (`SoftwareApplication` for `type:'it'` projects, `CreativeWork`+`genre` for poems, `Quotation` for quotes).
- Per-page JSON-LD: Home + HireHasil → Person; project/poem/quote detail → CreativeWork + BreadcrumbList; list pages → BreadcrumbList.

---

## Non-obvious gotchas

- **Tech → logo mapping:** a project's `technologies[]` strings resolve to logos via
  `'/' + tech.replace(/ /g,'').toLowerCase() + '-logo.png'` in `public/`
  (e.g. `'October CMS'` → `/octobercms-logo.png`). Add a tech with no matching PNG → broken image. Add `public/<name>-logo.png` when introducing a new tech.
- **"Featured" lists are hardcoded by id in `Home.vue` `created()`:**
  `highlightedProjects` = ids `[12,16,23]`, `bestQuotes` = `[2,4,9]`, `bestPoems` = `[3,8]`.
  Delete/renumber those ids and the section silently empties — update Home.vue too.
- **Canonical-slug self-redirect (SEO-critical):** `Project.vue`, `Quote.vue`, `Poem.vue`
  redirect to the canonical `urlSlug` from the data if the URL's slug doesn't match. The
  `:id` loads the content; the slug is decorative **but must be exact**. Any external link
  or **sitemap entry must use the exact `urlSlug` from the mixin**, or crawlers hit a redirect.
- **`/hire-Hasil` has a capital `H`** (route is case-sensitive).
- **`getAllProjects()` is shuffled** — never assume project order from it.

---

## Images (current state)

- Project **cover photos were lost** (the Firebase account that hosted them was suspended).
  The `coverImage` fields in `projectsMixins.js` are **dead** (kept for future re-add). Nothing renders them.
- Home + Projects show a **gradient banner with the project's first letter**
  (`.project-banner` / `.project-initial`) instead of a photo. The project detail page shows no cover.
- **Social / OG image:** a single `public/og-image.jpg` (1200×630). It's the default in
  `index.html` (`og:image` + `twitter:image`) and is set per-page via the `image` arg of
  `applySeo`. Home/Projects/HireHasil/Quotes/Poems set it explicitly; the Quote/Poem/Project
  **detail** pages don't pass `image`, so `applySeo` falls back to the same `og-image.jpg` default.
- `public/Hasil-*.png` are **real profile photos** used by the App.vue avatar rotation and the
  HireHasil hero — **distinct** from `og-image.jpg`; don't conflate them.

---

## How to ADD or UPDATE content

### A project
1. Edit the `projects` array in `src/mixins/projectsMixins.js` (unique `id`, `urlSlug`, `type` `'it'|'ee'`, `technologies[]` with matching logos, `contributionLevels`, `details`).
2. New tech without a logo → add `public/<name>-logo.png` (spaces removed, lowercased).
3. To feature it on Home, add its `id` to `highlightedProjects` in `Home.vue`.
4. **SEO files** (see below): add a `<url>` to `sitemap.xml`; mirror it in `llms-full.txt` (and `llms.txt` if notable).

### A quote
1. Edit `quotes` in `src/mixins/quotesMixins.js` (`{id, urlSlug, quoteLines}`).
2. Feature on Home → `bestQuotes` ids. 3. `sitemap.xml`: add `/quote/<id>/<exact-urlSlug>`. 4. Mirror in `llms-full.txt`.

### A poem
1. Edit `poems` in `src/mixins/poemsMixins.js` (`{id, urlSlug, name, poemParas:[{paraLines}]}`).
2. Feature on Home → `bestPoems` ids. 3. `sitemap.xml`: add `/poem/<id>/<exact-urlSlug>`. 4. Mirror in `llms-full.txt`.

### Bio / skills / career / education facts
No single source — update **all** of: `Home.vue`, `HireHasil.vue`, `llms.txt`, `llms-full.txt`,
and `seoMixins.js` `personSchema` if it's a schema fact (jobTitle, degree/`hasCredential`, `sameAs`).
Remember HireHasil's tech grid auto-generates from project data (don't hand-edit it).

---

## SEO / crawl files — when & how

**These are all hand-maintained. None are generated.**

### `public/llms.txt` and `public/llms-full.txt`
Hand-written plaintext mirrors of the site for AI indexers. After **any** content/fact change,
edit them to match and **bump the `Last updated:` line** (both the header and `llms-full.txt`'s
footer) to today's date. `llms.txt` = summary; `llms-full.txt` = full text (career, education,
capabilities, all projects, all quotes, all poems, technologies).

### `public/sitemap.xml`
Hand-maintained list of every public URL with a `<lastmod>`. Update it when you:
- add/remove a project, quote, or poem (add/remove its `<url>`), **or**
- change a `urlSlug` (the sitemap slug **must match the data exactly** — see the canonical-slug gotcha), **or**
- add a new route/page.

Routes that should be in it: `/`, `/projects`, `/quotes`, `/poems`, `/hire-Hasil`, and every
`/project/:id/:slug`, `/quote/:id/:slug`, `/poem/:id/:slug`. **Do not** add redirect-only routes
(e.g. `/performance-analysis`). Set `<lastmod>` to today **only on URLs whose content actually
changed** — don't blanket-bump every entry (crawlers distrust always-fresh sitemaps).
**No trailing slashes** — use `/quotes` not `/quotes/`. The prerender reads this file directly;
trailing slashes in sitemap entries cause CF Pages' directory-index redirect to add slashes to live URLs.

### `public/robots.txt`
Allows all crawlers (empty `Disallow:`), explicitly allows AI bots (GPTBot, ClaudeBot, etc.) and
`facebookexternalhit` (needed so Facebook/LinkedIn can fetch the OG image), and points to the
sitemap. **Usually no change is needed** — everything is already crawlable. Touch it only to
block a path, add/remove a crawler rule, or if the sitemap URL changes.

> Rule of thumb: any change that affects which pages exist, their URLs, or their metadata →
> update `sitemap.xml` (+ bump only the affected `lastmod`s) and re-check `llms*.txt`. New
> images or content rarely need `robots.txt`.

### Prerendering (`scripts/prerender.mjs`) — why & how

The app is a **client-side SPA**: per-page tags are injected by JS *after* load. Google renders
JS so it's fine, but **social crawlers (Facebook/LinkedIn/X/Slack/WhatsApp) and Bing don't run JS**
— without prerender they'd see only the homepage tags from `index.html` on every URL.

`npm run build:seo` fixes this: after `vite build`, it serves `dist/`, visits **every URL in
`sitemap.xml`** in headless Chrome, waits for `applySeo()` to populate `<head>`, and writes the
rendered HTML back as a **flat `.html` file** — e.g. `dist/quotes.html`, `dist/project/12/slug.html`
(NOT `dist/route/index.html`). So **`sitemap.xml` is the prerender route list** — add a page there
and it gets prerendered; the two can't drift.

- **Snapshot, not SSR — and that matters.** The previous attempt that broke click listeners was
  almost certainly SSR/hydration. This is a *snapshot* prerender: the client still does
  `createApp().mount('#app')` (not `createSSRApp().hydrate()`), so Vue clears the container and
  **re-mounts fresh — every listener re-attaches.** Don't switch this to `vite-ssg`/hydration
  without guarding every `window`/`localStorage`/`matchMedia`/`Math.random()` use, or listeners
  break again. (Verified: mounting over a snapshot keeps SPA nav + click handlers working.)
- Needs a local Chrome via `puppeteer-core` (no Chromium download). Auto-detects macOS Chrome;
  override with `CHROME_PATH=/path/to/chrome`. CI must have Chrome available.
- `main.js` skips the artificial 500–1500 ms loading delay when `window.__PRERENDER_INJECTED` is
  set (the prerenderer injects it), so snapshots resolve fast and deterministically.
- **Output is flat `.html` files, not directories.** `dist/quotes.html` not `dist/quotes/index.html`.
  This is intentional: Cloudflare Pages serves `foo.html` at `/foo` with no trailing-slash redirect,
  whereas a `foo/index.html` directory causes CF Pages to redirect `/foo` → `/foo/` at the platform
  level (before any `_redirects` rules fire). **Do not revert to `directory/index.html` output.**
- `dist/` is gitignored — prerendered output is a build artifact, never committed. Deploy the
  output of `build:seo`, **not** plain `build`.

> ⚠️ Plain `npm run build` overwrites `dist/` with the un-prerendered SPA. Run `build:seo` (or
> `npm run prerender` after a build) for anything that goes live.

**Deploy = GitHub Actions (`.github/workflows/deploy.yml`), NOT Cloudflare's own git build.**
Cloudflare Pages' build container has no Chrome and can't prerender. The workflow runs on push to
`vue`: builds + prerenders on a Chrome runner, then `wrangler pages deploy dist` (Direct Upload).
- Don't change Cloudflare's build command to `build:seo` — it fails with "Chrome not found".
- Deploy target is a **Direct Upload** Pages project; Wrangler can't deploy into a Git-connected one.
- The workflow needs secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` and var
  `CF_PAGES_PROJECT` — keep those names if you edit it. Chrome comes from `browser-actions/setup-chrome`
  (path → `CHROME_PATH` for `scripts/prerender.mjs`).

---

## Shell / theming (rarely touched)

`App.vue` owns the theme picker (drives `--global-*` CSS variables), the random avatar rotation
(`Hasil-*.png`), the footer quote (`getRandomQuote()`), and the loading spinner toggled by
`appState.routeLoading`. `main.js` sets an **artificial** random 500–1500 ms route-loading delay
in `router.afterEach` (skipped during prerender — see the Prerendering section), and registers **all** bootstrap-vue-next components & directives globally —
so `<b-card>`, `<b-img>`, `v-b-tooltip`, etc. need no imports (directive names drop the leading `v`).
