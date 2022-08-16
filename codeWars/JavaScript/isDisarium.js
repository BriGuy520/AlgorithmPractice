function disariumNumber(n){
  //your code here
  let numStr = n + ""
  let isDisarium = numStr.split("").reduce((a, v, i) => a += Math.pow(+v, i + 1), 0);
  
  return isDisarium === n ? "Disarium !!" : "Not !!";
}