// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a:number,b:number):string {
  let decimal: number = a + b;
  let quotient: number = decimal;
  let remainder: number;
  let binary: number[] = [];
  
  if (quotient === 0) {
    return '0';
  }
  
  while (quotient > 0) {
    remainder = quotient / 2;
    quotient = Math.floor(remainder);
    
    if (Number.isInteger(remainder)) {
      binary.push(0);
    } else {
      binary.push(1);
    }
  }
  
  return binary.map((_, i) => binary[(binary.length - 1) - i]).join('');
}