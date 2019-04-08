
// Given an array of integers, find the first missing positive integer 
// in linear time and constant space. In other words, find the lowest 
// positive integer that does not exist in the array. The array can contain 
// duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. 
// The input [1, 2, 0] should give 3.

function lowestPositiveInt(arr){
  const sorted = arr.sort();
	for(let i = 0; i < sorted.length; i++){
   	if(sorted[i] > 0){
      if(sorted[i + 1] - sorted[i] !== 1){
       	return sorted[i + 1] - 1; 
      } else {
        return sorted[sorted.length - 1] + 1;
      }
    } 
  }
}

lowestPositiveInt([3, 4, -1, 1, 2, 5, 6]);