function maxProduct(numbers, size){
  //your code here
  return numbers.sort((a, b) => b - a)
    .reduce((a, v, i) => i < size ? a * v : a, 1);
} 

maxProduct([10,8,7,9], 3); // 720