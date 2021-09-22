// complete the function
function solution(string) {

  let strArr = string.split("");
    
  for(let i = 0; i < strArr.length; i++){

    if(strArr.join("").charCodeAt(i) >= 65 && strArr.join("").charCodeAt(i) <= 90){
      strArr.splice(i, 0, " ");
      i = i + 2;
    }
  }

  return strArr.join("");
}


solution("camelCasing");
solution("thisIsWorking");