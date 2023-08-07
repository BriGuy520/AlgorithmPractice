<?php

function partsSums($ls) {
    // your code
    
    $total_arr = [];
    $sum = array_sum($ls);
    
    if(count($ls) == 0) return [0];
    
    array_push($total_arr, $sum);
    
    for($i = 0; $i < count($ls); $i++){
        
        array_push($total_arr, $sum - $ls[$i]);
      
        $sum -= $ls[$i];
    }
      
    return $total_arr;
  }

  ?>