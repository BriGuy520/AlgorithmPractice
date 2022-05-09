function printerError(s) {
    // your code


    let regex = /[n-z]/g;

    // for(let i = 0; i < s.length; i++){
    //     if(s.charCodeAt(i) > 109){
    //         errors++;
    //     }
    // }

    return s.match(regex).length != null ? `${s.match(regex).length}/${s.length}` : `0/${s.length}`;
}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");