function findShort(s){
  
  let shortest = 1000;
  
  s.split(' ').forEach(word => {
    

    if(word.length < shortest){
      shortest = word.length;
    }
    console.log(shortest);

  });

  
  return shortest;
  
}


findShort("This is the shortest word test");