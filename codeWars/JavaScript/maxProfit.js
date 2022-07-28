function getMostProfitFromStockQuotes(quotes) {

  let profit = 0;

  if(quotes.indexOf(Math.max(...quotes)) === 0){
    console.log(profit);
    return profit;
  }
  
  for(let i = 0; i < quotes.indexOf(Math.max(...quotes)); i++){
    
    profit += Math.max(...quotes) - quotes[i];
    
  }

  console.log(profit);
}

getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ]);
getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ]);
getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]);
