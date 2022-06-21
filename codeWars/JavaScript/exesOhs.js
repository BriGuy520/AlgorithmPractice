function XO(str){
    let regexO = /o/g;
    let regexX = /x/g;

    let xS = str.toLowerCase().match(regexX);
    let oS = str.toLowerCase().match(regexO);


    if(xS === null || oS === null){
        if(xS === null && oS === null){
            return true;
        } else {
            return false;
        }
    } else {
        if(oS.length === xS.length){
            return true;
        } else {
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