// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)


function dataReverse(data){
  
  let newArr = [];
  let finalArr = [];
  
  for(let i = 0; i < data.length; i++){
    
    if(newArr.length < 8){
      newArr.push(data[i]);
    } else {  
      finalArr.push(newArr.join(""));
      i--;
      newArr = [];
    }
  }
  
  return finalArr.concat(newArr.join("")).reverse().join("").split("").map(Number);
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];

dataReverse(data1);