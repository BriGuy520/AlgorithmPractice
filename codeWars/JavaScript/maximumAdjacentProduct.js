function adjacentElementsProduct(array) {
  // max product
  let max = -Infinity;
  
  for(let i = 0; i < array.length; i++){
    if(array[i] * array[i + 1] > max){
      max = array[i] * array[i + 1];
    }
  }
  
  return max;
  
}