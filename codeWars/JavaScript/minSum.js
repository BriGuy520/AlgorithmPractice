function minSum(arr) {
  // your code here
  arr.sort((a, b) => a - b);
  
  let i = 0;
  let j = arr.length - 1;
  
  let minSum = 0;
  
  while(i < j){
    
    minSum += arr[i] * arr[j];
    
    i++;
    j--;
  }
  
  return minSum;
  
}