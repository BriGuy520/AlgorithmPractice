function streetFighterSelection(fighters, position, moves){
    let hovered = [];

    let cursor = fighters[position[0]][position[1]];

    for(let i = 0; i < moves.length; i++){

      if(moves[i] === 'left'){
        if(position[0] === 0){
          cursor.push(fighters[0][fighers[0].length - 1]);  
        } else if(position[1] === 0){
          cursor.push(fighters[1][fighters[1].length - 1]);
        } else {
          if(position[0] === 0){
            cursor.push(fighters[0][position[1] - 1]);
          } else {
            cursor.push(fighters[1][position[1] + 1]);
          }
        }
      } else if(moves[i] === 'right'){

        if(position[0] === 0){
          cursor.push(fighters[0][fighers[0].length - 1]);  
        }

        if(position[1] === 0){
          cursor.push(fighters[1][fighters[1].length - 1]);
        }

      } else if(moves[i] === 'down'){

      } else {

      }
    }

    return "";
  }

  const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ];
 const initial_position = [0,0];
 const moves = ['up', 'left', 'right', 'left', 'left'];

 streetFighterSelection(fighters, initial_position, moves);