// JavaScript Algorithms and Data Structures Projects: Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, 
// also known as a shift cipher. In a shift cipher the meanings of the letters 
// are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are 
// shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a 
// decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character 
// (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  
  const str2Arr = str.split('');
  
  const result = str2Arr.map(char => String.charCodeAt(char)).map(code => {
  	return (code !== 32 ? String.fromCodePoint(code - 13) : String.fromCodePoint(code));
  }).map(check => {
    if(Number(check)){
     	let newCode = String.charCodeAt(check) + 26; 
      return String.fromCodePoint(newCode);
    } 
    return check;
  }).join('');
  
  return result
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// This solution only passed the first test
// This code is completely my own. 

// Will work on this in the near future.