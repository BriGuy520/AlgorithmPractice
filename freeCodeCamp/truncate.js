// Basic Algorithm Scripting: Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string
// length (second argument). Return the truncated string with a ... ending.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str.length > num ? str.slice(0, num) + '...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);