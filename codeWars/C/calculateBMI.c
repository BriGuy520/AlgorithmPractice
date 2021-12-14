// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

/*    N.B. do not allocate memory,
   instead: return a string literal  */
#include <stdio.h>
#include <stdlib.h>

const char *bmi (int weight, double height)
{

    double calculateBMI = weight / (height * height);
    //  <----  hajime!

    if(calculateBMI <= 18.5){
        return "Underweight";
    } else if(calculateBMI <= 25.0){
        return "Normal";
    } else if(calculateBMI <= 30.0){
        return "Overweight";
    } else {
        return "Obese";
    }
}

int main(){ 

    bmi(50, 1.80);
    bmi(80, 1.80);
    bmi(90, 1.80);
    bmi(110, 1.80);
    bmi(50, 1.50);    
}