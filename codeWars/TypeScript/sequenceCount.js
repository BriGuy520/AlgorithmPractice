function squareDigitsSequence(a) {
    var sequence = [];
    var current = a;
    while (sequence.indexOf(current) === -1) {
        sequence.push(current);
        var splitCurrent = current.toString().split('');
        current = splitCurrent.reduce(function (acc, val) { return (Math.pow(parseInt(val), 2)) + acc; }, 0);
    }
    console.log(sequence.length);
    return sequence.length; // your code here
}
squareDigitsSequence(16); // 9
squareDigitsSequence(103); // 4
squareDigitsSequence(1); // 1
