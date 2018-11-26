// Basic Algorithm Scripting: Title Case a Sentence
//
// Return the provided string with the first letter of each word capitalized. Make sure
// the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like
// "the" and "of".

//Remember to use Read-Search-Ask if you get stuck. Write your own code.




function titleCase(str) {
  const lower = str.toLowerCase();
  let arr = lower.split('');

  for(let i = 0; i < arr.length; i++){
    if(i === 0 || arr[i - 1] === ' '){
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join('');
}

titleCase("I'm a little tea pot");

// This answer is completely my own
// This solution passed all tests at freeCodeCamp.org