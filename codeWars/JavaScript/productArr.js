function productArray(numbers){
  //your code here

  let productArr = [];

  let sum = 1;

  while(productArr.length < numbers.length){

    for(let i = 0; i < numbers.length; i++){
      if(i !== productArr.length){
        sum *= numbers[i]
      }
    }

    productArr.push(sum);
    sum = 1;

  }

  return productArr;


}