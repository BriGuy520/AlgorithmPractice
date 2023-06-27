"use strict";
const stockList = (listOfArt, listOfCat) => {
    // your code
    let answer = "";
    let total = 0;
    let stock = false;
    for (let i = 0; i < listOfCat.length; i++) {
        for (let j = 0; j < listOfArt.length; j++) {
            total += listOfArt[j].indexOf(listOfCat[i]) === 0 ? parseInt(listOfArt[j].match(/\d/g).join("")) : 0;
        }
        answer += i + 1 === listOfCat.length ? `(${listOfCat[i]} : ${total})` : `(${listOfCat[i]} : ${total}) - `;
        if (total > 0)
            stock = true;
        total = 0;
    }
    return stock ? answer : '';
};
const b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["A", "B", "C", "D"];
stockList(b, c);
