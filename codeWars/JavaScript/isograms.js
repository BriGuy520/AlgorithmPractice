function isIsogram(str){
  //...
  let lowercaseStr = str.toLowerCase();
  
  for(let i = 0; i < lowercaseStr.length; i++){
    let regex = new RegExp(lowercaseStr[i], 'g');
    
    if(lowercaseStr.match(regex).length > 1) return false;
  }
  
  return true;
}

isIsogram('aba'); //false
isIsogram('Charlie'); //true
isIsogram('apPle'); //true
isIsogram('abcdefghijklmnopqrstuvwxyzR');
