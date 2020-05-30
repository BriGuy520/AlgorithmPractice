// Write a function, persistence, that takes in a positive parameter num and returns 
// its multiplicative persistence, which is the number of times you must multiply the 
// digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(n){
  let total = 1;
  let count = 0;
  let temp;
  let numToStr = n.toString().split("");
  
  if(n <= 24 && n >= 10 || n <= 33 && n >= 30) {
    count++; 
    return count;
  }
  
  if(n < 10){
  	return count; 
  }

  function callLoop(numStr){
    for(let int of numStr){
      if(Number(int) === 0){
      	count++;
        return count;
      } else {
      	total *= Number(int); 
      }
    }
    
    if(total >= 10){
      count++;
      temp = total.toString().split("");
      total = 1;
      return callLoop(temp);
    } else {
      count++;
      return count;
    }
  } 
  
	return callLoop(numToStr);
}

persistence(511);