function pairSum(arr, target){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target){
        return [arr[i], arr[j]];
      }
    }
  }
}


pairSum([1, 3, 7, 9, 2], 11);


