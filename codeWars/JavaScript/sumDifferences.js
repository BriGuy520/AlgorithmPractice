function sumOfDifferences(arr) {

    let sum = 0;

    if(arr.length === 0){
        return 0;
    } else {
        for(let i = arr.length - 1; i > 0; i--){
            sum += Math.abs(arr[i]) - Math.abs(arr[i - 1]);
        }

        console.log(sum);

        return sum;
    }
}

sumOfDifferences([1, 2, 10]);
sumOfDifferences([-7,16,-3,-23,-16,-16,-4,2,0,10,11,14,-19,13,-17,-20]);
sumOfDifferences([-3, -2, -1]);
sumOfDifferences([-12, -15]);