// Directions 

// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a', 'e'
// 'i', 'o', 'u'

// Examples 

//  vowels('Hi There!') -> 3
// vowels('Why do you ask?') -> 4
// vowels('Why?') -> 0

function vowels(str){
    const vowels = 'aeiou'.split('');
    let count = 0;
    
    str.toLowerCase().split('').forEach(char => {
        vowels.forEach(vowel => {
            if(char === vowel){
                count++;
            }
        });
    });

    return count;

}

vowels('Hi There!');

function regexVowels(str){
    const regex = /[aeiou]/gi;
    return str.match(regex).length;   
}