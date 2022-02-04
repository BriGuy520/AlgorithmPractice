function sortArray(array){

  let j = 0;
  let sortedOdd = arr.filter(int => int % 2 != 0).sort((a, b) => a - b);

  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 != 0 ? arr[i] = sortedOdd[j++] : arr[i]; 
  }

  return arr;
}


sortArray([1, 11, 4, 2, 5, 3]); // [1, 3, 4, 2, 5, 11]