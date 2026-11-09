// Pings IndexNow (api.indexnow.org) with every URL in public/sitemap.xml so
// Bing, Yandex, Naver, Seznam and the engines fed by them (DuckDuckGo, Yahoo,
// Ecosia) re-fetch the pages promptly after a deploy. Google and Brave do not
// consume IndexNow; they rely on the sitemap and their own crawl schedule.
//
// Every deploy rewrites every prerendered page (shared shell, nav, footer), so
// submitting the whole sitemap is accurate. Deploys are infrequent (~monthly).
//
// The key is NOT a secret: IndexNow verifies ownership by fetching
// https://<host>/<key>.txt, so the key file lives in public/ and is committed.
// Run after `wrangler pages deploy` — the key file must already be live.

import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC = join(ROOT, 'public')

const keyFile = (await readdir(PUBLIC)).find(f => /^[a-f0-9]{32}\.txt$/.test(f))
if (!keyFile) throw new Error('No IndexNow key file (public/<32-hex>.txt) found.')
const key = (await readFile(join(PUBLIC, keyFile), 'utf8')).trim()

const xml = await readFile(join(PUBLIC, 'sitemap.xml'), 'utf8')
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
if (urlList.length === 0) throw new Error('sitemap.xml lists no URLs.')

const host = new URL(urlList[0]).host
const body = { host, key, keyLocation: `https://${host}/${keyFile}`, urlList }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body)
})
// 200 = accepted, 202 = accepted & key validation pending. Anything else is a
// rejection worth surfacing in the deploy log.
console.log(`IndexNow: submitted ${urlList.length} URLs for ${host} → HTTP ${res.status}`)
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text())
  process.exitCode = 1
}
