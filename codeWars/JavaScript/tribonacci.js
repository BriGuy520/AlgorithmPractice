function tribonacci(signature,n){
  //your code here
  
  let i = 0;

  if(n != 0){
    while(i < n - 3){
      let nextValue = signature[i] + signature[i + 1] + signature[i + 2];
      signature.push(nextValue);
      i++;
    }
  } else {
    return [];
  }

  console.log(signature);
}

tribonacci([1,2,3],10); // [1,2,3,6,11,20,37,68,125,230]