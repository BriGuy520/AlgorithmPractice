var stockList = function (listOfArt, listOfCat) {
    // your code
    var answer = "";
    var total = 0;
    for (var i = 0; i < listOfCat.length; i++) {
        for (var j = 0; j < listOfArt.length; j++) {
            if (listOfArt[j].indexOf(listOfCat[i]) === 0) {
                total += listOfArt[j].match(/\d/g) !== null ? parseInt(listOfArt[j].match(/\d/g).join("")) : 0;
            }
        }
        answer += i + 1 === listOfCat.length ? "(".concat(listOfCat[i], ": ").concat(total, ")") : "(".concat(listOfCat[i], ": ").concat(total, ") - ");
        total = 0;
    }
    console.log(answer);
    return answer;
};
var b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
var c = ["A", "B", "C", "D"];
stockList(b, c);
