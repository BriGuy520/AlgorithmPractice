function minimumSteps(numbers, value){
  //your code here
  let sorted = numbers.sort((a,b) => a - b);
  let total = 0;
  let steps = 0;
  
  for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
    if(total >= value){
      return steps;
    } else {
      steps++;
    }
  }
  return steps;
}

minimumSteps([19,98,69,28,75,45,17,98,67], 464);
minimumSteps([4,6,3], 7);