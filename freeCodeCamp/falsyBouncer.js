// Basic Algorithm Scripting: Falsy Bouncer

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.



function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  let newArr = [];

  arr.forEach(value => {
    if(!!value === true){
      newArr.push(value);
    }
  });

  return newArr;
}

bouncer([7, "ate", "", false, 9]);

// This solution is completely my own. 

// This solution passed all tests on freeCodeCamp.org