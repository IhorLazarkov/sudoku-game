import { Board } from "../model/Board";

describe("Board Tests", () => {
  test("Instance is always one instance as singleton", () => {
    const board1 = new Board();
    const board2 = new Board();
    expect(board1).toBe(board2);
  });
});
