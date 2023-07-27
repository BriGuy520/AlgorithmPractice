<?php 

function bouncingBall($h, $bounce, $window) {
    
    $total = 1;

    // your code
    if($h <= $window || $bounce <= 0 || $bounce >= 1 || $h <= 0){

        return -1;

    } else {
    
                
        while($h > $window){  
            
            $h = $h * $bounce;
            
            $total += $h > $window ? 2 : 0;
                
        }
        
        return $total;
    }

}

?>