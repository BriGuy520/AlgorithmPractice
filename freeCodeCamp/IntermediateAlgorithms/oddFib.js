// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function sumFibs(num) {
	let arr = [];
  let total = 0;
  let answer = 0;
  
  for(let i = 0; i <= num; i++){
  	if(i <= 1){
			arr.push(i);
    } else {
	total = arr[i - 2] + arr[i - 1];
      arr.push(total);
    }
  }

  for(let int of arr){
    if(int % 2 === 1 && int <= num){
      answer += int;
    }
  }  

  return answer;     
}

sumFibs(10);

// this answer is completely my own.

// this answer passed all tests at freeCodeCamp.org