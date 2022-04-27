function XO(str){
    let regexO = /o/g;
    let regexX = /x/g;

    if(regexO.length === regexX.length){
        return true;
    } else {
        return false;
    }
}


XO('xxoo');
XO('xooxx');
XO('ooxxo');
XO('xoxoxo');