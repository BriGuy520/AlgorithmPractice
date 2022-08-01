function getMostProfitFromStockQuotes(quotes) {

  let sellPrice = Math.max(...quotes);
  let profit = 0;

  while(quotes.length > 0){
    
    profit += sellPrice - quotes[0];
    quotes.shift();

    sellPrice = Math.max(...quotes);
  }

  return profit;
}

getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ]);
getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ]);
getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]);
