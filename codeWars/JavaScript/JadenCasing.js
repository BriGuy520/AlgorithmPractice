String.prototype.toJadenCase = function(){

    let newStr = [];

    for(let i = 0; i < this.length; i++){
        if(this[i - 1] === ' '){
            newStr.push(this[i].toUpperCase());
        } else {
            newStr.push(this[i]);
        }
    }

    return newStr.join("");
}

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());