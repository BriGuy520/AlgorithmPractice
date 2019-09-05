// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8


function rowSumOddNumbers(n) {
	// TODO
  let x;
  
  let lastNumInRow = n <= 1 ?  1 : (n * n) + (n - 1);
  
  for(let i = 0; i < n; i++){
     if(i === 0){
       x = lastNumInRow;
      } else {
        x += lastNumInRow - 2;
        lastNumInRow = lastNumInRow - 2;
      }  
  }
 
  return x;
}