function lastManStanding(n){
    // Good Luck!
    let arr = [];
    let passes = 1;

    for(let i = 2; i <= n; i += 2){
      arr.push(i);
    }

    let j = arr.length - 1;

    while(arr.length != 1){
      
      console.log(arr);

      if(passes % 2 === 1){
        console.log("J: " + j);
        arr.splice(j, 1);

        if(j >= 0){
          j -= 2;
        } else {
          passes++;

          if(j < 0) j = 0;
        }
      } else {
        console.log(": " + j);
        arr.splice(j, 1);

        j += 2;

        if(j >= arr.length - 1){
          passes++;

          if(j > arr.length - 1) j = arr.length - 1;
        }
      } 
    }

    return arr.join("");
}

lastManStanding(10); // 8
