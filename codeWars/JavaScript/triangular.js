function triangular( n ) {
  
    let sum = 0;

    if(n <= 0){
        return 0;
    } else {
        while(n > 0){
            sum += n;
            n--;
        }
    }

    console.log(sum);

    return sum;

  }

  triangular(4);
  triangular(3);
  triangular(-10);
  triangular(1);
  triangular(8802346516);