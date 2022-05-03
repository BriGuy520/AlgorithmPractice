var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array

    let answer = [];

    for(let i = 0; i < iterable.length; i++){

        let current = iterable[i];
        let prev = iterable[i - 1];

        if(current != prev) answer.push(current);
    }


    return answer;

  }

  uniqueInOrder('AAAABBBCCDAABBB');