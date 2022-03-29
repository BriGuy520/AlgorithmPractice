function descendingOrder(n){
  //...
  return parseInt(Array.from(String(n)).sort((a, b) => b - a).join(""));
}

descendingOrder(14549);