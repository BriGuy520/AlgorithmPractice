// The main idea is to count all the occuring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }


function count (string) {  
  // The function code should be here
   return string.split("").reduce((acc, char) => {
     	if(acc[char] === undefined){
       	acc[char] = 1; 
      } else {
   		  acc[char] += 1;
      }
     
     return acc;
   }, {});
}

count("abba");