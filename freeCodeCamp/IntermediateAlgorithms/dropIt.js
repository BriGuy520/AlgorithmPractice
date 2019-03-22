// Intermediate Algorithm Scripting: Drop it

// Given the array arr, iterate through and remove each element
// starting from the first element (the 0 index) until the 
// function func returns true when the iterated element is passed 
// through it.

// Then return the rest of the array once the condition is 
// satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
    // Drop them elements.
    const copy = arr.map(func);
    let slicedArr = [];
    
      const result = copy.find((bool, idx) => {
        if(bool){
          slicedArr = arr.slice(idx);
      } else {
           return null; 
      }
      return slicedArr;
    });
  
    return slicedArr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });

  // This solution is completely my own.

  // This solution has passed all tests on freeCodeCamp.org