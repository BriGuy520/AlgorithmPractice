// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr){
  
  let result = arr.reduce((acc, int) => {
   if(acc[int]){
   	acc[int]++;
  } else {
    acc[int] = 1;
  }
  
  return acc; 
}, {});

	for(let value in result){
    if(result[value] === 1){
      return Number.parseInt(value);
    }
  }
}

findUniq([1,1,1,2,1,1]);