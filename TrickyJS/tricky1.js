// what is the answer to the question below and why?

const x = [1,2,3];

x[-1] = -1;

console.log(x[x.indexOf(10000)]);

// This will console log -1 because we don't have an index of 10000 
// and indexOf will return -1 as a result.

// Since we set x[-1] = -1 and now we are console logging x[-1], we 
// will get -1;