// Regular Expressions: Reuse Patterns Using Capture Groups

// Use capture groups in reRegex to match numbers that are repeated only three
// times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /^(\d{1,})\s?\1\s?\1$/; // Change this line
let result = reRegex.test(repeatNum);

// This answer is not completely my own 

// This answer passed all tests on freeCodeCamp.org