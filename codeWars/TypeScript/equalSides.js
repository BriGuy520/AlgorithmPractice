"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEvenIndex = void 0;
function findEvenIndex(arr) {
    var i = 0;
    var j = arr.length - 1;
    var leftTotal = 0;
    var rightTotal = 0;
    //Code goes here!
    while (i < arr.length - 1 / 2) {
        leftTotal += arr[i];
        for (var j_1 = arr.length - 1; j_1 > i + 1; j_1--) {
            rightTotal += arr[j_1];
        }
        if (leftTotal === rightTotal) {
            return i + 1;
        }
        else {
            rightTotal = 0;
        }
        i++;
    }
    return -1;
}
exports.findEvenIndex = findEvenIndex;
