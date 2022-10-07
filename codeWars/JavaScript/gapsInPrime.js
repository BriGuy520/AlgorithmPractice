function gap(g, m, n) {
  // your code

  let primes = [];

  for(let i = m; i <= n; i++){
    if(isPrime(i)){
      primes.push(i);
    }

    if(primes.length >= 2 && primes[primes.length - 1] - primes[primes.length - 2] === g){
        return Array(primes[primes.length - 2], primes[primes.length - 1])
    }
  }
  return null;
}

function isPrime(n){

 for(let j = 2; j < n; j++){

    if(n % j == 0){
      return false;
    }
 }

  return true;

}