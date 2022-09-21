function maxMultiple(divisor, bound){
  //your code here
  for(let i = bound; i >= divisor; i--){
    if(i % divisor === 0){
      return i;
    }
  }
}

