function findNb(m) {
  // your code
  
  let n = 1; 
  let cubes = Math.pow(n, 3);

  while(cubes < m){
    n++;
    cubes = cubes + Math.pow(n, 3);
  }

  return cubes === m ? n : -1;
}