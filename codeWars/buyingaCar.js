function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  //your code here
  let months = 0;
  let savings =  0;
  let totalBalance = startPriceOld;
  percentLossByMonth /= Math.pow(10, 2);
  
  while(totalBalance <= startPriceNew){
    months++;
    savings += savingperMonth; 
    if(months % 2 === 0 && months !== 0){
      percentLossByMonth += 0.005;
      startPriceOld = startPriceOld - startPriceOld * percentLossByMonth;
      startPriceNew = startPriceNew - startPriceNew * percentLossByMonth;
      totalBalance = savings + startPriceOld;
    } else {
      startPriceOld = startPriceOld - startPriceOld * percentLossByMonth;
      startPriceNew = startPriceNew - startPriceNew * percentLossByMonth;
      totalBalance = savings + startPriceOld;
    }
  }
  
  return [months, Math.round(totalBalance - startPriceNew)];
}

nbMonths(2400 ,2700 ,1000 ,1.5);
nbMonths(2000, 8000, 1000, 1.5);