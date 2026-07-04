// Small helpers that replace lodash (the full library was ~70 kB minified
// and we only ever used shuffle/orderBy).

// Fisher-Yates shuffle. Returns a new array; the input is not mutated.
export function shuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
