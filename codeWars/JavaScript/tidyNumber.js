function tidyNumber(n){
  //your code here
  let numStr = n +"";
  
  for(let i = 0; i < numStr.length; i++){
    if(numStr[i] > numStr[i + 1]){
      return false;
    }
  }
  
  return true;
} 