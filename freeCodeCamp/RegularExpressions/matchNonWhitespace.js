// Regular Expressions: Match Non-Whitespace Characters

// Change the regex countNonWhiteSpace to look for multiple non-whitespace
// characters in a string.

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

// This answer is completely my own

// This answer passed all tests at freeCodeCamp.org