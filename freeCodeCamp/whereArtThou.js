//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
//
//Remember to use Read-Search-Ask if you get stuck. Write your own code.




function whatIsInAName(collection, source) {
  // What's in a name?
  const key = Object.keys(source);

  // Only change code below this line
  return collection.filter(obj => {
    for(let i = 0; i < key.length; i++){
      if(!obj.hasOwnProperty(key[i]) || obj[key[i]] !== source[key[i]]){
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// I did get the correct answer with a little bit of help.

// I got stuck with this one at line 17. I was having trouble thinking of a way 
// to check the values from the source parameter against the collection values that was 
// iterated with the filter helper. 

// What I learned with this problem?

// I now have a better understanding of how to access values in an object and 
// a better understanding of how the filter helper method works.

// Lets look at line 17 inside the if-statement
//  - the first statement is checking if an individual key from the source parameter
//    is not a key in an object from the collection OR the value from the obj from 
//    the collection parameter is not equal to the value from the source parameter.
//    If any of those conditions are met, we are going to return false.
//    If any of those conditions are not met, we return true.
//    Since we are using a filter helper method, the true values will return a brand
//    new array with the objects that met all of the conditions inside of said new
//    array. 
