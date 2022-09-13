function menFromBoys(arr){
  //your code here

  let odd = [];
  let even = [];

  new Array(...new Set(arr)).sort((a,b) => a - b).map((v) => v % 2 === 0 ? even.push(v) : odd.push(v));

  return even.concat(odd.sort((a, b) => b - a));

}

menFromBoys([-94, -99 , -100 , -99 , -96 , -99, -97]);