// Sum Numbers
function sum (numbers) {
    "use strict";
      
    return numbers.reduce((sum, number) => sum += number, 0);

  };

  sum([1, 5.2, 4, 0, -1]);
  sum([]);