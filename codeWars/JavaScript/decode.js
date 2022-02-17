function decode(r) {
  // your code
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numRegex = /\d/g
  let letterRegex = /\D/g;

  console.log(parseInt(r.match(numRegex).join("")));

}

decode("1273409kuqhkoynvvknsdwljantzkpnmfgf");