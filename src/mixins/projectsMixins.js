import _ from "lodash";

const projects = [
    {
        name: "KTM Retail",
        tagLine: "Vuejs based ecommerce website.",
        coverImage: "/ktmretail.jpg",
        type: "it",
        urlSlug: "ktmretail-jockey-nepal-vuejs-ecommerce-website",
        id: 1,
        website: '//ktmretail.com',
        technologies: ['Vuejs', 'Laravel'],
        contributionLevels: {
            Design: 5,
            Backend: 30,
            Frontend: 40,
            Teammates: 25,
        },
        details: [{
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Products with Multiple sizes with individual prices'
                }, {
                    category: 'Feature',
                    text: 'Products Filter API (Laravel Eloquent)'
                }, {
                    category: 'Security',
                    text: 'Middleware Protection for admin and staff accounts'
                }, {
                    category: 'Feature',
                    text: 'Banners management'
                }, {
                    category: 'Marketing',
                    text: 'Web Analytics'
                }, {
                    category: 'Marketing',
                    text: 'Dynamic banners rediection'
                }, {
                    category: 'Marketing',
                    text: 'Promo Codes and Discount Management'
                },{
                    category: 'Feature',
                    text: 'Order Status/Report management'
                }],
        }]
    },
    {
        name: "Intranery",
        tagLine:
            "Ecommerce website for dealers to sell products as done by Daraz.",
        coverImage: "/intranery.jpg",
        type: "it",
        urlSlug: "intranery-nepal-vuejs-ecommerce-website",
        id: 2,
        website: '//intranery.com',
        technologies: ['Vuejs', 'Laravel'],
        contributionLevels: {
            Design: 5,
            Backend: 15,
            Frontend: 20,
            Teammates: 60,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Intranery Online means buying or purchasing the stationery and other products through online(The Internet Technology). Today the development of technology is increasing rapidly in the world. The internet has turned our existence upside down. It has revolutionized Communication, to the extent that is now our preferred medium of everyday communication. In almost everything we do today, we use the Internet. Ordering a pizza, buying a television, sharing a moment with a friend and many more.'
                }, {
                    text: 'Intranery Online it is also the same. The buyer’s decision-making process has changed dramatically in recent years. Buyers are conducting extensive research online before ever speaking to a sales person. Buyers are also making more direct purchases online and via their smartphone, never stepping foot into traditional brick-and-mortar locations. Thinking about it Intranery is developed and it aims to provide door to door facilities for every people. Now every people can order and get the necessity goods very fast by sitting and ordering from your own house and office through Intranery service. Intranery have access to thousands of products through hundreds of high street and non-high street stores nearly. Intranery provides a broad variety of items from Stationery, electronics and technology, to furnishing and other devices.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'API for Dealers Section'
                }, {
                    category: 'Security',
                    text: 'Middleware Protection for admin and staff accounts'
                }, {
                    category: 'Marketing',
                    text: 'Web Analytics'
                }],
        }]
    },
    {
        name: "Foreveryng",
        tagLine: "Ecommerce website designed for discounts.",
        coverImage: "/foreveryng.jpg",
        type: "it",
        urlSlug: "foreveryng-online-beauty-store-nepal",
        id: 3,
        // website: '//foreveryng.com',
        technologies: ['Laravel'],
        contributionLevels: {
            Design: 5,
            Backend: 40,
            API: 30,
            Frontend: 5,
            Teammates: 20,
        },
        details: [{
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Backend',
                    text: 'Product Management with multiple size, colour and different prices'
                }, {
                    category: 'Feature',
                    text: 'Product Feedback'
                }, {
                    category: 'Feature',
                    text: 'API'
                }, {
                    category: 'Security',
                    text: 'Middleware Protection for admin and staff accounts'
                }, {
                    category: 'Marketing',
                    text: 'Web Analytics'
                }, {
                    category: 'Feature',
                    text: 'Discounts and offers management'
                }, {
                    category: 'Security',
                    text: 'Gift Card and Promo Code'
                }, {
                    category: 'Optimization',
                    text: 'Database Relations and Laravel Eloquent'
                }, {
                    category: 'Security',
                    text: 'Shipment tracking and Reward Points as per order item status'
                }],
        }]
    },
    {
        name: "Kourtier Courier",
        tagLine: "Webapp for kourier tracking management.",
        coverImage: "/kourtier.jpg",
        type: "it",
        urlSlug: "kourtier-courier-services-cargo-freight",
        id: 4,
        website: '//kourtier.com.np',
        technologies: ['Laravel', 'jQuery'],
        contributionLevels: {
            Design: 2,
            Backend: 8,
            Teammates: 90,
        },
        details: [{
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Optimization',
                    text: 'Shifted Admin Report section to Laravel Eloquent'
                }],
        }]
    },
    {
        name: "Mero Pharmacist",
        tagLine: "Pharmacy enquiries online.",
        coverImage: "/meropharmacist.jpg",
        type: "it",
        urlSlug: "mero-pharmacist-pharma-srs-online-enquire",
        id: 5,
        website: '//meropharmacist.com',
        technologies: ['Laravel'],
        contributionLevels: {
            Backend: 10,
            Teammates: 90,
        },
        details: [{
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Frontend',
                    text: 'Social login and share'
                }],
        }]
    },
    {
        name: "TIA",
        tagLine: "Tribhuvan International airport.",
        coverImage: "/tia.jpg",
        type: "it",
        urlSlug: "tribhuvan-international-airport-filght-tracking-nepal",
        id: 6,
        website: '//tiairport.com.np',
        technologies: ['October CMS'],
        contributionLevels: {
            Backend: 30,
            Teammates: 70,
        },
        details: [{
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Backend',
                    text: 'Blog Post Management'
                },{
                    category: 'Marketing',
                    text: 'Highlight blog post'
                }],
        }]
    },{
        name: "Fixolla",
        tagLine:
            "Online mobile and laptop repair in Bangalore.",
        // coverImage: "/fixolla.jpg",
        type: "it",
        urlSlug: "fixolla-india-simplifying-lives-repair-mobile-tablet-laptop-online",
        id: 7,
        website: '//fixolla.com',
        technologies: ['Java', 'Laravel'],
        contributionLevels: {
            AndroidApp: 20,
            Design: 5,
            Backend: 10,
            Frontend: 5,
            Teammates: 60,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Fixolla takes gadget repairing to the next level. Their innovative backend system and unparalleled customer care for smartphones and laptops ensuring 100% customer satisfaction. From a broken screen to frozen OS, we fix it all.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Android App'
                },{
                    category: 'Feature',
                    text: 'API'
                }, {
                    category: 'Security',
                    text: 'Protection of User Data'
                }, {
                    category: 'Marketing',
                    text: 'Tracking the rivals'
                }],
        }]
    },
    {
        name: "RFID Limitor",
        tagLine: "An Arduino UNO based project for limiting the RFID Scans.",
        type: "ee",
        technologies: ['Arduino'],
        contributionLevels: {
            'C/C++': 30,
            Hardware: 70,
        },
    },
    {
        name: "RABC Analyser",
        tagLine:
            "Windows console based app for extracting the total washes done in Danube Washer. Also C# based GUI app is partially developed!",
        type: "ee",
        technologies: ['Visual Studio'],
        contributionLevels: {
            'C++': 80,
            'C#': 20,
        },
    },
    {
        name: "Electrical Thief Eliminator",
        tagLine:
            "This device detects, locates and terminates the electricity thief from the supply line.",
        type: "ee",
        technologies: ['Arduino'],
        contributionLevels: {
            'C/C++': 40,
            Hardware: 30,
            Teammates: 30,
        },
    },
    {
        name: "Electrical Performance Analyser",
        tagLine:
            "An Arduino UNO based project for realtime data recording and analysis.",
        type: "ee",
        technologies: ['Arduino', 'PHP'],
        contributionLevels: {
            'C/C++': 25,
            'PHP': 10,
            Hardware: 40,
            Teammates: 25,
        },
    }
];

