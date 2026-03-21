import {
  initArrayWithRandomNumbers,
  startNewGame,
} from "../logic/logic";

describe("Logic Tests", () => {
  test("test random number generator when both top and left are empty", () => {
    const p = (value: number) => value > 0 && value < 10;
    const arr = [] as Array<number>;

    initArrayWithRandomNumbers(arr);

    expect(arr.length).toBe(9);
    expect(arr.every((v) => v !== null)).toBe(true);
    expect(arr.every((v) => v !== undefined)).toBe(true);
    expect(arr.every(p)).toBe(true);
    expect(new Set(arr).size).toBe(9);
  });

  test("test random number generator when top is empty but left is not empty", () => {
    const arr = [] as Array<number | null>;
    const arrLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    initArrayWithRandomNumbers(arr, arrLeft);

    expect(arrLeft.slice(0, 3)).not.toEqual(arr.slice(0, 3));
    expect(arrLeft.slice(3, 6)).not.toEqual(arr.slice(3, 6));
    expect(arrLeft.slice(6, 9)).not.toEqual(arr.slice(6, 9));
  });

  test("test random number generator when left is empty but top is not empty", () => {
    const arr = [] as Array<number | null>;
    const arrTop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    initArrayWithRandomNumbers(arr, [], arrTop);

    expect(arrTop.slice(0, 3)).not.toEqual(arr.slice(0, 3));
    expect(arrTop.slice(3, 6)).not.toEqual(arr.slice(3, 6));
    expect(arrTop.slice(6, 9)).not.toEqual(arr.slice(6, 9));
  });

  test("test random number generator when both top and left are not empty", () => {
    const arr = [] as Array<number | null>;
    const arrTop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    initArrayWithRandomNumbers(arr, arrLeft, arrTop);

    expect(arr.length).toBe(9);
    expect(arr.every((v) => v !== null)).toBe(true);
    expect(arr.every((v) => v !== undefined)).toBe(true);

    expect(arrLeft.slice(0, 3)).not.toEqual(arr.slice(0, 3));
    expect(arrLeft.slice(3, 6)).not.toEqual(arr.slice(3, 6));
    expect(arrLeft.slice(6, 9)).not.toEqual(arr.slice(6, 9));

    expect([arrTop[0], arrTop[3], arrTop[6]]).not.toEqual(arr.slice(0, 3));
    expect([arrTop[1], arrTop[4], arrTop[7]]).not.toEqual(arr.slice(3, 6));
    expect([arrTop[2], arrTop[5], arrTop[8]]).not.toEqual(arr.slice(6, 9));
  });
});

// describe("Game Tests", () => {
//   test("initBoard", () => {
//     const board = startNewGame();
//     expect(board.length).toBe(3);
//   });
// });
