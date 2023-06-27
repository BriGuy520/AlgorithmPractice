"use strict";
function rentalCarCost(d) {
    // Your solution here
    let total = d * 40;
    if (d >= 7) {
        total = total - 50;
    }
    else if (d >= 3) {
        total = total - 20;
    }
    console.log(total);
    return total;
}
rentalCarCost(3); // 100
rentalCarCost(2); // 80
rentalCarCost(10); // 350
