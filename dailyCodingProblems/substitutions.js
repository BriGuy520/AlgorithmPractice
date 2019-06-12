// The edit distance between two strings refers to the minimum number 
// of character insertions, deletions, and substitutions required to 
// change one string to the other. For example, the edit distance between 
// “kitten” and “sitting” is three: substitute the “k” for “s”, substitute 
// the “e” for “i”, and append a “g”.

const word1 = 'kitten';
const word2 = 'sitting';

let count = 0;

for(let i = 0; i <= word1.length; i++){
	for(let j = 0; j <= word2.length; j++){
  	if(word1[i] !== word2[j] && i === j){
    	count++;  
    }
  }
}

count; // 3

// This code is entirely my own.