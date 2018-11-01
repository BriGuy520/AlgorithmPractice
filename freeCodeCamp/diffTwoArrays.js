// Intermediate Algorithm Scripting: Diff Two Arrays
//
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Note
// You can return the array with its elements in any order.

// This is entirely my own solution...

function diffArray(arr1, arr2) {

  let newArr1 = arr2.filter(value => arr1.indexOf(value) === -1);
  let newArr2 = arr1.filter(value => arr2.indexOf(value) === -1);

  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

