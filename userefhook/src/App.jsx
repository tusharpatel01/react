import { useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a=useRef(0)
  const btnref=useRef();
  const btnre2f=useRef();
  useEffect(()=> {
    btnre2f.current.style.backgroundColor="green"
    btnref.current.style.backgroundColor="red"
    a.current=a.current+1;
    console.log(`rerenderring of same hook the value of a is ${a.current}..`)
  });

  return (
    <>
      <h1>this is the practice of react hook</h1>
      <p>count :{count}</p>
<button ref={btnre2f} onClick={()=>setCount(count+1)}>add</button>
<button ref={btnref} onClick={()=>setCount(count-1)}>sub</button>

    </>
  )
}

export default App
