var maxSequence = function(arr){

  // ...
  
  let total = 0;
  let highest = 0;
  
  if(arr.length === 0){
    return 0;
  } else {
    
    for(let i = 0; i < arr.length; i++){
      total += arr[i];
      
      if(total < 0){
        total = 0;
      }
      
      if(total > highest){ 
        highest = total
      } 
    }

    return highest;
  }
  
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
