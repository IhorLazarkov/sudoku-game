import { emptyBoard, SIZE } from "../service/Game"
import { reducerGameAction } from "../store/reducerAction";
import { useActionState, useEffect, startTransition, useState } from "react"

function App() {

  const initCurrentCell = { row: -1, col: -1 }
  const [currentCell, setCurrentCell] = useState(initCurrentCell)
  const [state, dispatch, isPending] = useActionState(reducerGameAction, emptyBoard())

  useEffect(() => {
    startTransition(() => {
      dispatch({ type: "RESET" })
    })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <main className="bg-white p-6 rounded-2xl shadow-2xl border-4 border-blue-100">
        <div className="grid gap-1">
          {Object.values(state).map((row, i) => {
            return (
              <div key={`row-${i}`} className="flex gap-1">
                {row.map((cell, j) => {
                  return (
                    <span
                      key={`col-${j}`}
                      className={`w-10 h-10 
                        flex items-center justify-center 
                        bg-blue-50 text-blue-900 font-bold rounded-md 
                        hover:bg-blue-200 transition-colors cursor-pointer border border-blue-200
                        ${(currentCell.row === i && currentCell.col === j) && "bg-blue-200"}`}
                      onClick={() => setCurrentCell(prev => {
                        if (prev.col !== -1 && prev.row !== -1)
                          return initCurrentCell
                        return { row: i, col: j }
                      })}
                    >
                      {cell.state === "EMPTY" ? "" : cell.state === "SUCCESS" ? cell.value : "❌"}
                    </span>
                  )
                })}
              </div>
            )
          })}
        </div>
      </main>
      <div className="mt-5 flex gap-1 w-full justify-center">
        {Array.from({ length: SIZE }).map((_, i) => (
          <button
            disabled={currentCell.row === -1}
            key={`attempt-${i}`}
            className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-900 font-bold rounded-md hover:bg-blue-200 transition-colors cursor-pointer border border-blue-200 disabled:opacity-20"
            onClick={() => {
              dispatch({ type: "VALIDATE_ATTEMPT", payload: { row: currentCell.row, col: currentCell.col, attempt: i } })
              setCurrentCell(initCurrentCell)
            }}
          >{i}</button>
        ))}
      </div>
    </div>
  )
}

export default App
