// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3  



function highestRank(arr){
  //Your Code logic should written here
  let highVal = 0;
 	let grabKey;
  
  let occurances = arr.reduce((acc, num) => {
    if(acc[num]){
      acc[num] += 1;
    } else {
      acc[num] = 1; 
    }
    
    return acc;
  }, {});
  
 	for(let occurance in occurances){
  	if(occurances[occurance] > highVal){
      highVal = occurances[occurance];
      grabKey = occurance;
    }   
  }

  return grabKey;
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);