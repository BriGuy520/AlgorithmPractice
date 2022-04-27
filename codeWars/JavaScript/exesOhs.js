function XO(str){
    let regexO = /o/g;
    let regexX = /x/g;

    let xS = str.match(regexX);
    let oS = str.match(regexO);

    if(xS.length === 0 || oS.length === 0){
        return false;
    } else {
        if(str.match(regexO).length === str.match(regexX).length){
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