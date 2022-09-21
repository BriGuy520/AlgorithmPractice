function rowWeights(array){
  //your code here
  let teamWeights = [0, 0];
  
  array.forEach((v, i) => i % 2 == 0 ? teamWeights[0] += v : teamWeights[1] += v);
  
  return teamWeights;
}