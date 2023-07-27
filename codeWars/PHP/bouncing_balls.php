<?php 

function bouncingBall($h, $bounce, $window) {

    $total = 0;

    // your code
    if($h <= $window || $bounce <= 0 || $bounce >= 1 || $h <= 0){

        return -1;
        
    } else {
    
        $total = 1;
                
        while($h > $window){
            
            
            $h = $h * $bounce;
            
            if($h > $window){
                $total += 2;
            }
                
        }
        
        return $total;
    }

}

?>