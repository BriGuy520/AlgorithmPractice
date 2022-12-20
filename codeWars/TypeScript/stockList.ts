const stockList = (listOfArt:string[], listOfCat:string[]):string => {
  // your code
  
  let answer: string = "";
  let total: number|string = 0;
  
  
  for(let i: number = 0; i < listOfCat.length; i++){
    for(let j: number = 0; j < listOfArt.length; j++){
      
      if(listOfArt[j].indexOf(listOfCat[i]) === 0){

        total += listOfArt[j].match(/\d/g) !== null ? parseInt(listOfArt[j].match(/\d/g).join("")) : 0;
      }
    }
    
    answer += i + 1 === listOfCat.length ? `(${listOfCat[i]}: ${total})` : `(${listOfCat[i]}: ${total}) - `;
    
    total = 0;
  }
  
  console.log(answer);
  
  return answer;
}

const b: string[] = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c: string[] = ["A", "B", "C", "D"];

stockList(b, c);