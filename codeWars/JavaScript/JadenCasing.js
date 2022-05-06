let toJadenCase = function(str){

    let newStr = [];

    for(let i = 0; i < str.length; i++){
        if(str[i - 1] === ' '){
            newStr.push(str[i].toUpperCase());
        } else {
            newStr.push(str[i]);
        }
    }

    return newStr.join("");
}

toJadenCase("How can mirrors be real if our eyes aren't real");