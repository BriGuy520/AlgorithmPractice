// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 
// letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned 
// as they are. Only letters from the latin/english alphabet should be shifted, like in the 
// original Rot13 "implementation".

function rot13(message){

    let newString = '';

    let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlphabet = lowerAlphabet.toUpperCase();

    for(let i = 0; i < message.length; i++){

        let lowerIdx = lowerAlphabet.indexOf(message[i]);
        let upperIdx = upperAlphabet.indexOf(message[i]);

        if(lowerIdx !== -1){
            newString += rotConversion(lowerIdx, lowerAlphabet);
        } else if(upperIdx !== -1){
            newString += rotConversion(upperIdx, upperAlphabet);
        } else {
            newString += message[i];
        }
    }

    return newString;
}


function rotConversion(idx, alphaCase){

    return idx + 13 < 25 ? alphaCase[idx + 13] : alphaCase[(idx + 13) % 26] ;

}

rot13('DKJSDF');
rot13('test!930');
rot13('Test');
