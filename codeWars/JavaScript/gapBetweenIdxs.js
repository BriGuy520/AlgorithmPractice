// Summary: Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that 
// data[i] <= data[j]

// Long Description:

// The largestDifference takes an array of numbers. That array is not sorted. Do not sort it or change the order of the elements in 
// any way, or their values.

// Consider all of the pairs of numbers in the array where the first one is less than or equal to the second one.

// From these, find a pair where their positions in the array are farthest apart.

// Return the difference between the indexes of the two array elements in this pair.

// (largestDifference([9,4,1,10,3,4,0,-1,-2]) == 4); data[1] <= data[5], so 5 - 1 = 4

var largestDifference = function(data) {
  // TODO: Program solution
  let i, j;
  let largestGap = 0;


  for(i = 0; i < data.length; i++){
    for(j = 0; j < data.length; j++){
      if(data[i] <= data[j]){
        if(j - i > largestGap){
          largestGap = j - i;
        }
      }
    }
  }

  return largestGap;

};


largestDifference([9,4,1,10,3,4,0,-1,-2])