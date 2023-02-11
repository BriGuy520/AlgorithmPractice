function computeDepth (x){

  let answer = x+"";
  answer = answer.split("");
  let i = 1;

  while(answer.length < 10){

    x = x * ++i;

    let splitInt = x+"";
  
  
    let uniqueValues = splitInt.split("").filter(num => !answer.includes(num));
  
    answer.push(...new Set(...uniqueValues));

  
  }
  
  console.log(i);
 

  return i;
}


computeDepth(42); // 9