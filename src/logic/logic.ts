const SIZE = 9;
const ROW = 3;
const COLUMN = 3;
//Method created arrays
export const startNewGame = (): Array<Array<Array<number | null>>> => {
  //create empty board
  const board = Array(ROW).fill(Array(COLUMN).fill(Array(SIZE)));

  //Fill board with random numbers
  initBoard(board);

  return board;
};

//Method that populates arrays with random numbers
const initBoard = (board: Array<Array<Array<number | null>>>): void => {
  //iterate rows and columns of matrix 3x3
  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COLUMN; col++) {
      //init array(9) with random numbers
      const arrLeft = col > 0 ? board[row][col - 1] : [];
      const arrTop = row > 0 ? board[row - 1][col] : [];
      board[row][col] = [];
      initArrayWithRandomNumbers(board[row][col], arrLeft, arrTop);
    }
  }
};

export const initArrayWithRandomNumbers = (
  array: Array<number | null>,
  arrLeft: Array<number | null> = [],
  arrTop: Array<number | null> = [],
): void => {
  //form set with numbers to exclude
  if (arrTop.length > 0 && arrLeft.length > 0) {
    const sourceArray = Array.from({ length: SIZE }, (_, i) => i + 1);
    for (let axelX = 0, axelY = 0; axelX < SIZE; axelX += COLUMN, axelY++) {
      const lefRowExclude = arrLeft.slice(axelX, axelX + COLUMN);
      const topColumnExclude = [
        arrTop[axelY],
        arrTop[axelY + 3],
        arrTop[axelY + 6],
      ];
      for (let i = axelX; i < COLUMN + axelX; i++) {
        const allExclude = new Set([
          ...array,
          ...topColumnExclude,
          ...lefRowExclude,
        ]);
        const allowed = sourceArray.filter((num) => !allExclude.has(num));
        const num = allowed[allowed.length - 1]
        array.push(num);
      }
    }
  } else if (arrTop.length === 0 && arrLeft.length > 0) {
    const sourceArray = Array.from({ length: SIZE }, (_, i) => i + 1);
    for (let axelX = 0; axelX < SIZE; axelX += COLUMN) {
      for (let i = axelX; i < COLUMN + axelX; i++) {
        const arrExclude = new Set([
          ...array,
          ...arrLeft.slice(axelX, axelX + COLUMN),
        ]);
        const allowed = sourceArray.filter((num) => !arrExclude.has(num));
        const randomIndex = Math.floor(Math.random() * allowed.length);
        const randomNum = allowed[randomIndex];
        array.push(randomNum);
      }
    }
  } else if (arrTop.length > 0 && arrLeft.length === 0) {
    /**
     * [1,2,3,
     * 4,5,6,
     * 7,8,9]
     */
    const sourceArray = Array.from({ length: SIZE }, (_, i) => i + 1);
    for (let axelX = 0, axelY = 0; axelX < SIZE; axelX += COLUMN, axelY++) {
      for (let i = axelY; i < COLUMN + axelY; i++) {
        const arrExclude = new Set([
          ...array,
          ...[arrTop[axelY], arrTop[axelY + 3], arrTop[axelY + 6]],
        ]);
        const allowed = sourceArray.filter((num) => !arrExclude.has(num));
        const randomIndex = Math.floor(Math.random() * allowed.length);
        const randomNum = allowed[randomIndex];
        array.push(randomNum);
      }
    }
  } else {
    // when both additional arrays are empty
    const sourceArray = Array.from({ length: SIZE }, (_, i) => i + 1);
    for (let i = 0; i < SIZE; i++) {
      const allExclude = new Set([...array]);
      const allowed = sourceArray.filter((num) => !allExclude.has(num));
      const randomIndex = Math.floor(Math.random() * allowed.length);
      const randomNum = allowed[randomIndex];
      array.push(randomNum);
    }
  }
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
