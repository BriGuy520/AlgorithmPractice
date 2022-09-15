function expressionMatter(a, b, c) {
  // highest achievable result
   
   let high = 0;
   
   if(a + b + c > high){
     high = a + b + c;
   }
   
   if(a * (b + c) > high){
     high = a * (b + c);
   }
   
   if((a + b) * c > high){
     high = (a + b) * c;
   }
   
   if(a + b * c > high){
     high = a + b * c;
   }
   
   if(a * b * c > high){
     high = a * b * c;
   }
   
   
   return high;
   
 }