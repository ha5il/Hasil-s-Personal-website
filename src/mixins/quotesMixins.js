import _ from "lodash";

const quotes = [
    {
        id: 1,
        urlSlug: 'may-be-its-mine-bad-luck-or-yours-not-to-get-me',
        quoteLines: [
            "May be its mine bad-luck",
            "Or yours not to get me",
            "But I still have hope",
            "Of being yours"
        ]
    }, {
        id: 2,
        urlSlug: 'if-you-know-that-i-am-genius-then-know-that-you',
        quoteLines: [
            "If you know that I am genius",
            "Then know that you made me genius",
            "Everyone don't accept me as genius",
            "Because they aren't genius to belief me as genius"
        ]
    }, {
        id: 3,
        urlSlug: 'life-for-me-is-just-a-result-of-experiments',
        quoteLines: [
            "Life for me is just a result of experiments being performed by far more developed creatures."
        ]
    }, {
        id: 4,
        urlSlug: 'dream-big-but-not-so-big-that-it-becomes-a-mess',
        quoteLines: [
            "Dream big!",
            "But not so big that it becomes a mess, and you may never reach reality."
        ]
    }, {
        id: 5,
        urlSlug: 'dreaming-of-getting-you-i-loosed-everything',
        quoteLines: [
            "Dreaming of getting you",
            "I loosed everything",
            "Cheerfulness of smile",
            "And all the dreams of life"
        ]
    }, {
        id: 6,
        urlSlug: 'give-me-another-chance-then-you',
        quoteLines: [
            "Give me another Chance",
            "Then,",
            "You will Get",
            "Less than I Gain..."
        ]
    }, {
        id: 7,
        urlSlug: 'when-i-was-small-i-felt-like-a-superhero',
        quoteLines: [
            "When I was small I felt like a Superhero as my father threw me up in the air.",
            "Now after reaching this success peak I unmask - Real Superhero made me Superhero!"
        ]
    }, {
        id: 8,
        urlSlug: 'congratulations-to-your-mom-and-dad',
        quoteLines: [
            "Congratulations to your mom and dad for birth of a sweet child!",
            "",
            "Sorry that I couldn't wish them when you were born."
        ]
    }, {
        id: 9,
        urlSlug: 'oh-great-i-never-recognized-sunshine',
        quoteLines: ["Oh great!", "I never recognized Sunshine shining me, within me."]
    }, {
        id: 10,
        urlSlug: 'i-will-miss-you-not-because-you-taught-me',
        quoteLines: [
            "I will miss you",
            "not because you taught me,",
            "not because you helped me on all steps of education;",
            "but only because",
            "you made me a leader to lead as an perfect Electrical Engineer."
        ]
    }, {
        id: 11,
        urlSlug: 'not-always-starting-from-a-ends-you-in-z',
        quoteLines: [
            "Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own."
        ]
    },
];

export const quotesMixins = {
    methods: {
        getAllquotes() {
            return _.shuffle(quotes.map(row => pick(row, [
                'id', 'urlSlug', 'quoteLines'
            ])));
        },
        getQuoteUrlSlug(quoteId) {
            let returnData = null;
            quotes.forEach(quote => {
                if (quote['id'] == quoteId) {
                    returnData = quote['urlSlug'];
                }
            });
            return returnData;
        },
        getRandomQuote() {
            return _.shuffle(quotes)[0];
        },
        getQuoteDetails(quoteId) {
            let returnData = null;
            quotes.forEach(quote => {
                if (quote['id'] == quoteId) {
                    returnData = quote;
                }
            });
            return returnData;
        },
        getQuotePageTitle(quoteId) {
            let returnData = '';
            quotes.forEach(quote => {
                if (quote['id'] == quoteId) {
                    quote.quoteLines.forEach(line => {
                        returnData += ' '+line;
                    })
                }
            });
            var trimmedString = returnData.substr(0, 40);
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            return "Quote -" + trimmedString + '...';
        },
        getQuotePageDescription(quoteId) {
            let returnData = null;
            quotes.forEach(quote => {
                if (quote['id'] == quoteId) {
                    returnData = '';
                    quote['quoteLines'].forEach(line => {
                            returnData += line + ' ';
                    });
                }
            });
            var trimmedString = returnData.substr(0, 158);
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            return trimmedString;
        }
    }
}

// returns only selected keys from object
function pick(obj, keys) {
    return keys.map(k => k in obj ? { [k]: obj[k] } : {}).reduce((res, o) => Object.assign(res, o), {});
}