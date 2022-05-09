function printerError(s) {
    // your code


    let regex = /[n-z]/g;

    // for(let i = 0; i < s.length; i++){
    //     if(s.charCodeAt(i) > 109){
    //         errors++;
    //     }
    // }

    console.log(s.match(regex) != null ? `${s.match(regex).length}/${s.length}` : `0/${s.length}`);

    return s.match(regex) != null ? `${s.match(regex).length}/${s.length}` : `0/${s.length}`;
}

printerError("aaabbbbhaijjjm");
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");

function printerError(s) {
    // your code


    let errors = 0;

    // for(let i = 0; i < s.length; i++){
    //     if(s.charCodeAt(i) > 109){
    //         errors++;
    //     }
    // }


