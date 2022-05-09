function printerError(s) {
    // your code
    let errors = 0;

    for(let i = 0; i < s.length; i++){
        if(s.charCodeAt(i) > 109){
            errors++;
        }
    }

    return `${errors}/${s.length}`;
}