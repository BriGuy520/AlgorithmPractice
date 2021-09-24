// The word i18n is a common abbreviation of internationalization in the developer community, used instead of 
// typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 
// or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen 
// (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the 
// last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string){

  const regex = /(\w)+|\W/g;

  const newStr = string.match(regex).map(word => {
    if(word.length > 3){
      let sub = word.length - 2;
      return word[0] + sub + word[word.length - 1];
    } else {
      return word;
    }
  });


  return newStr.join("");

}

abbreviate("hello this is a test");
abbreviate("Accessibility");
abbreviate("elephant-rides are really fun!");