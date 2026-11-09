// ---------------------------------------------------------------------------
// Centralised SEO. One method — `applySeo()` — owns every per-page head tag:
// <title>, description, Open Graph, Twitter Card, canonical, og:url, og:type,
// robots and JSON-LD structured data. Views call applySeo() once in created()
// and pass data; the schema builders below turn that data into schema.org
// objects. Add a new meta concern here and every page gets it for free.
//
// JSON-LD is emitted as a small linked graph: the Person and WebSite nodes
// carry stable `@id`s (…/#person, …/#website) and every page-level node points
// back at them, so engines and AI crawlers resolve one entity, not many.
// ---------------------------------------------------------------------------

import { profile } from '../content/profile.js'
// Per-URL lastmod (owned by scripts/generate-seo-files.mjs) → dateModified.
import manifest from '../../scripts/seo-manifest.json' with { type: 'json' }

const SITE_URL = profile.siteUrl
// The homepage URL is the origin WITH a trailing slash — that is what the
// sitemap lists and what the host redirects the bare origin to.
const HOME_URL = `${SITE_URL}/`
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`
const DEFAULT_TITLE = "Hasil's Personal Site | Hasil Paudyal"
// Indexable pages get explicit snippet permissions so engines may show full
// descriptions and large image previews; pages pass robots: 'noindex' to opt out.
const DEFAULT_ROBOTS = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

const PERSON_ID = `${HOME_URL}#person`
const WEBSITE_ID = `${HOME_URL}#website`

const pageUrlFor = path => (path === '/' ? HOME_URL : SITE_URL + path)
const lastmodFor = path => manifest[path]?.lastmod

// schema.org Person — every fact comes from src/content/profile.js (the single
// source of truth). Update facts THERE, not here.
const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    additionalName: profile.additionalName,
    url: HOME_URL,
    image: `${SITE_URL}/Hasil.png`,
    description: profile.tagline,
    homeLocation: {
        '@type': 'Place',
        name: profile.location
    },
    worksFor: {
        '@type': 'Organization',
        name: profile.company.name,
        url: profile.company.url
    },
    jobTitle: profile.jobTitle,
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: profile.education.school
    },
    hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        educationalLevel: profile.education.level,
        name: profile.education.degree
    },
    knowsAbout: [...new Set([
        ...profile.capabilityGroups.map(g => g.title),
        ...profile.career.flatMap(c => c.tags)
    ])],
    gender: profile.gender,
    sameAs: Object.values(profile.links),
    honorificPrefix: profile.honorificPrefix
}

// Author reference embedded inside page-level nodes — resolves to the Person
// above by @id, with name/url kept for consumers that don't follow ids.
const authorRef = { '@type': 'Person', '@id': PERSON_ID, name: profile.name, url: HOME_URL }
const websiteRef = { '@id': WEBSITE_ID }

// schema.org WebSite — tells engines the site's name (used for the "site name"
// line in results) and that the whole site is one person's work.
const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: profile.name,
    alternateName: `${profile.name} — Personal Portfolio`,
    url: HOME_URL,
    description: profile.tagline,
    inLanguage: 'en',
    author: authorRef,
    publisher: authorRef
}

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

// rel="me" links assert that the social profiles belong to this site's owner
// (identity consolidation for engines and the IndieWeb). Idempotent.
function ensureRelMeLinks() {
    for (const href of Object.values(profile.links)) {
        if (document.querySelector(`link[rel="me"][href="${href}"]`)) continue
        const el = document.createElement('link')
        el.setAttribute('rel', 'me')
        el.setAttribute('href', href)
        document.head.appendChild(el)
    }
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
        applySeo({ title, description, image, keywords, url, type = 'website', schema = null, robots = null } = {}) {
            // Always build canonical/og:url from the production origin, never the
            // runtime one — otherwise prerender (localhost) or dev would emit the
            // wrong canonical. window.location only contributes the path.
            const pageUrl = url || pageUrlFor(window.location.pathname)
            // Root-relative image paths ('/og/…') resolve against the production
            // origin — social crawlers require absolute og:image URLs.
            const pageImage = image
                ? (image.startsWith('/') ? SITE_URL + image : image)
                : DEFAULT_IMAGE

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
            ensureRelMeLinks()
            setJsonLd(schema)

            // robots is always (re)written so a noindex set by the 404 page can't
            // linger across SPA navigations.
            setMetaTag('name', 'robots', robots || DEFAULT_ROBOTS)

            // Signal prerender/snapshot tooling that the head is now populated.
            if (typeof document !== 'undefined' && document.dispatchEvent) {
                document.dispatchEvent(new Event('seo-ready'))
            }
        },

        // ---- schema.org builders (keep view code declarative) ----------------

        seoPerson() {
            return personSchema
        },

        seoWebSite() {
            return webSiteSchema
        },

        // ProfilePage — a page whose main subject is the site owner (Home, hire-Hasil).
        seoProfilePage({ name, description, path }) {
            const dateModified = lastmodFor(path)
            return {
                '@context': 'https://schema.org',
                '@type': 'ProfilePage',
                '@id': `${pageUrlFor(path)}#webpage`,
                url: pageUrlFor(path),
                name,
                ...(description ? { description } : {}),
                ...(dateModified ? { dateModified } : {}),
                inLanguage: 'en',
                isPartOf: websiteRef,
                mainEntity: { '@id': PERSON_ID }
            }
        },

        // CollectionPage + ItemList — list pages. items: [{ name, path }] in a
        // deterministic order (sort by id; getAll* shuffle).
        seoCollectionPage({ name, description, path, items }) {
            const dateModified = lastmodFor(path)
            return {
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                '@id': `${pageUrlFor(path)}#webpage`,
                url: pageUrlFor(path),
                name,
                ...(description ? { description } : {}),
                ...(dateModified ? { dateModified } : {}),
                inLanguage: 'en',
                isPartOf: websiteRef,
                author: authorRef,
                mainEntity: {
                    '@type': 'ItemList',
                    numberOfItems: items.length,
                    itemListElement: items.map((item, i) => ({
                        '@type': 'ListItem',
                        position: i + 1,
                        name: item.name,
                        url: pageUrlFor(item.path)
                    }))
                }
            }
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
                    item: pageUrlFor(item.path)
                }))
            }
        },

        // Generic CreativeWork-family node (SoftwareApplication, Poem, Quotation…).
        seoCreativeWork({ name, description, path, type = 'CreativeWork', extra = {} }) {
            const dateModified = path ? lastmodFor(path) : null
            return {
                '@context': 'https://schema.org',
                '@type': type,
                name,
                ...(description ? { description } : {}),
                ...(path ? { url: pageUrlFor(path), '@id': `${pageUrlFor(path)}#work` } : {}),
                ...(dateModified ? { dateModified } : {}),
                inLanguage: 'en',
                isPartOf: websiteRef,
                author: authorRef,
                creator: authorRef,
                ...extra
            }
        }
    }
}
