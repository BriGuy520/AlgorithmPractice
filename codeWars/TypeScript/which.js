function inArray(a1, a2) {
    var answer = [];
    for (var i = 0; i < a1.length; i++) {
        var regex = new RegExp("".concat(a1[i]), 'g');
        for (var j = 0; j < a2.length; j++) {
            if (a2[j].match(regex)) {
                answer.indexOf(a1[i]) === -1 ? answer.push(a1[i]) : '';
            }
        }
    }
    console.log(answer);
    return [];
}
inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']);
// ['arp', 'live', 'strong']
