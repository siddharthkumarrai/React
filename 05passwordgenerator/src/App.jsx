import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length,setLength] = useState(6)
  const [number, setnumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef()

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(character) str += "~!@#$%&*";

    for (let i = 0; i < length; i++) {
      const char =  Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  },[length,number,character,setPassword])

  useEffect(()=>{
   passwordGenerator()
  },[length,number,character])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className=' flex justify-center  w-full h-screen bg-slate-700 text-center'>
    <div className=' w-[50%] bg-red-300 h-40 rounded-2xl text-center mt-12'>
       <h1 className=' font-bold text-3xl py-4'>PASSWORD GENERATOR</h1>
       <div className='flex justify-center'>
        <input
        className='flex items-center w-[80%] h-8 rounded-xl outline-none pl-2'
        type='text'
        value={password}
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        className=' bg-yellow-300 px-5 rounded-xl hover:bg-yellow-200'
        onClick={copyPasswordToClipBoard}
        >Copy</button>
       </div>
       <div className='flex justify-start px-12 py-6'>
        <input
          type='range'
          min={0}
          max={50}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          id='len'
          className=' cursor-pointer'
        />
        <label htmlFor='len'> &nbsp; Length ({length})</label> &nbsp; &nbsp; &nbsp;

        <input
          className=' cursor-pointer'
          type='checkbox'
          defaultChecked={number}
          id="num"
          onChange={()=>{setnumber((prev) => !prev);}}
          
          
        />
        <label htmlFor='num'>Number</label> &nbsp; &nbsp; &nbsp;

        <input
          type='checkbox'
          defaultChecked={character}
          onChange={()=>{setCharacter((prev)=> !prev)}}
          id='ch'
          className=' cursor-pointer'
        />
        <label htmlFor='ch'>Character</label>
        
       </div>
    </div>
        

    </div>

    </>
  )
  }

export default App
