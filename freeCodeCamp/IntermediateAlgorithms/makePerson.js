// Intermediate Algorithm Scripting: Make a Person

// Fill in the object constructor with the following methods below:

//     getFirstName() getLastName() getFullName() 
//     setFirstName(first) setLastName(last) setFullName(firstAndLast)

// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and 
// it has to be a string.

// These methods must be the only available means of interacting with 
// the object.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  this.setFirstName = function(first){
    let newFirst = firstAndLast.split(" ")[0];
    newFirst = first;
    firstAndLast = newFirst + " " + firstAndLast.split(" ")[1];
  }

  this.setLastName = function(last){
    let newLast = firstAndLast.split(" ")[1];
    newLast = last;
    let newName = firstAndLast.split(" ")[0] + " " + newLast;
    firstAndLast = newName;
  }

  this.setFullName = function(newName){
    firstAndLast = newName;
    return firstAndLast;
  }

  this.getFullName = function() {
    return firstAndLast;
  };
  
  this.getFirstName = function(){
    return firstAndLast.split(" ")[0];
  }

  this.getLastName = function(){
    return firstAndLast.split(" ")[1];
  }
};

// This answer is completely my own.

// This passed all tests on freeCodeCamp.org
