// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 
// letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned 
// as they are. Only letters from the latin/english alphabet should be shifted, like in the 
// original Rot13 "implementation".



function rot13(message){

    let newString = '';

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlphabet = alphabet.toUpperCase();

    for(let i = 0; i < message.length; i++){

        let lowerIdx = alphabet.indexOf(message[i]);
        let upperIdx = upperAlphabet.indexOf(message[i]);

        if(lowerIdx !== -1){
            newString += lowerIdx + 13 < 25 ? alphabet[lowerIdx + 13] : alphabet[(lowerIdx + 13) % 26] ;
        } else if(upperIdx !== -1){
            newString += upperIdx + 13 < 25 ? upperAlphabet[upperIdx + 13] : upperAlphabet[(upperIdx + 13) % 26] ;
        } else {
            newString += message[i];
        }
    }

    return newString;
}

rot13('DKJSDF');
rot13('test!930');
rot13('Test');
