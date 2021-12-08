// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b){
  const answer = Number.parseInt(a).toFixed() * Number.parseInt(b).toFixed();
  return answer.toLocaleString().split(",").join("");
 }
 
 multiply("30", "69");