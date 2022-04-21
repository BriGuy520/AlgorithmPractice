// Sum Numbers
function sum (numbers) {
    "use strict";
    
    let sum = 0;
      
    numbers.forEach(number => number != null ? sum = sum + number : 0);

    return sum;
  };

  sum([1, 5.2, 4, 0, -1]);
  sum([]);