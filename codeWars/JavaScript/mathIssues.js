// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? 
// We can assure, that only non-negative numbers are passed as arguments. So you don't have to 
// consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
  const numberStr = (number).toString().split("");
  const nextInt = numberStr.indexOf(".") + 1;
  let arr = [];

  for(let i = 0; i < numberStr.length; i++){
  	if(numberStr[i] === "."){
  		break;
    } else {
      arr.push(numberStr[i]);
    }
  }
  
  if(numberStr[nextInt] >= 5 && nextInt !== 0){
    return Number.parseInt(arr.join("")) + 1;
  } else {
		return Number.parseInt(arr.join(""));
  }
};

Math.ceil = function(number) {
  const numberStr = (number).toString().split("");
  const nextInt = numberStr.indexOf(".") + 1;
  let arr = [];
	console.log(nextInt);
  for(let i = 0; i < numberStr.length; i++){
  	if(numberStr[i] === "."){
  		break;
    } else {
      arr.push(numberStr[i]);
    }
  }
  
  if(nextInt === 0){
  	return Number.parseInt(arr.join(""));
  } else {
    return Number.parseInt(arr.join("")) + 1;
  }
};

Math.floor = function(number) {
  const numberStr = (number).toString().split("");
  const nextInt = numberStr.indexOf(".") + 1;
  let arr = [];

  for(let i = 0; i < numberStr.length; i++){
  	if(numberStr[i] === "."){
  		break;
    } else {
      arr.push(numberStr[i]);
    }
  }
  
  return Number.parseInt(arr.join(""));
};