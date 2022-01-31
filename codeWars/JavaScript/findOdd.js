function findOdd(A) {
  //happy coding!

  let acc = {};

  A.forEach(value => {
    

    if(acc[value]){
      acc[value]++;
    } else {
      acc[value] = 1;
    }

  });
  
  for(value in acc){
    console.log(acc[value]);
    if(acc[value] % 2 != 0){
      return Number(value);
    }
  }
}


findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]);
findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ])