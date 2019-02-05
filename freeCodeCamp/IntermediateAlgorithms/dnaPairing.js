// Intermediate Algorithm Scripting: DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
// Return the provided character as the first element in each array.
//
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function pairElement(str){
  return str.split('').reduce((acc, char) => {
    let newArr = [];
    switch(char){
      case "G":
       newArr.push(char, "C");
        acc.push(newArr);
        return [...acc];
      case "C":
       newArr.push(char, "G");
       acc.push(newArr);
       return [...acc]
      case "A":
       	newArr.push(char, "T");
        acc.push(newArr);
        return [...acc];
      case "T":
       newArr.push(char, "A");
       acc.push(newArr);
       return [...acc]
      default:
    		return acc;
    }
  }, []);
}

// This answer is completely my own

// This answer passed all tests at freeCodeCamp.org
