// Intermediate Algorithm Scripting: Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

// Remember to use Read-Search-Ask if you get stuck.
// Try to pair program. Write your own code.

function convertHTML(str) {
  // &colon;&rpar;
  const arr = str.split('');
  arr.forEach((char, idx) => {
    if(char === '&'){
      arr.splice(idx, 1, '&amp;');
    } else if(char === '"'){
      arr.splice(idx, 1, '&quot;');
    } else if(char === '<'){
      arr.splice(idx, 1, '&lt;');
    } else if(char === '>'){
      arr.splice(idx, 1, '&gt;');
    } else if(char === '\''){
      arr.splice(idx, 1, '&apos;');
    } else {
     	return arr.join('');
    }
  });

  return arr.join('');
}

convertHTML("<>");

// This answer is completely my own. I really hate this solution though.

// this solution passed all tests at freeCodeCamp.org
