// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){

  let alphabet = '0abcdefghijklmnopqrstuvwxyz'.split('');
  let high = 0;
  let wordLength = 0;
  let highWord = "";
  
  x.toLowerCase().split(' ').map(word => {
    for(let i = 0; i < word.length; i++){
      wordLength += alphabet.indexOf(word[i]);
    }

    if(wordLength > high){
      high = wordLength;
      highWord = word;
    }

    wordLength = 0;
  });
  
  return highWord;

}

high('man i need a taxi up to ubud');


