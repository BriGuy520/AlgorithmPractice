export function findEvenIndex(arr: number[]): number {
  
  let i: number = 0;
  let j: number = arr.length - 1;
  let leftTotal: number = 0;
  let rightTotal: number = 0;
  
  //Code goes here!
  while(i < arr.length - 1 / 2){
    
    leftTotal += arr[i];
    
    for(let j: number = arr.length - 1; j > i + 1; j--){
      rightTotal += arr[j];
    }
    
    if(leftTotal === rightTotal){
      return i + 1;
    } else {
      rightTotal = 0;
    }
    
    i++;
  }
  
  return -1;
  
}