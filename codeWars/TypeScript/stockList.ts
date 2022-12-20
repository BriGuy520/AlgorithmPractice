const stockList = (listOfArt:string[], listOfCat:string[]):string => {
  // your code
  
  let answer: string = "";
  let total: number|string = 0;
  let stock: boolean = false;
  
  
  for(let i: number = 0; i < listOfCat.length; i++){
    for(let j: number = 0; j < listOfArt.length; j++){

      total += listOfArt[j].indexOf(listOfCat[i]) === 0 ? parseInt(listOfArt[j].match(/\d/g)!.join("")) : 0;
    }
  
    answer +=  i + 1 === listOfCat.length ? `(${listOfCat[i]} : ${total})` : `(${listOfCat[i]} : ${total}) - `;
    if(total > 0) stock = true;
    total = 0;
  }
  
  return stock ? answer : '';
}

const b: string[] = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c: string[] = ["A", "B", "C", "D"];

stockList(b, c);