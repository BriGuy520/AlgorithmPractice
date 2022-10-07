function pyramid(n) {
  // your code here
  
  let ones = '';
  let innerArr = [];
  let outerArr = [];
  
  if(n === 0) return [];
  
  for(let i = 1; i <= n; i++){
      for(let j = 0; j < i; j++){
        innerArr.push(1);
      }
      
      outerArr.push(innerArr);
      innerArr = [];
      
  }
  
  return outerArr;
}