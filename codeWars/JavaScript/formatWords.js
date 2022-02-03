// Complete the method so that it formats the words into a single comma separated value. The last word should be 
// separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""


function formatWords(words){

    let result = words.filter(word => word != "").filter(word => word != ", ");
    console.log(result);

    if(words == null) return "";

    switch(result.length){
        case 0:
            return "";
            break;
        case 1:
            return result[0];
            break;
        case 2:
            return `${result[0]} and ${result[1]}`;
            break;
        default:
            for(let i = 0; i < result.length - 2; i++){
                if(result[i] != ""){
                    result[i] += ", ";
                }
            }
    
            result[result.length - 2] += " and ";

            console.log(result.join(""));

    
            return result.join("");
            break;
    }
}

formatWords(null);

formatWords(['one','two', '',", "]);

formatWords(['one', 'two', '', 'three', '', 'four']);


