// Given a list of numbers and a number k, 
// return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, 
// return true since 10 + 7 is 17.

// This is my brute force solution. The time complexity is O(n^2)

function addUp(arr, num){
  for(let i = 0; i < arr.length; i++){
     for(let j = 0; j < arr.length; j++){
        if(arr[i] + arr[j] === num){
         return true;
       }
     }
  }
 return false;
}

addUp([10, 15, 3, 7], 17);


// Bonus: Can you do this in one pass?