"use strict";
function spinWords(words) {
    //TODO Have fun :)
    return words.split(' ').map(word => word.length >= 5 ? word.split("").reverse().join("") : word).join(" ");
}
