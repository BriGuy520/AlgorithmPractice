// Find the first character that repeats in a string and return that character. If there is no such character, return undefined/null/None/Nothing, etc. (depending on your language). Your function should be case-sensitive (a is not equivalent to A).

// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

// Another example:

// In 'translator' you should return 't', not 'a'.

function firstDup(string) {
   for(let i = 0; i < string.length; i++) {
     for(let j = i + 1; j < string.length; j++) {
       if (string[i] === string[j]) {
         return string[i];
       }
     }
   }
  
  return undefined;
}