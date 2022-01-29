function findShort(s){
  
  let shortest = 1000;
  
  s.split(' ').forEach(word => { 

    if(word.length < shortest){
      shortest = word.length;
    }

  });
  
  return shortest;
  
}


findShort("This is the shortest word test");