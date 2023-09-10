import _ from "lodash";

const projects = [
    {
        name: "KTM Retail",
        tagLine: "Vue.js-based e-commerce website.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fktmretail.JPG?alt=media",
        type: "it",
        urlSlug: "ktmretail-jockey-nepal-vuejs-ecommerce-website",
        id: 1,
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
                    text: 'KTM Retail is created for the authorized dealer of Jockey and Dixey in Nepal. The website and mobile app allow users to purchase items with digital payment and track their status. It also has reliable options for admin to activate offers and flash sales during festivals.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Products with Multiple sizes with individual prices'
            }, {
                badge: 'Feature',
                text: 'Products Filter API (Laravel Eloquent)'
            }, {
                badge: 'Security',
                text: 'Middleware Protection for admin and staff accounts'
            }, {
                badge: 'Feature',
                text: 'Banners management'
            }, {
                badge: 'Marketing',
                text: 'Web Analytics'
            }, {
                badge: 'Marketing',
                text: 'Dynamic banners redirection'
            }, {
                badge: 'Marketing',
                text: 'Promo Codes and Discount Management'
            }, {
                badge: 'Feature',
                text: 'Order Status/Report management'
            }],
        }]
    },
    {
        name: "Intranery",
        tagLine: "E-commerce website for dealers to sell products as done by Daraz.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fintranery.JPG?alt=media",
        type: "it",
        urlSlug: "intranery-nepal-vuejs-ecommerce-website",
        id: 2,
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
                    text: 'Intranery Online means buying or purchasing stationery and other products online (The Internet Technology). Today, the development of technology is increasing rapidly in the world. The internet has turned our existence upside down. It has revolutionized communication, to the extent that is now our preferred medium of everyday communication. In almost everything we do today, we use the Internet. Ordering a pizza, buying a television, sharing a moment with a friend and many more.'
                }, {
                    text: 'Intranery Online is also the same. The buyer\'s decision-making process has changed dramatically in recent years. Buyers are conducting extensive research online before ever speaking to a salesperson. Buyers are also making more direct purchases online and via their smartphone, never stepping foot into traditional brick-and-mortar locations. Thinking about it Intranery is developed and it aims to provide door-to-door facilities for every people. Now every people can order and get the necessary goods very fast by sitting and ordering from your own house and office through Intranery service. Intranery has access to thousands of products through hundreds of high street and non-high street stores nearly. Intranery provides a broad variety of items from Stationery, electronics and technology, to furnishing and other devices.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'API for Dealers Section'
            }, {
                badge: 'Security',
                text: 'Middleware Protection for admin and staff accounts'
            }, {
                badge: 'Marketing',
                text: 'Web Analytics'
            }],
        }]
    },
    {
        name: "Foreveryng",
        tagLine: "E-commerce website designed for discounts.",
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
                    text: 'The project is created to replace the WordPress site crafted with WooCommerce. Since WooCommerce is not targeted to the Nepalese market, we had to build a better platform than that.'
                },
                {
                    text: 'Foreveryng not only sells products online but also has a reward point system, gift card, and promo management system to boost marketing. On the other hand, it is also capable of tracking user referrals to provide extra offers and discounts.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Backend',
                text: 'Product Management with multiple sizes, colors, and different prices'
            }, {
                badge: 'Feature',
                text: 'Product Feedback'
            }, {
                badge: 'Feature',
                text: 'API'
            }, {
                badge: 'Security',
                text: 'Middleware Protection for admin and staff accounts'
            }, {
                badge: 'Marketing',
                text: 'Web Analytics'
            }, {
                badge: 'Feature',
                text: 'Discounts and offers management'
            }, {
                badge: 'Security',
                text: 'Gift Card and Promo Code'
            }, {
                badge: 'Optimization',
                text: 'Database Relations and Laravel Eloquent'
            }, {
                badge: 'Security',
                text: 'Shipment tracking and Reward Points as per order item status'
            }],
        }, {
            title: 'Team',
            titleIcon: 'people',
            lists: [{
                badge: 3,
                text: 'UI/UX'
            }, {
                badge: 2,
                text: 'Backend'
            }, {
                badge: 2,
                text: 'Android'
            }, {
                badge: 1,
                text: 'IOS'
            }],
        }]
    },
    {
        name: "Kourtier Courier",
        tagLine: "Web app for courier tracking management.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fkourtier.JPG?alt=media",
        type: "it",
        urlSlug: "kourtier-courier-services-cargo-freight",
        id: 4,
        website: '//kourtiercourier.com.np',
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
                    text: 'Kourtier Couriers Pvt. Ltd. was established in 1997 by Mr. Pawan Kishore Rathi with a group of professionals who have over a decade of experience in their respective fields. Today, Kourtier is the leading and the largest network courier service provider in Nepal covering a self-network of more than 130 service stations around Nepal with a strong and well-set-up delivery structure in Kathmandu valley. The Company is running with advanced and scientific management using world-class technology and having quality manpower. Kourtier has come up with a fresh team and technology to address your customized requirements and by more than a decade and a half long experience, we are aware of the type and sensitivity of consignment; the process of delivery; standard POD requirements and delivery schedule structure. Kourtier has the required infrastructure, manpower, expertise, and technology to do such activities smoothly.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Optimization',
                text: 'Shifted Admin Report section to Laravel Eloquent'
            }],
        }]
    },
    {
        name: "Mero Pharmacist",
        tagLine: "Pharmacy inquiries online.",
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
                    text: 'Meropharmacist is the first of its kind to provide counseling to the patients on the medicines they are taking. Lack of awareness regarding medicine use is a serious problem in Nepal, with almost every Nepali lacking the right information about \'what and how\' on their medicines. Time and again, this has resulted in serious medicine-related concerns like drug overuse, misuse, adverse drug reactions, and lack of patient compliance.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Frontend',
                text: 'Social login'
            }, {
                badge: 'Marketing',
                text: 'Blog share feature'
            }],
        }]
    }, {
        name: "TIA",
        tagLine: "Tribhuvan International Airport.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Ftia.JPG?alt=media",
        type: "it",
        urlSlug: "tribhuvan-international-airport-flight-tracking-nepal",
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
                    text: 'The Tribhuvan International Airport (TIA), situated 5.56 km east of Kathmandu city is in the heart of the Kathmandu Valley. TIA is amid the confluence of three ancient cities viz. Kathmandu, Bhaktapur, and Patan, rich in their art and culture not only gifted for their temples and pagoda - but above all, they possess smiling men and women, the pride of the nation. Hence TIA not only has flourished as the main hub for every expanding business of the country but has proudly catered to various domestic and international airlines.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Backend',
                text: 'Blog Post Management'
            }, {
                badge: 'Marketing',
                text: 'Highlight blog post'
            }],
        }]
    }, {
        name: "Fixolla",
        tagLine: "Online mobile and laptop repair in Bangalore.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Ffixolla.JPG?alt=media",
        type: "it",
        urlSlug: "fixolla-india-simplifying-lives-repair-mobile-tablet-laptop-online",
        id: 7,
        technologies: ['Java', 'Laravel', 'Android Studio'],
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
                    text: 'Fixolla takes gadget repairing to the next level. Their innovative backend system and unparalleled customer care for smartphones and laptops ensure 100% customer satisfaction. From a broken screen to a frozen OS, they fix it all.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Android App'
            }, {
                badge: 'Feature',
                text: 'API'
            }, {
                badge: 'Security',
                text: 'Protection of User Data'
            }, {
                badge: 'Marketing',
                text: 'Tracking the rivals'
            }],
        }]
},
    {
        name: "RFID Limiter",
        tagLine: "An Arduino UNO based project for limiting the RFID Scans.",
        type: "ee",
        urlSlug: "rfid-limiter-arduino-uno-limiting-scans",
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
                    text: 'Usually RFID cards are used for authorizing by knowing the identity of the carrier. I built the device with an option to limit the number of authorizations to the individual cardholder. After (n) number of scans, the device revokes the access unless re-authorized by system head.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists:
                [{
                    badge: 'Feature',
                    text: 'Count card scans'
                }, {
                    badge: 'Feature',
                    text: 'Warn on last scan'
                }, {
                    badge: 'Security',
                    text: 'Visual notification on false card or revoked card'
                }, {
                    badge: 'Security',
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
                    text: 'Danube International Washer-Extractor keeps the record of washes done in the machine with the timestamp. The app is made to calculate total kgs of washes done by machine to report the laundry owner so that he can cross-check it with revenue collected.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists:
                [{
                    badge: 'Feature',
                    text: 'CSV Export of raw data for further analysis on Excel '
                }, {
                    badge: 'Feature',
                    text: 'View the daily wash load without any export'
                }, {
                    badge: 'Feature',
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
                    text: 'A novel system has been devised to eliminate power theft by automatic release of high voltage pulse in the transmission line in response to the command received by the remote termination unit (high voltage source) from arduino in the event of theft being detected. Due to high voltage pulse in the transmission lines, the pilferer’s appliances drawing powers illegally by way of tapping get impaired. This operation is transient (for 1-5 seconds) and during this time the supply of voltage for the normal consumers is kept suspended. However, in case of emergency, i.e., when the normal supply cannot be disturbed, the bypass mode is activated so that consumers continue to get un-interrupted power supply, and during this period the process of theft elimination is kept suspended. The actual working of this novel system has been demonstrated by simulating the process in Proteus 8.6. The process thus developed is effective and reliable.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists:
                [{
                    badge: 'Feature',
                    text: 'Visual Indication when theft is live'
                }, {
                    badge: 'Security',
                    text: 'Eliminator Initialization'
                }, {
                    badge: 'Simulation',
                    text: 'Modeling and simulation on Proteus'
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
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists:
                [{
                    badge: 'Simulation',
                    text: 'Modeling and simulation on Proteus'
                }, {
                    badge: 'Feature',
                    text: 'Visual Indication of device health'
                }, {
                    badge: 'Feature',
                    text: 'Raw data analysis by PHP'
                }, {
                    badge: 'Feature',
                    text: 'Realtime serial data transfer by bluetooth module'
                }, {
                    badge: 'Feature',
                    text: 'Windows console app to analyse raw SD Card data'
                }],
        }]
    },
    {
        name: "Legal Remit",
        tagLine: "Remittance website for money transfers.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Flegal-remit-nepal.JPG?alt=media",
        type: "it",
        urlSlug: "legal-remit-nepal-transfer-management",
        id: 12,
        website: '//legalremit.com',
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
                    text: 'Legal Remit in one of few realtime international remit transfers working for Nepal. Transferring money is optimized with KYC, documents validation and assigning to banks. The web app also keeps record a of deposits made to banks between countries.'
                }, {
                    text: 'The app also has permission management for admin users, report comparison and remit status tracking.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists:
                [{
                    badge: 'Feature',
                    text: 'Transaction Management'
                }, {
                    badge: 'Security',
                    text: 'Middleware Protection for admin, staff and user accounts'
                }, {
                    badge: 'Marketing',
                    text: 'Web Analytics'
                }, {
                    badge: 'Feature',
                    text: 'Banks transaction management'
                }, {
                    badge: 'Development',
                    text: 'Usage tracking'
                }, {
                    badge: 'Feature',
                    text: 'Bank staff account'
                }, {
                    badge: 'Hosting',
                    text: 'AWS - Elasticbeanstalk, Cloudwatch, RDS and EC2 Cron jobs'
                }, {
                    badge: 'Feature',
                    text: 'Banks API integration for verified money transfers to deposition.'
                }, {
                    badge: 'Feature',
                    text: 'Poli Payments Integration'
                }],
        }, {
            title: 'Team',
            titleIcon: 'people',
            lists:
                [{
                    badge: 2,
                    text: 'UI/UX'
                }, {
                    badge: 1,
                    text: 'Backend'
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
                    text: 'WordPress provides API service. The app uses it to list post, search them and view details. Also, there are some static supporting pages.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Search using API'
            }, {
                badge: 'Feature',
                text: 'Detail page with Limbu font'
            }, {
                badge: 'Publishing',
                text: 'Deploying to App Store'
            }],
        }, {
            title: 'Team',
            titleIcon: 'people',
            lists: [{
                badge: 1,
                text: 'UI/UX'
            }, {
                badge: 1,
                text: 'Backend'
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
                    text: 'Indigo Ink book publisher comes online with a book gallery. They also have a system to publish the events they regularly organize.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Book Gallery'
            }, {
                badge: 'Feature',
                text: 'Events Management'
            }, {
                badge: 'Publishing',
                text: 'Hosting on C-Panel'
            }, {
                badge: 'Marketing',
                text: 'Online Enquiries'
            }],
        }, {
            title: 'Team',
            titleIcon: 'people',
            lists: [{
                badge: 1,
                text: 'UI/UX'
            }, {
                badge: 1,
                text: 'Backend'
            }],
        }]
    }, {
        name: "Employee Records",
        tagLine: "Vuejs based employee directory.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Femployee-records.jpg?alt=media",
        type: "it",
        urlSlug: "employee-records-directory-laravel-vuejs",
        id: 15,
        technologies: ['Vuejs', 'Laravel'],
        contributionLevels: {
            Design: 5,
            Backend: 90,
            Frontend: 70,
            Teammates: 15,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Provides an easy and fast search of employees in several departments within the company.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Database',
                text: 'Database design'
            }, {
                badge: 'Feature',
                text: 'Vuejs filter and vue-router management.'
            }, {
                badge: 'Storage',
                text: 'Vuex for persisting the Laravel\'s session and login check of a user has logged-in by checking to keep me signed-in.'
            }],
        }, {
            title: 'Team',
            titleIcon: 'people',
            lists: [{
                badge: 2,
                text: 'UI/UX'
            }, {
                badge: 1,
                text: 'Backend'
            }],
        }]
    }, {
        name: "Amour Production House",
        tagLine: "Production house portfolio.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Famour-production.jpg?alt=media",
        type: "it",
        urlSlug: "amour-production-house-october-cms",
        id: 16,
        technologies: ['October CMS'],
        contributionLevels: {
            Design: 100,
            Frontend: 100,
            Backend: 100,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Website built for the Production house to highlight its portfolio. Dynamic frontend allows admin to set banners, website contents, videos. The site also includes a restricted area where the visitor has to enter access code to proceed.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Database',
                text: 'Database design'
            }, {
                badge: 'Storage',
                text: 'Image and videos gallery.'
            }, {
                badge: 'Feature',
                text: 'Backend for managing enquiries with soft delete and all website contents.'
            }],
        }]
    }, {
        name: "ReachOn",
        tagLine: "Digital Education For All",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Freachon.jpg?alt=media",
        type: "it",
        urlSlug: "reachon-digital-education-socket-vuejs-nepal",
        id: 17,
        technologies: ['Laravel', 'Socket', 'Vuejs'],
        contributionLevels: {
            Design: 20,
            Backend: 30,
            Server: 80,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'ReachOn is the digital education platform with the vision to create an education system where every student has the same opportunities. Education is all about accessibility and equality but different student left their class with different level of understanding and face many problems with the current education system.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Backend panel to check answer sheet'
            }, {
                badge: 'Feature',
                text: 'Laravel Echo for notification'
            }, {
                badge: 'Feature',
                text: 'Self hosted pusher server'
            }],
        }]
    }, {
        name: "Uno",
        tagLine: "Discounts, Coupons and Entertainment for every age group anywhere.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Funo.jpg?alt=media",
        type: "it",
        urlSlug: "uno-card-nepal-discounts-coupons",
        id: 18,
        website: '//uno.com.np',
        technologies: ['CodeIgniter', 'Vuejs'],
        contributionLevels: {
            Design: 10,
            API: 60,
            Backend: 30,
            Merchant: 20,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Uno is a comprehensive online business directory targeted for extra discount. It provides information to cater to the immediate, impulsive and urgent requirement of customers for companies, products, and services.'
                },
                {
                    text: 'Uno offers a yearly subscription to interested users for a flat discount on 100+ locations across Nepal. Freely registered user can take benefit of points collection and redeem it as cash discount.'
                },
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Bulk registration for card providers'
            }, {
                badge: 'Feature',
                text: 'User reporting system with issue and renewal'
            }],
        }]
    }, {
        name: "Short Vids",
        tagLine: "Short entertaining videos to make your day.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fshort-vids.jpg?alt=media",
        type: "it",
        urlSlug: "short-vids-videos-make-your-day",
        id: 19,
        technologies: ['Laravel', 'Vuejs', 'AWS'],
        contributionLevels: {
            Design: 40,
            API: 100,
            Backend: 100
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'This app is similar to popular short videos sharing apps. We have optimized the backend for AWS with content caching for faster operations.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Video sharing as public, followers or private.'
            }, {
                badge: 'Security',
                text: 'Restriction on content viewing'
            }, {
                badge: 'Hosting',
                text: 'AWS - Elasticbeanstalk, Cloudwatch and RDS'
            }],
        }]
    }, {
        name: "Tender Management",
        tagLine: "Draft, publish, bid and award for public and private tenders.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fstrata.jpg?alt=media",
        type: "it",
        urlSlug: "strata-tender-management",
        id: 20,
        technologies: ['Laravel', 'Vuejs', 'AWS'],
        contributionLevels: {
            Design: 10,
            API: 20,
            Backend: 30,
            'External API': 40
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'This includes portal for managers and contractors for tender creation and bidding. Super Admin portal is currently developed for license verification with 3rd party api and account activation.'
                }
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Feature',
                text: 'Browser push notifications using Firebase.'
            }, {
                badge: 'Security',
                text: 'Email and OPT verification with account ban system.'
            }, {
                badge: 'Hosting',
                text: 'AWS - Elasticbeanstalk, Cloudwatch and RDS.'
            }, {
                badge: 'Feature',
                text: 'Jobs and Queue for emails and other heavy tasks.'
            }, {
                badge: 'Feature',
                text: 'Edit logs for any table using polymorphic model applied using trait to eloquent class.'
            }],
        }]
    }, {
        name: "Community Events",
        tagLine: "Create, invite and enjoy events happening in your community.",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fcommunity-event.jpg?alt=media",
        type: "it",
        urlSlug: "community-events",
        id: 21,
        technologies: ['Spring Boot', 'React Native', 'Expo', 'AWS', 'Firestore'],
        contributionLevels: {
            Design: 5,
            Backend: 20,
            Frontend: 70,
            Teammates: 5,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'Expo managed React Native app for creating events and sharing to the community. This app also includes chat feature implemented using firestore database provided by Google Firebase.'
                }
            ],
        }]
    }, {
        name: "VoIP Calls",
        tagLine: "Local IP based call app",
        coverImage: "https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/project%2Fvoip-calls.jpg?alt=media",
        type: "it",
        urlSlug: "voip-calls",
        id: 22,
        technologies: ['ReactNative', 'Expo', 'Swift', 'JAVA'],
        contributionLevels: {
            MobileApp: 100,
        },
        details: [{
            title: 'Overview',
            titleIcon: 'assignment',
            paragraphs: [
                {
                    text: 'App is used for establishing VoIP calls between users in the local network in react native. A prototype for the same using WebRTC was also built.'
                },
                {
                    text: 'This app utilizes a custom Expo module written to wrap native Android and iOS libraries.'
                },
            ],
        }, {
            title: 'My Highlighted Tasks',
            titleIcon: 'code',
            lists: [{
                badge: 'Security',
                text: 'SSL certificate Pinning'
            }, {
                badge: 'Feature',
                text: 'Peer to peer video/audio call using WebRTC (Prototype developed)'
            }, {
                badge: 'Feature',
                text: 'Sip-based local audio call'
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
                        if (dupliCheck['tech'] == tech) {
                            dupliCheck['projCount']++;
                            dupliFound = true;
                        }
                    });
                    if (!dupliFound) {
                        returnData.push({
                            'tech': tech,
                            'projCount': 1,
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