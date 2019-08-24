const schemas = [
    {
        slug: 'hasil',
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
];

export const schemaMixins = {
    methods: {
        getSchemaJSON(schemaSlug) {
            let returnData = null;
            schemas.forEach(schema => {
                if (schema['slug'] == schemaSlug) {
                    returnData = schema;
                }
            });
            return JSON.stringify(returnData);
        }
    }
}