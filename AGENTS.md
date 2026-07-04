# AGENTS.md — Hasil Paudyal Portfolio

Guidance for AI agents working on this repo. It deliberately does **not** restate the
user-facing copy (project blurbs, poems, quotes, page text) — read that straight from the
files. This file explains the **structure, the methods, where things live, and the
non-obvious gotchas** so you don't waste time looping through files or hallucinate.

The site is updated rarely (~monthly), so reading the actual content files when needed is fine.

> ## ⚠️ Architecture is settled — ask before redesigning
> The content architecture (single-source-of-truth `profile.js` + generated crawl files,
> snapshot prerender, flat-`.html` output, selective component registration) was designed
> deliberately with Hasil in July 2026. **Do not restructure, "simplify", or replace any of
> it on your own initiative** — if you believe you've found a better architecture, STOP and
> ask Hasil first. Content edits, new projects/quotes/poems, bug fixes, and small features
> are all fine without asking.

---

## Stack & commands

- Vue 3 (**Options API**) · Vite · **bootstrap-vue-next** (Bootstrap 5) · vue-router 5 · SCSS (dart-sass).
- `npm run dev` (localhost:5173) · `npm run build` (→ `dist/`) · `npm run preview`.
- **Always `npm run build` to verify after changes** — it's the real check.
- `npm run generate` — regenerates `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt`
  from `src/content/profile.js` + the data mixins. **Run after any content change and commit
  the output** (CI fails otherwise). Never hand-edit those three files or `scripts/seo-manifest.json`.
- `npm run check` — content consistency checker (`scripts/check-content.mjs`): sitemap⇄data slug
  drift, missing tech logos, dead featured ids, duplicate ids, llms mirror. Runs in CI; run it
  locally after content edits.
- `npm run build:seo` = `vite build` + **prerender** (`scripts/prerender.mjs`) + **per-project OG
  images** (`scripts/generate-og-images.mjs`). Needs a local Chrome (`puppeteer-core`; set
  `CHROME_PATH` to override). **This is the deploy command** — plain `build` ships an empty SPA
  shell with only the homepage's static tags. See the SEO section.
- `npm run lint` / `npm run lint:fix` (ESLint v10 flat config in `eslint.config.js`;
  `@eslint/js` recommended + `eslint-plugin-vue` `flat/recommended`). Lint runs in CI before deploy.
  3 warnings are known/accepted (v-html on trusted content, 2 template shadows); don't add errors.
- `package.json` is `"type": "module"`. No lodash — tiny helpers live in `src/utils.js` (`shuffle`).
- Active branch is **`vue`** (the Vue 3 rewrite). `master` is a legacy Laravel version — ignore it.
- `dist/` is gitignored; everything in `public/` is copied verbatim into the build.

---

## Where everything lives — read this first

**`src/content/profile.js` is the SINGLE SOURCE OF TRUTH for personal/career facts**: name,
job title, company, location, links, education, bios (several voices), career history,
capability groups, technology lists. Change a fact there → run `npm run generate` → done.
**Do not copy those facts into components or hand-edit the generated crawl files.**

