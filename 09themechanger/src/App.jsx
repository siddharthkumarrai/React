import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'

function App() {
  const [themeMod, setThemeMod] = useState("light")

  const lightTheme = () =>{
    setThemeMod("light")
  }

  const darkTheme = () =>{
    setThemeMod("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMod)
  },[themeMod])

  return (
    <ThemeProvider value={{themeMod,lightTheme,darkTheme}}>
     
   <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           { <ThemeBtn/>}
               
           </div>
           <div className="w-full max-w-sm mx-auto">
           { <Card />}
              
           </div>
       </div>
   </div>
    </ThemeProvider>
  )
}

export default App
