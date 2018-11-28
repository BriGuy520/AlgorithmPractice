// Regular Expressions: Specify Only the Lower Number of Matches

// Change the regex haRegex to match the word "Hazzah" only when it has four or
// more letter z's.

let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let result = haRegex.test(haStr);

// This answer is completely my own

// The answer passed all tests at freeCodeCamp.org