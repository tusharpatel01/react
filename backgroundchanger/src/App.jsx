import { useState } from "react"
function App(){
  const [color,setcolor]=useState("white")



  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex  flex-wrap justify-center  bottom-12 inset-x-0 px-2 rounded-full"> < div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
        <button onClick={()=>setcolor("red")}
      className=" no-underline px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"red"}}
      >RED</button>
       <button
       onClick={()=>setcolor("purple")}
      className=" no-underline px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"purple"}}
      >purple</button>
       <button onClick={()=>setcolor("green")}
      className=" no-underline px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"green"}}
      >green</button>
       <button onClick={()=>setcolor("blue")}
      className=" no-underline px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"blue"}}
      >blue</button>
       <button onClick={()=>setcolor("pink")}
      className=" no-underline px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"pink"}}
      >pink</button>
       <button onClick={()=>setcolor("orange")}
      className=" no-underline px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"orange"}}
      >orange</button>
        </div></div>
    </div>
     
    </>
  )
  }

export default App
