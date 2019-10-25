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
    }
}
