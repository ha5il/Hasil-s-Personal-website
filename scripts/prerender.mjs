// Snapshot prerenderer for the SPA.
//
// Why snapshot (and not SSR): the app reads window/localStorage/matchMedia in
// created()/mounted(), and mounts with createApp().mount() (not hydration).
// Running it in a real headless browser avoids SSR crashes, and because the
// client re-mounts fresh over the snapshot, all event listeners re-attach —
// so click handlers etc. keep working. SSR/hydration would break them.
//
// What it does: serves dist/, visits every URL listed in public/sitemap.xml in
// headless Chrome, waits for the app to inject its per-route <head> tags
// (the `seo-ready` event), then writes the fully-rendered HTML back to
// dist/<route>/index.html. Social crawlers + Bing then get correct per-page
// title/description/OG/JSON-LD without running any JS.
//
// Chrome: uses your system Chrome via puppeteer-core (no Chromium download).
// Override the binary with CHROME_PATH=/path/to/chrome if auto-detect misses.

import http from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'
import puppeteer from 'puppeteer-core'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PORT = 0 // ephemeral

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean)

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.txt': 'text/plain', '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml', '.woff2': 'font/woff2'
}

function resolveChrome() {
  for (const p of CHROME_CANDIDATES) if (existsSync(p)) return p
  throw new Error(
    'No Chrome binary found. Install Google Chrome or set CHROME_PATH=/path/to/chrome.'
  )
}

async function routesFromSitemap() {
  const xml = await readFile(join(ROOT, 'public', 'sitemap.xml'), 'utf8')
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
  // Strip origin → route path; normalise the bare-origin homepage to "/".
  return locs.map(loc => {
    const path = loc.replace(/^https?:\/\/[^/]+/, '')
    return path === '' ? '/' : path
  })
}

// Minimal static server with SPA fallback to index.html.
function startServer() {
  return new Promise(resolve => {
    const server = http.createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split('?')[0])
        let filePath = join(DIST, urlPath)
        if (!extname(filePath) || !existsSync(filePath)) {
          filePath = join(DIST, 'index.html') // SPA fallback
        }
        const body = await readFile(filePath)
        res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
        res.end(body)
      } catch {
        res.writeHead(404); res.end('Not found')
      }
    })
    server.listen(PORT, '127.0.0.1', () => resolve(server))
  })
}

async function run() {
  if (!existsSync(join(DIST, 'index.html'))) {
    throw new Error('dist/index.html missing — run `npm run build` first.')
  }

  const routes = await routesFromSitemap()
  // Not in the sitemap on purpose: snapshots the catch-all NotFound view into
  // dist/404.html, which Cloudflare Pages serves (status 404) for unknown URLs.
  routes.push('/404')
  const server = await startServer()
  const base = `http://127.0.0.1:${server.address().port}`
  const executablePath = resolveChrome()

  console.log(`Prerendering ${routes.length} routes with ${executablePath}`)
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  let ok = 0
  for (const route of routes) {
    const page = await browser.newPage()
    // Mark the run as a prerender BEFORE any app code executes.
    await page.evaluateOnNewDocument(() => { window.__PRERENDER_INJECTED = true })
    try {
      await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 30000 })
      // Wait for the app to have applied SEO (canonical present is the signal).
      await page.waitForFunction(
        () => !!document.querySelector('link[rel="canonical"]'),
        { timeout: 15000 }
      )
      const html = '<!DOCTYPE html>\n' + await page.evaluate(() => document.documentElement.outerHTML)
      // Write flat .html files (e.g. dist/quotes.html, dist/project/12/slug.html)
      // so Cloudflare Pages serves them at /quotes, /project/12/slug with no
      // trailing-slash redirect. CF Pages natively serves foo.html at /foo.
      const outPath = route === '/' ? join(DIST, 'index.html') : join(DIST, route.slice(1) + '.html')
      await mkdir(dirname(outPath), { recursive: true })
      await writeFile(outPath, html, 'utf8')
      ok++
      console.log(`  ✓ ${route}`)
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  server.close()
  console.log(`Prerendered ${ok}/${routes.length} routes.`)
  if (ok < routes.length) process.exitCode = 1
}

run().catch(err => { console.error(err); process.exit(1) })
