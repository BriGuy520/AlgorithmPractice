function consecutiveDucks(num) {
  // your code here
  let total = 0;
  let startingNum = 1;
  
  for(let i = startingNum; i < num; i++){
    
    total += i;
    
    if(total === num){
      return true;
    } else if(total > num) {
      total = 0;
      i = startingNum++;
    }
  
  }
  
  return false;
}