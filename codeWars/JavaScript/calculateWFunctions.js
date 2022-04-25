// function zero() { };
// function one(func) { return func(1)};
// function two(func) { return func(2) };
// function three() { return func1(3, func) };
// function four() { return 4 };
// function five() { return 5 };
// function six() { return 6 };
// function seven() { return 7 };
// function eight() { return 8 };
// function nine() { return 9 };

// function plus(num, func) { return num + func(x) };
// function minus(func) { return func(x) };
// function times(func) { return func(x) };
// function dividedBy(func) { return func(x) };

function one(...args) {

  console.log(args);

  if(arguments.length === 0){
    return 1;
  } else {
    console.log(args );
  }
}

function three(){

  if(arguments.length === 0){
    return 3;
  } else {

  }
}

function plus(fn){
  
  return `${fn} + `;
}

console.log(one(plus(three())));