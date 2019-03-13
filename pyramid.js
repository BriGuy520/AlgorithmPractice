// Directions

// Write a function that accepts a positive number N.
// The function should consolel log a pyramid shape
// with N levels using the # character. Make sure the 
// pyramid has spaces on both the left and right hand sides

// Examples

// pyramid(1)
//     '#'
// 
// pyramid(2)
//   '  #  '
//   ' ### ' 
//
// pyramid(3)
//  '  #  '
//  ' ### '
//  '#####'


function pyramid(num){
  
    const emptyArr = Array(Math.floor(num * 2 - 1)).fill(' ');

    for(let i = num - 1; i >= 0; i--){
        console.log(emptyArr.fill('#', i, emptyArr.length - i + 1/2).join(''));
    }
}
  
  pyramid(7);