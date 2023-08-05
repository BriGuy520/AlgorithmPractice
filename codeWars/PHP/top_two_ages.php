<?php 

// Return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges($ages) {
  
  rsort($ages);
  
  return array($ages[1], $ages[0]);

}

?>