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

    if(newStr.join("").charCodeAt(i) > 64 && newStr.join("").charCodeAt(i) < 90){
      
      
      if(newStr.join("").charCodeAt(i) != 65 && newStr.join("").charCodeAt(i) != 69 && newStr.join("").charCodeAt(i) != 73 && newStr.join("").charCodeAt(i) != 79 && newStr.join("").charCodeAt(i) != 85){
        newStr[i] = String.fromCharCode(str.charCodeAt(i) + 33);
      }
    }
  }


  
  return newStr.join("");
         
}

changer("He;lo World"); // Ifmmp xpsmE