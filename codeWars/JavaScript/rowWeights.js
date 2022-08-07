function rowWeights(array){
  //your code here
  
  let teamOne = 0;
  let teamTwo = 0;
  
  for(let i = 0; i < array.length; i++){
    
    if(i % 2 === 0){
      teamOne += array[i];
    } else {
      teamTwo += array[i];
    }
  }
  
  return [teamOne, teamTwo];
  
}