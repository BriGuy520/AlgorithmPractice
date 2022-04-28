function XO(str){
    let regexO = /o/g;
    let regexX = /x/g;

    let xS = str.toLowerCase().match(regexX);
    let oS = str.toLowerCase().match(regexO);

    console.log(str);
    console.log(xS);
    console.log(oS);

    if(xS === null || oS === null){
        if(xS === null && oS === null){
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    } else {
        if(oS.length === xS.length){
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    }
}


XO('xxoo');
XO('xooxx');
XO('ooxxo');
XO('xoxoxo');
XO('x');
XO('OX');