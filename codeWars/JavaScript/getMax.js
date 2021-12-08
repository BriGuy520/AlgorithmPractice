// Task
// Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

// Notes
// Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive !alt !alt

// Digit Duplications could occur , So also consider it when forming the Largest !alt

// Input >> Output Examples:
// maxNumber (213) ==> return (321)

function maxNumber(n){
  //your code here
  let getMax = n.toString().split("").sort((a, b) => b - a).join("");
  
  return Number.parseInt(getMax);
}