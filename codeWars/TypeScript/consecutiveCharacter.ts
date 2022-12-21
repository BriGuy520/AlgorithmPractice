export function longestRepetition (text: string): [string, number] {

    let longest: number = 0;
    let character: string = '';

    while(text.length > 0){
        let matches: string = text.match(new RegExp(`^${text[0]}*`, 'g'))!.join('');

        if(matches.length > longest) {
          longest = matches.length;
          character = text[0];
        } 
        
        text = text.slice(matches.length, text.length);

      }

      
    return [character, longest];
}


longestRepetition('aaabbbbbccdddddeee');

