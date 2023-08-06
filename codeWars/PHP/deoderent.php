<?php

function evaporator($content, $evap_per_day, $threshold) {
    // your code
    $days = 0;
    $total_threshold = $content * ($threshold / 100)
  
    while($content > $total_threshold){
      
      $days++;
      
      $content = $content - ($content * ($evap_per_day / 100));
      
    }
  
    return $days;
  
}

?>