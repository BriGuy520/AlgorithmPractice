// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the 
// number of red beads.

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it 
// returns the number of red beads.

// If there are less than 2 blue beads return 0.

unsigned int countRedBeads (int n)
{
  
  if(n > 1){
    return n * 2 - 2;  
  } else {
    return 0;
  }

}

int main(){

  countRedBeads(3);
  countRedBeads(0);
  countRedBeads(1);
  countRedBeads(44);
}