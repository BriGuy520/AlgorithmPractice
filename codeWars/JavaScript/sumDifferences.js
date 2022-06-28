function sumOfDifferences(arr) {

    let sum = 0;

    arr.reverse();

    if(arr.length === 0){
        return 0;
    } else {
        for(let i = 0; i < arr.length - 1; i++){
            sum += arr[i] - (arr[i + 1]);
        }

        console.log(sum);

        return sum;
    }
}

sumOfDifferences([1, 2, 10]);
sumOfDifferences([-7,16,-3,-23,-16,-16,-4,2,0,10,11,14,-19,13,-17,-20]);
sumOfDifferences([-3, -2, -1]);
sumOfDifferences([-12, -15]);
sumOfDifferences([10,16,16,-5,8,12,11,-6,6,-2,-16,16,11,5]);
sumOfDifferences([-16,-7,-8]);
sumOfDifferences([-1,-2,-2]);