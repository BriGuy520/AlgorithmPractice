function findOutlier(integers){
  //your code here
  
  let even = 0;
  let oddValue = 0;
  let evenValue = 0;
  
  for(let i = 0; i < integers.length; i++){
    
    if(integers[i] % 2 != 0){
      oddValue = integers[i];
    } else {
      even++;
      evenValue = integers[i];
    }
  }
  
  if(even > 1){
    return oddValue;
  } else {
    return evenValue;
  }
}

findOutlier([2,6,8,10,3]);