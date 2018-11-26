// Regular Expressions: Ignore Case While Matching

// Write a regex fccRegex to match "freeCodeCamp", no matter its case. 
// Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

// This answer is completely my own

// This passed all tests at freeCodeCamp.org


