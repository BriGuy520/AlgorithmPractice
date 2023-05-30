function sumOfMinimums(arr) {
  // your code here
  
  return arr.reduce((acc, inner) => acc + Math.min(...inner), 0)
}