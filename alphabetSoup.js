//Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

// I got this problem from coderbyte.com

// This answer is completely my own

function AlphabetSoup(str) { 

  // code goes here  
  let arr = str.split('');
  
  arr.sort();
  return arr.join(''); 
}

AlphabetSoup('coderbyte');