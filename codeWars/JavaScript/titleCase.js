// function titleCase(title, minorWords) {
  
//   if(title.length == 0) return '';
  
//   let arr = [];
//   let titleArr = title.toLowerCase().split(" ");
//   let minorWordsArr = minorWords.split(" ");
  
//   console.log(minorWordsArr);
//   console.log(titleArr);

//   for(let i = 0; i < titleArr.length; i++){
//     if(minorWordsArr.indexOf(titleArr[i]) == -1 || i == 0){
//       let newStr = titleArr[i].substring(0, 1).toUpperCase().concat(titleArr[i].substring(1, titleArr[i].length));
//       arr.push(newStr);
//     } else {
//       arr.push(titleArr[i]);
//     }
//   }

//   console.log(arr); 

//   return arr.join(" ");
// }

function titleCase(title, minorWords = "") {
  
  if(title.length == 0) return '';

  let minorWordsArr = minorWords.toLowerCase().split(" ");

  return title.toLowerCase().split(" ").reduce((a, v, i) => {
    let newStr = v.substring(0, 1).toUpperCase().concat(v.substring(1, v.length));
    
    minorWordsArr.indexOf(v) == -1 || i == 0 ? a.push(newStr) : a.push(v);

    return a;
  }, []).join(" ");
}

titleCase('a clash of KINGS', 'a an the of'); // A Clash of Kings