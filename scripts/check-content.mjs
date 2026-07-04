// Content consistency checker — runs in CI before every deploy (and locally
// via `npm run check`). Catches the classes of drift documented in AGENTS.md:
//
//   1. sitemap.xml entries whose slug doesn't exactly match the data's urlSlug
//      (crawlers would hit the canonical-slug self-redirect)
//   2. projects/quotes/poems missing from the sitemap, or sitemap entries
//      pointing at ids that no longer exist
//   3. trailing slashes in the sitemap (CF Pages redirect trap)
//   4. technologies[] strings with no matching public/<name>-logo.png
//   5. featured ids hardcoded in Home.vue that don't exist in the data
//   6. duplicate ids within a dataset
//   7. project/poem names missing from llms-full.txt (hand-maintained mirror)
//
// Exits 1 with a list of problems; prints OK otherwise.

import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { projectsMixins } from '../src/mixins/projectsMixins.js'
import { quotesMixins } from '../src/mixins/quotesMixins.js'
import { poemsMixins } from '../src/mixins/poemsMixins.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const problems = []

const projects = projectsMixins.methods.getAllProjects()
const quotes = quotesMixins.methods.getAllquotes()
const poems = poemsMixins.methods.getAllpoems()

const sitemap = await readFile(join(ROOT, 'public', 'sitemap.xml'), 'utf8')
const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(m => m[1].trim().replace(/^https?:\/\/[^/]+/, ''))
  .map(p => (p === '' ? '/' : p))

// ── 3. trailing slashes ─────────────────────────────────────────────────────
for (const p of sitemapPaths) {
  if (p !== '/' && p.endsWith('/')) {
    problems.push(`sitemap: "${p}" has a trailing slash (breaks CF Pages flat-file serving)`)
  }
}

// ── 1 + 2. sitemap ⇄ data cross-check ──────────────────────────────────────
const expectDetail = (kind, items) =>
  new Map(items.map(i => [`/${kind}/${i.id}/${i.urlSlug}`, i]))

const expected = new Map([
  ...expectDetail('project', projects),
  ...expectDetail('quote', quotes),
  ...expectDetail('poem', poems),
])

const staticRoutes = ['/', '/projects', '/quotes', '/poems', '/hire-Hasil']
for (const r of staticRoutes) {
  if (!sitemapPaths.includes(r)) problems.push(`sitemap: missing static route "${r}"`)
}

for (const p of sitemapPaths) {
  if (staticRoutes.includes(p)) continue
  if (!expected.has(p)) {
    problems.push(`sitemap: "${p}" doesn't match any project/quote/poem id+urlSlug (slug drift or deleted item?)`)
  }
}
for (const path of expected.keys()) {
  if (!sitemapPaths.includes(path)) {
    problems.push(`sitemap: missing entry for "${path}"`)
  }
}
if (sitemapPaths.some(p => p.startsWith('/performance-analysis'))) {
  problems.push('sitemap: contains redirect-only route /performance-analysis')
}

// ── 4. tech logo files ──────────────────────────────────────────────────────
const publicFiles = new Set(await readdir(join(ROOT, 'public')))
const allTechs = new Set(projects.flatMap(p => p.technologies || []))
for (const tech of allTechs) {
  const logo = tech.replace(/ /g, '').toLowerCase() + '-logo.png'
  if (!publicFiles.has(logo)) {
    problems.push(`tech logo: "${tech}" needs public/${logo} (referenced by a project, file missing)`)
  }
}

// ── 5. featured ids in Home.vue ─────────────────────────────────────────────
const homeSrc = await readFile(join(ROOT, 'src', 'views', 'Home.vue'), 'utf8')
const featured = (label, re, items) => {
  const m = homeSrc.match(re)
  if (!m) { problems.push(`Home.vue: could not find ${label} id list (pattern changed?)`); return }
  const ids = m[1].split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n))
  const known = new Set(items.map(i => i.id))
  for (const id of ids) {
    if (!known.has(id)) problems.push(`Home.vue: ${label} id ${id} doesn't exist in the data`)
  }
}
featured('highlightedProjects', /highlightedProjects\s*=\s*this\.getAllProjects\(\)\.filter\(\w+\s*=>\s*\[([^\]]*)\]/, projects)
featured('bestQuotes', /bestQuotes\s*=\s*this\.getAllquotes\(\)\.filter\(\w+\s*=>\s*\[([^\]]*)\]/, quotes)
featured('bestPoems', /bestPoems\s*=\s*this\.getAllpoems\(\)\.filter\(\w+\s*=>\s*\[([^\]]*)\]/, poems)

// ── 6. duplicate ids ────────────────────────────────────────────────────────
const dupCheck = (label, items) => {
  const seen = new Set()
  for (const i of items) {
    if (seen.has(i.id)) problems.push(`${label}: duplicate id ${i.id}`)
    seen.add(i.id)
  }
}
dupCheck('projects', projects)
dupCheck('quotes', quotes)
dupCheck('poems', poems)

// ── 7. llms-full.txt mirrors named content ──────────────────────────────────
const llmsFull = await readFile(join(ROOT, 'public', 'llms-full.txt'), 'utf8')
for (const p of projects) {
  if (!llmsFull.includes(p.name)) problems.push(`llms-full.txt: project "${p.name}" not mentioned`)
}
for (const p of poems) {
  if (!llmsFull.includes(p.name)) problems.push(`llms-full.txt: poem "${p.name}" not mentioned`)
}

// ── report ──────────────────────────────────────────────────────────────────
if (problems.length) {
  console.error(`✗ Content check failed (${problems.length} problem${problems.length > 1 ? 's' : ''}):\n`)
  for (const p of problems) console.error(`  - ${p}`)
  process.exit(1)
}
console.log(`✓ Content check passed — ${projects.length} projects, ${quotes.length} quotes, ${poems.length} poems, ${allTechs.size} techs, ${sitemapPaths.length} sitemap URLs.`)
