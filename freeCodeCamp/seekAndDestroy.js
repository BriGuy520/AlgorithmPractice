//  Intermediate Algorithm Scripting: Seek and Destroy
//  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// Note
// You have to use the arguments object.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// This answer is completely my own...

function destroyer(arr, ...args) {
  let newArr = [];
  arr.forEach(function(item){
    if(args.includes(item) === false){
      newArr.push(item);
    }
  });

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// This solution passed all tests at freeCodeCamp.org 

// This is another solution I thought of which I quite like...

function destroyer(arr, ...args) {
  return arr.filter(item => {
    return args.includes(item) === false;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// This solution passed all tests at freeCodeCamp.org 