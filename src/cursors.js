// Fountain-pen nib cursors, drawn as SVG and coloured from the active theme.
// switchTheme() in App.vue writes these into --cursor-normal / --cursor-pointer;
// the CSS falls back to the system cursors when the variables are unset.

const OUTLINE = '#1f1a1b';

function mix(hex, target, amount) {
    const channel = (h, i) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
    return '#' + [0, 1, 2]
        .map(i => Math.round(channel(hex, i) + (channel(target, i) - channel(hex, i)) * amount))
        .map(v => v.toString(16).padStart(2, '0'))
        .join('');
}

function nib(body, collar) {
    const shape = 'M16 2C18.8 7.5 23 12.5 23 18L21.2 25.5L10.8 25.5L9 18C9 12.5 13.2 7.5 16 2Z';
    return `<g transform='translate(-4.5 -4.5) rotate(-45 16 16)'>`
        + `<path d='${shape}' fill='#fff' stroke='#fff' stroke-width='3.4' stroke-linejoin='round'/>`
        + `<rect x='10.4' y='25.2' width='11.2' height='3.6' rx='1' fill='#fff' stroke='#fff' stroke-width='3.2'/>`
        + `<path d='${shape}' fill='${body}' stroke='${OUTLINE}' stroke-width='1.3' stroke-linejoin='round'/>`
        + `<path d='M16 3.5L16 15' stroke='${OUTLINE}' stroke-width='1.1' stroke-linecap='round'/>`
        + `<circle cx='16' cy='16.6' r='1.7' fill='${OUTLINE}'/>`
        + `<rect x='10.4' y='25.2' width='11.2' height='3.6' rx='1' fill='${collar}' stroke='${OUTLINE}' stroke-width='1.1'/>`
        + `</g>`;
}

function svg(content, accent) {
    return `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><defs>`
        + `<linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>`
        + `<stop offset='0' stop-color='${mix(accent, '#ffffff', 0.45)}'/>`
        + `<stop offset='1' stop-color='${mix(accent, '#000000', 0.12)}'/></linearGradient>`
        + `<filter id='s' x='-20%' y='-20%' width='160%' height='160%'>`
        + `<feDropShadow dx='0.6' dy='1.2' stdDeviation='0.9' flood-color='#000' flood-opacity='0.3'/></filter>`
        + `</defs>${content}</svg>`;
}

const toUrl = markup => `url("data:image/svg+xml,${markup.replace(/[#<>%]/g, encodeURIComponent)}")`;

// Returns full `cursor` values (image, hotspot, keyword fallback) for both states.
export function nibCursors(primary, secondary) {
    const sparkles = `<g stroke='${secondary}' stroke-width='1.8' stroke-linecap='round'>`
        + `<path d='M3.5 1.5L4.5 3.6'/><path d='M1 5.2L3.2 6'/><path d='M7.6 1.4L7 3.6'/></g>`;
    const normal = svg(`<g filter='url(#s)'>${nib('url(#g)', primary)}</g>`, secondary);
    const pointer = svg(
        sparkles
        + `<g transform='translate(3 3)' filter='url(#s)'>${nib('url(#g)', primary)}</g>`
        + `<circle cx='6.2' cy='6.2' r='1.6' fill='${primary}'/>`,
        secondary
    );
    return {
        normal: `${toUrl(normal)} 2 2, auto`,
        pointer: `${toUrl(pointer)} 5 5, pointer`,
    };
}
