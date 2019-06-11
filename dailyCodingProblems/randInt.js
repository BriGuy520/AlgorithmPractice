// Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, 
// implement a function rand5() that returns an integer from 1 to 5 (inclusive).

const rand7 = () => {
  return Math.floor(Math.random() * 7 + 1);
}

const rand5 = () => {
	let store = rand7();
  
  if(store >= 1 && store <= 5){
   	return store; 
  } else {
    return rand7();
  }
}

for(let i = 0; i <= 10; i++){
	console.log(rand5()); 
}

// I think I did this right. 
// Code is entirely my own.