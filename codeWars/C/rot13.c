#include <stddef.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char *rot13(char *src)
{

    for(int i = 0; src[i] != '\0'; i++){

      if((src[i] >= 65 && src[i] < 78) || (src[i] >= 97 && src[i] < 110)){
        src[i] += 13;
      } else if((src[i] >= 78 && src[i] <= 90) || (src[i] >= 110 && src[i] <= 122)){
        src[i] -= 13;
      }
    }

    return src;
}


int main(){

  char pass_in[] = "Test";

  rot13(pass_in);

  for(int i = 0; pass_in[i] != '\0'; i++){
    printf("%c", pass_in[i]);
  }

  printf("\n%s\n", pass_in);
}