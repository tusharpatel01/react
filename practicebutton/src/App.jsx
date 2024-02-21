import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
       <div className="tushar">the count is {count}</div>
    <button onClick={()=>{setCount(count-1)}}>decrement</button>
    <button onClick={()=>{setCount(count+1)}}>increment</button>

    </>
  )
}

export default App
