// Regular Expressions: Match All Letters and Numbers

// Use the shorthand character class \w to count the number of alphanumeric
// characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// This answer is completely my own.

// This answer passed all tests at freeCodeCamp.org