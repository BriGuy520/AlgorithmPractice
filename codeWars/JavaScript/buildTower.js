function towerBuilder(nFloors) {
  // build here

  let outerArr = [];
  let innerArr = [];
  
  for(let i = 0; i < nFloors; i++){

    let base = (i * 2) + 1

    for(let j = 0; j < base; j++){
      innerArr.push("*");
    }

    outerArr.push(innerArr.join(""));
    innerArr = [];
    
  }
  
  console.log(outerArr);
  
}

towerBuilder(1);
towerBuilder(3);