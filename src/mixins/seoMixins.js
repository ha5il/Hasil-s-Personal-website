const globalSchemas = {
    hasil: {
        "@context": "http://schema.org",
        "@type": "Person",
        name: "Hasil Paudyal",
        additionalName: "Hášíl Páůďýál",
        url: "https://hasilpaudyal.com.np",
        worksFor: "View9",
        jobTitle: "Web Developer",
        alumniOf: "New Horizon College of Engineering",
        gender: "male",
        sameAs: [
            "https://amp.hasilpaudyal.com.np",
            "https://facebook.com/hasill",
            "https://www.linkedin.com/in/hasil/"
        ],
        honorificPrefix: "Er"
    }
};

export const schemaMixins = {
    methods: {
        clearSchemaJSON() {
            document.getElementById("schemaJSON").innerHTML = '';
        },
        injectSchemaJSON(schemaJsonCode) {
            this.clearSchemaJSON();
            var schemaJson = document.getElementById("schemaJSON");
            try {
                schemaJson.appendChild(document.createTextNode(schemaJsonCode));
                document.body.appendChild(schemaJson);
            } catch (e) {
                schemaJson.text = schemaJsonCode;
                document.body.appendChild(schemaJson);
            }
        },
        injectDefaultSchemaJSON(globalSchemasKey){
            this.injectSchemaJSON(JSON.stringify(globalSchemas[globalSchemasKey]));
        }
    }
}

export const htmlHeadMixins = {
    methods: {
        getOptimizedSeoMetaTags({ title, description, image, keywords, url }) {
            let meta = [
                { property: 'og:type', content: 'website' }
            ];
            if (title) {
                meta.push({ property: 'og:title', content: title });
                meta.push({ name: 'twitter:title', content: title });
                // Bing SEO h1 tag
                if (document.getElementById('seoH1Title')) {
                    document.getElementById('seoH1Title').innerText = title;
                }
            }
            if (description) {
                meta.push({ name: 'description', content: description });
                meta.push({ property: 'og:description', content: description });
                meta.push({ name: 'twitter:description', content: description });
            }
            if (image) {
                meta.push({ property: 'og:image', content: image });
                meta.push({ name: 'twitter:image', content: image });
            }
            if (keywords) {
                meta.push({ name: 'keywords', content: keywords });
            }
            if (url) {
                meta.push({ property: 'og:url', content: url });
            }
            return {
                title: title || "Hasil's Personal Site | Hasil Paudyal",
                meta
            };
        }
    }
}