import _ from "lodash";

const poems = [
    {
        id: 1,
        urlSlug: 'here-i-am-a-cut-above-you-all',
        name: 'It\'s Me',
        poemLines: [
            'Here I am',
            'A cut above you all',
            'Silent as a grave',
            'In favour of your death',
            '',
            'Lethal is my pen',
            'Perfect would be again',
            'A fortune is with me',
            'Unbeatable this shall be',
            '',
            'Dare you come near',
            'Yell you out there',
            'And who is this me',
            'Links the first letters to me'
        ]
    },
];

export const poemsMixins = {
    methods: {
        getAllpoems() {
            return _.shuffle(poems.map(row => pick(row, [
                'id', 'urlSlug', 'name', 'poemLines'
            ])));
        },
        getPoemUrlSlug(poemId) {
            let returnData = null;
            poems.forEach(poem => {
                if (poem['id'] == poemId) {
                    returnData = poem['urlSlug'];
                }
            });
            return returnData;
        },
        getPoemDetails(poemId) {
            let returnData = null;
            poems.forEach(poem => {
                if (poem['id'] == poemId) {
                    returnData = poem;
                }
            });
            return returnData;
        },
        getPoemPageTitle(poemId) {
            let returnData = null;
            poems.forEach(poem => {
                if (poem['id'] == poemId) {
                    returnData = poem['poemLines'][0];
                }
            });
            var trimmedString = returnData.substr(0, 20);
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            return "Poem - " + trimmedString + '... | Hasil';
        },
        getPoemPageDescription(poemId) {
            let returnData = null;
            poems.forEach(poem => {
                if (poem['id'] == poemId) {
                    returnData = '';
                    poem['poemLines'].forEach(line => {
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