| Path | What it is |
|---|---|
| `src/content/profile.js` | ⭐ All personal/career/education facts + curated llms framing |
| `src/mixins/projectsMixins.js` | `projects` array (all project data) + helper methods |
| `src/mixins/quotesMixins.js` | `quotes` array + methods |
| `src/mixins/poemsMixins.js` | `poems` array + methods |
| `src/mixins/seoMixins.js` | `applySeo()` head injection + schema.org builders (facts come from profile.js) |
| `src/utils.js` | `shuffle()` (lodash replacement) |
| `src/views/*.vue` | Pages; consume the mixins + profile. `NotFound.vue` = real 404 view |
| `src/App.vue` | Global shell: nav, theme picker, avatar rotation, footer quote, route transitions, print rules, all global CSS |
| `src/router.js` | Routes; catch-all `/:pathMatch(.*)*` renders NotFound (NOT a redirect) |
| `src/main.js` | App bootstrap; **selective** bootstrap-vue-next registration (see gotchas) |
| `scripts/generate-seo-files.mjs` | Generates sitemap.xml + llms*.txt (owns them; deterministic via `seo-manifest.json`) |
| `scripts/check-content.mjs` | CI consistency checker |
| `scripts/prerender.mjs` | Post-build snapshot prerenderer (reads routes from `sitemap.xml`, + `/404`) |
| `scripts/generate-og-images.mjs` | Renders 1200×630 OG card per project → `dist/og/` (build artifact) |
| `scripts/seo-manifest.json` | Committed content-hash → lastmod map; owned by the generator |
| `worker/` | Cloudflare Worker relaying the contact form by email (see Contact form section) |
| `public/` | Generated crawl files, `robots.txt`, `site.webmanifest`, tech logos, photos (`.webp` used at runtime; `.png` originals kept as source), `og-image.jpg`, favicon/PWA icons, `_redirects` |

Views consume data ONLY via mixin methods / profile.js — never duplicate content into a view.

---

## Mixins — methods & data shapes (so you don't re-read them)

**`projectsMixins.js`** — `import { projectsMixins }`, used as a Vue mixin.

Project object shape:
```
{ name, tagLine, coverImage(DEAD — see Images), type:'it'|'ee', urlSlug, id,
  website?, sourceCode?, technologies:[string], contributionLevels:{Label:number},
  details:[{ title, titleIcon, paragraphs?:[{text}], lists?:[{badge, text}] }] }
```
> ⚠️ Within each object, **`urlSlug` appears BEFORE `id`**. Matters if you regex-parse the file.

Methods:
- `getAllProjects()` → **shuffled** (`shuffle`) copy that **only picks** `name, tagLine, coverImage, technologies, type, urlSlug, id, contributionLevels`. `details`/`website`/`sourceCode` are **not** included — use `getProjectDetails(id)` for those.
- `getProjectDetails(id)` → full object.
- `getProjectUrlSlug(id)`, `getProjectPageTitle(id)`.
- `getProjectPageDescription(id)` → first paragraph trimmed to ~158 chars (meta description / tooltips).
- `getVariant(label)` → Bootstrap color variant for a contribution/badge label (Backend→warning, Security/Hardware→danger, Frontend→primary, etc.). Add a `case` if you introduce a new label.
- `getProjectTechnologies()` → de-duped `Set` of `{tech, projCount}` across all projects. **Feeds the auto-generated "Tech Stacks & Platforms" grid on HireHasil** (NOT a hand-written list). ⚠️ Dedup is by **exact string** (`'Java'` vs `'JAVA'` → duplicate chips). Keep tech strings consistent.

**`quotesMixins.js`** — quote shape `{ id, urlSlug, quoteLines:[string] }`. Methods: `getAllquotes()`, `getRandomQuote()` (powers the App.vue footer), `getQuoteDetails(id)`, `getQuoteUrlSlug(id)`.

**`poemsMixins.js`** — poem shape `{ id, urlSlug, name, poemParas:[{ paraLines:[string] }] }`. Methods: `getAllpoems()`, `getPoemDetails(id)`, `getPoemUrlSlug(id)`.

