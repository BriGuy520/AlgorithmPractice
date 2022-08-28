function numPrimorial(n){
  //your code here
  let checkPrime = 2;
  let total = 1;
  
  while(n > 0){
    if(isPrime(checkPrime)){
      total *= checkPrime;
      n--;
      checkPrime++;
    } else {
      checkPrime++;
    }
  }
  
  return total;
}

function isPrime(n){
  
  for(let i = 2; i < n; i++){
    if(n % i == 0) return false;
  }
  
  return true; 
}