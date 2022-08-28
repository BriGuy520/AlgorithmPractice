function minimumNumber(numbers){
  //your code here
  let sum = 0;
  let digitsFromPrime = 0;
  
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }

  while(!isPrime(sum)){
    sum++;
    digitsFromPrime++;
  }

  return digitsFromPrime;
}

function isPrime(n){
  
  if(n <= 1){
    return false;
  }
  
  for(let i = 2; i < n; i++){
    if(n % i === 0){
      return false;
    }
  }
  
  return true;
  
}

minimumNumber([50,39,49,6,17,28]);