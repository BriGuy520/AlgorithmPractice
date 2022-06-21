function grow(x){

    return x.reduce((total, num) => total *= num, 1);
}

grow([1,3,4,5]);