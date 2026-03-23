export type TCellState = "SUCCESS" | "FAILED" | "EMPTY";
export type TCell = { value: number | null; state: TCellState };
export type TBoard = Record<number, Array<TCell>>;

export class Board {
  // Singleton
  private static instance: Board;
  private board: TBoard = {};

  constructor() {
    if (!Board.instance) Board.instance = this;
    return Board.instance;
  }

  get getBoard() {
    return this.board;
  }

  set setBoard(board: Array<Array<number | null>>) {
    board.forEach((row, rowIndex) => {
      this.board[rowIndex] = row.map((cell, cellIndex) => {
        return { value: cell, state: "EMPTY" };
      });
    });
  }
}
