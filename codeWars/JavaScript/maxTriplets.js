function maxTriSum(numbers){
  //your code here
  return new Array(...new Set(numbers)).sort((a, b) => b - a).slice(0, 3).reduce((a,v) => a + v);
}

maxTriSum([3,2,6,8,2,3]); // 17