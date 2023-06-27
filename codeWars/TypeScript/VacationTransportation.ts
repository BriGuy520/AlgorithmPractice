export function rentalCarCost(d: number): number {
  // Your solution here
  
  let finalTotal: number = 0;
  const originalTotal: number = d * 40;
  
  if(d >= 7){
    finalTotal = originalTotal - 50;
    
  } else if(d >= 3){

    finalTotal = originalTotal - 20;
  } else {
    
    finalTotal = originalTotal;
  }
  
  return finalTotal;
}

rentalCarCost(3) // 100
rentalCarCost(2) // 80
rentalCarCost(10); // 350