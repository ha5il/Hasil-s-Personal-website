// ---------------------------------------------------------------------------
// Centralised SEO. One method — `applySeo()` — owns every per-page head tag:
// <title>, description, Open Graph, Twitter Card, canonical, og:url, og:type
// and JSON-LD structured data. Views call applySeo() once in created() and
// pass data; the schema builders below turn that data into schema.org objects.
// Add a new meta concern here and every page gets it for free.
// ---------------------------------------------------------------------------

const SITE_URL = 'https://hasilpaudyal.com.np'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`
const DEFAULT_TITLE = "Hasil's Personal Site | Hasil Paudyal"

// schema.org Person — single source of truth for the author identity. Update
// jobTitle / degree (hasCredential) / sameAs links here when those facts change.
const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hasil Paudyal',
    additionalName: 'Hášíl Páůďýál',
    url: SITE_URL,
    worksFor: {
        '@type': 'Organization',
        name: 'ConvergeStack'
    },
    jobTitle: 'App Development Manager',
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'New Horizon College of Engineering'
    },
    hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        educationalLevel: 'Bachelor of Engineering',
        name: 'B.E. Electrical & Electronics Engineering'
    },
    gender: 'male',
    sameAs: [
        'https://www.linkedin.com/in/hasil/',
        'https://facebook.com/hasill',
        'https://github.com/ha5il'
    ],
    honorificPrefix: 'Er'
}

// Lightweight author reference embedded inside per-page CreativeWork schemas.
const authorRef = { '@type': 'Person', name: 'Hasil Paudyal', url: SITE_URL }

function setMetaTag(attr, key, content) {
    if (!content) return
    let el = document.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
    }
    el.setAttribute('content', content)
}

function setCanonical(href) {
    if (!href) return
    let el = document.querySelector('link[rel="canonical"]')
    if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', 'canonical')
        document.head.appendChild(el)
    }
    el.setAttribute('href', href)
}

// Manage the single JSON-LD <script>. Pass an object/array to set it, or a
// falsy value to clear it — so stale schema never lingers across SPA routes.
function setJsonLd(schema) {
    let el = document.getElementById('schemaJSON')
    if (!schema) {
        if (el) el.remove()
        return
    }
    if (!el) {
        el = document.createElement('script')
        el.type = 'application/ld+json'
        el.id = 'schemaJSON'
        document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
}

export const seoMixins = {
    methods: {
        // The one entry point. Everything optional except what a page wants set.
        // type → og:type ('website' | 'article' | 'profile'). schema → JSON-LD
        // (a schema.org object, or an array of them); omit/null to clear it.
        applySeo({ title, description, image, keywords, url, type = 'website', schema = null } = {}) {
            // Always build canonical/og:url from the production origin, never the
            // runtime one — otherwise prerender (localhost) or dev would emit the
            // wrong canonical. window.location only contributes the path.
            const pageUrl = url || (SITE_URL + window.location.pathname)
            const pageImage = image || DEFAULT_IMAGE

            document.title = title || DEFAULT_TITLE

            setMetaTag('property', 'og:type', type)
            setMetaTag('property', 'og:title', title)
            setMetaTag('name', 'twitter:title', title)
            setMetaTag('name', 'description', description)
            setMetaTag('property', 'og:description', description)
            setMetaTag('name', 'twitter:description', description)
            setMetaTag('property', 'og:image', pageImage)
            setMetaTag('name', 'twitter:image', pageImage)
            setMetaTag('name', 'keywords', keywords)
            setMetaTag('property', 'og:url', pageUrl)
            setCanonical(pageUrl)
            setJsonLd(schema)

            // Signal prerender/snapshot tooling that the head is now populated.
            if (typeof document !== 'undefined' && document.dispatchEvent) {
                document.dispatchEvent(new Event('seo-ready'))
            }
        },

        // ---- schema.org builders (keep view code declarative) ----------------

        seoPerson() {
            return personSchema
        },

        // items: [{ name, path }] — path is route-relative ('/', '/projects', …).
        seoBreadcrumb(items) {
            return {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: items.map((item, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: item.name,
                    item: SITE_URL + item.path
                }))
            }
        },

        // Generic CreativeWork-family node (SoftwareApplication, Poem, Quotation…).
        seoCreativeWork({ name, description, path, type = 'CreativeWork', extra = {} }) {
            return {
                '@context': 'https://schema.org',
                '@type': type,
                name,
                ...(description ? { description } : {}),
                ...(path ? { url: SITE_URL + path } : {}),
                inLanguage: 'en',
                author: authorRef,
                ...extra
            }
        }
    }
}
