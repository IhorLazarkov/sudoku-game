export type TBoard = Array<Array<number | null>>;

export class Board {
    // Singleton
  private static instance: Board;
  private board : TBoard = []

  constructor() {
    if (!Board.instance) Board.instance = this;
    return Board.instance;
  }

  get getBoard() {
    return this.board;
  }

  set setBoard(board: Array<Array<number | null>>) {
    this.board = board;
  }
}
