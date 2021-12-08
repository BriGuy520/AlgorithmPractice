// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

function prefill(n, v){
  let count = 0;
  let newArr = [];
  
  if(!Number.parseInt(n) || n < 0 || n !== Math.floor(n)){
    if(n !== 0){
      throw new TypeError(`${n} is invalid`);
    }
  } else if(n === 0){
    return [];
  } else {
    while(count < n){
      newArr.push(v);
      count++;
    }
  }
   return newArr;
}