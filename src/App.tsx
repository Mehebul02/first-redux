import './App.css'
import { Button } from './components/ui/button'
import { decrement, increment } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {


  const dispatch = useAppDispatch()

  const { count } = useAppSelector((state) => state.counter)


  const handleIncrement = (amount:number) => {
    dispatch(increment(amount))
  }
  const handleDecrement = (amount:number) => {
    dispatch(decrement(amount))
  }

  return (
    <>
      <div>
        <h1>Counter with redux</h1>

        <Button onClick={()=>handleIncrement(5)} className='bg-gray-950'>Increment</Button>
        <h1>{count}</h1>
        <Button onClick={()=>handleDecrement(1)}>decrement</Button>
      </div>
    </>
  )
}

export default App
