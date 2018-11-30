// Regular Expressions: Specify Exact Number of Matches

// Change the regex timRegex to match the word "Timber" only when it has four
// letter m's.

let timStr = "Timmmmber";
let timRegex = /[^m]m{4}(?!m)/; // Change this line
let result = timRegex.test(timStr);

// [^m] matches anything that is not enclosed inside of the brackets

// (?!m) matches as long as m is not followed by an m 

// This answer is somewhat my own, but I did get some help from 
// blog post by JM-Mendez at freeCodeCamp.org

// This answer passed all tests at freeCodeCamp.org