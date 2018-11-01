// Sum up the total of the outside parameter in the inner arrays

// I got this problem from the YouTube channel techsith 

// This answer is completely my own


const matrix = [
    [1,2,1],
    [1,1,1],
    [1,1,1]
]



function sumParameter(arr){
    var sum = 0;
    
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(i === 0 || i === arr.length - 1){
                sum += arr[i][j];
            } else {
                sum += arr[i][0] + arr[i][arr[i].length - 1];
                break;
            }
        }
    }
    return sum;
}

sumParameter(matrix);