function fridayTheThirteenths(start, end) {

  let arr = [];
  let months = start === end || !end ? 12 : (end - start + 1) * 12;

  for(let i = 0; i < months; i++){

    let date = new Date(start, i, 13);

    if(date.getDay() === 5) arr.push(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
  }

  return arr.join(" ");

}

fridayTheThirteenths(1999, 2000);
fridayTheThirteenths(1970, 1970);
fridayTheThirteenths(1909);