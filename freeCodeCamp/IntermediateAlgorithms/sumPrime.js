// Intermediate Algorithm Scripting: Sum All Primes

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having 
// only two divisors, one and itself. For example, 2 is a prime number 
// because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
  
    let total = 0;
    let arr = [];
    
    for(let i = 1; i <= num; i++){
        for(let j = 1; j < i; j++){
           if(i % j === 0){
             arr.push(i); 
        }
      }
    }
      
    arr.forEach((int, idx, src) => {
        if(int !== src[idx - 1] && int !== src[idx + 1]){
            total += int;  
        }
    });
    
    return total;
  }
  
  sumPrimes(10);

  // In all honesty, I hate this answer. I guess this is my brute force
  // approach solution to this one.

  // This answer is completeley my own.

  // This solution passed all tests on freeCodeCamp.org