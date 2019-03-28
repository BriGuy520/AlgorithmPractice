
// Given an array of integers, return a new array 
// such that each element at index i of the new array 
// is the product of all the numbers in the original array 
// except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

function productArrMinusIdx(arr){
  let newArr = [];
  let sum = 1;
  
	for(let i = 0; i < arr.length; i++){
  	for(let j = 0; j < arr.length; j++){
    	  if(j !== i){
          sum *= arr[j];
        }
    }
  	newArr.push(sum);
    sum = 1;
  }
	return newArr;
}

productArrMinusIdx([1,2,3,4,5]);

// This solution is completely my own.

// This solution will pass all tests.