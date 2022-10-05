function thirt(n) {
  // your code
  let numStr = n+"";
  let total = 0;
  let power = 0;


  for(let i = numStr.length - 1; i >= 0; i--){
    total += parseInt(numStr[i]) * (Math.pow(10, power) % 13);
    power++;
  }

  return total.toString().length > 2 ? thirt(total) : total;   
}

thirt(1234567);