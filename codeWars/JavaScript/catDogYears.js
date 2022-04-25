var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!

    if(humanYears === 1){
        return [1, 15, 15]
    } else if(humanYears === 2){
        return [2, 24, 24];
    } else {
        let catYears = 24 + ((humanYears - 2) * 4); 
        let dogYears = 24 + ((humanYears - 2) * 5); 
        return [humanYears, catYears, dogYears]
    }

    return [0,0,0];
  }