import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {


  const dispatch = useAppDispatch()

  const { count } = useAppSelector((state) => state.counter)


  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div>
        <h1>Counter with redux</h1>

        <button onClick={handleIncrement} className='bg-gray-950'>Increment</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </>
  )
}

export default App
