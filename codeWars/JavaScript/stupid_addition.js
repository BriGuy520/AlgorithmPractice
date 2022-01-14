function add(num1, num2) {
  
  let num1Str = num1.toString().split("");
  let num2Str = num2.toString().split("");

  let finalAnswer = [];

  if(num1Str.length < num2Str.length){
    for(let i = num1Str.length; i < num2Str.length; i++){
      num1Str.unshift(0);
    }
  }

  if(num2Str.length < num1Str.length){
    for(let i = num2Str.length; i < num1Str.length; i++){
      num2Str.unshift(0);
    }
  }
  
  for(let j = 0; j < num1Str.length; j++){
    finalAnswer.push(parseInt(num1Str[j]) + parseInt(num2Str[j]));
  }

  return parseInt(finalAnswer.join(""));

}


add(2, 19);