**`seoMixins.js`** exports **one** mixin, `seoMixins`. Every view calls `applySeo()` once in `created()`. It mutates `document.head` directly (no vue-meta).
- `applySeo({ title, description, image, keywords, url, type, schema, robots })` — sets `<title>`, description, OG, Twitter Card, **canonical**, `og:url`, **`og:type`** (`'website'`|`'article'`|`'profile'`), **JSON-LD**, and **`robots`** (pass `'noindex'` on non-indexable pages; it's *removed* when not passed so it can't linger across SPA navigations). `image` defaults to `og-image.jpg`; a **root-relative** image path (`/og/…`) is resolved against the production origin. **canonical/`og:url` always build from the production origin (`profile.siteUrl`), never `window.location.origin`.** `schema`: one object or an array; omit to clear. Dispatches `seo-ready` after running (prerenderer hook).
- Schema builders: `seoPerson()` (Person — built from `profile.js`), `seoBreadcrumb([{name, path}])`, `seoCreativeWork({name, description, path, type, extra})`.
- Per-page JSON-LD: Home + HireHasil → Person; project/poem/quote detail → CreativeWork + BreadcrumbList; list pages → BreadcrumbList.

---

## Non-obvious gotchas

- **bootstrap-vue-next components are registered SELECTIVELY in `main.js`** (bundle went
  842 kB → 290 kB). Using a new `<b-*>` component or `v-b-*` directive in a template?
  **Import + register it in `main.js`** or it silently renders as an unknown element.
  After adding one, `npm run build && npm run prerender` and grep `dist/**/*.html` for `<b-`
  to confirm nothing unresolved remains.
- **Tech → logo mapping:** a project's `technologies[]` strings resolve to logos via
  `'/' + tech.replace(/ /g,'').toLowerCase() + '-logo.png'` in `public/`
  (e.g. `'October CMS'` → `/octobercms-logo.png`). New tech → add the PNG (`npm run check` catches misses).
- **"Featured" lists are hardcoded by id in `Home.vue` `created()`:**
  `highlightedProjects` = ids `[12,16,23]`, `bestQuotes` = `[2,4,9]`, `bestPoems` = `[3,8]`.
  Delete/renumber those ids and the section silently empties (`npm run check` catches it).
  llms.txt's "Key IT Projects" curation = `profile.llmsKeyProjectIds`.
- **Canonical-slug self-redirect (SEO-critical):** `Project.vue`, `Quote.vue`, `Poem.vue`
  redirect to the canonical `urlSlug` from the data if the URL's slug doesn't match. External
  links must use the exact `urlSlug`. The sitemap is generated from the data, so it can't drift.
- **`/hire-Hasil` has a capital `H`** (route is case-sensitive).
- **`getAllProjects()` is shuffled** — never assume project order from it. Node scripts that
  need deterministic order must sort (the generators sort by id).
- **404 handling:** catch-all route renders `NotFound.vue` (with `robots: 'noindex'`); the
  prerenderer also snapshots `/404` → `dist/404.html`, which CF Pages serves with a real 404
  status for unknown URLs. **Don't change the catch-all back to a redirect** (soft-404).
  `/performance-analysis` (legacy inbound URL) 301s via `public/_redirects` + a router redirect.
