import { useState } from "react"

function App() {
  const [color,setColor] = useState("")

  return (
    <>
     <div 
     style={{background:color}}
     className="flex h-screen w-full"
     >
     <div 
     className="bg-white mx-32 flex gap-5 h-20 fixed bottom-0 w-[80%] justify-center items-center mb-4 rounded-3xl"
     >
       <button 
       onClick={() => setColor("red")}
       className="bg-red-500 p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"red"}}>
        Red
       </button>
       <button 
       onClick={() => setColor("green")}
       className="bg-green-600 p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"green"}}>
        Green
       </button>
       <button 
       onClick={() => setColor("orange")}
       className="bg-orange-900 p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"orange"}}>
        Orange
       </button>
       <button 
       onClick={() => setColor("purple")}
       className=" bg-purple-900 p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"purple"}}>
        Purple
       </button>
       <button 
       onClick={() => setColor("grey")}
       className="bg-grey-500 p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"grey"}}>
        Grey
       </button>
       <button 
       onClick={() => setColor("Violet")}
       className=" bg-Violet-900 p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"violet"}}>
        Violet
       </button>
       <button 
       onClick={() => setColor("blue")}
       className=" bg-blue-500 p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"blue"}}>
        Blue
       </button>
       <button 
       onClick={() => setColor("black")}
       className=" bg-black p-2 px-6 rounded-xl text-center text-white"
       style={{backgroundColor:"black"}}>
        Black
       </button>
       

     </div>

     </div>
    </>
  )
}

export default App
