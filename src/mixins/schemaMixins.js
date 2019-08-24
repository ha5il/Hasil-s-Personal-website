const globalSchemas = {
    hasil: {
        "@context": "http://schema.org",
        "@type": "Person",
        name: "Hasil Paudyal",
        additionalName: "Hášíl Páůďýál",
        url: "https://amp.hasilpaudyal.com.np",
        worksFor: "View9",
        jobTitle: "Web Developer",
        alumniOf: "New Horizon College of Engineering",
        gender: "male",
        sameAs: [
            "https://hasilpaudyal.com.np",
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