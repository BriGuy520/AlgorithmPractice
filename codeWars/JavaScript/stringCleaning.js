function stringClean(s){
    // Function will return cleaned string
    let regex = /[^0-9]/g
    
    return s.match(regex) != null ? s.match(regex).join("") : '';

}

stringClean('! !');
stringClean('123456789');
stringClean('This looks5 grea8t!');