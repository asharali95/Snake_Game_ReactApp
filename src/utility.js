// utility functions


export var randomNumberFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; // this function will decide a random place where the snake food will be.

export const createBoard = (BOARD_SIZE) =>{ // this function is basically creating a 2D Array along with a number in order
    var count = 1;                          // to track cells
    const board = [];
    for(var row = 0 ; row< BOARD_SIZE ; row++){
      const currentRow = []
      for(var col = 0; col < BOARD_SIZE ; col++ ){
          currentRow.push(count++)
      }
      board.push(currentRow);
    }
    return board;
}