// Harshad numbers (also called Niven numbers) are positive numbers that can be divided (without remainder) by the sum of their digits.

// For example, the following numbers are Harshad numbers:

// 10, because 1 + 0 = 1 and 10 is divisible by 1
// 27, because 2 + 7 = 9 and 27 is divisible by 9
// 588, because 5 + 8 + 8 = 21 and 588 is divisible by 21
// While these numbers are not:

// 19, because 1 + 9 = 10 and 19 is not divisible by 10
// 589, because 5 + 8 + 9 = 22 and 589 is not divisible by 22
// 1001, because 1 + 1 = 2 and 1001 is not divisible by 2
// Harshad numbers can be found in any number base, but we are going to focus on base 10 exclusively.

// Your task
// Your task is to complete the skeleton Harshad object ("static class") which has 3 functions:

// isValid() that checks if n is a Harshad number or not
// getNext() that returns the next Harshad number > n
// getSerie() that returns a series of n Harshad numbers, optional start value not included
// You do not need to care about the passed parameters in the test cases, they will always be valid integers 
// (except for the start argument in getSerie() which is optional and should default to 0).

// Note: only the first 2000 Harshad numbers will be checked in the tests.

// Examples
// Harshad.isValid(1)         ==>  true
// Harshad.getNext(0)         ==>  1
// Harshad.getSerie(3)        ==>  [ 1, 2, 3 ]
// Harshad.getSerie(3, 1000)  ==>  [ 1002, 1008, 1010 ]

/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      // Your implementation goes here
        let intToStr = number.toString().split("");
  
        let intAdded = intToStr.reduce((acc, backToInt) => {
          acc += Number(backToInt);
          return acc;
        }, 0);
        
        return number % intAdded === 0 ? true : false;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      // Your implementation goes here
      for(let i = number + 1; i <= 2000; i++){
        let intToStr = i.toString().split("");
      
        let intAdded = intToStr.reduce((acc, backToInt) => {
          return acc + Number(backToInt);
        }, 0);
        
        if(i % intAdded === 0){
          return i;
        }
      }
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      // Your implementation goes here
     
      let arr = [];
      let startInt;
      
    if(arguments.length < 2){
        startInt = 0;
    } else {
        startInt = start;
    }

    for(let i = startInt + 1; i <= 200000; i++){
      let intToStr = i.toString().split("");
    
      let intAdded = intToStr.reduce((acc, backToInt) => {
        return acc + Number(backToInt);
      }, 0);
      
      if(i % intAdded === 0 && arr.length < count){
        arr.push(i);
      }
    }
    return arr;

    }
  };

} () );


// Answers to Learn From 

var Harshad = { 
  isValid(n) { return n % (''+n).split('').reduce((s, d) => s + +d, 0) == 0; },
  getNext(n) { while (!this.isValid(++n)); return n; },
  getSerie(count, start = 0) { 
    for (var list = []; list.length < count; list.push(start))
      start = this.getNext(start);
    return list;
  }
}


const isv=n=>n%[...n+""].reduce((a,b)=>+b+a,0)==0,
      nxt=n=>isv(++n)?n:nxt(n),
      gsr=(c,s=0,r=[])=>r.length<c?(n=nxt(s),gsr(c,n,r.concat(n))):r
var Harshad = ( function() {
  return {
    isValid: isv,
    getNext: nxt,
    getSerie: gsr
  }
} () );
