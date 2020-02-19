import _ from "lodash";

const projects = [
    {
        name: "KTM Retail",
        tagLine: "Vuejs based ecommerce website.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fktmretail.JPG?alt=media",
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
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'KTM Retail is created for authorized dealer of Jockey and Dixey in Nepal. The website and mobile app allows user to purchase items with digital payment and track its status. It also has reliable options for admin to activate offers and flash sale during festivals.'
                }
            ],
        }, {
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
                }, {
                    category: 'Feature',
                    text: 'Order Status/Report management'
                }],
        }]
    },
    {
        name: "Intranery",
        tagLine:
            "Ecommerce website for dealers to sell products as done by Daraz.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fintranery.JPG?alt=media",
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
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fforeveryng.JPG?alt=media",
        type: "it",
        urlSlug: "foreveryng-online-beauty-store-nepal",
        id: 3,
        website: '//foreveryng.com',
        technologies: ['Laravel'],
        contributionLevels: {
            Design: 5,
            Backend: 40,
            API: 30,
            Frontend: 5,
            Teammates: 20,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'The project is created to replace the wordpress site crafted with WooCommerce. Since WooCommerce is not targeted to Neplease market we had to built a better platform than that.'
                },
                {
                    text: 'Foreveryng not only sells products online but also has reward point, gift card and promo management system to boost the marketing. On the oter hand it is also capable to tracking user referrals to provide extra offers and discounts.'
                }
            ],
        }, {
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
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fkourtier.JPG?alt=media",
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
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Kourtier Couriers Pvt. Ltd. was established in 1997 by Mr. Pawan Kishore Rathi with a group of professionals who have over a decade of experience in their respective field. Today, Kourtier is the leading and the largest network courier service provider in Nepal covering self-network of more than 130 service stations around Nepal with strong ad well set-up delivery structure in Kathmandu valley. The Company is running with an advanced and scientific management using world class technology and having quality manpower. Kourtier has come up with fresh team and technology to address your customised requirements and by virtue of more than decade and half long experience, we are aware of the type and sensitivity of consignment; process of delivery; standard POD requirements and delivery time schedule structure. Kourtier has the required infrastructure, manpower, expertise and technology to do such activities smoothly.'
                }
            ],
        }, {
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
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fmeropharmacist.JPG?alt=media",
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
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Meropharmacist is the first of its kind to provide the counseling to the patients on the medicines they are taking. Lack of awareness regarding medicine use is a serious problem in Nepal, with almost every Nepali lacking the right information about ‘what and how’ on their medicines. Time and again, this has resulted on serious medicine related concerns like drug overuse, misuse, adverse drug reactions and lack of patient compliance.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Frontend',
                    text: 'Social login'
                }, {
                    category: 'Marketing',
                    text: 'Blog share feature'
                }],
        }]
    },
    {
        name: "TIA",
        tagLine: "Tribhuvan International airport.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Ftia.JPG?alt=media",
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
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'The Tribhuvan International Airport (TIA), situated 5.56 km east of Kathmandu city is in the heart of the Kathmandu Valley. TIA is amid the confluence of three ancient cities viz. Kathmandu, Bhaktapur and Patan, rich in their art and culture not only gifted for their temples and pagoda - but above all they posses smiling men and women, the pride of the nation. Hence TIA not only has flourished as the main hub for every expanding business of the country but has proudly catered to various domestic and international airlines.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Backend',
                    text: 'Blog Post Management'
                }, {
                    category: 'Marketing',
                    text: 'Highlight blog post'
                }],
        }]
    }, {
        name: "Fixolla",
        tagLine:
            "Online mobile and laptop repair in Bangalore.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Ffixolla.JPG?alt=media",
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
                    text: 'Fixolla takes gadget repairing to the next level. Their innovative backend system and unparalleled customer care for smartphones and laptops ensuring 100% customer satisfaction. From a broken screen to frozen OS, they fix it all.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Android App'
                }, {
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
        urlSlug: "rfid-limitor-arduino-uno-limiting-scans",
        id: 8,
        technologies: ['Arduino'],
        contributionLevels: {
            'C/C++': 30,
            Hardware: 70,
        },
        sourceCode: "//github.com/ha5il/RFID-Limiter",
        details: [{
            title: 'Project Overview',
            titleIcon: 'receipt',
            paragraphs: [
                {
                    text: 'Usually RFID cards are used for authorizing by knowing the identity of the carrier. I built the device with option to limit the number of authoriations to individual card holder. After (n) number of scans the device revokes the access unless re-authorized by system head.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Count card scans'
                }, {
                    category: 'Feature',
                    text: 'Warn on last scan'
                }, {
                    category: 'Security',
                    text: 'Visual notification on false card or revoked card'
                }, {
                    category: 'Security',
                    text: 'Log scan history with timestamp to SD card'
                }],
        }]
    },
    {
        name: "RABC Analyser",
        tagLine:
            "Windows console based app for extracting the total washes done in Danube Washer. Also C# based GUI app is partially developed!",
        type: "ee",
        urlSlug: "rabc-analyser-windows-console-app-danube-international-washer-extractor",
        id: 9,
        technologies: ['Visual Studio'],
        contributionLevels: {
            'C++': 80,
            'C#': 20,
        },
        sourceCode: "//github.com/ha5il/RABC-Analyser",
        details: [{
            title: 'Project Overview',
            titleIcon: 'receipt',
            paragraphs: [
                {
                    text: 'Danube International Washer Extractor keeps the record of washes done in the machine with timestamp. The app is made to calculate total kgs of washes done by machine to report the laundry owner so that he can cross check it with revenue collected.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'CSV Export of raw data for further analysis on Excel '
                }, {
                    category: 'Feature',
                    text: 'View the daily wash load without any export'
                }, {
                    category: 'Feature',
                    text: 'GUI app in C#'
                }],
        }]
    },
    {
        name: "Electrical Thief Eliminator",
        tagLine:
            "This device detects, locates and terminates the electricity thief from the supply line.",
        type: "ee",
        urlSlug: "electrical-electricity-thief-automatic-remover-supply-line",
        id: 10,
        technologies: ['Arduino'],
        contributionLevels: {
            'C/C++': 40,
            Hardware: 30,
            Teammates: 30,
        },
        details: [{
            title: 'Project Overview',
            titleIcon: 'receipt',
            paragraphs: [
                {
                    text: 'A novel system has been devised to eliminate power theft by automatic release of high voltage pulse in the transmission line in response to the command received by the remote termination unit (high voltage source) from arduino in the event of theft being detected. Due to high voltage pulse in the transmission lines, the pilferer’s appliances drawing powers illegaly by way of tapping get impaired. This operation is transient (for 1-5 seconds) and during this time the supply of voltage for the normal consumers is kept suspended. However, in case of emergency, i.e., when the normal supply cannot be disturbed, the bypass mode is activated so that consumers continue to get un-interrupted power supply, and during this period the process of theft elimination is kept suspended. The actual working of this novel system has been demonstrated by simulating the process in Proteus autocad 8.6. The process thus developed is effective and reliable.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Visual Indication when theft is live'
                }, {
                    category: 'Security',
                    text: 'Eliminator Initialization'
                }, {
                    category: 'Simulation',
                    text: 'Modeling ans simulation on Proteus'
                }],
        }]
    },
    {
        name: "Electrical Performance Analyser",
        tagLine:
            "An Arduino UNO based project for realtime data recording and analysis.",
        type: "ee",
        urlSlug: "electrical-device-performance-tracker-analyser-realtime",
        id: 11,
        technologies: ['Arduino', 'PHP'],
        contributionLevels: {
            'C/C++': 25,
            'PHP': 10,
            Hardware: 40,
            Teammates: 25,
        },
        sourceCode: '//github.com/ha5il/Electrical-Performance-Analyzer',
        details: [{
            title: 'Project Overview',
            titleIcon: 'receipt',
            paragraphs: [
                {
                    text: 'Electrical performance analysis includes crucial for advancement of any system in future to the necessary practical level. This project is carried out with an objective to carry out performance analysis of some electrical devices like transformer, motor, generator in terms of its speed, temperature, voltage and current the parameters of respective device is recorded using dedicated sensors deployed across the project module. The project module includes the runtime java application along with Arduino interface environment which automatically detects the faults across the electrical devices and classifies it with the fault details. Based on the specifications of the devices, the pre set value for sensors is modified using Java and Arduino interface such that it automatically detects basic faults. Moreover, analysis of continuous data collected in periodic intervals from several motors helps in improvising them to the latest industrial demand.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Simulation',
                    text: 'Modeling ans simulation on Proteus'
                }, {
                    category: 'Feature',
                    text: 'Visual Indication of device health'
                }, {
                    category: 'Feature',
                    text: 'Raw data analysis by PHP'
                }, {
                    category: 'Feature',
                    text: 'Realtime serial data transfer by bluetooth module'
                }, {
                    category: 'Feature',
                    text: 'Windows console app to analyse raw SD Card data'
                }],
        }]
    },
    {
        name: "Legal Remit Nepal",
        tagLine: "Remitance website for money transfers.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Flegal-remit-nepal.JPG?alt=media",
        type: "it",
        urlSlug: "legal-remit-nepal-transfer-management",
        id: 12,
        website: '//legalremitnepal.com.au',
        technologies: ['Laravel', 'jQuery', 'AWS'],
        contributionLevels: {
            Design: 5,
            Backend: 70,
            Frontend: 20,
            Teammates: 5,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Transferring money is optimized with KYC, documents validation and assigning to banks. The webapp also keeps record of deposits made to banks between countries.'
                }, {
                    text: 'The app also has staff accounts for individual partners banks across countries.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Transcation Management'
                }, {
                    category: 'Security',
                    text: 'Middleware Protection for admin, staff and user accounts'
                }, {
                    category: 'Marketing',
                    text: 'Web Analytics'
                }, {
                    category: 'Feature',
                    text: 'Banks transcation management'
                }, {
                    category: 'Development',
                    text: 'Usage tracking'
                }, {
                    category: 'Feature',
                    text: 'Bank staff account'
                }, {
                    category: 'Hosting',
                    text: 'AWS'
                }],
        }]
    }, {
        name: "Limbu Dictionary",
        tagLine:
            "A FREE online dictionary to quickly search Limbu meanings in English and Nepali words.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Flimbu-dictionary.jpg?alt=media",
        type: "it",
        urlSlug: "limbu-english-nepali-dictionary-free-online",
        id: 13,
        website: '//apps.apple.com/us/app/limbu-dictionary/id1491522563',
        technologies: ['React Native'],
        contributionLevels: {
            'Native Framework': 60,
            Design: 25,
            Teammates: 15,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Wordpress provides API service. The app uses it to list post, search them and view details. Also there are some static supporting pages.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Search using API'
                }, {
                    category: 'Feature',
                    text: 'Detail page with Limbu font'
                }, {
                    category: 'Publishing',
                    text: 'Deploying to App Store'
                }],
        }]
    }, {
        name: "Indigo Ink",
        tagLine:
            "Book gallery page for book publisher with events management.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Findigo-ink.jpg?alt=media",
        type: "it",
        urlSlug: "indigo-ink-book-publisher-nepal",
        id: 14,
        website: '//indigoink.com.np',
        technologies: ['October CMS'],
        contributionLevels: {
            Backend: 50,
            Teammates: 50,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Indigo Ink book publisher comes online with book gallery. They also have system to publish the events they regularly organize.'
                }
            ],
        }, {
            title: 'My Task',
            titleIcon: 'code',
            lists:
                [{
                    category: 'Feature',
                    text: 'Book Gallery'
                }, {
                    category: 'Feature',
                    text: 'Events Management'
                }, {
                    category: 'Publishing',
                    text: 'Hosting on C-Panel'
                }, {
                    category: 'Marketing',
                    text: 'Online Enquiries'
                }],
        }]
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
        },
        getProjectPageTitle(projectId) {
            let returnData = 'Project';
            projects.forEach(project => {
                if (project['id'] == projectId) {
                    returnData += " - " + project['name'];
                    if (project['website']) {
                        returnData += " | " + project['website'].replace('//', '');
                    }
                }
            });
            return returnData;
        },
        getProjectPageDescription(projectId) {
            let returnData = null;
            projects.forEach(project => {
                if (project['id'] == projectId) {
                    project['details'].forEach(detail => {
                        if (detail.paragraphs) {
                            returnData = detail['paragraphs'][0]['text'];
                        }
                    });
                }
            });
            var trimmedString = returnData.substr(0, 158);
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            return trimmedString;
        },
        getProjectTechnologies() {
            let returnData = [];
            projects.forEach(project => {
                project['technologies'].forEach(tech => {
                    let dupliFound = false;
                    returnData.forEach(dupliCheck => {
                        if(dupliCheck['tech'] == tech) {
                            dupliCheck['projCount']++;
                            dupliFound = true;
                        }
                    });
                    if(!dupliFound) {
                        returnData.push({
                            'tech' : tech,
                            'projCount' : 1,
                        });
                    }
                });
            });
            return new Set(returnData);
        }
    }
}

// returns only selected keys from object
function pick(obj, keys) {
    return keys.map(k => k in obj ? { [k]: obj[k] } : {}).reduce((res, o) => Object.assign(res, o), {});
}