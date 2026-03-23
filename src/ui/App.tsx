import { emptyBoard } from "../service/Game"
import { reducerAction } from "../store/reducerAction";
import { useActionState, useEffect, startTransition } from "react"

function App() {

  const [state, dispatch, isPending] = useActionState(reducerAction, emptyBoard())

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
                      className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-900 font-bold rounded-md hover:bg-blue-200 transition-colors cursor-pointer border border-blue-200"
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
    </div>
  )
}

export default App
