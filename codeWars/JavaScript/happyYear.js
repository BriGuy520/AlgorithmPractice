function nextHappyYear(year){
  //your code here
  let strYear = year+"";
      
  for(let i = 0; i < strYear.length; i++){
    
    let regex = new RegExp(`${strYear[i]}`, 'g');

    if(strYear.match(regex).length != 1){
      year++;
      strYear = year+"";
      i = 0;
    }
  }

  return year;
  
}


nextHappyYear(1990);