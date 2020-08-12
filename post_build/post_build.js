console.log('starting post build script');

const getMetaHtml = (routeName, mixin_content_id = null) => {
    let title = '';
    let description = '';
    let image = '';

    switch (routeName) {
        case 'projects':
            title = "Projects | Hasil's Personal Site";
            description = 'List of Electrical, Electronics and IT projects by Hasil and his team. Know more to team up and create something amazing...';
            image = "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(4).jpg?alt=media";
            break;

        case 'quotes':
            title = "Quotes | Hasil's Personal Site";
            description = 'Collection of quotes by Hasil Paudyal.';
            image = "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(12).jpg?alt=media";
            break;

        case 'poems':
            title = "Poems | Hasil's Personal Site";
            description = 'Collection of poems by Hasil Paudyal.';
            image = "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(15).jpg?alt=media";
            break;

        case 'gallery':
            title = "Gallery | Hasil's Personal Site";
            description = 'Checkout photoshop skills and know more about Hasil.';
            image = "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20(22).jpg?alt=media";
            break;

        case 'hire-Hasil':
            title = "Hire Hasil | Hasil's Personal Site";
            description = "Let's team up and create something amazing. Know more about top listed web developer, electronics and electrical projects leader.";
            image = "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/Hasil%20Paudyal%20Graduation%20New%20Horizon%20College%20of%20Engineering.jpg?alt=media";
            break;

        case 'home':
        default:
            title = "Hasil's Personal Site | Hasil Paudyal";
            description = 'Top listed Web Developer, Electrical Engineer and Poet from Nepal with 4+ years of experience. Checkout to know more and contact.';
            image = 'https://hasilpaudyal.com.np/Hasil.png';
            break;
    }

    return `<title>${title}</title><meta name="description" content="${description}" /><meta property="og:type" content="website" /><meta property="og:title" content="${title}" /><meta property="og:description" content="${description}" /><meta property="og:image" content="${image}" /><meta name="twitter:title" content="${title}" /><meta name="twitter:description" content="${description}" /><meta name="twitter:image" content="${image}" />`;
};

const fs = require('fs');

// creating individual index.html file for all routes.
// make sure home is at end, as it replaces the original index file.
['projects', 'quotes', 'poems', 'gallery', 'hire-Hasil', 'home'].forEach(routeName => {
    let indexHtml = fs.readFileSync('./dist/index.html').toString();
    indexHtml = indexHtml.replace('<meta name=post-build-injections>', getMetaHtml(routeName));
    let indexHtmlPath = null;
    switch (routeName) {
        case 'projects':
        case 'quotes':
        case 'poems':
        case 'gallery':
        case 'hire-Hasil':
            indexHtmlPath = routeName + '/';
            break;

        case 'home':
            indexHtmlPath = '/';
            break;
    }

    if (!indexHtmlPath) {
        throw new Error('Index HTML Path missing for ' + routeName);
    }

    console.log(`Creating dir ./dist/${indexHtmlPath}`);
    fs.mkdir(`./dist/${indexHtmlPath}`, { recursive: true }, (err) => {
        if (err) throw err;
        fs.writeFileSync(`./dist/${indexHtmlPath}index.html`, indexHtml, (err) => {
            if (err) throw err;
            console.log(`Wrote ${indexHtmlPath}/index.html`);
        });
    });
});