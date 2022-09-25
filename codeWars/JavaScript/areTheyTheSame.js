function comp(array1, array2){
  //your code here
  
  if(!array1 && !array2){ 
    return true;
  } else if(array1 == null || array2 == null){
    return false;
  } else {

    let squareRoot = array2.map(num => Math.sqrt(num)).sort((a, b) => a - b);
  
    array1.sort((a, b) => a - b);
  
    for(let i = 0; i < array1.length; i++){
      if(array1[i] != squareRoot[i]){
        return false;
      }
    }
  
    return true;
  }
}

let a = [121, 144, 19, 161, 19, 144, 19, 11];  
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

comp(a, b);

