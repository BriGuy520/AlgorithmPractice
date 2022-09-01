function pendulum(values) {
    
  let sorted = values.sort((a, b) => a - b);
  let pendulumArr = [sorted[0]];
  
  for(let i = 1; i < sorted.length; i++){
    i % 2 != 0 ? pendulumArr.push(sorted[i]) : pendulumArr.unshift(sorted[i]);
  }
  
  return pendulumArr;  
}

pendulum([6,6,8,5,10]);