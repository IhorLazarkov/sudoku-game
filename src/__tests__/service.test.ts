import { Board } from "../model/Board";
import { initBoard, SIZE } from "../service/Game";

const notFalsy = (v: number | null) => v !== null && v > 0 && v < 10;

describe("Game Tests", () => {
  test("initialize board", () => {
    const board = new Board()
    board.setBoard = initBoard();
    expect(board.getBoard.length).toBe(SIZE);
    expect(board.getBoard.every((row) => row.length === SIZE)).toBe(true);
    expect(board.getBoard.every((row) => row.every(notFalsy))).toBe(true);
  });
});
