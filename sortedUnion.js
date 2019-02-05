// Intermediate Algorithm Scripting: Sorted Union

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
// Check the assertion tests for examples.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function uniteUnique(...arr) {
  let newArr = [];
  return newArr.concat(...arr).reduce((acc, value) => {
   	 if(newArr.indexOf(value) === -1){
      newArr.push(value);
     }
    return newArr;
  }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// This solution is completely my own. I must admit, I don't like it and I will try to improve it.

// This solution passed all tests at freeCodeCamp.org
