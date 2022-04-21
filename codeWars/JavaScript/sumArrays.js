// Sum Numbers
function sum (numbers) {
    "use strict";
    
    let sum = 0;
      
    return numbers.forEach(number => number != null ? sum += number : 0);
      
  };

  sum([1, 5.2, 4, 0, -1]);