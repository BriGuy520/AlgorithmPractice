function lastManStanding(n){
  // Good Luck!
  let arr = [];
  let passes = 1;

  for(let i = 2; i <= n; i += 2){
    arr.push(i);
  }

  console.log(arr);
    
    
}

lastManStanding(10); // 8
lastManStanding(9); // 6
lastManStanding(100); // 54
lastManStanding(1000); // 510
