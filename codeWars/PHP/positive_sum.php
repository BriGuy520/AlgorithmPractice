<?php

function positive_sum($arr) {
  // Your code here
  $total = 0;
  
  foreach($arr as $val){
    if($val >= 0){
      $total += $val;
    }
  }
  
  return $total;
}

?>