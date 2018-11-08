// Reverse a string

// My solution to the reverse a string problem 

// I got this problem from coderbyte.com


function reverse(str){
    return str.split('').reverse().join('');
}

console.log(reverse('hello'));
console.log(reverse('javascript'));
console.log(reverse('algorithms'));
console.log(reverse('challenge'));