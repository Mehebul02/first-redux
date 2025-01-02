import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'

function App() {


  // const dispatch = useAppDispatch()

  // const { count } = useAppSelector((state) => state.counter)


  // const handleIncrement = (amount:number) => {
  //   dispatch(increment(amount))
  // }
  // const handleDecrement = (amount:number) => {
  //   dispatch(decrement(amount))
  // }

  return (
    <>
      <div>
        {/* <h1>Counter with redux</h1>

        <Button onClick={()=>handleIncrement(5)} className='bg-gray-950'>Increment</Button>
        <h1>{count}</h1>
        <Button onClick={()=>handleDecrement(1)}>decrement</Button> */}

        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
