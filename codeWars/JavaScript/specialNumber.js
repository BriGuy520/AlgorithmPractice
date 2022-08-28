function specialNumber(n){
  //your code here
  return n.toString().split("").every(value => value >= 0 && value <= 5) ? "Special!!" : "NOT!!";
}