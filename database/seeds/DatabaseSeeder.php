<?php

use App\Mixin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $poems = [
            [
                'id' => 1,
                'urlSlug' => 'its-me-here-i-am-a-cut-above-you-all',
                'name' => 'It\'s Me',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'Here I am',
                            'A cut above you all',
                            'Silent as a grave',
                            'In favour of your death',
                        ]
                    ], [
                        'paraLines' => [
                            'Lethal is my pen',
                            'Perfect would be again',
                            'A fortune is with me',
                            'Unbeatable this shall be',
                        ]
                    ], [
                        'paraLines' => [
                            'Dare you come near',
                            'Yell you out there',
                            'And who is this me',
                            'Links the first letters to me'
                        ]
                    ]
                ],
            ], [
                'id' => 2,
                'urlSlug' => 'why-fail-everyone-listen-what-i-tell-why-i-always-get-fail',
                'name' => 'Why Fail',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'Everyone listen what I Tell,',
                            'Why I always get Fail?',
                            'The school is Hell',
                            'To make me Fail!',
                        ]
                    ], [
                        'paraLines' => [
                            'Teachers scold Me,',
                            'And friends hate Me',
                            'Just because Why',
                            'I was going to Die...',
                        ]
                    ], [
                        'paraLines' => [
                            'I tried my Best',
                            'To get Success,',
                            'But that study as Input',
                            'Gave me red marks as Output',
                        ]
                    ], [
                        'paraLines' => [
                            'Even I got fail this Time',
                            'I may top next Time',
                            'What if you hate Me',
                            'World may again love Me',
                        ]
                    ], [
                        'paraLines' => [
                            'Give me another Chance',
                            'Then,',
                            'You will Get',
                            'Less than I Gain...',
                        ]
                    ]
                ],
            ], [
                'id' => 3,
                'urlSlug' => 'greed-love-genius-and-peace',
                'name' => 'Greed, love, genius and peace',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'The world doesn\'t seems to be greedy',
                            'You are the one who feels greedy',
                            'If you think that I am greedy',
                            'Then remember I am greedy because you are greedy',
                        ]
                    ], [
                        'paraLines' => [
                            'Don\'t think that I don\'t love you',
                            'Until and unless you know that I love you',
                            'If you think that I love you',
                            'Then you should know that I don\'t hate you',
                        ]
                    ], [
                        'paraLines' => [
                            'If you know that I am genius',
                            'Them know that you made of genius',
                            'Everyone don\'t accept me as genius',
                            'Because they aren\'t genius to belief me as genius',
                        ]
                    ], [
                        'paraLines' => [
                            'Try to live always in peace',
                            'So that I can stay in peace',
                            'To live in peace, know the meaning of peace',
                            'Dictionary is right there, go and find the word - peace.',
                        ]
                    ],
                ],
            ], [
                'id' => 4,
                'urlSlug' => 'what-this-moment-is-i-never-wish-of-getting-you',
                'name' => 'What this moment is?',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'I never wish of getting you',
                            'But I always meet you',
                            'Wherever I move from',
                            'It leads up to you',
                        ]
                    ], [
                        'paraLines' => [
                            'I want to say what my eyes says',
                            'So always stay around you',
                            'But my nervousness stops',
                            'To get near of you',
                        ]
                    ], [
                        'paraLines' => [
                            'Wish you could know my hidden words',
                            'And accept my proposal for my happiness',
                            'Which takes to your happiness',
                            'And finally to our home happiness',
                        ]
                    ], [
                        'paraLines' => [
                            'At least I said you hi today',
                            'Now waiting for your reply tomorrow',
                            'What this moment is? Am so confused',
                            'Neither want to gain nor to loose...',
                        ]
                    ]
                ],
            ], [
                'id' => 5,
                'urlSlug' => 'take-me-out-dreaming-of-getting-you',
                'name' => 'Take Me Out',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'Dreaming of getting you',
                            'I loosed everything',
                            'Cheerfulness of smile',
                            'And all the dreams of life',
                        ]
                    ], [
                        'paraLines' => [
                            'Wishing of being yours',
                            'Followed you a lot',
                            'But got you only with',
                            'Someone others',
                        ]
                    ], [
                        'paraLines' => [
                            'May be its mine bad-luck',
                            'Or yours not to get me',
                            'But I still have hope',
                            'Of being yours',
                        ]
                    ], [
                        'paraLines' => [
                            'Give me a break',
                            'I\'ll explain you everything',
                            'What\'s the truth',
                            'And what\'s the false',
                        ]
                    ], [
                        'paraLines' => [
                            'Please understand me',
                            'Trust me and help me',
                            'To get out of this puzzle',
                            'Forever',
                        ]
                    ]
                ],
            ], [
                'id' => 6,
                'urlSlug' => 'my-dream-girl-my-sound-never-goes-sharper',
                'name' => 'My Dream Girl',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'My sound never goes sharper,',
                            'Never goes shriller,',
                            'When I speak with you,',
                            'When I speak with you,',
                        ]
                    ], [
                        'paraLines' => [
                            'Coz you are my love,',
                            'You are my love;',
                            'The crazy feelings of me,',
                            'Crazy feelings of me towards you,',
                        ]
                    ], [
                        'paraLines' => [
                            'Are never gonna change,',
                            'Coz you are mine,',
                            'And only mine;',
                            'Though I can\'t face you,',
                        ]
                    ], [
                        'paraLines' => [
                            'Though I can\'t face you,',
                            'In front of everyone,',
                            'Coz you are my dream,',
                            'Coz you are my dream;',
                        ]
                    ], [
                        'paraLines' => [
                            'Oh God! please don\'t let this dream go,',
                            'Please God! don\'t let this dream go,',
                            'Coz in this dream there is mine DREAM GIRL,',
                            'There is mine DREAM GIRL......',
                        ]
                    ]
                ],
            ], [
                'id' => 7,
                'urlSlug' => 'leave-me-alone-what-do-you-think',
                'name' => 'Leave Me Alone',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'What do you think you yourself are, leader of',
                            'my heart?',
                            'Who do you think you are, someone for whom',
                            'I can die?',
                        ]
                    ], [
                        'paraLines' => [
                            'If so, then stop thinking the false!',
                            'Your dreams can never get true',
                            'I don\'t remember you, crazy for me',
                            'At least someone can really be the same for me',
                        ]
                    ], [
                        'paraLines' => [
                            'If you didn\'t love me, you really are a good',
                            'actress',
                            'But if you really do, better let me forget it as',
                            'you never loved me',
                        ]
                    ], [
                        'paraLines' => [
                            'Days were in past where I waited for you',
                            'But its the present, time to forget you',
                            'I don\'t care what you shall do',
                            'I only remember what I should do',
                        ]
                    ], [
                        'paraLines' => [
                            'Stay in dark without me',
                            'And I shall Stay in light without you',
                            'Get out of the heart',
                            'And never ever dare to come again here',
                        ]
                    ]
                ],
            ], [
                'id' => 8,
                'urlSlug' => 'concord-came-in-earth-alone',
                'name' => 'Concord',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'Came in Earth alone',
                            'And will be going alone',
                            'But,',
                            'Needs someone to remove solitariness',
                            'So, I am in search of fondness',
                            'Wish',
                            'Come and understand me',
                            'Come and help me',
                            'Come and assist me',
                            'And finally tag me',
                        ]
                    ], [
                        'paraLines' => [
                            'Wish you\'ll shield me',
                            'And I\'ll too secure you',
                            'So, proceed together',
                            'We\'ll to victory.',
                            'Thus, I am in search of affinity',
                        ]
                    ], [
                        'paraLines' => [
                            'Take me away from jinx',
                            'Take me away from junk',
                            'Neutralise my vandalize',
                            'Wish I\'ll retrieve soon',
                        ]
                    ]
                ],
            ], [
                'id' => 9,
                'urlSlug' => 'current-aim-i-should-get-it-whatever-it-costs',
                'name' => 'Current Aim',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'I should get it whatever it costs',
                            'But within few months',
                            'If it slips off my hands',
                            'I may not get its glance',
                        ]
                    ], [
                        'paraLines' => [
                            'Everyone is helping me to get it',
                            'And I am too trying me best to achieve it',
                            'Wish this time my luck supports me',
                            'And my heart gains it',
                        ]
                    ], [
                        'paraLines' => [
                            'If I fail this time',
                            'I need to try next time',
                            'But my pens will scold me',
                            'My book will hate me',
                        ]
                    ], [
                        'paraLines' => [
                            'So request god to gain success',
                            'And help me to cross IRON GATE',
                            'I am sure I won’t make it rust',
                            'Thus help me my host',
                        ]
                    ]
                ],
            ], [
                'id' => 10,
                'urlSlug' => 'here-it-comes-a-new-year-again-sunshine',
                'name' => 'Happy New Year Sunshine',
                'poemParas' => [
                    [
                        'paraLines' => [
                            'Here it comes',
                            'A new year again',
                            'But glass of wine',
                            'Weeks in my lifeline',
                        ]
                    ], [
                        'paraLines' => [
                            'Waiting for your ego',
                            'To beat a bye bye go',
                            'Waiting for conversation',
                            'Holding for brightening realization',
                        ]
                    ], [
                        'paraLines' => [
                            'The story is old',
                            'With a new scent',
                            'I promise that',
                            'There shall never be any bend',
                        ]
                    ], [
                        'paraLines' => [
                            'You are the Sunshine',
                            'The best Sunshine',
                            'Shining my every year',
                            'Happy New Year',
                        ]
                    ]
                ],
            ]
        ];

        $quotes = [
            [
                'id' => 1,
                'urlSlug' => 'may-be-its-mine-bad-luck-or-yours-not-to-get-me',
                'quoteLines' => [
                    "May be its mine bad-luck",
                    "Or yours not to get me",
                    "But I still have hope",
                    "Of being yours"
                ]
            ], [
                'id' => 2,
                'urlSlug' => 'if-you-know-that-i-am-genius-then-know-that-you',
                'quoteLines' => [
                    "If you know that I am genius",
                    "Then know that you made me genius",
                    "Everyone don't accept me as genius",
                    "Because they aren't genius to belief me as genius"
                ]
            ], [
                'id' => 3,
                'urlSlug' => 'life-for-me-is-just-a-result-of-experiments',
                'quoteLines' => [
                    "Life for me is just a result of experiments being performed by far more developed creatures."
                ]
            ], [
                'id' => 4,
                'urlSlug' => 'dream-big-but-not-so-big-that-it-becomes-a-mess',
                'quoteLines' => [
                    "Dream big!",
                    "But not so big that it becomes a mess, and you may never reach reality."
                ]
            ], [
                'id' => 5,
                'urlSlug' => 'dreaming-of-getting-you-i-loosed-everything',
                'quoteLines' => [
                    "Dreaming of getting you",
                    "I loosed everything",
                    "Cheerfulness of smile",
                    "And all the dreams of life"
                ]
            ], [
                'id' => 6,
                'urlSlug' => 'give-me-another-chance-then-you',
                'quoteLines' => [
                    "Give me another Chance",
                    "Then,",
                    "You will Get",
                    "Less than I Gain..."
                ]
            ], [
                'id' => 7,
                'urlSlug' => 'when-i-was-small-i-felt-like-a-superhero',
                'quoteLines' => [
                    "When I was small I felt like a Superhero as my father threw me up in the air.",
                    "Now after reaching this success peak I unmask - Real Superhero made me Superhero!"
                ]
            ], [
                'id' => 8,
                'urlSlug' => 'congratulations-to-your-mom-and-dad',
                'quoteLines' => [
                    "Congratulations to your mom and dad for birth of a sweet child!",
                    "",
                    "Sorry that I couldn't wish them when you were born."
                ]
            ], [
                'id' => 9,
                'urlSlug' => 'oh-great-i-never-recognized-sunshine',
                'quoteLines' => ["Oh great!", "I never recognized Sunshine shining me, within me."]
            ], [
                'id' => 10,
                'urlSlug' => 'i-will-miss-you-not-because-you-taught-me',
                'quoteLines' => [
                    "I will miss you",
                    "not because you taught me,",
                    "not because you helped me on all steps of education;",
                    "but only because",
                    "you made me a leader to lead as an perfect Electrical Engineer."
                ]
            ], [
                'id' => 11,
                'urlSlug' => 'not-always-starting-from-a-ends-you-in-z',
                'quoteLines' => [
                    "Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own."
                ]
            ]
        ];

        $projects = [
            [
                'name' => "KTM Retail",
                'tagLine' => "Vuejs based ecommerce website.",
                'coverImage' => "/ktmretail.jpg",
                'type' => "it",
                'urlSlug' => "ktmretail-jockey-nepal-vuejs-ecommerce-website",
                'id' => 1,
                'website' => '//ktmretail.com',
                'technologies' => ['Vuejs', 'Laravel'],
                'contributionLevels' => [
                    'Design' => 5,
                    'Backend' => 30,
                    'Frontend' => 40,
                    'Teammates' => 25,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'KTM Retail is created for authorized dealer of Jockey and Dixey in Nepal. The website and mobile app allows user to purchase items with digital payment and track its status. It also has reliable options for admin to activate offers and flash sale during festivals.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Feature',
                            'text' => 'Products with Multiple sizes with individual prices'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Products Filter API (Laravel Eloquent)'
                        ], [
                            'category' => 'Security',
                            'text' => 'Middleware Protection for admin and staff accounts'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Banners management'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Web Analytics'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Dynamic banners rediection'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Promo Codes and Discount Management'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Order Status/Report management'
                        ]],
                ]]
            ],
            [
                'name' => "Intranery",
                'tagLine' =>
                    "Ecommerce website for dealers to sell products as done by Daraz.",
                'coverImage' => "/intranery.jpg",
                'type' => "it",
                'urlSlug' => "intranery-nepal-vuejs-ecommerce-website",
                'id' => 2,
                'website' => '//intranery.com',
                'technologies' => ['Vuejs', 'Laravel'],
                'contributionLevels' => [
                    'Design' => 5,
                    'Backend' => 15,
                    'Frontend' => 20,
                    'Teammates' => 60,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'Intranery Online means buying or purchasing the stationery and other products through online(The Internet Technology). Today the development of technology is increasing rapidly in the world. The internet has turned our existence upside down. It has revolutionized Communication, to the extent that is now our preferred medium of everyday communication. In almost everything we do today, we use the Internet. Ordering a pizza, buying a television, sharing a moment with a friend and many more.'
                        ], [
                            'text' => 'Intranery Online it is also the same. The buyer’s decision-making process has changed dramatically in recent years. Buyers are conducting extensive research online before ever speaking to a sales person. Buyers are also making more direct purchases online and via their smartphone, never stepping foot into traditional brick-and-mortar locations. Thinking about it Intranery is developed and it aims to provide door to door facilities for every people. Now every people can order and get the necessity goods very fast by sitting and ordering from your own house and office through Intranery service. Intranery have access to thousands of products through hundreds of high street and non-high street stores nearly. Intranery provides a broad variety of items from Stationery, electronics and technology, to furnishing and other devices.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Feature',
                            'text' => 'API for Dealers Section'
                        ], [
                            'category' => 'Security',
                            'text' => 'Middleware Protection for admin and staff accounts'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Web Analytics'
                        ]],
                ]]
            ],
            [
                'name' => "Foreveryng",
                'tagLine' => "Ecommerce website designed for discounts.",
                'coverImage' => "/foreveryng.jpg",
                'type' => "it",
                'urlSlug' => "foreveryng-online-beauty-store-nepal",
                'id' => 3,
                'website' => '//foreveryng.com',
                'technologies' => ['Laravel'],
                'contributionLevels' => [
                    'Design' => 5,
                    'Backend' => 40,
                    'API' => 30,
                    'Frontend' => 5,
                    'Teammates' => 20,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'The project is created to replace the wordpress site crafted with WooCommerce. Since WooCommerce is not targeted to Neplease market we had to built a better platform than that.'
                        ],
                        [
                            'text' => 'Foreveryng not only sells products online but also has reward point, gift card and promo management system to boost the marketing. On the oter hand it is also capable to tracking user referrals to provide extra offers and discounts.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Backend',
                            'text' => 'Product Management with multiple size, colour and different prices'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Product Feedback'
                        ], [
                            'category' => 'Feature',
                            'text' => 'API'
                        ], [
                            'category' => 'Security',
                            'text' => 'Middleware Protection for admin and staff accounts'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Web Analytics'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Discounts and offers management'
                        ], [
                            'category' => 'Security',
                            'text' => 'Gift Card and Promo Code'
                        ], [
                            'category' => 'Optimization',
                            'text' => 'Database Relations and Laravel Eloquent'
                        ], [
                            'category' => 'Security',
                            'text' => 'Shipment tracking and Reward Points as per order item status'
                        ]],
                ]]
            ],
            [
                'name' => "Kourtier Courier",
                'tagLine' => "Webapp for kourier tracking management.",
                'coverImage' => "/kourtier.jpg",
                'type' => "it",
                'urlSlug' => "kourtier-courier-services-cargo-freight",
                'id' => 4,
                'website' => '//kourtier.com.np',
                'technologies' => ['Laravel', 'jQuery'],
                'contributionLevels' => [
                    'Design' => 2,
                    'Backend' => 8,
                    'Teammates' => 90,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'Kourtier Couriers Pvt. Ltd. was established in 1997 by Mr. Pawan Kishore Rathi with a group of professionals who have over a decade of experience in their respective field. Today, Kourtier is the leading and the largest network courier service provider in Nepal covering self-network of more than 130 service stations around Nepal with strong ad well set-up delivery structure in Kathmandu valley. The Company is running with an advanced and scientific management using world class technology and having quality manpower. Kourtier has come up with fresh team and technology to address your customised requirements and by virtue of more than decade and half long experience, we are aware of the type and sensitivity of consignment; process of delivery; standard POD requirements and delivery time schedule structure. Kourtier has the required infrastructure, manpower, expertise and technology to do such activities smoothly.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Optimization',
                            'text' => 'Shifted Admin Report section to Laravel Eloquent'
                        ]],
                ]]
            ],
            [
                'name' => "Mero Pharmacist",
                'tagLine' => "Pharmacy enquiries online.",
                'coverImage' => "/meropharmacist.jpg",
                'type' => "it",
                'urlSlug' => "mero-pharmacist-pharma-srs-online-enquire",
                'id' => 5,
                'website' => '//meropharmacist.com',
                'technologies' => ['Laravel'],
                'contributionLevels' => [
                    'Backend' => 10,
                    'Teammates' => 90,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'Meropharmacist is the first of its kind to provide the counseling to the patients on the medicines they are taking. Lack of awareness regarding medicine use is a serious problem in Nepal, with almost every Nepali lacking the right information about ‘what and how’ on their medicines. Time and again, this has resulted on serious medicine related concerns like drug overuse, misuse, adverse drug reactions and lack of patient compliance.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Frontend',
                            'text' => 'Social login'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Blog share feature'
                        ]],
                ]]
            ],
            [
                'name' => "TIA",
                'tagLine' => "Tribhuvan International airport.",
                'coverImage' => "/tia.jpg",
                'type' => "it",
                'urlSlug' => "tribhuvan-international-airport-filght-tracking-nepal",
                'id' => 6,
                'website' => '//tiairport.com.np',
                'technologies' => ['October CMS'],
                'contributionLevels' => [
                    'Backend' => 30,
                    'Teammates' => 70,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'The Tribhuvan International Airport (TIA), situated 5.56 km east of Kathmandu city is in the heart of the Kathmandu Valley. TIA is amid the confluence of three ancient cities viz. Kathmandu, Bhaktapur and Patan, rich in their art and culture not only gifted for their temples and pagoda - but above all they posses smiling men and women, the pride of the nation. Hence TIA not only has flourished as the main hub for every expanding business of the country but has proudly catered to various domestic and international airlines.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Backend',
                            'text' => 'Blog Post Management'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Highlight blog post'
                        ]],
                ]]
            ], [
                'name' => "Fixolla",
                'tagLine' =>
                    "Online mobile and laptop repair in Bangalore.",
                // 'coverImage' => "/fixolla.jpg",
                'type' => "it",
                'urlSlug' => "fixolla-india-simplifying-lives-repair-mobile-tablet-laptop-online",
                'id' => 7,
                'website' => '//fixolla.com',
                'technologies' => ['Java', 'Laravel'],
                'contributionLevels' => [
                    'AndroidApp' => 20,
                    'Design' => 5,
                    'Backend' => 10,
                    'Frontend' => 5,
                    'Teammates' => 60,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'Fixolla takes gadget repairing to the next level. Their innovative backend system and unparalleled customer care for smartphones and laptops ensuring 100% customer satisfaction. From a broken screen to frozen OS, they fix it all.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Feature',
                            'text' => 'Android App'
                        ], [
                            'category' => 'Feature',
                            'text' => 'API'
                        ], [
                            'category' => 'Security',
                            'text' => 'Protection of User Data'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Tracking the rivals'
                        ]],
                ]]
            ],
            [
                'name' => "RFID Limitor",
                'tagLine' => "An Arduino UNO based project for limiting the RFID Scans.",
                'type' => "ee",
                'urlSlug' => "rfid-limitor-arduino-uno-limiting-scans",
                'id' => 8,
                'technologies' => ['Arduino'],
                'contributionLevels' => [
                    'C/C++' => 30,
                    'Hardware' => 70,
                ],
                'sourceCode' => "//github.com/ha5il/RFID-Limiter",
                'details' => [[
                    'title' => 'Project Overview',
                    'titleIcon' => 'receipt',
                    'paragraphs' => [
                        [
                            'text' => 'Usually RFID cards are used for authorizing by knowing the identity of the carrier. I built the device with option to limit the number of authoriations to individual card holder. After (n) number of scans the device revokes the access unless re-authorized by system head.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Feature',
                            'text' => 'Count card scans'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Warn on last scan'
                        ], [
                            'category' => 'Security',
                            'text' => 'Visual notification on false card or revoked card'
                        ], [
                            'category' => 'Security',
                            'text' => 'Log scan history with timestamp to SD card'
                        ]],
                ]]
            ],
            [
                'name' => "RABC Analyser",
                'tagLine' =>
                    "Windows console based app for extracting the total washes done in Danube Washer. Also C# based GUI app is partially developed!",
                'type' => "ee",
                'urlSlug' => "rabc-analyser-windows-console-app-danube-international-washer-extractor",
                'id' => 9,
                'technologies' => ['Visual Studio'],
                'contributionLevels' => [
                    'C++' => 80,
                    'C#' => 20,
                ],
                'sourceCode' => "//github.com/ha5il/RABC-Analyser",
                'details' => [[
                    'title' => 'Project Overview',
                    'titleIcon' => 'receipt',
                    'paragraphs' => [
                        [
                            'text' => 'Danube International Washer Extractor keeps the record of washes done in the machine with timestamp. The app is made to calculate total kgs of washes done by machine to report the laundry owner so that he can cross check it with revenue collected.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Feature',
                            'text' => 'CSV Export of raw data for further analysis on Excel '
                        ], [
                            'category' => 'Feature',
                            'text' => 'View the daily wash load without any export'
                        ], [
                            'category' => 'Feature',
                            'text' => 'GUI app in C#'
                        ]],
                ]]
            ],
            [
                'name' => "Electrical Thief Eliminator",
                'tagLine' =>
                    "This device detects, locates and terminates the electricity thief from the supply line.",
                'type' => "ee",
                'urlSlug' => "electrical-electricity-thief-automatic-remover-supply-line",
                'id' => 10,
                'technologies' => ['Arduino'],
                'contributionLevels' => [
                    'C/C++' => 40,
                    'Hardware' => 30,
                    'Teammates' => 30,
                ],
                'details' => [[
                    'title' => 'Project Overview',
                    'titleIcon' => 'receipt',
                    'paragraphs' => [
                        [
                            'text' => 'A novel system has been devised to eliminate power theft by automatic release of high voltage pulse in the transmission line in response to the command received by the remote termination unit (high voltage source) from arduino in the event of theft being detected. Due to high voltage pulse in the transmission lines, the pilferer’s appliances drawing powers illegaly by way of tapping get impaired. This operation is transient (for 1-5 seconds) and during this time the supply of voltage for the normal consumers is kept suspended. However, in case of emergency, i.e., when the normal supply cannot be disturbed, the bypass mode is activated so that consumers continue to get un-interrupted power supply, and during this period the process of theft elimination is kept suspended. The actual working of this novel system has been demonstrated by simulating the process in Proteus autocad 8.6. The process thus developed is effective and reliable.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Feature',
                            'text' => 'Visual Indication when theft is live'
                        ], [
                            'category' => 'Security',
                            'text' => 'Eliminator Initialization'
                        ], [
                            'category' => 'Simulation',
                            'text' => 'Modeling ans simulation on Proteus'
                        ]],
                ]]
            ],
            [
                'name' => "Electrical Performance Analyser",
                'tagLine' =>
                    "An Arduino UNO based project for realtime data recording and analysis.",
                'type' => "ee",
                'urlSlug' => "electrical-device-performance-tracker-analyser-realtime",
                'id' => 11,
                'technologies' => ['Arduino', 'PHP'],
                'contributionLevels' => [
                    'C/C++' => 25,
                    'PHP' => 10,
                    'Hardware' => 40,
                    'Teammates' => 25,
                ],
                'sourceCode' => '//github.com/ha5il/Electrical-Performance-Analyzer',
                'details' => [[
                    'title' => 'Project Overview',
                    'titleIcon' => 'receipt',
                    'paragraphs' => [
                        [
                            'text' => 'Electrical performance analysis includes crucial for advancement of any system in future to the necessary practical level. This project is carried out with an objective to carry out performance analysis of some electrical devices like transformer, motor, generator in terms of its speed, temperature, voltage and current the parameters of respective device is recorded using dedicated sensors deployed across the project module. The project module includes the runtime java application along with Arduino interface environment which automatically detects the faults across the electrical devices and classifies it with the fault details. Based on the specifications of the devices, the pre set value for sensors is modified using Java and Arduino interface such that it automatically detects basic faults. Moreover, analysis of continuous data collected in periodic intervals from several motors helps in improvising them to the latest industrial demand.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Simulation',
                            'text' => 'Modeling ans simulation on Proteus'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Visual Indication of device health'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Raw data analysis by PHP'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Realtime serial data transfer by bluetooth module'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Windows console app to analyse raw SD Card data'
                        ]],
                ]]
            ],
            [
                'name' => "Legal Remit Nepal",
                'tagLine' => "Remitance website for money transfers.",
                'type' => "it",
                'urlSlug' => "legal-remit-nepal-transfer-management",
                'id' => 12,
                'website' => '//legalremitnepal.com.au',
                'technologies' => ['Laravel', 'jQuery', 'AWS'],
                'contributionLevels' => [
                    'Design' => 5,
                    'Backend' => 70,
                    'Frontend' => 20,
                    'Teammates' => 5,
                ],
                'details' => [[
                    'title' => 'Overview',
                    'titleIcon' => 'assignment',
                    'paragraphs' => [
                        [
                            'text' => 'Transferring money is optimized with KYC, documents validation and assigning to banks. The webapp also keeps record of deposits made to banks between countries.'
                        ], [
                            'text' => 'The app also has staff accounts for individual partners banks across countries.'
                        ]
                    ],
                ], [
                    'title' => 'My Task',
                    'titleIcon' => 'code',
                    'lists' =>
                        [[
                            'category' => 'Feature',
                            'text' => 'Transcation Management'
                        ], [
                            'category' => 'Security',
                            'text' => 'Middleware Protection for admin, staff and user accounts'
                        ], [
                            'category' => 'Marketing',
                            'text' => 'Web Analytics'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Banks transcation management'
                        ], [
                            'category' => 'Development',
                            'text' => 'Usage tracking'
                        ], [
                            'category' => 'Feature',
                            'text' => 'Bank staff account'
                        ], [
                            'category' => 'Hosting',
                            'text' => 'AWS'
                        ]],
                ]]
            ],
        ];

        foreach ($poems as $poem) {
            Mixin::create([
                'type' => 'poem',
                'data' => collect($poem),
            ]);
        }

        foreach ($quotes as $quote) {
            Mixin::create([
                'type' => 'quote',
                'data' => collect($quote),
            ]);
        }

        foreach ($projects as $project) {
            Mixin::create([
                'type' => 'project',
                'data' => collect($project),
            ]);
        }
    }
}
