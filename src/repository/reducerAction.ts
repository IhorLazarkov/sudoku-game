import type { TBoard } from "../model/Board";

export const reducerAction = (
  state: TBoard,
  action: { type: string, payload: TBoard }): TBoard => {
  switch (action.type) {
    default:
      return state;
  }
}