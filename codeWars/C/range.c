#include <stdio.h>

int get_sum(int a , int b) {
    // Good luck
  
  int sum = 0;
  
  if(a > b){
    int temp = a;
    a = b;
    b = temp;
  }

  printf("a: %d; b: %d\n", a, b);
  
  for(int i = a; i <= b; i++){
    sum += i;
  }

  printf("%d\n", sum);
  
  return sum;
}

int main(){

  get_sum(6, 4);
  get_sum(-1, -10);
  get_sum(-2, 3);


  return 0;
}