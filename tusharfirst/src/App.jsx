import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0)

  // let counter=5
  const addvalue=()=>{
    console.log("clicked",counter);
    setcounter(counter+1)
    // counter=counter+1}
  }
    const removeval=()=>{
      console.log("clicked",counter);
      setcounter(counter-1)
    }
  
  

  return (
    <>
    <h1>this is the countable number </h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addvalue}>add value</button>
    <br />
    <button onClick={removeval}>remove value{counter}</button>
    <footer> footer:{counter}</footer>
    </>
  )
}

export default App
