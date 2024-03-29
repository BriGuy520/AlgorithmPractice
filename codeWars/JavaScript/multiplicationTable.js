// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size){

    let outerArr = [];
    let inner = [];

    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            inner.push(i * j);
        }
        outerArr.push(inner);
        inner = [];
    }

    return outerArr;
    
}



multiplicationTable(3);