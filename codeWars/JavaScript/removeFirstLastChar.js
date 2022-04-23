function removeChar(str){
    //You got this!
    let arr = str.split("");
    arr.pop();
    arr.shift();
    
    return arr.join(""); 
};

removeChar('eloquent');