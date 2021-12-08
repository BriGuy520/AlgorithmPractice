// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1

function sum(num) {
  let outArr = [];
  let innArr = [];
	for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num; j++){
      innArr.push(i);
    }
    outArr.push([...new Set(innArr)]);
  }
  
  return [...new Set(outArr)];
}

sum(10);