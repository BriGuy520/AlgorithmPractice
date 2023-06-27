function rentalCarCost(d: number): number {
  // Your solution here
  
  let total: number = d * 40;
  
  if(d >= 7){
    total = total - 50;
    
  } else if(d >= 3){

    total = total - 20;
  }
  
  return total;
}

rentalCarCost(3) // 100
rentalCarCost(2) // 80
rentalCarCost(10); // 350