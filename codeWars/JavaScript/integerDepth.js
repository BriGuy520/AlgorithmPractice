function computeDepth (x){

  let answer = x+"";
  answer = answer.split("");
  let i = 1;

  while(answer.length < 10){

    let total = x * ++i;
    let splitInt = total+"";

    console.log(total, i);
  
    let uniqueValues = splitInt.split("").filter(num => !answer.includes(num));

    console.log(uniqueValues);
  
    answer.push(...new Set(uniqueValues));

    console.log(answer);
  }
 
  return i;
}


// computeDepth(42); // 9
// computeDepth(197); // 10
computeDepth(380);