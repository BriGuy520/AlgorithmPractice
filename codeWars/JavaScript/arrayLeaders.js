function arrayLeaders(numbers){
  
  let rightSum = 0;
  let arrLeaders = [];
  
  
  for(let i = 0; i < numbers.length; i++){
    for(let j  = i + 1; j < numbers.length; j++){
      rightSum += numbers[j];
      
      if(rightSum < numbers[i] && j === numbers.length - 1){
        arrLeaders.push(numbers[i]);
      }
    }
    
    rightSum = 0;
    
    if(i === numbers.length - 1 && numbers[numbers.length - 1] > 0){
      arrLeaders.push(numbers[i]);
    }
  }
  
  
  return arrLeaders;

}