// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>

int square_sum(const int *values, size_t count){

  int sum = 0;

  for(int i = 0; i < count; i++){
    sum += values[i] * values[i];
  }

  return sum;
}

int main(){

  int arr[] = {1, 2, 2};

  square_sum(arr, 3);
}



