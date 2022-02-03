// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note: the alphabet should wrap around, so Z becomes A

// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

function changer(str) { 
  // happy coding!

 let newStr = [];
  
  for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 90){

      newStr.push(String.fromCharCode(str.charCodeAt(i) + 1));

    } else if(str.charCodeAt(i) > 96 && str.charCodeAt(i) < 122){

      newStr.push(String.fromCharCode(str.charCodeAt(i) + 1));

    } else if(str.charCodeAt(i) === 122 || str.charCodeAt(i) === 90){
      newStr.push(String.fromCharCode(65));
    } else {
      newStr.push(str[i]);
    }

    if(newStr.join("").charCodeAt(i) === 97 || newStr.join("").charCodeAt(i) === 101 || newStr.join("").charCodeAt(i) === 105 || newStr.join("").charCodeAt(i) === 111 || newStr.join("").charCodeAt(i) === 117){
        newStr[i] = String.fromCharCode(str.charCodeAt(i) - 31);
    }

    if(newStr.join("").charCodeAt(i) > 64 && newStr.join("").charCodeAt(i) < 91){
      
      
      if(newStr.join("").charCodeAt(i) != 65 && newStr.join("").charCodeAt(i) != 69 && newStr.join("").charCodeAt(i) != 73 && newStr.join("").charCodeAt(i) != 79 && newStr.join("").charCodeAt(i) != 85){
        newStr[i] = String.fromCharCode(str.charCodeAt(i) + 33);
      }
    }
  }


  console.log(newStr.join(""));
  return newStr.join("");
         
}

changer("Hello World"); // Ifmmp xpsmE
changer('FsZDYzah');