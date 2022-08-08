function minValue(values){
  //your code here
  
  return Number([...new Set(values)].sort((a,b) => a - b).join(""));
}


minValue([1, 3, 1]);
minValue([4, 7, 5, 7]);
minValue([4, 8, 1, 4]);