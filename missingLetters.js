// Intermediate Algorithm Scripting: Missing letters

// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function fearNotLetter(str) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for(let j = alphabet.indexOf(str[0]); j < alphabet.length; j++){
    if(!str.includes(alphabet[j])){
      return alphabet[j];
    }
  }
}

fearNotLetter("stvwx");

// This solution is completely my own.

// This solution passed all tests at freeCodeCamp.org
