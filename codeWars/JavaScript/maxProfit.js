function getMostProfitFromStockQuotes(quotes) {

  let maxValue = quotes.indexOf(Math.max(...quotes));
  let subArr = quotes.slice(0, maxValue  + 1);
  let i = 0;
  let profit = 0;

  console.log(subArr);

  while(i < subArr.length){

    profit += Math.max(...subArr) - subArr[i];

    i++;

    if(i < quotes.length && i === subArr.length - 1){
      subArr = quotes.slice(subArr.length, quotes.length);
      maxValue = subArr.indexOf(Math.max(...subArr));
    }
  }

  console.log(profit);
}

getMostProfitFromStockQuotes([ 1, 2, 3, 4, 5, 6 ]);
getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ]);
getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]);
