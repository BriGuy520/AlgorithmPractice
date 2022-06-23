function queueTime(customers, n) {
  //TODO
  let totalTime = 0;
  let checkout = customers.slice(0, n);
  let line = customers(n, customers.length);
  let j = 0;
  
  if(n >= customers.length){
    return Math.max(...customers);
  }
    
  for(let i = 0; i < checkout.length; i++){
    
    if(checkout[i] > checkout[i + 1]){
      checkout[i] = checkout[i] - checkout[i + 1];
      checkout[i + 1] = line[j++];
    } else {
      checkout[i + 1] = checkout[i + 1] - checkout[i];
      checkout[i] = line[j++];
    }
    
    line.shift();
  }

  return totalTime;
  
}