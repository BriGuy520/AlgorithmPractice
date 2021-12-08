// complete the function
function solution(string) {

  let strArr = string.split("");
    
  for(let i = 0; i < strArr.length; i++){

    const isUpperCase = strArr.join("").charCodeAt(i);

    if(isUpperCase >= 65 && isUpperCase <= 90){
      strArr.splice(i, 0, " ");
      i += 2;
    }
  }

  return strArr.join("");
}


solution("camelCasing");
solution("thisIsWorking");