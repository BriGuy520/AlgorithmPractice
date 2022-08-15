function automorphic(n){
  //your code here
  let numStr = n + "";
  let squared = n * n + "";
  
  for(let i = 0; i < numStr.length; i++){
    if(squared[squared.length - 1 - i] != numStr[numStr.length - 1 - i]){

      return "Not!!";
    }
  }
  
  return "Automorphic";
  
}

automorphic(25);