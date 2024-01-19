import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let consider={
  username:"tushar",
  age: 21
}
let newarr=[1,2,3]
  return (
    <>
<h2 className='bg-yellow-200  m-5 p-5'>now proof</h2>
      <h1 className='bg-green-400 p-4 border-l-red-50 m-4'>this is tushar patel </h1>
   <Card username="pta nhi kaun hy" btntext="clickme"/><br />
 <Card username="tushar" />
    </>
  )
}

export default App
