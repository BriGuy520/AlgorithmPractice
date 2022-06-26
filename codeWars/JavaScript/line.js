function queueTime(customers, n) {
  
  console.log("Customers: " + customers + " n: " + n);
  //TODO
  let totalTime = 0;
  let checkout = customers.slice(0, n);
  let line = customers.slice(n, customers.length);
  let i = 0;

  
  if(n >= customers.length){
    return Math.max(...customers);
  }

  if(customers.length === 0){
    return 0;
  }
    
  while(i < line.length){
    console.log(checkout);
    let shortest = Math.min(...checkout);
     
    totalTime += shortest;
    for(let j = 0; j < checkout.length; j++){
      checkout[j] -= shortest;
      
      if(checkout[j] === 0){
        checkout[j] = line[i++];
      }    
    }
  }

  return totalTime += Math.max(...checkout);
}

queueTime([28,14,40,14,39,42,49,22,47,39,38,28,26,15,30,27,11,47,32,41], 3);