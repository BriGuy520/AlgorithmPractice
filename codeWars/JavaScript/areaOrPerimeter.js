const areaOrPerimeter = function(l , w) {
  // Return your answer
  if(l === w){
    return l * l;
  } else {
    return (l * 2) + (w * 2);
  }
};