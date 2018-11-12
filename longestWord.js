//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
//
//Use the Parameter Testing feature in the box below to test your code with different arguments


// I got this problem from coderbyte.com and passed all tests.

// This answer is completely my own

function LongestWord(sen) { 

  // code goes here  
  let arr = sen.split(/\W/);
  let longest = '';
  
  for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longest.length){
          longest = arr[i];
      }
  } 
    return longest;  
}

LongestWord("fun&!! time");