var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array

    let sortedList = iterable.split("").sort((a, b) => b - a);

    console.log(new Set(sortedList));

  }

  uniqueInOrder('AAAABBBCCDAABBB');