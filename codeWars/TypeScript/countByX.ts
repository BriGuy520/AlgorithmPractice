function countBy(x: number, n: number): number[] {
  let arr: number[]= [];
  
  for(let i = 1; i <= n; i++){
    arr.push(i * x);
  }
  
  return arr;
}