<?php 
function generateHashtag($str) {
  
  $line = preg_replace_callback(
        '/(?<=\s)./',
        function ($matches) {
            return strtoupper($matches[0]);
        },
        $str
    );
    
  
  $condense_string = str_replace(" ", "", $line);
  $condense_string[0] = strtoupper($condense_string[0]);
  
  if(strlen($condense_string) > 140 || strlen($condense_string) == 0) return false;
  
  return "#" . $condense_string;
 
}

?>


<!DOCTYPE html>
<html>
<head>
    <title>Hastag</title>
</head>
<body>
   
    <p><?php echo generateHashtag("this is a string"); ?></p>
</body>
</html>