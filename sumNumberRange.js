// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the // sum of all the numbers between them.
//
// The lowest number will not always come first.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your   // own code.

function sumAll(arr) {
  let sum = 0;

  for(let i = arr[0]; i <= arr[1]; i++){
    sum += i;
  }

  for(let j = arr[0]; j >= arr[1]; j--){
    sum += j;
  }


  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));