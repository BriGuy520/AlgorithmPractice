"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(roman) {
    let romanBase10 = 0;
    for (let i = 0; i < roman.length; i++) {
        switch (roman[i]) {
            case 'I':
                romanBase10 += 1;
                break;
            case 'V':
                romanBase10 += roman[i - 1] === "I" ? 3 : 5;
                break;
            case 'X':
                romanBase10 += roman[i - 1] === "I" ? 8 : 10;
                break;
            case 'L':
                romanBase10 += roman[i - 1] === "I" ? 48 : 50;
                break;
            case 'C':
                romanBase10 += roman[i - 1] === "I" ? 98 : 100;
                break;
            case 'D':
                romanBase10 += roman[i - 1] === "I" ? 498 : 500;
                break;
            case 'M':
                romanBase10 += roman[i - 1] === "I" ? 998 : 1000;
                break;
            default:
                romanBase10 += 0;
                break;
        }
    }
    return romanBase10;
}
exports.solution = solution;
solution("XXI");
solution("MDCLXVI");
solution("MMVIII");
solution("IV");
solution("MXIX"); // 1019
solution("CM");
