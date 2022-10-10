function dashatize(num) {
  //get 'em 
  let numArr = [];
  
  
  if(num === 'NaN') return "NaN";
  
  return num.toString().split('').reduce((a,v,i) => {
    parseInt(v) % 2 == 0 ? a.push(v) : i === 0 || i === num+"".length - 1 ? a.push(v, '-') : a.push('-', v, '-'); 
    
    return a;
  }, []).join("");
}