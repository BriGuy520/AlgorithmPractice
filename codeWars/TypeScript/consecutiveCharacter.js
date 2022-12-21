"use strict";
exports.__esModule = true;
exports.longestRepetition = void 0;
function longestRepetition(text) {
    var longest = 0;
    var character = '';
    while (text.length > 0) {
        var matches = text.match(new RegExp("^".concat(text[0], "*"), 'g')).join('');
        if (matches.length > longest) {
            longest = matches.length;
            character = text[0];
        }
        text = text.slice(matches.length, text.length);
    }
    console.log([character, longest]);
    return [character, longest];
}
exports.longestRepetition = longestRepetition;
longestRepetition('aaabbbbbccdddddeee');
