"use strict";
exports.__esModule = true;
exports.solution = void 0;
function solution(roman) {
    var romanBase10 = 0;
    for (var i = 0; i < roman.length; i++) {
        switch (roman[i]) {
            case 'I':
                romanBase10 += 1;
                break;
            case 'V':
                romanBase10 += 5;
                break;
            case 'X':
                romanBase10 += 10;
                break;
            case 'L':
                romanBase10 += 50;
                break;
            case 'C':
                romanBase10 += 100;
                break;
            case 'D':
                romanBase10 += 500;
                break;
            case 'M':
                romanBase10 += 1000;
                break;
            default:
                romanBase10 += 0;
                break;
        }
    }
    console.log(romanBase10);
    return romanBase10;
}
exports.solution = solution;
solution("XXI");
