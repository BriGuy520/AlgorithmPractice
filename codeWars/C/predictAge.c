#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <stdint.h>

uint64_t predict_age(uint64_t age1, uint64_t age2, uint64_t age3, uint64_t age4, uint64_t age5, uint64_t age6, uint64_t age7, uint64_t age8){

    double total = round((age1 * age1) + (age2 * age2) + (age3 * age3) + (age4 * age4) + (age5 * age5) + (age6 * age6) + (age7 * age7) + (age8 * age8));

    printf("%d\n", (int) sqrt(total) / 2);
    return sqrt(total) / 2;

}

int main(){

    printf("%.2f\n", sqrt(64));

    predict_age(65, 60, 75, 55, 60, 63, 64, 45);
}