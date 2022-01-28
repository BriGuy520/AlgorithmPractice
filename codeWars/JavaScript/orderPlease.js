function order(words){
  // ...

  if(words === ""){
    return "";
  } else {

    let wordArr = words.split(" ");
  
    let sortedArr = wordArr.sort(function(a, b){
      let regex = /\d/g;
  
      return a.match(regex) - b.match(regex);
  
    });
    return sortedArr.join(" ");
  }
}

order("is2 Thi1s T4est 3a");