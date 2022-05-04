var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array

    let answer = [];

    for(let i = 0; i < iterable.length; i++){

        let current = iterable[i];
        let prev = iterable[i - 1];

        if(current != prev) answer.push(current);
    }

    let answer2 = iterable.split("").reduce((acc, element, i, arr) => {
        console.log(arr);
        console.log(i);
        if(arr[i] != arr[i - 1]) acc.concat(element);
        
    }, []);
    console.log(answer2);
    return answer;

  }

  uniqueInOrder('AAAABBBCCDAABBB');