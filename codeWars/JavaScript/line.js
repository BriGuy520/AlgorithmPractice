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

  console.log(checkout);
  return totalTime += Math.max(...checkout);
}

queueTime([37,31,29,8,12,44,3,16,26,14,1,25,25,38,42,47,23,8,49,23,20,40], 3);