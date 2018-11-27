// Regular Expressions: Match All Numbers

// Use the shorthand character class \d to count how many digits are in
// movie titles. Written out numbers ("six" instead of 6) do not count.

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

// This answer is completely my own

// This answer passed all tests at freeCodeCamp.org
