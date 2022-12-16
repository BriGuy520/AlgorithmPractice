function stray(numbers) {
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i - 1] != numbers[i] && numbers[i + 1] != numbers[i]){
      return numbers[i];
    }
  }
}