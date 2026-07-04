// Generates a branded 1200×630 Open Graph card for every project into
// dist/og/project-<id>.jpg. Runs as part of `npm run build:seo` (after
// `vite build`), reusing the same headless Chrome as the prerenderer, so the
// images are a build artifact — nothing is committed to the repo.
//
// Project.vue points og:image at /og/project-<id>.jpg; social crawlers then
// get a per-project card instead of the generic og-image.jpg.
//
// The design intentionally echoes the site's .project-detail-banner: default
// theme gradient (Claret & Gold), oversized translucent initial, tech chips.

import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import puppeteer from 'puppeteer-core'
import { projectsMixins } from '../src/mixins/projectsMixins.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'dist', 'og')

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean)

function resolveChrome() {
  for (const p of CHROME_CANDIDATES) if (existsSync(p)) return p
  throw new Error('No Chrome binary found. Set CHROME_PATH=/path/to/chrome.')
}

const esc = s => String(s)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function cardHtml(project) {
  const typeLabel = project.type === 'it' ? 'Software Project' : 'Electrical & Hardware Project'
  const chips = project.technologies.slice(0, 6)
    .map(t => `<span class="chip">${esc(t)}</span>`).join('')
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: linear-gradient(135deg, #7A1C22, #B8860B);
    font-family: -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #fff; display: flex; flex-direction: column; justify-content: space-between;
    padding: 64px 72px;
  }
  .circle { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.07); }
  .c1 { width: 520px; height: 520px; top: -160px; right: -80px; }
  .c2 { width: 360px; height: 360px; bottom: -120px; left: 40px; background: rgba(255,255,255,0.05); }
  .initial {
    position: absolute; right: 48px; bottom: -60px; font-size: 440px; font-weight: 900;
    color: rgba(255,255,255,0.14); letter-spacing: -14px; line-height: 1; user-select: none;
  }
  .type {
    font-size: 26px; letter-spacing: 4px; text-transform: uppercase;
    color: rgba(255,255,255,0.85); font-weight: 600;
  }
  .name { font-size: 74px; font-weight: 800; line-height: 1.08; max-width: 900px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.25); }
  .tagline { font-size: 32px; color: rgba(255,255,255,0.92); max-width: 860px;
    margin-top: 18px; line-height: 1.35; }
  .chips { display: flex; gap: 12px; flex-wrap: wrap; max-width: 880px; }
  .chip {
    background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.35);
    border-radius: 999px; padding: 10px 24px; font-size: 24px; font-weight: 600;
  }
  .footer { display: flex; justify-content: space-between; align-items: flex-end;
    position: relative; z-index: 1; }
  .site { font-size: 28px; font-weight: 700; letter-spacing: 1px; }
  .author { font-size: 24px; color: rgba(255,255,255,0.85); }
  .top { position: relative; z-index: 1; }
</style></head><body>
  <div class="circle c1"></div>
  <div class="circle c2"></div>
  <div class="initial">${esc(project.name.charAt(0))}</div>
  <div class="top">
    <div class="type">${typeLabel}</div>
    <div class="name">${esc(project.name)}</div>
    <div class="tagline">${esc(project.tagLine)}</div>
  </div>
  <div class="footer">
    <div>
      <div class="chips">${chips}</div>
      <div class="site" style="margin-top:28px">hasilpaudyal.com.np</div>
    </div>
    <div class="author">Hasil Paudyal</div>
  </div>
</body></html>`
}

async function run() {
  const projects = projectsMixins.methods.getAllProjects()
  await mkdir(OUT_DIR, { recursive: true })

  const browser = await puppeteer.launch({
    executablePath: resolveChrome(),
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })

  for (const project of projects) {
    await page.setContent(cardHtml(project), { waitUntil: 'load' })
    const jpg = await page.screenshot({ type: 'jpeg', quality: 88 })
    await writeFile(join(OUT_DIR, `project-${project.id}.jpg`), jpg)
    console.log(`  ✓ og/project-${project.id}.jpg (${project.name})`)
  }

  await browser.close()
  console.log(`Generated ${projects.length} project OG images.`)
}

run().catch(err => { console.error(err); process.exit(1) })
