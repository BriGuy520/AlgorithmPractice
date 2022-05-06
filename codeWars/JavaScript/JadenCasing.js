String.prototype.toJadenCase = function(str){

    for(let i = 0; i < str.length; i++){
        if(str[i - 1] === ' '){
            str[i] = str[i].toUpperCase();
        }
    }
}

toJadenCase("How can mirrors be real if our eyes aren't real");