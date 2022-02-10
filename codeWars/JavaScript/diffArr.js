function arrayDiff(a, b){

  let diff = [];

  a.forEach(value => {
    if(b.indexOf(value)){
      diff.push(value);
    }
    
  });

  console.log(diff);
  return diff;

}


arrayDiff([1, 2, 2, 2, 3, 3], [2]); // [1, 3]
arrayDiff([1, 2, 3], [1, 2]); // [3]