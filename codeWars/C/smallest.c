// You have a positive number n consisting of digits. You can do at most one operation: 
// Choosing the index of a digit in the number, remove this digit at that index and insert 
// it back to another or at the same place in the number in order to find the smallest number 
// you can get.

// Task:
// Return an array or a tuple or a string depending on the 
// language (see "Sample Tests") with

// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.
// Examples:
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

long long* smallest(long long n) {
  // your code

  char StringInteger[100];
  sprintf(StringInteger, "%d", n);

  int digitLength = strlen(StringInteger);
  int j = digitLength - 1;
  long long k = 0;
  int arr[] = {};

  while(n > 0){

    int remainder = n % 10;

    arr[j--] = remainder;

    n = n / 10;
  }

  int smallestNumber = arr[0];
  int indexOfSmallestNumber;

  for(int i = 0; i < digitLength; i++){
    if(arr[i] <= smallestNumber){
      smallestNumber = arr[i];
      indexOfSmallestNumber = i;
    }
  }

  if(indexOfSmallestNumber != 0){
    int temp = arr[indexOfSmallestNumber];
    
    for(int i = indexOfSmallestNumber; i > 0; i--){
      arr[i] = arr[i - 1];
    }

    arr[0] = temp;
  }



  for(int i = 0; i < digitLength; i++){
    k = 10 * k + arr[i];
  }

  printf("%d, %d\n", k, indexOfSmallestNumber);

  return 0;
}


int main(){


  smallest(261235);
  smallest(209917);
}