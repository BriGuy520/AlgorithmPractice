function squaredList(m,n){
  let total = 0;
  let idx = 0;
  let arr = [];
  let inner = [];

  for(let i = m; i <= n; i++){
    for(let j = 1; j <= n; j++){
      if(i % j === 0){
        total += j * j;   
      }
    }
    if(Math.pow(total, 1/2) % 1 === 0){
    	arr[idx] = [i, total];
      idx++;
  	}
    
    total = 0;
  }
  
 return arr; 
}

squaredList(42, 250);