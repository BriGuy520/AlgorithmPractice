const sqInRect = (l:number, w:number): null|number[] => {
  // Your code here...

  if(l === w) null;

  // Get all of the potential sqaures;
  let answer: number[] = [];
  let totalSquares: number = l * w;

  while(totalSquares > 0){
    
   if(l < w){
     answer.push(l);
     w = w - l;
     totalSquares -= l * l;
   } else if (w < l) {
    answer.push(w);
    l = l - w;
    totalSquares -= w * w;
   } else {
    answer.push(w);
    totalSquares -= w * w;
   } 

  }

  return answer;
}


sqInRect(3,5) // [3, 2, 1, 1]
sqInRect(14,20); // [14, 6, 2, 2, 2]