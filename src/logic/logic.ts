const ROWS = 9;
const COLS = 9;
//Method created arrays
export const startNewGame = (): Array<Array<number | null>> => {
  //create empty board
  const board = Array(ROWS)
    .fill(null)
    .map(() => Array(COLS).fill(null));

  //Fill board with random numbers
  initBoard(board);

  return board;
};

//Method that populates arrays with random numbers
const initBoard = (board: Array<Array<number | null>>): void => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = generateUniqueNumber(board[i]);
    }
  }
};

const generateUniqueNumber = (row: Array<number | null>) => {
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  if (row.includes(randomIndex)) generateUniqueNumber(row);
  return randomIndex;
};

//Create validation method
export const validate = (
  board: Array<Array<number | null>>,
  row: number,
  col: number,
  attempt: number,
): boolean => {
  return board[row][col] === attempt;
};
