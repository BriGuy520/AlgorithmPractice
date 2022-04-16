var beeramid = function(bonus, price){
  let totalPrice = price; 
  let row = 1;
  
  while(totalPrice <= bonus){
    row++;
    totalPrice += (row * row) * price;
  }

  return row - 1;
}


beeramid(1500, 2); // 12
beeramid(5000, 3); // 16