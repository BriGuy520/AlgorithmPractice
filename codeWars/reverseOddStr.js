// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.


function reverse(str){
  //WRITE SOME MAGIC
  let oddStrReverse = str.split(" ").reduce((acc, word, idx) => {
    if(idx % 2 !== 0){
     let reversedWord = word.split("").reverse().join("");
     acc.push(reversedWord);
    } else {
     	acc.push(word); 
    }
    
    return acc;
  }, []);
  
  return oddStrReverse.join(" ");
}

reverse("Reverse this string, please!");