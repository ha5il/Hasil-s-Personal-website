// Contact-form relay Worker.
//
// Receives POST /api/contact (same-zone route, see wrangler.toml) from the
// hire-Hasil page and forwards the message by email via Cloudflare Email
// Routing's send_email binding — free, no third-party service.
//
// PRIVACY: the destination address is deliberately NOT in this file or in
// wrangler.toml. It lives only in the `CONTACT_TO` Worker secret
// (`npx wrangler secret put CONTACT_TO`), so it never appears in the repo,
// the client bundle, or any HTTP response.

import { EmailMessage } from 'cloudflare:email'

const ALLOWED_ORIGINS = new Set([
  'https://hasilpaudyal.com.np',
  'https://www.hasilpaudyal.com.np',
])

// From-address must be on the zone (Email Routing requirement). It doesn't
// need a mailbox — it only appears as the sender of the relay email.
const FROM_ADDRESS = 'contact@hasilpaudyal.com.np'

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

// Strip CR/LF so user input can never inject extra MIME headers.
const oneLine = s => String(s).replace(/[\r\n]+/g, ' ').trim()

const isEmail = s => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= 200

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return json(405, { ok: false, error: 'Method not allowed' })
    }

    // The route is same-zone so browsers send no CORS preflight, but reject
    // other sites posting cross-origin anyway. (Non-browser clients omit
    // Origin; that's fine — the honeypot + validation still apply.)
    const origin = request.headers.get('Origin')
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return json(403, { ok: false, error: 'Forbidden' })
    }

    let body
    try {
      body = await request.json()
    } catch {
      return json(400, { ok: false, error: 'Invalid JSON' })
    }

    const name = oneLine(body.name || '')
    const email = oneLine(body.email || '')
    const message = String(body.message || '').trim()

    if (!name || name.length > 100) return json(422, { ok: false, error: 'Invalid name' })
    if (!isEmail(email)) return json(422, { ok: false, error: 'Invalid email' })
    if (message.length < 10 || message.length > 5000) {
      return json(422, { ok: false, error: 'Message must be 10–5000 characters' })
    }

    const subject = `[hasilpaudyal.com.np] Inquiry from ${name}`
    const raw = [
      `From: "Website Contact" <${FROM_ADDRESS}>`,
      `To: <${env.CONTACT_TO}>`,
      `Reply-To: "${name.replaceAll('"', "'")}" <${email}>`,
      `Subject: ${oneLine(subject)}`,
      `Message-ID: <${crypto.randomUUID()}@hasilpaudyal.com.np>`,
      `Date: ${new Date().toUTCString()}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      '',
      `New message from the hire-Hasil contact form:`,
      '',
      `Name:  ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\r\n')

    try {
      await env.CONTACT_EMAIL.send(new EmailMessage(FROM_ADDRESS, env.CONTACT_TO, raw))
    } catch (err) {
      console.error('send failed:', err.message)
      return json(502, { ok: false, error: 'Could not send message' })
    }

    return json(200, { ok: true })
  },
}
