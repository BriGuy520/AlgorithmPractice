<?php

function partsSums($ls) {
    // your code

    $total = [];

    if(count($ls) == 0) return 0;

    while(count($ls) > 0){
        
        array_push($total, array_sum($ls));
        
        $ls = array_slice($ls, 1);
    }

    array_push($total, 0);

    return $total;
}

  ?>