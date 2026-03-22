import { Board } from "../model/Board";
import { initBoard, SIZE } from "../service/Game";

describe("Game Tests", () => {
  test("initBoard", () => {
    const board = new Board()
    board.setBoard = initBoard();
    const p = (v: number | null) => v !== null && v > 0 && v < 10;
    expect(board.getBoard.length).toBe(SIZE);
    expect(board.getBoard.every((row) => row.length === SIZE)).toBe(true);
    expect(board.getBoard.every((row) => row.every(p))).toBe(true);
  });
});
