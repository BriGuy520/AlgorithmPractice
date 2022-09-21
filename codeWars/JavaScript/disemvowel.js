function disemvowel(str) {
  let regex = /[^AEIOUaeiou]/g
  return str.match(regex).join("");
}