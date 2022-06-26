function remove (string) {
    //coding and coding....
    const regex = /[A-Za-z]?(!)/g;
    console.log(string.match(regex));
    return '';
  }

  remove("Hi! Hi! Hi! Hi !Hi");