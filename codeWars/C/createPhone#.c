// Write a function that accepts an array of 10 integers (between 0 and 9), that 
// returns a string of those numbers in the form of a phone number.

// Example
// create_phone_number(phnum, (const unsigned char[]){1,2,3,4,5,6,7,8,9,0});
//     /* phnum <- "(123) 456-7890" */
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *create_phone_number(char phnum[15], const unsigned char nums[10])
{

    phnum[0] = 40;
    phnum[4] = 41;
    phnum[5] = 32;
    phnum[9] = 45;
    char digits[15];
    int k = 0;



    for(int i = 1;  i < 15; i++){

      if(i != 0 && i != 4 && i != 5){
        phnum[i] = sprintf(digits, "%d", nums[k++]);
      }
    }

    printf("%s\n", phnum);


    return phnum;
}

int main(){

  char phnum[15];

  create_phone_number(phnum, (unsigned char[]){2, 2, 4, 2, 1, 3, 3, 4, 3, 4});

}