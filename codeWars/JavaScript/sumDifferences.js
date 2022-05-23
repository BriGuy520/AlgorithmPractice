function sumOfDifferences(arr) {

    let sum = 0;

    if(arr.length === 0){
        return 0;
    } else {
        for(let i = arr.length - 1; i > 0; i--){
            sum += arr[i] + arr[i - 1];
        }
    }
}