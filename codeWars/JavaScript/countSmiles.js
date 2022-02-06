function countSmileys(arr) {
    
  console.log(arr);
  
  if(arr == null){
    console.log(0);
    return 0;
  } else {
      console.log(arr.join(" ").match(/([;:](?![o>(])-*~*)((?<!o)[)D])/g).length);
      return arr.join(" ").match(/([;:](?![o>(])-*~*)((?<!o)[)D])/g).length;
    }

  
}

countSmileys([':D',':~)',';~D',':)'])
countSmileys([":o>" , ";>" , ":~)" , ";~)" , ":D" , ";~D" , ":)"])
countSmileys(["<font size='5'>Great work!</font>"]);