function solution(str){
  
  let i = 0;
  let j = str.length - 1;
  let newStr = [];
  
  while(i <= j){
    
    newStr[i] = str[j];
    newStr[j] = str[i];
    
    i++;
    j--;
    
  }
  
  return newStr.join("");
}