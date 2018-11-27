// Regular Expressions: Match Beginning String Patterns

// Use the caret character in a regex to find "Cal" only in the beginning of the
// string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

// This answer is completely my own

// This answer passed all tests at freeCodeCamp.org
