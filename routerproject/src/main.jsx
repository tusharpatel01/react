import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider}from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import layout from './layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
const router=createBrowserRouter([{
  path:"",
 element:<layout/>,
children:[
  {
    path:"",
    element:<Home/>
  },{
    path:"about",
    element:<About/>
    
  }
]
}
])

