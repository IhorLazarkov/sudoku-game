import { Board, type TBoard } from "../model/Board";
import { initBoard } from "../service/Game";

export type TReducerActions = "RESET" | "VALIDATE_ATTEMPT" | "VALIDATE_ROW";
export type TPayload = TBoard & {
  row: number;
  col: number;
  attempt: number;
};

export const reducerAction = async (
  state: TBoard,
  action: { type: TReducerActions; payload?: TPayload },
): Promise<TBoard> => {
  switch (action.type) {
    case "RESET":
      const newBoard = initBoard();
      const board = new Board();
      board.setBoard = newBoard;
      return new Promise((resolve) => {
        return resolve(board.getBoard);
      });

    case "VALIDATE_ATTEMPT":
      //   const { row, col, attempt } = action.payload!;
      const newState = state;
      return newState;

    case "VALIDATE_ROW":
      return state;
  }
};
