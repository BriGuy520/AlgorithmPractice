function automorphic(n){
  //your code here
  let numStr = n + "";
  let squared = n * n + "";
  
  for(let i = squared.length - 1; i >= numStr.length - 1; i--){
    if(squared[i] != numStr[i - numStr.length - 1]){

      return "Not!!";
    }
  }
  
  return "Automorphic";
  
}

automorphic(25);