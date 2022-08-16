function disariumNumber(n){
  //your code here
  let numStr = n + ""
  let isDisarium = 0;
  
  for(let i = 0; i < numStr.length; i++){
    isDisarium += Math.pow(+numStr[i], (i + 1));
  }
  
  console.log(isDisarium + " " + n);
  
  return isDisarium === n ? "Disarium !!" : "Not !!";
}