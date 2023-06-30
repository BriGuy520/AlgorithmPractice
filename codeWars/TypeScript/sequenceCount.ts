function squareDigitsSequence(a: number): number {

  let sequence: number[] = [];
  let current: number = a;
  
  while(sequence.indexOf(current) === -1){

    sequence.push(current);

    let splitCurrent: string[] = current.toString().split('');

    current = splitCurrent.reduce((acc, val) => (Math.pow(parseInt(val), 2)) + acc, 0);

  }

  return sequence.length + 1; // your code here
}

squareDigitsSequence(16); // 9
squareDigitsSequence(103); // 4
squareDigitsSequence(1); // 1
