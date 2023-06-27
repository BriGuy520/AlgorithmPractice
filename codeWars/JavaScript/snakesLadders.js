var snakesAndLadders = function(board, dice) {
  // Your code here

  let boardIdx = 0;

  for(let i = 0; i < dice.length; i++){

    boardIdx = dice[i] + boardIdx <= board.length - 1 ? dice[i] + boardIdx : boardIdx;

    if(board[boardIdx] != 0 && boardIdx + board[boardIdx] <= board.length - 1){
      boardIdx += board[boardIdx];
    }

  }

  console.log(boardIdx);
  
  return boardIdx;
}

var dice = [2,1,5,1,5,4];
var board = [0,0,3,0,0,0,0,-2,0,0,0];

snakesAndLadders(board, dice); // 10