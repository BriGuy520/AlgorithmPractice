// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.

function isPangram(string){
  const sentence = string.toLowerCase();
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  let object = {};

  for(let i = 0; i < alphabet.length; i++){
    let regex = new RegExp(alphabet[i], 'g');
    
    if(sentence.match(regex) != null){
      object[alphabet[i]] = 1;
    }
  }

  if(Object.keys(object).length === 26){
    return true;
  } else {
    return false;
  }

}

isPangram("Cwm fjord bank glyphs vext quiz");


