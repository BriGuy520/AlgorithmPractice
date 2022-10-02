function titleCase(title, minorWords = "") {
  
  console.log(minorWords);
  
  if(title.length == 0) return '';
  
  let arr = [];
  let titleArr = title.toLowerCase().split(" ");
  let minorWordsArr = minorWords.toLowerCase().split(" ");

  for(let i = 0; i < titleArr.length; i++){
    if(minorWordsArr.indexOf(titleArr[i]) == -1 || i == 0){
      let newStr = titleArr[i].substring(0, 1).toUpperCase().concat(titleArr[i].substring(1, titleArr[i].length));
      arr.push(newStr);
    } else {
      arr.push(titleArr[i]);
    }
  }

  return arr.join(" ");
}

titleCase('a clash of KINGS', 'a an the of'); // A Clash of Kings