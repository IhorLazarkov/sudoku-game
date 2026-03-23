import type { TBoard } from "../model/Board";

export type TReducerGameAction = "RESET" | "VALIDATE";

export const reducerGameAction = (
  state: boolean,
  action: {
    type: TReducerGameAction;
    payload?: TBoard;
  },
) => {
  switch (action.type) {
    case "RESET":
      return false;
    case "VALIDATE":
      state = Object.values(action.payload!).every((row) =>
        row.every((cell) => cell.state === "SUCCESS" || cell.state === "SHOW"),
      );
      return state;
  }
};
