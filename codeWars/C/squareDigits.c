#include <stdio.h>

unsigned long long square_digits(unsigned n){

    int digit = n % 10;

    n /= 10;

    printf("%d", n);
    return 0;
}

int main(){

    square_digits(1129);
}