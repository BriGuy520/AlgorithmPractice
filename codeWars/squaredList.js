function squaredList(m,n){
  let total = 0;
  let idx = 0;
  let arr = [];
  let inner = [];

  for(let i = m; i <= n; i++){
    for(let j = 1; j <= n; j++){
      if(i % j === 0){
        total += j * j;   
      }
    }
    if(Math.pow(total, 1/2) % 1 === 0){
    	arr[idx] = [i, total];
      idx++;
  	}
    
    total = 0;
  }
  
 return arr; 
}

squaredList(42, 250);

// Other peoples solutions

function listSquared (m, n) {
  var matches = [];

  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    var ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      matches.push([i, sum]);
    }
  }

  return matches;
}

function getDivisors (n) {
  var divisors = [];

  for (var i = 1; i <= n / 2; ++i) {
    if (n % i) {
      continue;
    }

    divisors.push(i);
  }

  return divisors.concat([n]);
}


function listSquared(m, n) {
  var arr = [];
  for (var i = m; i <= n; i++){
    var temp = 0;
    for (var j = 1; j <= i; j++) {
      if ( i % j == 0) temp += j*j;  
    };
    if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
  };
  return arr;
}


const cache = new Map();
const square = x => x * x;
const sum = (x, y) => x + y
const isSquareDivisor = (x) => Math.sqrt(x) % 1 === 0;

const findDivisors = n => {
  if (cache.has(n)) return cache.get(n);
  
  const divisors = n === 1 ? [1] : [1, n];
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0)
      divisors.push(i);
  }
  
  cache.set(n, divisors);

  return divisors;
}

function listSquared(m, n) {
  const results = [];
  for (let i=m; i <=n; i++) {
    const divisors = findDivisors(i)
    const squared = divisors.map(square)
    const summed = squared.reduce(sum, 0)
    if (isSquareDivisor(summed)) {
      results.push([i, summed])
    }
  }
  return results;
}


function listSquared(m,n){
  let chamber = {};
  function wuTang(x){
    let i = 1, odb = [], meth;
    while (i <= x){!(x % i) ? (odb.push(i),i++) : i++}
    meth = odb.reduce((a,e) => (chamber[e] ? chamber[e] : (chamber[e] = e * e, chamber[e])) + a,0);
    return !(Math.sqrt(meth) % 1) ? [--i,meth] : null;
  }
  return Array.from({length:(n - m)},(e,i) => wuTang(i + m)).filter(e => e);
}

function listSquared(m, n) {
  let answer = [];
  for(let i=m; i<=n; i++){                              //loop through each digit m --> n
    let squaredArray = [];
    for (let j=1; j<=i; j++){
      if (i % j === 0){                                 //find each digit's divisors
        squaredArray.push(Math.pow(j,2));               //square them and pop them in an array
      }
    }
    
   let squaredSum = squaredArray.reduce((a,b) => a+b);  //reduce that array
   
   if (Number.isInteger(Math.sqrt(squaredSum))){        //check if the square root of that reduction is an integer
     answer.push(Array.of(i, squaredSum));              //push it along with the original number as an Array
   }
}
return answer;                                          //return it like you bought it from Bed, Bath, and Beyond
}

const getSum = n => {
  var res = [],
      i = 1;
  for( ; i <= n; i++ ) {
    if(n % i === 0)res.push(i);
  }
  return res.reduce((s, v) => s + v * v, 0);
}
function listSquared(m, n) {
    var res = [], store, num;
    store = listSquared.cache = listSquared.cache || {};
    for( ; m <= n; m++ ) {
      if(store[m])res.push([m, store[m]])
      else {
        num = getSum(m);
        if(Math.sqrt(num) % 1 === 0){
          store[m] = num;
          res.push([m,num]);
        }
      }
    }
    return res
}
squaredList(42, 250);
