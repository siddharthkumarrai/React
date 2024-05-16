import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   // let count = 7;
   const [count,setCount] = useState(7)

 const incCount = ()=>{
  setCount((prevCount) => prevCount+1)
  setCount((prevCount) => prevCount+1)
  setCount((prevCount) => prevCount+1)
  setCount((prevCount) => prevCount+1)
  setCount((prevCount) => prevCount+1)
  if(count == 20){
    setCount(count)
  }
 }

  const decCount = ()=>{
  setCount(count-1)
  if(count == 0){
    setCount(count)
  }
 }

  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h3>count counting : {count}</h3>
      <button
      onClick={incCount}
      >add Count : &nbsp; {count} </button>
      <br/>
      <button
      onClick={decCount}
      >remove Count : &nbsp; {count} </button>
    </>
  )
}

export default App
