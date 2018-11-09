// Factorials

// Produce a function that takes in a number as a parameter and returns
// the sum of all of the numbers using recursion. 

// Example 

// factorial(5)  5 x 4 x 3 x 2 x 1 = 120

function factorial(num){
    if(num <= 1){
        return 1;
    } else{
        return num * factorial(num - 1);
    }
}

// Full disclosure: I have seen this problem before from the Coding Dojo channel 
// on YouTube 

// I completed this problem on coderbyte.com

// How does this work?

// We first check to see if the number passed in is equal to or less than 1.
// We need to do this because if it is less than or equal to 1, the recursive
// function in the else statement will return 0 and in turn result in any number
// passed in to the function to return 0.

// The else statement is where the real fun happens. We are returning the passed 
// in number multiplied by the factorial function which is invoked again with 
// the number passed in to that invoked function - 1.

// This process is repeated until we reach 1 and the sum is returned.

