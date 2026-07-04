// Generates public/sitemap.xml, public/llms.txt and public/llms-full.txt from
// the single sources of truth:
//
//   src/content/profile.js       → identity, career, education, capabilities
//   src/mixins/projectsMixins.js → projects
//   src/mixins/quotesMixins.js   → quotes
//   src/mixins/poemsMixins.js    → poems
//
// Run `npm run generate` after ANY content change and commit the results.
// CI regenerates and fails the deploy if the committed files are stale.
//
// ── lastmod policy ──────────────────────────────────────────────────────────
// Crawlers distrust sitemaps where every URL is always "fresh", so lastmod
// must only move when a page's content actually changes. To make that
// deterministic, scripts/seo-manifest.json (committed) stores a content hash
// per URL: unchanged hash → keep the stored lastmod; changed/new hash → stamp
// today. Same commit therefore always regenerates byte-identical files.
//
// ⚠️ Do NOT hand-edit public/sitemap.xml, public/llms.txt, public/llms-full.txt
//    or scripts/seo-manifest.json — they are all owned by this script.

import { createHash } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { profile } from '../src/content/profile.js'
import { projectsMixins } from '../src/mixins/projectsMixins.js'
import { quotesMixins } from '../src/mixins/quotesMixins.js'
import { poemsMixins } from '../src/mixins/poemsMixins.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const MANIFEST_PATH = join(ROOT, 'scripts', 'seo-manifest.json')
const SITE = profile.siteUrl
const TODAY = new Date().toISOString().slice(0, 10)

const byId = (a, b) => a.id - b.id
// getAll* shuffle — sort for deterministic output.
const projects = projectsMixins.methods.getAllProjects().sort(byId)
  .map(p => projectsMixins.methods.getProjectDetails(p.id))
const quotes = quotesMixins.methods.getAllquotes().sort(byId)
const poems = poemsMixins.methods.getAllpoems().sort(byId)

const sha = v => createHash('sha1').update(JSON.stringify(v)).digest('hex')

// ── manifest ────────────────────────────────────────────────────────────────
const manifest = existsSync(MANIFEST_PATH)
  ? JSON.parse(await readFile(MANIFEST_PATH, 'utf8'))
  : {}

// Seed lastmods from a pre-existing hand-maintained sitemap on first run, so
// history isn't lost when adopting the generator.
let legacyLastmods = new Map()
const sitemapPath = join(ROOT, 'public', 'sitemap.xml')
if (existsSync(sitemapPath)) {
  const old = await readFile(sitemapPath, 'utf8')
  legacyLastmods = new Map(
    [...old.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
      .map(m => [m[1].replace(SITE, '') || '/', m[2]])
  )
}

function lastmodFor(path, content) {
  const hash = sha(content)
  const prev = manifest[path]
  if (prev && prev.hash === hash) return prev.lastmod
  const lastmod = (!prev && legacyLastmods.get(path)) || TODAY
  manifest[path] = { hash, lastmod }
  return lastmod
}

// ── sitemap.xml ─────────────────────────────────────────────────────────────
const urls = [
  // Static pages: hashed on the profile facts they render (approximation that
  // keeps lastmod honest without hashing whole components).
  { path: '/', content: { profile: [profile.bioFirstPerson, profile.career] } },
  { path: '/projects', content: projects.map(p => [p.id, p.urlSlug, p.name, p.tagLine]) },
  { path: '/quotes', content: quotes.map(q => [q.id, q.urlSlug]) },
  { path: '/poems', content: poems.map(p => [p.id, p.urlSlug, p.name]) },
  { path: '/hire-Hasil', content: { profile: [profile.hireSummary, profile.career, profile.capabilityGroups, profile.education] } },
  ...projects.map(p => ({ path: `/project/${p.id}/${p.urlSlug}`, content: p })),
  ...quotes.map(q => ({ path: `/quote/${q.id}/${q.urlSlug}`, content: q })),
  ...poems.map(p => ({ path: `/poem/${p.id}/${p.urlSlug}`, content: p })),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `    <url>
        <loc>${SITE}${u.path === '/' ? '/' : u.path}</loc>
        <lastmod>${lastmodFor(u.path, u.content)}</lastmod>
    </url>`).join('\n')}
</urlset>
`

// ── shared snippets ─────────────────────────────────────────────────────────
const httpsify = u => (u && u.startsWith('//') ? 'https:' + u : u)
const careerHeading = c =>
  `${c.role} — ${c.companyLabel}, ${c.companyPlace} (${c.periodLong.replace(' · ', ', ')})`
const projectBody = p => {
  const firstPara = p.details?.[0]?.paragraphs?.[0]?.text || p.tagLine
  const lines = [firstPara]
  if (p.technologies?.length) lines.push(`Technologies: ${p.technologies.join(', ')}.`)
  if (p.website) lines.push(`Website: ${httpsify(p.website)}`)
  if (p.sourceCode) lines.push(`Source code: ${httpsify(p.sourceCode)}`)
  return lines.join('\n')
}

const itProjects = projects.filter(p => p.type === 'it')
const eeProjects = projects.filter(p => p.type === 'ee')
const keyProjects = profile.llmsKeyProjectIds
  .map(id => projects.find(p => p.id === id)).filter(Boolean)

// ── llms-full.txt ───────────────────────────────────────────────────────────
const llmsFullBody = `# ${profile.name} — Full Site Content

