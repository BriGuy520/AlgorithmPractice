<?php 

    function wave($people){
    
    $wave_arr = array();

    //good luck!
    for($i = 0; $i < strlen($people); $i++){
        
        
        $people[$i] = strtoupper($people[$i]);
        
        if($people[$i] != " "){
        
        array_push($wave_arr, $people);
        }
        
        $people = strtolower($people);
        
    }
    
    return $wave_arr;
    }

?>