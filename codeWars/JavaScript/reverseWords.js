function reverseWords(str) {
    // Go for it
    
    return str.split(" ").map(v => v.split('').reverse().join('')).join(' ');
  }