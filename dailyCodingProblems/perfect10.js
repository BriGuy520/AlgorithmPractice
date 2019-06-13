// This problem was asked by Microsoft.

// A number is considered perfect if its digits sum up to 
// exactly 10.

// Given a positive integer n, return the n-th perfect number.

// For example, given 1, you should return 19. Given 2, you 
// should return 28.

const n = 3;

let perfect = 10 - n;

let value = 0;

function checkPerfect(){

  let perfectArr = perfect.toString().split('');
  
  perfectArr.forEach((int, idx, arr) => {
    if(arr[idx + 1] !== undefined){
      value = Number(arr[idx]) + Number(arr[idx + 1]);
    }
    
    if(value !== 10){
      perfect += 10;
      value = 0;
      checkPerfect();
    }    
  });
  
  return perfect;
}

checkPerfect(); // 28