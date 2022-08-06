function nthSmallest(arr, pos){
    //your code here
    
    return arr.sort((a, b) => a - b)[pos - 1];
}