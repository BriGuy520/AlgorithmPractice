// function balancedNum(number)
// {
//     const digits = number.toString().split("");
//     const half = digits.length / 2; 
//     const left = digits.length % 2 === 0 ? digits.slice(0, half - 1) : digits.slice(0, half);
//     const right =  digits.slice(half + 1, digits.length);
//     let leftSum = 0;
//     let rightSum = 0;

//     for(let i = 0; i < left.length; i++){
//       leftSum += Number.parseInt(left[i]);
//     }

//     for(let i = 0; i < right.length; i++){
//       rightSum += Number.parseInt(right[i]);
//     }

//     if(leftSum === rightSum){
//       return "Balanced";
//     } else {
//       return "Not Balanced";
//     }
// }

function balancedNum(number){
  let i, result = 0;
  number = number + "";
  console.log(typeof number);
  for(i = 0; i < number.length / 2 - 1; i++){
      console.log(typeof +number[i]);
      result += +number[i] - +number[number.length - 1 - i];
  }
  return result === 0 ? "Balanced" : "Not Balanced";
}

balancedNum(959);
balancedNum(9559);
balancedNum(879872918);