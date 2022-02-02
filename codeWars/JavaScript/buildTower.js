function towerBuilder(nFloors) {
  // build here

  let outerArr = [];
  let value = "*";
  let base = (nFloors * 2) - 1;
  let innerArr = new Array(base);
  
  for(let i = 0; i < nFloors; i++){

    let row = (i * 2) + 1

    outerArr.push(value.repeat(row).padEnd(5, ' '));
    
  }

  console.log(outerArr);
  
}

towerBuilder(1);
towerBuilder(3);