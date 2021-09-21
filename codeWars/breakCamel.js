// complete the function
function solution(string) {

  let strArr = string.split('');
  let result;
    
  for(let i = 0; i < string.length; i++){

    if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
      let end = string.slice(i, string.length);
      let beginning = string.slice(0, i);
      result = beginning.concat(' ', end);
    }
  }

  console.log(result);

  return string;
}


solution("camelCasing");
solution("thisIsWorking");