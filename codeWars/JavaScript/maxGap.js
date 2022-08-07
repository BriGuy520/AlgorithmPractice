function maxGap (numbers){
  //your code here
  
  let maxGap = 0;
  
  numbers.sort((a,b) => a - b);
  
  for(let i = 0; i < numbers.length; i++){
    let gap  = numbers[i + 1] - numbers[i];
    if(gap > maxGap){
      maxGap = gap;
    }
  }
  
  return maxGap;
}