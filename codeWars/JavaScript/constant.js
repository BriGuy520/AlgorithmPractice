// Given a lowercase string that has alphabetic characters only and no spaces, return the 
// highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

function solve(s){

  const regex = /[aeiou]/g;
  const constants = s.replace(regex, " ");
  let high, group = 0;

  for(let i = 0; i < constants.length; i++){

    if(constants[i] != ' '){
      group += constants.charCodeAt(i) - 96;
      if(group > high) high = group;
    } else {      
      group = 0;
    }
  }
  
  return high;
}


solve("zodiacs");