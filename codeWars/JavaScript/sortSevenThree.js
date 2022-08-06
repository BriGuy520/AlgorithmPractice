function sortTwisted37(array) {
  
  let copyArr = new Array(...array);
  
  
  copyArr.sort((a, b) => {
    return a - b; 
  });
  
  let sevenIdx = copyArr.indexOf(7);
  let threeIdx = copyArr.indexOf(3);

  
  copyArr[sevenIdx] = 3;
  copyArr[threeIdx] = 7;

  console.log(copyArr);
  
  return copyArr;
}

sortTwisted37([1,4,2,8,5,2,3,8,7,9,12,13,14]);