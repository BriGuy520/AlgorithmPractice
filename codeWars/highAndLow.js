// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

const highAndLow = (numbers) => {
  
  let sortArr = numbers.split(" ").map(int => Number.parseInt(int)).sort((a, b) => a - b);
  
  return [].concat(sortArr[sortArr.length - 1], sortArr[0]).join(" ");
}

highAndLow("1 5 3 4 -2");