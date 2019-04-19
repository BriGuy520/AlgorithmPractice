// Intermediate Algorithm Scripting: Everything Be True

// Check if the predicate (second argument) is truthy on all elements of a collection 
// (first argument).

// In other words, you are given an array collection of objects. The predicate pre will 
// be an object property and you need to return true if its value is truthy. Otherwise, 
// return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a 
// Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function truthCheck(collection, pre) {
  // Is everyone being true?
  let count = 0;
  collection.forEach(obj => {
    Object.keys(obj).forEach(key => {
      Object.values(obj).forEach(value => {
        if(key === pre && value){
          count++;
          console.log(count)
          console.log(collection.length)
        }
      });
    });
  });

  if(count === collection.length){
    return true;
  } else {
    return false;
  }
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");

// This is what I have so far.
// This passes all tests except two.
