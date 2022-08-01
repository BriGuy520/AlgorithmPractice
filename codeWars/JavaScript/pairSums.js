// function pairSum(arr, target){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i] + arr[j] === target){
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }


// Optimal Solution

function pairSum(arr, target){

  let hash = [];

  for(let i = 0; i < arr.length; i++){
    let find = target - arr[i];
    hash.push(find);
    if(hash.indexOf(arr[i]) !== -1){
      console.log([hash[hash.indexOf(find)], arr[i]]);
    }

  }

}


pairSum([1, 3, 7, 9, 2], 11);


