import { useState,useCallback } from 'react'
function App() {
  
  const [count, setCount] = useState(10)
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);


  return (
    <>
     <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
      
    </>
  )
}

export default App
