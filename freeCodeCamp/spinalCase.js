
// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function spinalCase(str) {
//Split the string at one of the following conditions 
        //a whitespace character [\s] is encountered
        //underscore character [_] is encountered
        //or by an uppercase letter [(?=[A-Z])]
//Join the array using a hyphen (-)
//Lowercase the whole resulting string 

   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase(); 

};


spinalCase('This Is Spinal Tap');

// This solution passed all tests at freeCodeCamp.org

// Definitely got help from StackOverflow.com.
// Here is a link to where I found this solution: https://stackoverflow.com/questions/36658624/how-do-i-convert-a-string-to-spinal-case-in-javasscript

// I am the first to admit that regular expressions are something I need to get better at. 

// Where did I get stuck?

// I was originally looking to use the replace method in order to replace all of the non-alphanumeric characters in the string with a string with '-' in between. Then I used the toLowerCase 
// method to change all of the letters to lowercase. I got close in some of my solutions, but was still failing a few of the tests. The reason I was failing the tests are obvious. 
// I didn't know what correct combination of regex to use. 

// In my solution I got fixated on using the \W to match non-word characters and thought this would do the trick to get rid of things like underscores. From the solution I have above, 
// it was not needed. 

// How to get better with regular expressions?

// Read the documentation on MDN thoroughly until it makes sense to me and practice, practice, practice with each character. Also, redo the Regular Expressions section on freeCodeCamp.org

