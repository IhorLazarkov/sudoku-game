import type { TBoard } from "../model/Board";

export const SIZE = 9;

export const emptyBoard = (): TBoard => {
  const board: TBoard = {};
  Array.from({ length: SIZE }, (_, i) => i + 1).forEach(n => {
    board[n] = Array.from({ length: SIZE }, (_, i) => i + 1).map(() => ({
      value: null,
      state: "EMPTY",
    }));
  });
  return board;
};

//Method created arrays
export const initBoard = (): Array<Array<number | null>> => {
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
  return board[row][col].value === attempt;
};
