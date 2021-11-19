// Write a function that takes in a binary string and returns the equivalent decoded text 
// (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.

binaryToText = (binary) => {

    let arr = [];
    let binaryAdd = [128, 64, 32, 16, 8, 4, 2, 1]
    let ascii = [];
    total = 0;

    for(let i = 0; i < binary.length; i += 8){
        arr.push(binary.slice(i, i + 8));
    }

    arr.forEach(byte => {

        let bits = byte.split("")

        for(let j = 0; j < bits.length; j++){
            total += bits[j] * binaryAdd[j];
        }

        ascii.push(String.fromCharCode(total));
        total = 0;
    });

    return ascii.join('');
}

binaryToText('01001011010101000100100001011000010000100101100101000101')