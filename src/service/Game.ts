import type { TBoard } from "../model/Board";

export const SIZE = 9;

//Method created arrays
export const initBoard = (): TBoard => {
  const shifts = [0, 3, 6, 1, 4, 7, 2, 5, 8];
  const sourceArray = Array.from({ length: SIZE }, (_, i) => i + 1);

  const sortedSourceArray = sourceArray.sort(() => Math.random() - 0.5);

  const board = shifts.map((shift) => {
    return [
      ...sortedSourceArray.slice(shift),
      ...sortedSourceArray.slice(0, shift),
    ];
  });

  return board;
};

//Create validation method
export const isAttemptValid = (
  board: TBoard,
  row: number,
  col: number,
  attempt: number,
): boolean => {
  return board[row][col] === attempt;
};
