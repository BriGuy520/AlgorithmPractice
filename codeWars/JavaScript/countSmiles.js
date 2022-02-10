function countSmileys(arr) {
    
  let smileCount = arr.join(" ").match(/([;:](?![o>(])~?-?)((?<!o)[)D])/g);
  
  if(!smileCount){
    return 0;
  } else {
    return smileCount.length;
  }  
}

countSmileys([':D',':~)',';~D',':)']);
countSmileys([":o>" , ";>" , ":~)" , ";~)" , ":D" , ";~D" , ":)"]);
countSmileys([';]', ':[', ';*', ':$', ';-D']);
countSmileys(["<font size='5'>Great work!</font>"]);
countSmileys(["xyz:-)", ":-)xyz", ":---)"]);  
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // shoule return 1;
countSmileys([';)', ';)', ';)', ';>', ';>', ';->', ';>']); // should return 3;
countSmileys([ ';~)', ':)', ':-)', ':--)' ]); // should return 