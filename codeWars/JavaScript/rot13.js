// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 
// letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned 
// as they are. Only letters from the latin/english alphabet should be shifted, like in the 
// original Rot13 "implementation".



function rot13(message){

    let newString = '';

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < message.length; i++){

        let rotIdx = alphabet.indexOf(message[i]);
        console.log(rotIdx);

        newString += !rotIdx ? message[i] : rotIdx + 13 < 25 ? alphabet[rotIdx + 13] : alphabet[(rotIdx + 13) % 26] ;
    }

    console.log(newString);
}

rot13('test!'); // grfg
rot13('Test');
rot13('Blob'); //
rot13("chatGPT");
