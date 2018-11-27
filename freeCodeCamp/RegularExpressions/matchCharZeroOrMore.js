// Regular Expressions: Match Characters that Occur Zero or More Times

// Create a regex chewieRegex that uses the * character to match all the upper 
// and lower"a" characters in chewieQuote. Your regex does not need flags, and 
// it should not match any of the other quotes.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);


// This answer is completely my own.

// This answer passed all tests at freeCodeCamp.org