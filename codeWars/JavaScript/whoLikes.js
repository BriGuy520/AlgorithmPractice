function likes(names) {
  // TODO

  if(names.length == 0){
    return 'no one likes this';
  } else if(names.length == 1){
    names[0] += " likes this";
  } else if(names.length == 2){
    names[0] += " and";
    names[1] += " like this";
  } else {
    if(names.length < 4){
      for(let i = 0; i < names.length - 1; i++){
        if(i != names.length - 2){
          names[i] += ',';
        } else {
          names[i] += ' and';
          names[i + 1] += " like this";
        }
      }
    } else {
      names[0] += ',';
      names[1] += ' and';
      names[2] = names.length - 2 + ' others like this';

      for(let i = names.length - 1; i > 2; i--){
        names.pop(i);
      }
    }
  }

    return names.join(" ");
}


likes(['Maddy', 'Brian']);
likes(['Jennifer', 'Bill', 'Scott']);
likes(['Tom', 'Maddy', 'Kathryn', 'Tony']);
likes(['Greg', 'Jane', 'Chris', 'Colin', 'Ivan']);