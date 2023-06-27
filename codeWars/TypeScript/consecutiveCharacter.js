"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestRepetition = void 0;
function longestRepetition(text) {
    let longest = 0;
    let character = '';
    while (text.length > 0) {
        let matches = text.match(new RegExp(`^${text[0]}*`, 'g')).join('');
        if (matches.length > longest) {
            longest = matches.length;
            character = text[0];
        }
        text = text.slice(matches.length, text.length);
    }
    return [character, longest];
}
exports.longestRepetition = longestRepetition;
longestRepetition('aaabbbbbccdddddeee');
