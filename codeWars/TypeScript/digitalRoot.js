function digitalRoot(n) {
    var strArr = n.toString().split('');
    var answer = strArr.reduce(function (a, v) { return parseInt(a) + parseInt(v); }, 0);
    console.log(answer);
    return answer.toString().length > 1 ? digitalRoot(answer) : answer;
}
digitalRoot(19);
digitalRoot(45);
