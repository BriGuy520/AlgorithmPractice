function inArray(a1: string[], a2: string[]): string[] {

    let answer = [];

    for(let i: number = 0; i < a1.length; i++){

        let regex = new RegExp(`${a1[i]}`, 'g');

        for(let j: number = 0; j < a2.length; j++){

            if(a2[j].match(regex)){
               answer.indexOf(a1[i]) === -1 ? answer.push(a1[i]) : '';
            }
        }

    }

    return answer.sort();
}

inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']);

// ['arp', 'live', 'strong']