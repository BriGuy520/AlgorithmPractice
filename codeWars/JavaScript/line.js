function queueTime(customers, n) {
  
  console.log("Customers: " + customers + " n: " + n);
  //TODO
  let totalTime = 0;
  let checkout = customers.slice(0, n);
  let line = customers.slice(n, customers.length);
  let i = 0;

  if(customers.length === 0){
    return 0;
  }
    
  while(i < line.length){
    console.log(checkout);
    let shortest = Math.min(...checkout);
     
    totalTime += shortest;
    for(let j = 0; j < checkout.length; j++){
      checkout[j] -= shortest;

      console.log(checkout[j]);
      
      if(checkout[j] === 0 && line[i]){
        checkout[j] = line[i++];
      }    
    }
  }

  return totalTime += Math.max(...checkout);
}

queueTime([19,27,22,8,36,29,2,10,5,41,38,18,26,40,1,32,1,50,24,47,40,31,29,6,3,26,47], 4);