const globalSchemas = {
    hasil: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Hasil Paudyal",
        additionalName: "Hášíl Páůďýál",
        url: "https://hasilpaudyal.com.np",
        worksFor: {
            "@type": "Organization",
            name: "ConvergeStack"
        },
        jobTitle: "App Development Manager",
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "New Horizon College of Engineering"
        },
        hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            educationalLevel: "Bachelor of Engineering",
            name: "B.E. Electrical & Electronics Engineering"
        },
        gender: "male",
        sameAs: [
            "https://www.linkedin.com/in/hasil/",
            "https://facebook.com/hasill",
            "https://github.com/ha5il",
            "https://rocketreach.co/hasil-paudyal-email_301428293"
        ],
        honorificPrefix: "Er"
    }
};

function getOrCreateSchemaEl() {
    let el = document.getElementById('schemaJSON')
    if (!el) {
        el = document.createElement('script')
        el.type = 'application/ld+json'
        el.id = 'schemaJSON'
        document.head.appendChild(el)
    }
    return el
}

export const schemaMixins = {
    methods: {
        clearSchemaJSON() {
            const el = document.getElementById('schemaJSON')
            if (el) el.innerHTML = ''
        },
        injectSchemaJSON(schemaJsonCode) {
            this.clearSchemaJSON()
            const el = getOrCreateSchemaEl()
            try {
                el.appendChild(document.createTextNode(schemaJsonCode))
            } catch (e) {
                el.text = schemaJsonCode
            }
        },
        injectDefaultSchemaJSON(globalSchemasKey) {
            this.injectSchemaJSON(JSON.stringify(globalSchemas[globalSchemasKey]))
        }
    }
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

export const htmlHeadMixins = {
    methods: {
        getOptimizedSeoMetaTags({ title, description, image, keywords, url }) {
            const pageTitle = title || "Hasil's Personal Site | Hasil Paudyal"

            document.title = pageTitle

            setMetaTag('property', 'og:type', 'website')
            setMetaTag('property', 'og:title', title)
            setMetaTag('name', 'twitter:title', title)
            setMetaTag('name', 'description', description)
            setMetaTag('property', 'og:description', description)
            setMetaTag('name', 'twitter:description', description)
            setMetaTag('property', 'og:image', image)
            setMetaTag('name', 'twitter:image', image)
            setMetaTag('name', 'keywords', keywords)
            setMetaTag('property', 'og:url', url)
        }
    }
}
