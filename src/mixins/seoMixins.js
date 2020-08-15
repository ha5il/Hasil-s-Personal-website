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
        getOptimizedSeoMetaTags(optimizations) {
            let returnData = {
                title: "Hasil's Personal Site | Hasil Paudyal",
                meta: [
                    { property: 'og:type', content: 'website' }
                ]
            }
            if(optimizations.title) {
                returnData.title = optimizations.title;
                returnData.meta.push({ property: 'og:title', content: optimizations.title });
                returnData.meta.push({ name: 'twitter:title', content: optimizations.title });
            }
            if(optimizations.description) {
                returnData.meta.push({ name: 'description', content: optimizations.description });
                returnData.meta.push({ property: 'og:description', content: optimizations.description });
                returnData.meta.push({ name: 'twitter:description', content: optimizations.description });
            }
            if(optimizations.image) {
                returnData.meta.push({ property: 'og:image', content: optimizations.image });
                returnData.meta.push({ name: 'twitter:image', content: optimizations.image });
            }
            return returnData;
        }
    }
}