function jumpingNumber(n){
  //your code here
  let strNum = n + "";
  
  if(strNum.length === 1){
    
    return "Jumping!!";
    
  } else {
    
    for(let i = 0; i < strNum.length - 1; i++){
      
      let nextNum = +strNum[i + 1];

      if(+strNum[i] + 1 != nextNum && +strNum[i] - 1 != nextNum){
        return "Not!!";
      }
    } 
    
  return "Jumping!!";
  }  
}