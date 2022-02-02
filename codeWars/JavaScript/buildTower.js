function towerBuilder(nFloors) {
  // build here
  let outerArr = [];
  let value = "*";
  let base = (nFloors * 2) - 1;
  
  for(let i = 0; i < nFloors; i++){

    let row = (i * 2) + 1
    let buffer = (base - row) / 2;
    let rowValue = value.repeat(row).split(" ");

    for(let j = 0; j < buffer; j++){
      rowValue.unshift(" ");
    }

    for(let k = 0; k < buffer; k++){
      rowValue.push(" ");
    }

    outerArr.push(rowValue.join(""));
    
  }

  return outerArr;
  
}

towerBuilder(1);
towerBuilder(3);