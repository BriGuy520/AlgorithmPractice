function strong(n) {
  
  let total = 0;
  let factorials = 1;
  let numStr = n + "";
  
  for(let i = 0; i < numStr.length; i++){
   for(let j = +numStr[i]; j > 0; j--){
      factorials *= j;
    }

    total += factorials;
    factorials = 1;
  }
  
  return total === n ? "STRONG!!!!" : "Not Strong !!" ;
  
}

strong(145);