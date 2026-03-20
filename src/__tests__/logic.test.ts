import { startNewGame, validate } from "../logic/logic";

describe("Logic Tests", () => {
  test("Create new board", () => {
    const board = startNewGame();
    expect(board.length).toBe(9);
    expect(board[0].length).toBe(9);
    expect(
      board.every((row) =>
        row.every((cell) => cell !== null && cell > 0 && cell < 10),
      ),
    ).toBe(true);
  });
});

describe("Validation Tests", () => {
  test("when user enters incorrect numbers", () => {
    const board = [
      [1, 2, 4],
      [2, 2, 4],
      [3, 5, 9],
    ];
    expect(validate(board, 0, 0, 3)).toBe(false);
    expect(validate(board, 1, 2, 3)).toBe(false);
    expect(validate(board, 2, 2, 3)).toBe(false);
  });

  test("when user enters correct numbers", () => {
    const board = [
      [1, 2, 4],
      [2, 2, 4],
      [3, 5, 9],
    ];
    expect(validate(board, 0, 0, 1)).toBe(true);
    expect(validate(board, 1, 2, 4)).toBe(true);
    expect(validate(board, 2, 2, 9)).toBe(true);
  });
});
