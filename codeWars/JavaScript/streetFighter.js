function streetFighterSelection(fighters, position, moves){
  
  let board = new Array();
  
  for(let i = 0; i < moves.length; i++){
    if(moves[i] === 'left'){
      position[1] = position[1] - 1 < 0 ? fighters[position[0]].length - 1 : position[1] - 1;
      board.push(fighters[position[0]][position[1]]);
    } else if(moves[i] === 'right'){
      position[1] = position[1] + 1 > fighters[position[0]].length - 1 ? 0 : position[1] + 1;
      board.push(fighters[position[0]][position[1]]);
    } else if(moves[i] === 'up'){
      position[0] = 0;
      board.push(fighters[position[0]][position[1]]);
    } else {
      position[0] = 1;
      board.push(fighters[position[0]][position[1]]);
    }
  }
  
  return board;
}

const fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];


const moves = ['up', 'left', 'right', 'left', 'left'];

let position = [0, 0];
console.log(fighters[position[0]].length);

streetFighterSelection(fighters, position, moves);