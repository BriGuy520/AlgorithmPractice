function high(x){

  let alphabet = '0abcdefghijklmnopqrstuvwxyz'.split('');
  let high = 0;
  let wordLength = 0;
  let highWord = "";

  console.log(alphabet);
  
  x.toLowerCase().split(' ').map(word => {
    for(let i = 0; i < word.length; i++){
      console.log(alphabet.indexOf(word[i]));
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


