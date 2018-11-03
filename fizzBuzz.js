// This is my solution for the classic fizzBuzz example

// Print 'fizz' for all numbers divisible by 3, 'Buzz' for all numbers divisible
// by 5 and 'fizzBuzz' for all numbers divisible by 3 and 5. Print numbers for 
// all others. Start at 1.

function fizzBuzz(num){
    for(var i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzBuzz');
        } else if(i % 5 === 0){
            console.log('Buzz');
        } else if(i % 3 === 0){
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}


fizzBuzz(100);