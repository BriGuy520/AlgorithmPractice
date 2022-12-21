"use strict";
exports.__esModule = true;
exports.longestRepetition = void 0;
function longestRepetition(text) {
    var longest = 0;
    var character = '';
    for (var i = 0; i < text.length; i++) {
        var matches = text.match(new RegExp("^".concat(text[i], "*"), 'g')).join('');
        if (matches.length > longest) {
            longest = matches.length;
            character = text[i];
        }
        text = text.slice(matches.length, text.length);
        console.log(text);
    }
    console.log([character, longest]);
    return [character, longest];
}
exports.longestRepetition = longestRepetition;
longestRepetition('aaabbbbbccdddddeee');
