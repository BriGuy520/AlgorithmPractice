// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  
  let newArr = [];
  
  let countLetters = word.split("").reduce((acc, letter) => {
    if(acc[letter]){
      acc[letter] += 1;
    } else {
      acc[letter] = 1;
    }   
    return acc
  }, {});
  
 for(let char of word){
  if(countLetters[char] > 1){
    newArr.push(")");
  } else {
    newArr.push("(");
  }
 }
 
  return newArr.join("");
   
}



duplicateEncode("recede");