function deleteNth(arr,n){
  // ...
  let answer = [];
  let memo = {}
  
  for(let i = 0; i < arr.length; i++){
    if(!memo[arr[i]]){
      memo[arr[i]] = 1;   
      answer.push(arr[i]);
    } else if(memo[arr[i]] < n){
      memo[arr[i]] += 1;
      answer.push(arr[i]);
    }
  }
  
  return answer;
}