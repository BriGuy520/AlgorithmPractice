// Your task is to write a higher order function for chaining together a list of unary functions. 
// In other words, it should return a function that does a left fold on the given functions.

// chained([a,b,c,d])(input)
// Should yield the same result as

// d(c(b(a(input))))


function chained(functions) {
  //FIXME
  return function(x){
  	let accFunc = functions.reduce((acc, func) => {
      	x = func(x);
      	return x;
    }, 0);
    
    return accFunc;
  }
}


function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }