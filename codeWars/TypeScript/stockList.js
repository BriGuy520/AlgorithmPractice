var stockList = function (listOfArt, listOfCat) {
    // your code
    var _a, _b;
    var answer = "";
    var total = 0;
    for (var i = 0; i < listOfCat.length; i++) {
        for (var j = 0; j < listOfArt.length; j++) {
            total += listOfArt[j].indexOf(listOfCat[i]) === 0 ? parseInt((_b = (_a = listOfArt[j]) === null || _a === void 0 ? void 0 : _a.match(/\d/g)) === null || _b === void 0 ? void 0 : _b.join("")) : 0;
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
