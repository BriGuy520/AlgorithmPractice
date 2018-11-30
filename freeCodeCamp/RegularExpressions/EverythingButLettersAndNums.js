// Regular Expressions: Match Everything But Letters and Numbers

// Use the shorthand character class \W to count the number of non-alphanumeric
// characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// This answer is completely my own

// This answer passed all tests at freeCodeCamp.org