export function longestRepetition (text: string): [string, number] {

    let longest: number = 0;
    let character: string = '';

    for(let i: number = 0; i < text.length; i++){
        let matches: string = text.match(new RegExp(`^${text[i]}*`, 'g'))!.join('');

        if(matches.length > longest) {
          longest = matches.length;
          character = text[i];
        } 
        
        text = text.slice(matches.length, text.length);

        console.log(text);
    }

    console.log([character, longest]);

    return [character, longest];
}


longestRepetition('aaabbbbbccdddddeee');

