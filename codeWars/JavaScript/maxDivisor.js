function maxMultiple(divisor, bound){
  //your code here
  let high = 0;
  
  for(let i = 1; i <= bound; i++){
    if(i % divisor === 0){
        high = i;
    }
  }
  
  return high;
}

