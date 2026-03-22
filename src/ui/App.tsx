import { useActionState } from "react"
import { SIZE } from "../service/Game"
import { reducerAction } from "../repository/reducerAction";


function App() {

  const [state, dispatch, isPending] = useActionState(
    reducerAction,
    Array.from({ length: SIZE }, () => {
      return Array.from({ length: SIZE }, (_, i) => i + 1)
    }),
  )

  return (
    <div>
      <header>My Sudoku</header>
      <main>
        {state.map((row, i) => {
          return (
            <div key={`row-${i}`}>
              {row.map((cell, j) => {
                return <span key={`col-${j}`}>{cell}</span>
              })}
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default App
