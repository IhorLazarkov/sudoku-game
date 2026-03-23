import { Board, type TCell } from "../model/Board";
import { initBoard, SIZE } from "../service/Game";

const notFalsy = ({ value, state }: TCell) =>
  value !== null && value > 0 && value < 10;

describe("Game Tests", () => {
  test("initialize board", () => {
    const board = new Board();
    board.setBoard = initBoard();
    expect(Object.keys(board.getBoard).length).toBe(SIZE);
    expect(
      Object.values(board.getBoard).every((row) => row.length === SIZE),
    ).toBe(true);
    expect(
      Object.values(board.getBoard).every((row) => row.every(notFalsy)),
    ).toBe(true);
  });
});
