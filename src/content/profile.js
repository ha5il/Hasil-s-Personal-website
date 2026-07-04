// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for every personal/career fact on the site.
//
// Consumed by:
//   - src/mixins/seoMixins.js      → schema.org Person (JSON-LD)
//   - src/views/Home.vue           → bio, career history
//   - src/views/HireHasil.vue      → header, summary, experience, education, skills
//   - src/App.vue                  → sidebar social links
//   - scripts/generate-seo-files.mjs → llms.txt, llms-full.txt, sitemap.xml
//
// Change a fact HERE, then run `npm run generate` to refresh the public/
// crawl files. Do NOT hand-edit llms.txt / llms-full.txt / sitemap.xml —
// they are generated, and CI fails if they drift from this module.
//
// ⚠️ Architecture note for agents: this module + the generator replaced the
// old hand-maintained duplication on purpose (July 2026). Do not reintroduce
// per-file copies of these facts, and ask Hasil before restructuring this.
// ---------------------------------------------------------------------------

export const profile = {
    siteUrl: 'https://hasilpaudyal.com.np',

    name: 'Hasil Paudyal',
    additionalName: 'Hášíl Páůďýál',
    honorificPrefix: 'Er',
    gender: 'male',
    jobTitle: 'App Development Manager',
    location: 'Kathmandu, Nepal',

    company: {
        name: 'ConvergeStack',
        url: 'https://www.convergestack.com/'
    },

    links: {
        linkedin: 'https://www.linkedin.com/in/hasil/',
        github: 'https://github.com/ha5il',
        facebook: 'https://facebook.com/hasill'
    },

    education: {
        degree: 'B.E. Electrical & Electronics Engineering',
        level: 'Bachelor of Engineering',
        school: 'New Horizon College of Engineering',
        place: 'Bangalore, India',
        period: '2013 – 2017'
    },

    // One-line site description (llms.txt header / meta-ish contexts).
    tagline:
        'Personal portfolio of Hasil Paudyal: App Development Manager, React Native / Expo developer, web developer, electrical engineer, hardware builder, and original poet. Based in Kathmandu, Nepal.',

    // First-person bio — Home "Who am I?".
    bioFirstPerson:
        'Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. With a background in Electrical & Electronics Engineering, I have expertise in design, web development, management, electrical repair, and electronics simulation. Beyond technology, I write poems, share quotes, and experiment with cloud-based data.',

    // Third-person bio — llms-full.txt Person section.
    bioThirdPerson:
        'Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. With a background in Electrical & Electronics Engineering, Hasil has expertise in backend & API development, mobile and cloud/DevOps, web development, management, electrical repair, electronics simulation, IoT hardware, and creative writing. He writes original poems and quotes, and has built and shipped mobile apps to the App Store and Google Play.',

    // First-person pitch — hire-Hasil hero/summary.
    hireSummary:
        'From designing electrical systems and repairing international hardware in India, to building backend systems and APIs and leading app development across mobile and cloud platforms — and writing poetry in between. I bring a rare combination of technical depth, creative thinking, and real-world problem-solving.',

    // Short third-person "About" paragraph — llms.txt.
    aboutThirdPerson:
        'Hasil Paudyal is an App Development Manager at ConvergeStack (Jan 2022–present). He holds a B.E. in Electrical & Electronics Engineering from New Horizon College of Engineering, Bangalore (2013–2017). Beyond software, he builds IoT hardware, writes original poetry and quotes, and has real-world experience as a field service & sales engineer for international industrial equipment brands.',

    // ------------------------------------------------------------------
    // Career — newest first. Each entry carries every voice the site needs:
    //   summary : third person (hire-Hasil timeline, llms files)
    //   story   : first person, may contain HTML links (Home "What do I do?")
    // ------------------------------------------------------------------
    career: [
        {
            role: 'App Development Manager',
            title: 'App Development Manager',
            company: 'ConvergeStack',
            companyLabel: 'ConvergeStack',
            companyPlace: 'Kathmandu',
            companyUrl: '//www.convergestack.com/',
            period: 'Jan 2022 – Present',
            periodLong: 'Jan 2022 – Present',
            variant: 'primary',
            tags: ['Backend & APIs', 'React Native', 'Expo', 'Swift', 'Kotlin', 'AWS', 'Cloudflare', 'CI/CD'],
            summary:
                'Backend architecture and APIs, cloud and server management, and CI/CD with reproducible QA/staging environments. Leads cross-platform app development with React Native (Expo) and custom native modules in Swift and Kotlin (including SIP/WebRTC voice calling).',
            summaryLong:
                'As project lead, shapes backend architecture and APIs with the team — guiding data models and algorithm implementation — and manages cloud servers and deployment. Builds cross-platform mobile apps with React Native (Expo), including custom native modules in Swift (iOS) and Kotlin (Android) for capabilities like SIP/WebRTC voice calling, and ships production-ready Android and iOS releases. Also sets up CI/CD pipelines, reproducible QA/staging environments, and internal workflow automation with self-hosted local LLMs.',
            story:
                'As project lead, I shape backend architecture and APIs with the team — guiding data models and algorithm implementation — and manage cloud servers and deployment. I build cross-platform mobile apps with React Native (Expo), including custom native modules in Swift (iOS) and Kotlin (Android) for capabilities like SIP/WebRTC voice calling, and ship production-ready Android and iOS releases. I also set up CI/CD pipelines, reproducible QA/staging environments, and internal workflow automation with self-hosted local LLMs.'
        },
        {
            role: 'Web Developer',
            title: 'Web Developer',
            company: 'View9 | Nepal',
            companyLabel: 'View9',
            companyPlace: 'Nepal',
            companyUrl: '//view9.com.np',
            period: 'Jan 2019 – Dec 2021',
            periodLong: 'Jan 2019 – Dec 2021 · 2 yrs 11 mos',
            variant: 'info',
            tags: ['Laravel', 'AWS', 'PHP', 'API Integration', 'SOAP/JSON'],
            summary:
                'Led backend development and bank/payment-gateway API integrations over SOAP and JSON with automated transaction tracking. Built fraud-detection and reporting dashboards and CMS sites; managed AWS/Laravel infrastructure and mentored junior developers.',
            summaryLong:
                'Led backend development, integrating server-to-server APIs for banks and payment gateways — remittance, payments, and verification over SOAP and JSON — with automated transaction tracking. Built fraud-detection admin panels (such as flagging multiple signups from a single IP), reporting and analytics dashboards for courier/logistics clients, and content-managed sites for non-technical clients. Set up scheduling, queues, recurring jobs, and remote database backups on AWS and Laravel, and mentored junior teammates on server setup and production issue handling.',
            story:
                'I led backend development, integrating server-to-server APIs for banks and payment gateways — remittance, payments, and verification over SOAP and JSON — with automated transaction tracking. I built fraud-detection admin panels (such as flagging multiple signups from a single IP), reporting and analytics dashboards for courier/logistics clients, and content-managed sites for non-technical clients. On the operations side I set up scheduling, queues, recurring jobs, and remote database backups on AWS and Laravel, and mentored junior teammates on server setup and production issues.'
        },
        {
            role: 'Part-time Junior Android Developer',
            title: 'Junior Android Developer',
            company: 'Fixolla | India',
            companyLabel: 'Fixolla',
            companyPlace: 'India',
            companyUrl: '//fixolla.com',
            period: 'Feb 2018 – Dec 2018',
            periodLong: 'Feb 2018 – Dec 2018 · 11 mos',
            variant: 'success',
            tags: ['Android', 'Java', 'REST APIs'],
            summary: 'Worked on Android app and API development as part of an early-stage startup team.',
            summaryLong: 'Worked with the Android development team on app and API development.',
            story: 'I worked with the Android development team, gaining experience in app and API development.'
        },
        {
            role: 'Part-time Security Analyst',
            title: 'Security Analyst',
            company: 'Fixolla | India',
            companyLabel: 'Fixolla',
            companyPlace: 'India',
            companyUrl: '//fixolla.com',
            period: 'Sep 2017 – Feb 2018',
            periodLong: 'Sep 2017 – Feb 2018 · 6 mos',
            variant: 'warning',
            tags: ['Data Scraping', 'Public Speaking', 'Research'],
            summary:
                'Data scraping from open sources, building company databases, and public speaking & promotional activities at colleges across Bangalore.',
            summaryLong:
                'Assisted in data scraping from open sources to build company databases. Participated in public speaking and promotional activities at colleges in Bangalore.',
            story:
                'As a security analyst, I assisted in data scraping from open sources to build company databases and participated in public speaking and promotional activities at colleges in Bangalore.'
        },
        {
            role: 'Service and Sales Engineer',
            title: 'Service & Sales Engineer',
            company: 'A2Z Laundry Solutions | India',
            companyLabel: 'A2Z Laundry Solutions',
            companyPlace: 'India',
            companyUrl: '//a2zlaundrysolutions.com',
            period: 'Dec 2016 – Dec 2018',
            periodLong: 'Dec 2016 – Dec 2018 · 2 yrs 1 mo',
            variant: 'danger',
            tags: ['Hardware', 'Field Engineering', 'Sales', 'International Brands'],
            summary:
                'Set up and expanded laundry businesses across India. Authorized service engineer for Danube (France), Pony (Italy), SEKO (USA), Electrolux, Maytag, and Speedqueen.',
            summaryLong:
                'Set up and expanded laundry businesses across India. Authorised service engineer for Danube International (France), Pony (Italy), SEKO (USA), Electrolux (Sweden), Maytag (USA), Speedqueen (USA), Hydrosystems (USA), SEITZ (Germany), and Sunrise (India).',
            story:
                'I set up and expanded laundry businesses across India, serving as an authorized service engineer for brands such as <a href="//www.danube-international.com" target="_blank">Danube International (France)</a>, <a href="//ponyitaly.com" target="_blank">Pony (Italy)</a>, and <a href="//www.seko.com" target="_blank">SEKO (USA)</a>. I also worked with <a href="//www.electroluxgroup.com" target="_blank">Electrolux (Sweden)</a>, <a href="//www.maytag.com" target="_blank">Maytag (USA)</a>, <a href="//speedqueen.com" target="_blank">Speedqueen (USA)</a>, <a href="//hydrosystemsco.com" target="_blank">Hydrosystems (USA)</a>, <a href="//www.seitz24.com" target="_blank">SEITZ (Germany)</a>, and <a href="//sunrisegmpl.com" target="_blank">Sunrise (India)</a>.'
        }
    ],

    // ------------------------------------------------------------------
    // Capability groups — hire-Hasil skill cards; flattened for llms files.
    // (The "Tech Stacks & Platforms" grid is NOT here: it auto-generates
    // from project data in HireHasil.vue.)
    // ------------------------------------------------------------------
    capabilityGroups: [
        {
            title: 'Software & Apps',
            icon: 'code',
            cols: 7,
            items: [
                'Backend & APIs in Laravel (PHP), Node.js, and Deno',
                'Bank & payment-gateway integrations over SOAP and JSON, with automated transaction tracking',
                'Fraud-detection admin panels (e.g. flagging multiple signups from one IP)',
                'Reporting & analytics dashboards (sales + operational reports) for courier/logistics clients',
                'Content-managed (CMS) sites for non-technical clients',
                'Full-stack web platforms — Vue.js front end, Laravel + AWS back end',
                'Hybrid mobile apps in JavaScript/TypeScript — React Native (Expo) for Android & iOS',
                'Custom Expo native modules in Swift (iOS) and Kotlin (Android)',
                'SIP/WebRTC voice calling via custom native modules',
                'Apple TV apps with HomeKit integration',
                'Serverless edge APIs with Cloudflare Workers',
                'Self-hosted WebSocket services in PHP/Laravel',
                'CI/CD pipelines with reproducible QA/staging environments',
                'Container deployments — Podman, Nexus, Docker',
                'Server automation — remote DB backups/restore, CRON jobs, queues',
                'Self-hosted local LLMs + workflow automation (Activepieces)',
                'Data scraping, processing, and ETL pipelines'
            ]
        },
        {
            title: 'Engineering & Hardware',
            icon: 'memory',
            cols: 5,
            items: [
                'Electrical system design & simulation (AutoCAD, MiPower)',
                'Portable IoT devices — RFID, physical sensors, Wi-Fi',
                'Arduino-based hardware prototyping',
                'Field service & commissioning of industrial machines',
                'Project planning & scheduling (Primavera P6)'
            ]
        },
        {
            title: 'Creative & Writing',
            icon: 'create',
            cols: 5,
            items: [
                'Original poetry — published on this site',
                'Original quotes & reflections',
                'Technical writing & documentation',
                'UI/UX design with Figma and Photoshop'
            ]
        },
        {
            title: 'Tools I Work With',
            icon: 'build',
            cols: 7,
            items: [
                'Android Studio',
                'AutoCAD',
                'Figma',
                'IntelliJ IDEA / VS Code',
                'MiPower',
                'Photoshop',
                'Primavera P6',
                'Deno / Bun'
            ]
        }
    ],

    // Categorised technologies block — llms-full.txt "Technologies & Tools".
    technologyCategories: {
        'Languages': 'JavaScript/TypeScript, PHP, Swift, Kotlin',
        'Backend': 'Laravel (PHP), Node.js, Deno (also familiar with Spring Boot fundamentals — controllers, services, repositories)',
        'Frontend': 'Vue.js, jQuery, Bootstrap',
        'Mobile': 'React Native, Expo, custom native modules (Swift/iOS, Kotlin/Android), Android Studio',
        'Cloud': 'AWS (EC2, EBS, RDS, S3, Lambda, CloudWatch), Cloudflare Workers, Cloudflare Pages, Cloudflare R2',
        'Databases': 'MySQL, Firebase Firestore',
        'DevOps': 'Docker, Podman, Nexus, GitLab CI/CD, reproducible QA/staging environments, CRON, queues, remote DB backups',
        'Automation/AI': 'Self-hosted local LLMs, Activepieces workflow automation',
        'Hardware': 'Arduino, RFID modules, physical sensors',
        'Design': 'Figma, Photoshop',
        'Engineering': 'AutoCAD, MiPower, Primavera P6'
    },

    // Flat technologies paragraph — llms.txt "Technologies".
    technologiesSummary:
        'JavaScript/TypeScript, Vue.js, React Native, Expo, Swift, Kotlin, Laravel, PHP, Node.js, Deno, AWS (EC2, EBS, RDS, S3, Lambda, CloudWatch), Cloudflare Workers, Podman, Nexus, Docker, GitLab CI/CD, Arduino, MySQL, Firebase Firestore, Figma, AutoCAD, MiPower, Primavera P6. Familiar with Spring Boot fundamentals (controllers, services, repositories).',

    // Creative-work blurb + hand-picked quotes — llms.txt.
    creativeSummary:
        'Hasil writes original poetry and quotes in English. His work blends personal philosophy, wit, and wordplay. The acrostic poem "H.A.S.I.L. P.A.U.D.Y.A.L." appears in the sidebar of his portfolio and spells out his full name.',
    selectedQuotes: [
        'Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own.',
        'If you know that I am a genius, then know that you are part of the reason.',
        'Dream big, but not so big that it becomes a mess.'
    ],

    // Project ids featured in llms.txt's "Key IT Projects" summary section
    // (llms-full.txt always lists ALL projects regardless).
    llmsKeyProjectIds: [23, 12, 22, 1, 20, 21, 13, 17]
}
