// Regular Expressions: Specify Upper and Lower Number of Matches

// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

// This answer is not my own. I had a little help.

// I didn't think to add the \s flag to exclude the whitespace

// This answer passed all tests at freeCodeCamp.org
