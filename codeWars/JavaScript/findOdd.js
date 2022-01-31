function findOdd(A) {
  //happy coding!

  for(let i = 0; i < A.length; i++){

    let regex = new RegExp('(?<!-)' + A[i], 'g');
    
    if(A.join(" ").match(regex).length % 2 == 1){
      return A[i];
    }
  }
}


findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]);
findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ])