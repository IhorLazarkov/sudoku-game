import { initBoard, SIZE } from "../service/Game";

describe("Game Tests", () => {
  test("initBoard", () => {
    const board = initBoard();
    const p = (v: number | null) => v !== null && v > 0 && v < 10;
    expect(board.length).toBe(SIZE);
    expect(board.every((row) => row.length === SIZE)).toBe(true);
    expect(board.every((row) => row.every(p))).toBe(true);
  });
});
