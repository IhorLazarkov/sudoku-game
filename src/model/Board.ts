export type TCellState = "SUCCESS" | "FAILED" | "EMPTY" | "SHOW";
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
        const state = Math.random() > 0.5 ? "SHOW" : "EMPTY";
        return { value: cell, state };
      });
    });
  }
}
