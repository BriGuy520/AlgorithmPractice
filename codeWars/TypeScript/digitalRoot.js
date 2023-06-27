"use strict";
function digitalRoot(n) {
    let strArr = n.toString().split('');
    let answer = strArr.reduce((a, v) => parseInt(a) + parseInt(v), 0);
    return answer.toString().length > 1 ? digitalRoot(answer) : answer;
}
digitalRoot(19);
digitalRoot(45);
