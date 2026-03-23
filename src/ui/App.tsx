import { emptyBoard, SIZE } from "../service/Game"
import { reducerBoardAction } from "../store/reducerBoardAction";
import { useActionState, useEffect, startTransition, useState, useReducer } from "react"
import { reducerGameAction } from "../store/reducerGameAction";

function App() {

  const initCurrentCell = { row: -1, col: -1, attempt: -1, state: "EMPTY" }
  const [currentCell, setCurrentCell] = useState(initCurrentCell)
  const [boardState, dispatchBoardState, isPending] = useActionState(reducerBoardAction, emptyBoard())
  const [isGameCompleted, dispatchGameState] = useReducer(reducerGameAction, false)

  useEffect(() => {
    startTransition(() => {
      dispatchBoardState({ type: "RESET" })
    })
  }, [])

  function onSelectCell(i: number) {
    startTransition(() => {
      dispatchBoardState({
        type: "VALIDATE_ATTEMPT",
        payload: { row: currentCell.row, col: currentCell.col, attempt: i }
      })
      setCurrentCell({
        row: currentCell.row,
        col: currentCell.col,
        attempt: i,
        state: boardState[currentCell.row][currentCell.col].state
      })
    })
    startTransition(() => {
      dispatchGameState({
        type: "VALIDATE",
        payload: boardState
      })
    })
  }

  function submitAttempt() {
    startTransition(() => {
      dispatchBoardState({ type: "RESET" })
      dispatchGameState({ type: "RESET" })
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <main className="bg-white p-6 rounded-2xl border-4 border-blue-100 sm:my-2">
        <div className="grid gap-1">
          {Object.values(boardState).map((row, i) => {
            return (
              <div key={`row-${i}`} className="flex gap-1">
                {row.map((cell, j) => {
                  return (
                    <span
                      key={`col-${j}`}
                      className={`w-10 h-10 
                        flex items-center justify-center 
                        bg-blue-50 text-blue-900 font-bold rounded-md 
                        hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200
                        ${(currentCell.row === i && currentCell.col === j) && "bg-blue-200"}
                        ${cell.state === "FAILED" && "bg-red-200"}
                        ${cell.state === "SUCCESS" && "bg-green-200"}
                        `}
                      onClick={() => setCurrentCell(prev => prev = { ...prev, row: i, col: j })}
                    >
                      {cell.state === "EMPTY" && ""}
                      {cell.state === "SHOW" && cell.value}
                      {cell.state === "SUCCESS" && cell.value}
                      {cell.state === "FAILED" && currentCell.attempt}
                    </span>
                  )
                })}
              </div>
            )
          })}
        </div>
      </main>
      {!isGameCompleted
        ? <div className="mt-5 grid grid-cols-3 gap-2">
          {Array.from({ length: SIZE }).map((_, i) => {
            i++
            return <button
              disabled={currentCell.row === -1}
              key={`attempt-${i}`}
              className="w-[3.5rem] aspect-[1] 
            flex items-center justify-center 
            bg-blue-50 text-blue-900 font-bold rounded-md 
            hover:bg-blue-200 transition-colors cursor-pointer border border-blue-200 
            disabled:opacity-20 disabled:cursor-not-allowed"
              onClick={() => onSelectCell(i)}
            >{i}</button>
          })}
        </div>
        : <div className="grid place-items-center">
          <div className="text-2xl text-green-500 font-semibold my-3">WIN</div>
          <button
            className="
          p-2 bg-blue-50 text-blue-900 
          font-bold rounded-md border border-blue-200 
          hover:bg-blue-200 transition-colors cursor-pointer"
            onClick={submitAttempt}>Start New Game</button>
        </div>
      }
    </div>
  )
}

export default App
