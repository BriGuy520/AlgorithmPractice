// return the number of small chocolates required to achieve 
// the desired goal. Return -1 if the goal cannot be achieved 
function makeChocolates(small, big, goal) {

  if((small * 2) + (big * 5) < goal){
    console.log(-1);
    return -1;
  }

  let weight = 0;
  let smallNeeded = 0;

  while(weight < goal){
    
  }
}

makeChocolates(2, 1, 7); // 1
makeChocolates(4, 1, 14); // -1
makeChocolates(4, 1, 13); // 4
makeChocolates(3, 1, 6); // 3
makeChocolates(5, 0, 7) // -1
makeChocolates(54, 112, 202)