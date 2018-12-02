// Regular Expressions: Remove Whitespace from Start and End

// Write a regex and use the appropriate string methods to remove whitespace at
// the beginning and end of strings.

// Note:
// The .trim() method would work here, but you'll need to complete this
// challengeusing regular expressions.


let hello = "   Hello, World!  ";
let wsRegex = /\w*[^\s]\W(?=\w*)\S*(?=\s*$)/; // Change this line
let result = hello.match(wsRegex); // Change this line

// This answer is completely my own 

// This answer passed all tests at freeCodeCamp.org