// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite
// a lot so is a good one to know.


const maps = ([...arr]) => {
	return arr.map(int => int * 2);
}

maps([1,2,3]);