> This document is intended for LLM indexers and AI assistants. It contains the full text content of ${SITE.replace('https://', '')}. Generated from the site's data — do not edit by hand.

## Person

**Name:** ${profile.name}
**Location:** ${profile.location}
**Website:** ${SITE}
**LinkedIn:** ${profile.links.linkedin}
**GitHub:** ${profile.links.github}
**Facebook:** ${profile.links.facebook}

**Bio:** ${profile.bioThirdPerson}

---

## Career History

${profile.career.map(c => `### ${careerHeading(c)}\n${c.summaryLong}`).join('\n\n')}

---

## Education

**${profile.education.degree}** — ${profile.education.school}, ${profile.education.place} (${profile.education.period})

---

## Capabilities

${profile.capabilityGroups.map(g => `### ${g.title}\n${g.items.map(i => `- ${i}`).join('\n')}`).join('\n\n')}

---

## IT Projects

${itProjects.map(p => `### ${p.name}\n${projectBody(p)}`).join('\n\n')}

---

## Electrical & Electronics Projects

${eeProjects.map(p => `### ${p.name}\n${projectBody(p)}`).join('\n\n')}

---

## Original Quotes by ${profile.name}

${quotes.map((q, i) => `${i + 1}. "${q.quoteLines.join(' / ')}"`).join('\n\n')}

---

## Original Poems by ${profile.name}

${poems.map(p => `### ${p.name}\n\n${p.poemParas.map(para => para.paraLines.join(' / ')).join('\n\n')}`).join('\n\n---\n\n')}

---

## Technologies & Tools

${Object.entries(profile.technologyCategories).map(([k, v]) => `**${k}:** ${v}`).join('\n')}
`

// ── llms.txt ────────────────────────────────────────────────────────────────
const llmsBody = `# ${profile.name} — Personal Portfolio

> ${profile.tagline}

## About

${profile.aboutThirdPerson}

He is the author of all poems and quotes published on this site.

LinkedIn: ${profile.links.linkedin}
GitHub: ${profile.links.github}

## What He Does

${profile.capabilityGroups[0].items.map(i => `- ${i}`).join('\n')}
- IoT hardware — RFID, physical sensors, Arduino, Wi-Fi based devices
- Original poetry and prose writing

## Site Sections

- [Home](${SITE}/) — Bio, career history, highlighted projects, featured quotes and poems
- [Projects](${SITE}/projects) — ${itProjects.length} IT projects and ${eeProjects.length} Electrical/Electronics projects with tech stacks and contribution breakdowns
- [Quotes](${SITE}/quotes) — ${quotes.length} original quotes authored by ${profile.name}
- [Poems](${SITE}/poems) — ${poems.length} original poems including acrostic, philosophical, and lyrical pieces
- [Hire Me](${SITE}/hire-Hasil) — Resume-style page: full career timeline, education, skills across engineering and creative domains, and a contact form

## Key IT Projects

${keyProjects.map(p => `- **${p.name}** — ${p.tagLine} ${p.technologies?.length ? `Technologies: ${p.technologies.join(', ')}.` : ''}`).join('\n')}

## Electrical & Electronics Projects

${eeProjects.map(p => `- ${p.name} — ${p.tagLine}`).join('\n')}

## Technologies

${profile.technologiesSummary}

## Creative Work

${profile.creativeSummary}

Selected quotes:
${profile.selectedQuotes.map(q => `- "${q}"`).join('\n')}

## Full Content

A detailed version with all project descriptions, poems, and quotes is available at:
${SITE}/llms-full.txt

## Contact

- LinkedIn: ${profile.links.linkedin}
- Facebook: ${profile.links.facebook}
- GitHub: ${profile.links.github}
- Website: ${SITE}
`

// "Last updated" moves only when the (date-free) body actually changes.
const llmsDate = lastmodFor('__llms__', { llmsBody, llmsFullBody })

const llmsTxt = llmsBody.replace('## About', `> Last updated: ${llmsDate}\n\n## About`)
const llmsFullTxt = llmsFullBody
  .replace('## Person', `> Last updated: ${llmsDate}\n\n---\n\n## Person`)
  + `\n---\n\n*Last updated: ${llmsDate}*\n*Source: ${SITE}*\n`

// ── write ───────────────────────────────────────────────────────────────────
await writeFile(sitemapPath, sitemap)
await writeFile(join(ROOT, 'public', 'llms.txt'), llmsTxt)
await writeFile(join(ROOT, 'public', 'llms-full.txt'), llmsFullTxt)
await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')

console.log(`✓ Generated sitemap.xml (${urls.length} URLs), llms.txt, llms-full.txt (content date: ${llmsDate})`)
