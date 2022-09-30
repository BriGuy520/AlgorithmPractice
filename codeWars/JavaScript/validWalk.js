function isValidWalk(walk) {
  //insert brilliant code here
  let long = 0;
  let lat = 0;
  
  if(walk.length != 10){
    return false;
  }
  
  for(let i = 0; i < walk.length; i++){
    if(walk[i] == 'n'){
      long += 1;
    } else if(walk[i] == 's'){
      long -= 1
    } else if(walk[i] == 'w'){
      lat -= 1;
    } else if(walk[i] == 'e') {
      lat += 1;
    }
    
  }
    return long == 0 && lat == 0 ? true : false;
}