function accum(s) {
	// your code
  let newStr = '';
  
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < i + 1; j++){
      if(j == 0){
        newStr += s[i].toUpperCase();
      } else {
        newStr += s[i].toLowerCase();
      }
    }
    if(i < s.length - 1) newStr += "-";
  }
  
  return newStr;
}