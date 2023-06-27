"use strict";
function inArray(a1, a2) {
    return Array.from(new Set(a1)).filter(val => a2.join(" ").includes(val));
}
inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']);
// ['arp', 'live', 'strong']
