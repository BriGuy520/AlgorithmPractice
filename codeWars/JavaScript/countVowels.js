// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){

    let vowelCount = 0;
    const vowels = "aeiou";

    str.split("").forEach(letter => {
        if(vowels.includes(letter)){
            vowelCount++;
        }
    });

    console.log(vowelCount);

    return vowelCount;
}

getCount("Hello this is working as it should");