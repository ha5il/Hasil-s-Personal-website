# AGENTS.md — Hasil Paudyal Portfolio

Guidance for AI agents working on this repo. It deliberately does **not** restate the
user-facing copy (project blurbs, poems, quotes, page text) — read that straight from the
files. This file explains the **structure, the methods, where things live, and the
non-obvious gotchas** so you don't waste time looping through files or hallucinate.

The site is updated rarely (~monthly), so reading the actual content files when needed is fine.

---

## Stack & commands

- Vue 3 (**Options API**) · Vite · **bootstrap-vue-next** (Bootstrap 5) · vue-router 4 · SCSS (dart-sass).
- `npm run dev` (localhost:5173) · `npm run build` (→ `dist/`) · `npm run preview`.
- **Always `npm run build` to verify after changes** — it's the real check.
- ⚠️ **`npm run lint` is broken** — ESLint v9 needs an `eslint.config.js` that doesn't exist. Don't rely on it; verify with the build instead.
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
- `src/mixins/seoMixins.js` → `globalSchemas.hasil` (only if it's a schema fact: job title, degree, profile links)

Repo map:

| Path | What it is |
|---|---|
| `src/mixins/projectsMixins.js` | `projects` array (all project data) + helper methods |
| `src/mixins/quotesMixins.js` | `quotes` array + methods |
| `src/mixins/poemsMixins.js` | `poems` array + methods |
| `src/mixins/seoMixins.js` | SEO meta-tag injection + schema.org Person (NOT a content list) |
| `src/views/*.vue` | Pages; they consume the mixins |
| `src/App.vue` | Global shell: nav, theme picker, avatar rotation, footer quote, loading spinner, all global CSS |
| `src/router.js` | Routes |
| `src/state.js` | `appState.routeLoading` reactive flag only |
| `src/main.js` | App bootstrap |
| `public/` | `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, tech logos, photos, `og-image.jpg` |

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

**`seoMixins.js`** exports **two** mixins:
- `schemaMixins`: `injectDefaultSchemaJSON('hasil')` injects the schema.org **Person** JSON-LD (`globalSchemas.hasil`) into `<head>`. Only **Home.vue** uses it. The Person object (name, jobTitle, `alumniOf`, `hasCredential` = degree, `sameAs` links) lives at the top of this file — update it when those facts change.
- `htmlHeadMixins`: `getOptimizedSeoMetaTags({ title, description, image, keywords, url })` — sets `<title>` + OG/Twitter/description/keywords meta by **mutating `document.head` directly** (there is no vue-meta). Every view calls this in its `created()`.

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
  `getOptimizedSeoMetaTags`. Home/Projects/HireHasil/Quotes/Poems set it explicitly; the
  Quote/Poem/Project **detail** pages don't set `image` and inherit the index.html default.
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
and `seoMixins.js` `globalSchemas.hasil` if it's a schema fact (jobTitle, degree/`hasCredential`, `sameAs`).
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

### `public/robots.txt`
Allows all crawlers (empty `Disallow:`), explicitly allows AI bots (GPTBot, ClaudeBot, etc.) and
`facebookexternalhit` (needed so Facebook/LinkedIn can fetch the OG image), and points to the
sitemap. **Usually no change is needed** — everything is already crawlable. Touch it only to
block a path, add/remove a crawler rule, or if the sitemap URL changes.

> Rule of thumb: any change that affects which pages exist, their URLs, or their metadata →
> update `sitemap.xml` (+ bump only the affected `lastmod`s) and re-check `llms*.txt`. New
> images or content rarely need `robots.txt`.

---

## Shell / theming (rarely touched)

`App.vue` owns the theme picker (drives `--global-*` CSS variables), the random avatar rotation
(`Hasil-*.png`), the footer quote (`getRandomQuote()`), and the loading spinner toggled by
`appState.routeLoading`. `main.js` sets an **artificial** random 500–1500 ms route-loading delay
in `router.afterEach`, and registers **all** bootstrap-vue-next components & directives globally —
so `<b-card>`, `<b-img>`, `v-b-tooltip`, etc. need no imports (directive names drop the leading `v`).
