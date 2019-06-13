
// This problem was asked by Apple.

// Suppose you have a multiplication table that is N by N. That is, 
// a 2D array where the value at the i-th row and j-th column is 
// (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).

// Given integers N and X, write a function that returns the number 
// of times X appears as a value in an N by N multiplication table.

// For example, given N = 6 and X = 12, you should return 4, since 
// the multiplication table looks like this:


const N = 6;
const X = 12;

let arr = [];

for(let i = 1; i <= N; i++){
  for(let j = 1; j <= N; j++){
   	outer.push(i * j); 
  }
}

function findXs(){
  
  let count = 0;
  
  outer.forEach(int => {
    if(int === X){
      count++;
    }
  });

  return count;
}

findXs(); // 4

// This code is entirely my own.