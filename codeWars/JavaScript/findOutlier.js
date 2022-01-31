function findOutlier(integers){
  //your code here
  
  let odd = 0;
  let even = 0;
  let oddValue = 0;
  let evenValue = 0;
  
  for(let i = 0; i < integers.length; i++){
    
    if(integers[i] % 2 != 0){
      odd++;
      oddValue = integers[i];
    } else {
      even++;
      evenValue = integers[i];
    }
  }
  
  if(even > 1){
    return oddValue;
  } else if(odd > 1) {
    return evenValue;
  }
}

findOutlier([2,6,8,10,3]);