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
            console.log('Clearing schema json');
            document.getElementById("schemaJSON").innerHTML = '';
        },
        injectSchemaJSON(schemaJsonCode) {
            console.log('Injecting schema json');
            this.clearSchemaJSON();
            var schemaJson = document.getElementById("schemaJSON");
            try {
                schemaJson.appendChild(document.createTextNode(schemaJsonCode));
                document.body.appendChild(schemaJson);
            } catch (e) {
                schemaJson.text = schemaJsonCode;
                document.body.appendChild(schemaJson);
            }
            console.log('schema injected ', schemaJsonCode);
        },
        injectDefaultSchemaJSON(globalSchemasKey){
            this.injectSchemaJSON(JSON.stringify(globalSchemas[globalSchemasKey]));
        }
    }
}

export const htmlHeadMixins = {
    methods: {
        optimizeSeoTags(optimizations) {
            if(optimizations.title) {
                this.setPageTitle(optimizations.title);
                this.injectMetaTagByProperty('og:title', optimizations.title);
                this.injectMetaTagByName('twitter:title', optimizations.title);
            }
            if(optimizations.description) {
                this.setPageDescription(optimizations.description);
                this.injectMetaTagByProperty('og:description', optimizations.description);
                this.injectMetaTagByName('twitter:description', optimizations.description);
            }
            if(optimizations.image) {
                this.injectMetaTagByProperty('og:image', optimizations.image);
                this.injectMetaTagByName('twitter:image', optimizations.image);
            }
        },
        injectMetaTagByProperty(property, content) {
            let meta = document.querySelector(`meta[property="${property}"]`);
            if(!meta) {
                console.log('New meta creating')
                meta = document.createElement('meta');
                meta.setAttribute('property', property);
            }
            meta.setAttribute('content', content);
            document.getElementsByTagName('head')[0].appendChild(meta);
            console.log('injected meta', meta);
        },
        injectMetaTagByName(name, content) {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if(!meta) {
                console.log('New meta creating')
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
            }
            meta.setAttribute('content', content);
            document.getElementsByTagName('head')[0].appendChild(meta);
            console.log('injected meta', meta);
        },
        setPageTitle(title){
            console.log('Setting title', title);
            document.title = title;
        },
        setPageDescription(description){
            console.log('Setting description', description);
            document.querySelector('meta[name="description"]').setAttribute('content', description);
        }
    }
}