export const projectsMixins = {
    methods: {
        getAllProjects() {
            return _.shuffle(projects.map(row => pick(row, [
                'name', 'tagLine', 'coverImage', 'technologies',
                'type', 'urlSlug', 'id', 'contributionLevels'
            ])));
        },
        getProjectUrlSlug(projectId) {
            let returnData = null;
            projects.forEach(project => {
                if (project['id'] == projectId) {
                    returnData = project['urlSlug'];
                }
            });
            return returnData;
        },
        getProjectDetails(projectId) {
            let returnData = null;
            projects.forEach(project => {
                if (project['id'] == projectId) {
                    returnData = project;
                }
            });
            return returnData;
        },
        getVariant(type) {
            switch (type) {
                case 'Teammates':
                    return 'secondary';
                case 'Design':
                case 'Feature':
                case 'C/C++':
                case 'C++':
                    return 'info';
                case 'Backend':
                case 'Marketing':
                    return 'warning';
                case 'Frontend':
                case 'C#':
                    return 'primary';
                case 'Security':
                case 'Hardware':
                    return 'danger';
                default:
                    return 'dark';
            }
        }
    }
}

// returns only selected keys from object
function pick(obj, keys) {
    return keys.map(k => k in obj ? { [k]: obj[k] } : {}).reduce((res, o) => Object.assign(res, o), {});
}