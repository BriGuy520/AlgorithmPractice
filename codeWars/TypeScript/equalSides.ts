export function findEvenIndex(arr: number[]): number {
  
  let i: number = 0;
  let j: number = arr.length - 1;
  let leftTotal: number = 0;
  let rightTotal: number = 0;
  
  //Code goes here!
  while(i < arr.length - 1 / 2){
    
    for(let j: number = arr.length - 1; j > i; j--){
      rightTotal += arr[j];
    }
    
    if(leftTotal === rightTotal){
      return i;
    } else {
      leftTotal += arr[i];
      rightTotal = 0;
    }
    
    i++;
  }
  
  return -1;
  
}