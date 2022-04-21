// Sum Numbers
function sum (numbers) {
    "use strict";
      
    return numbers.reduce((sum, number) => number != null ? sum += number : 0, 0);
  };

  sum([1, 5.2, 4, 0, -1]);
  sum([]);