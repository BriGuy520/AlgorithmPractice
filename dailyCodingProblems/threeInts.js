// This problem was asked by Facebook.

// Given a list of integers, return the largest product 
// that can be made by multiplying any three integers.

// For example, if the list is [-10, -10, 5, 2], we should 
// return 500, since that's -10 * -10 * 5.

let intArr = [-10, -10, -5, 20];

let value = 1;
let skipIdx = 0;
let hiValue = 0;

function callLoop(){
  for(let i = 0; i < intArr.length; i++){
  	if(i !== skipIdx){
      value *= intArr[i];
    }
  }
  
  if(value > hiValue){
    hiValue = value;
  }
  
  if(skipIdx !== intArr.length - 1){
    skipIdx++;
    value = 1;
    callLoop();
  }
  
  return hiValue;
  
}

callLoop();

// This code is completely my own
