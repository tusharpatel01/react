import { useState } from 'react'
import Profile from './components/profile'
import Login from './components/login'


import './App.css'
import UserContextProvider from './context/usercontextprovider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>react login page  </h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
