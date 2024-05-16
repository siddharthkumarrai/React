import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=' bg-orange-500 mb-8'>TAILWINDCSS</h1>
    <div className=' flex gap-6'>
      <Card name='hp victius'/>
      <Card name='mac m1 pro'/>
    </div>
    
    </>
  )
}

export default App
