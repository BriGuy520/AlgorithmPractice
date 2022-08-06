function primeFactors(n){

  let arr = [];

  while(n > 0){
    if(n % 2 === 0){
      arr.push(2);
      n = n / 2;
    }
  }

}

primeFactors(12);
primeFactors(9);
primeFactors(15);