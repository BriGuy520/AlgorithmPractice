// Build Tower

// Build Tower by the following given argument:

// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
  // build here
  let arr = [];
  let block = "*";
  let base = (nFloors * 2) - 1;
  
  for(let i = 0; i < nFloors; i++){

    let occurancesInRow = (i * 2) + 1
    let buffer = (base - occurancesInRow) / 2;
    let rowBlocks = block.repeat(occurancesInRow).split(" ");

    for(let j = 0; j < buffer; j++){
      rowBlocks.unshift(" ");
    }

    for(let k = 0; k < buffer; k++){
      rowBlocks.push(" ");
    }

    arr.push(rowBlocks.join(""));
    
  }

  return arr;
  
}