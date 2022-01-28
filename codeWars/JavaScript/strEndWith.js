// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
  // TODO: complete
  if(str.slice(str.length - ending.length, str.length) === ending){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

solution('abcde', 'cde');
solution('abcde', 'abc');