- **Route transitions, no loader:** the old artificial 500–1500 ms delay + spinners are GONE
  (removed deliberately July 2026 — don't reintroduce). Navigation animates via the `page`
  transition in App.vue (fade + slide, cards ride in via `card-in`; `prefers-reduced-motion`
  respected). There is intentionally **no `appear`** — initial load & prerender snapshots don't animate.

---

## Images

- Project **cover photos were lost** (the Firebase account that hosted them was suspended).
  The `coverImage` fields in `projectsMixins.js` are **dead** (kept for future re-add). Nothing renders them.
- Home + Projects show a **gradient banner with the project's first letter**
  (`.project-banner` / `.project-initial`). The project detail page shows a similar banner.
- **Profile photos:** components reference the optimized `public/Hasil*.webp`; the original
  `.png` files stay in `public/` as the editable source (regenerate `.webp` from them if replaced).
- **Social / OG images:** `public/og-image.jpg` (1200×630) is the default. **Project detail
  pages get a per-project card** `/og/project-<id>.jpg`, generated at deploy time by
  `scripts/generate-og-images.mjs` into `dist/og/` (a build artifact, not committed;
  regenerated on every `build:seo`, so new projects get cards automatically).
- Below-the-fold `b-img` logos use the `lazy` prop.

---

## How to ADD or UPDATE content

### A project
1. Edit the `projects` array in `src/mixins/projectsMixins.js` (unique `id`, `urlSlug`, `type` `'it'|'ee'`, `technologies[]` with matching logos, `contributionLevels`, `details`).
2. New tech without a logo → add `public/<name>-logo.png` (spaces removed, lowercased).
3. To feature it on Home, add its `id` to `highlightedProjects` in `Home.vue`; to feature it in llms.txt, add the `id` to `profile.llmsKeyProjectIds`.
4. `npm run generate` (updates sitemap + llms files) → `npm run check` → `npm run build` → commit everything including `scripts/seo-manifest.json`.

### A quote / poem
1. Edit `quotes` in `quotesMixins.js` (`{id, urlSlug, quoteLines}`) or `poems` in `poemsMixins.js` (`{id, urlSlug, name, poemParas:[{paraLines}]}`).
2. Feature on Home → `bestQuotes` / `bestPoems` ids in `Home.vue`.
3. `npm run generate` → `npm run check` → `npm run build` → commit.

### Bio / skills / career / education facts
Edit **`src/content/profile.js` only** (pick the right field — several bios exist in different
voices: `bioFirstPerson` (Home), `bioThirdPerson` + `aboutThirdPerson` (llms), `hireSummary`
(hire-Hasil); career entries carry `summary` (hire-Hasil), `summaryLong` (llms) and `story`
(Home, first person, may contain HTML)). Then `npm run generate` and commit. The Person JSON-LD,
Home, hire-Hasil, App shell links, and llms files all pick it up.

---

## SEO / crawl files

### Generated: `sitemap.xml`, `llms.txt`, `llms-full.txt` (never hand-edit)
`npm run generate` builds all three from profile.js + the mixins. `<lastmod>` moves **only**
for URLs whose content hash actually changed (tracked in `scripts/seo-manifest.json`, committed) —
so don't worry about lastmod at all; the generator owns it. CI regenerates and **fails if the
committed files are stale**, so never edit content without running generate.
To force a lastmod bump without a content change (e.g. a pure design change to a page), edit
that URL's `lastmod` in `scripts/seo-manifest.json` and regenerate.

### `public/robots.txt` (hand-maintained)
Allows all crawlers, explicitly allows AI bots (GPTBot, ClaudeBot, etc.) and
`facebookexternalhit`, and points to the sitemap. **Usually no change is needed.**

### Search Console — how to read the indexing report (so you don't "fix" non-problems)
Verified property exists (TXT record `google-site-verification` — keep it). Expected/normal
entries that need NO action:
- **"Page with redirect"**: `http://` → `https://` homepage, and old project slugs (they 404
  or canonical-redirect by design).
- **404s for legacy Laravel-era URLs** (`/gallery/`, `/hasil-videos/`, `/about-hasil/`) and
  random-hash spam-probe URLs — intentionally 404 since July 2026; do not add redirects.
- **Some poem/quote pages staying "crawled – not indexed"**: they're thin literary pages;
  Google may decline them regardless of markup. Not a defect.
- Dead legacy subdomains `amp.` and `blog.` have no DNS; stale index entries are expected
  to decay (removal was requested via GSC July 2026).

### Prerendering (`scripts/prerender.mjs`) — why & how

The app is a **client-side SPA**: per-page tags are injected by JS *after* load. Google renders
JS so it's fine, but **social crawlers (Facebook/LinkedIn/X/Slack/WhatsApp) and Bing don't run JS**
— without prerender they'd see only the homepage tags from `index.html` on every URL.

`npm run build:seo` fixes this: after `vite build`, it serves `dist/`, visits **every URL in
`sitemap.xml`** (plus `/404`) in headless Chrome, waits for `applySeo()` to populate `<head>`,
and writes the rendered HTML back as a **flat `.html` file** — e.g. `dist/quotes.html`,
`dist/project/12/slug.html` (NOT `dist/route/index.html`). So **`sitemap.xml` is the prerender
route list** — generated pages and prerendered pages can't drift.

- **Snapshot, not SSR — and that matters.** The client still does `createApp().mount('#app')`
  (not hydration), so Vue clears the container and **re-mounts fresh — every listener
  re-attaches.** Don't switch to `vite-ssg`/hydration without guarding every
  `window`/`localStorage`/`matchMedia`/`Math.random()` use, or listeners break.
- Needs a local Chrome via `puppeteer-core` (no Chromium download). Auto-detects macOS Chrome;
  override with `CHROME_PATH=/path/to/chrome`. CI gets Chrome from `browser-actions/setup-chrome`.
- **Output is flat `.html` files, not directories** — CF Pages serves `foo.html` at `/foo` with
  no trailing-slash redirect, whereas `foo/index.html` triggers a platform-level `/foo` → `/foo/`
  redirect. **Do not revert to `directory/index.html` output.**
- `main.js` no longer has an artificial delay; `window.__PRERENDER_INJECTED` is still set by the
  prerenderer if tooling ever needs it.

> ⚠️ Plain `npm run build` overwrites `dist/` with the un-prerendered SPA. Deploy the output of
> `build:seo`, **not** plain `build`.

**Deploy = GitHub Actions (`.github/workflows/deploy.yml`), NOT Cloudflare's own git build.**
Cloudflare Pages' build container has no Chrome. On push to `vue`: lint → content check →
generated-files freshness check → `build:seo` (build + prerender + OG cards) → `wrangler pages
deploy dist` (Direct Upload).
- Don't change Cloudflare's build command to `build:seo` — it fails with "Chrome not found".
- Deploy target is a **Direct Upload** Pages project; Wrangler can't deploy into a Git-connected one.
- Secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` and var `CF_PAGES_PROJECT` — keep those names.

---

## Contact form (hire-Hasil) & the email Worker

- `/hire-Hasil` is designed as a **printable resume** (print CSS strips the shell and forces a
  paper palette; the contact form is `d-print-none`). **Hasil explicitly wants NO downloadable
  resume file** — people print the page. Don't add a PDF.
- The contact form POSTs JSON to `/api/contact` — a **same-zone Cloudflare Worker route**
  (`worker/contact-worker.js`, deployed separately with `cd worker && npx wrangler deploy`).
  The Worker validates, strips header-injection attempts, and emails via **Cloudflare Email
  Routing** (free). Client-side honeypot field drops naive bots.
- 🔒 **The destination email address is a secret (`CONTACT_TO` via `wrangler secret put`) and
  must NEVER appear in the repo, client code, or any response.** Don't "helpfully" inline it.
- Setup/runbook: `worker/README.md`. **Status: live since July 2026** — Email Routing is
  enabled on the zone (it replaced the old unused Zoho MX/SPF records; don't re-add Zoho),
  `CONTACT_TO` is set, and the Worker is deployed. A free-plan WAF rate-limiting rule
  (3 req / 10 s per IP on `/api/contact`, action Block) guards against email flooding —
  Cloudflare's always-on DDoS protection covers the rest; no other throttling is needed.

---

## Shell / theming (rarely touched)

`App.vue` owns the theme picker (drives `--global-*` CSS variables), the random avatar rotation
(`Hasil*.webp`), the footer quote (`getRandomQuote()`, now a keyboard-accessible router-link),
the `page` route transition, and the global print rules. `main.js` registers ONLY the
bootstrap-vue-next components/directives the templates use (directive names drop the leading `v`:
`vBTooltip` → `v-b-tooltip`). Decorative `material-icons` carry `aria-hidden="true"`; theme
buttons have aria-labels; focus styles use `:focus-visible` (don't remove outlines).
