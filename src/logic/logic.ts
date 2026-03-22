const SIZE = 9;
//Method created arrays
export const startNewGame = (): Array<Array<number | null>> => {
  const sourceArray = Array.from({ length: SIZE }, (_, i) => i + 1);

  const sortedSourceArray = sourceArray.sort(() => Math.random() - 0.5);

  const shifts = [0, 3, 6, 1, 4, 7, 2, 5, 8];

  const result = shifts.map((shift) => {
    return [
      ...sortedSourceArray.slice(shift),
      ...sortedSourceArray.slice(0, shift),
    ];
  });

  return result;
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
