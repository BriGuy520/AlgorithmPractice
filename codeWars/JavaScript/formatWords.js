function formatWords(words){

    console.log(words.join(" ").split(" ").length);

    switch(words.length){
        case 0:
            return "";
            break;
        case 1:
            return words[0];
            break;
        case 2:
            return `${words[0]} and ${words[1]}`;
            break;
        default:
            for(let i = 0; i < words.length - 2; i++){
                if(words[i] != ""){
                    words[i] += ", ";
                }
            }
    
            words[words.length - 2] += " and ";
    
            return words.join("");
            break;
    }
}

formatWords(['one', 'two', 'three', '', 'four']);


