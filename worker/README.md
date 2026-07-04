# Contact-form relay Worker

Delivers messages from the `/hire-Hasil` contact form to Hasil's personal email
**without the address appearing anywhere in the repo, client code, or responses**.
Everything used is on Cloudflare's free plan.

```
Browser (hire-Hasil page)
  └─ POST https://hasilpaudyal.com.np/api/contact   (same-zone Worker route)
       └─ Worker validates + builds MIME email
            └─ Email Routing send_email binding → CONTACT_TO (secret, verified address)
```

## One-time setup (Cloudflare dashboard + terminal)

1. **Enable Email Routing** on the `hasilpaudyal.com.np` zone:
   dashboard → the zone → *Email* → *Email Routing* → enable (it adds the MX/TXT
   records itself).
2. **Add + verify the destination address**: *Email Routing* → *Destination
   addresses* → add your personal Gmail → click the verification link Cloudflare
   sends to that inbox.
3. **Deploy the Worker**:
   ```sh
   cd worker
   npx wrangler login          # first time only
   npx wrangler secret put CONTACT_TO   # paste the same verified Gmail address
   npx wrangler deploy
   ```
   `wrangler deploy` attaches the `/api/contact` routes from `wrangler.toml`.
4. **Test**: submit the form on https://hasilpaudyal.com.np/hire-Hasil — the
   email arrives with `Reply-To` set to the sender, so replying goes straight
   to them (from whatever address you reply with — use an alias if you want to
   keep Gmail hidden in replies too).

## Notes

- **Spam**: the page has an off-screen honeypot field (bots that fill it are
  dropped client-side and never reach the Worker). If spam ever gets through,
  add a free WAF rate-limiting rule on `/api/contact` (dashboard → Security →
  WAF → Rate limiting rules), or ask an agent to add Turnstile.
- The `From:` is `contact@hasilpaudyal.com.np` — it needs no mailbox; Email
  Routing only requires the sender domain to be on the zone.
- Changing the recipient later: `npx wrangler secret put CONTACT_TO` again
  (the new address must also be verified in Email Routing first).
- The Worker rejects non-POST, foreign `Origin` headers, bad JSON, and
  out-of-bounds field lengths; user input is stripped of CR/LF so it cannot
  inject MIME headers.
