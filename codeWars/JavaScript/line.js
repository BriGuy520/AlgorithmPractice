function queueTime(customers, n) {
  //TODO
  let totalTime = 0;
    
  for(let i = 0; i < customers.length; i += n){
    if(n >= customers.length){
      return customers[customers.length - 1];
    } else {
      let line = customers.slice(i, n + i);
      console.log(line);
      totalTime += Math.max(...line);
    }
  }

  return totalTime;
  
}

queueTime([2,2,3,3,4,4], 2);
