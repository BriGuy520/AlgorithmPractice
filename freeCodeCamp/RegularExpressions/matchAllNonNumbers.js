// Regular Expressions: Match All Non-Numbers

// Use the shorthand character class for non-digits \D to count how many 
// non-digits are in movie titles.

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;

// This answer is completely my own

// This answer passed all tests at freeCodeCamp.org

