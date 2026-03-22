import {startNewGame} from "../logic/logic";

describe("Game Tests", () => {
  test("initBoard", () => {
    const board = startNewGame();
    const p = (v : number | null) => v !== null &&v > 0 && v < 10;
    expect(board.length).toBe(9);
    expect(board.every(row => row.length === 9)).toBe(true);
    expect(board.every(row => row.every(p))).toBe(true);
  });
});
