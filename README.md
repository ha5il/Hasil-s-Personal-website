# Hasil Paudyal — Personal Portfolio

**Live site:** [hasilpaudyal.com.np](https://hasilpaudyal.com.np)

A Vue 3 single-page application showcasing Hasil's work as an App Development Manager, Electrical Engineer, and Creative Writer.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Vue 3 (Options API) |
| Build | Vite |
| UI Components | bootstrap-vue-next v0.26 (Bootstrap 5) |
| Routing | Vue Router 4 |
| Styles | SCSS (dart-sass via Vite) |

## Branches

| Branch | Description |
|---|---|
| `vue` | **Current** — Vue 3 + Vite (active development) |
| `master` | Legacy Laravel version |

## Getting started

```bash
npm install
npm run dev                   # http://localhost:5173
```

## Commands

```bash
npm run dev       # dev server with hot-reload
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run lint      # ESLint
```

## Project structure

```
src/
  App.vue                  # global layout, themes, nav, global CSS
  main.js                  # app bootstrap, router, bootstrap-vue-next
  state.js                 # reactive route-loading state
  router.js
  config/
    images.js              # imageUrl() helper for R2 paths
  mixins/
    projectsMixins.js      # all project data
    poemsMixins.js         # all poems
    quotesMixins.js        # all quotes
    seoMixins.js           # DOM meta tag injection + schema.org
  views/
    Home.vue  Projects.vue  Project.vue
    Poems.vue  Poem.vue
    Quotes.vue  Quote.vue  HireHasil.vue
public/
  robots.txt  sitemap.xml  llms.txt  llms-full.txt
  *-logo.png               # tech stack logos for project cards
```
