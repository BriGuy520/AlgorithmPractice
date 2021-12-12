// Given an integer n, lying in range [0; 1_000_000], calculate the number of digits in n! (factorial of n).

// Example
// For n = 0, the output should be 1 because 0! = 1 has 1 digit;
// For n = 4, the output should be 2 because 4! = 24 has 2 digits;
// For n = 10, the output should be 7 because 10! = 3628800 has 7 digits.

function factDigits(n) {
  
  let factor = 1n;

  for(let i = BigInt(n); i >= 1; i--){
    factor *= i;
  }
  const convert = new String(factor).length;

  console.log(convert);
}

factDigits(977);