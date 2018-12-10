// Intermediate Algorithm Scripting: Pig Latin

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English
// word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write
// your own code.

function translatePigLatin(str) {
  const regex = /[aeiou]/gi;
  
  for(let i = 0; i < str.length; i++){
    if(str[0].match(regex)){
      return str + "way";
    } else if(str[i].match(regex)){
      return str.substring(i, str.length) + str.substring(0, i) + 'ay';
    }
  }

  return str + 'ay';
}

translatePigLatin("consonant");

// This answer is completely my own.

// This answer passed all tests at freeCodeCamp.org