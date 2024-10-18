import { useEffect, useState } from 'react'
import Card from './Component/Card'
import Togglebtn from './Component/Togglebtn'
import {Themprovider} from './Context/ThemContext.js'

function App() {
   const [theme, setTheme] = useState('light')

  const darkTheme = () => {
    setTheme('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', "light")
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <>
      <Themprovider value={{themeMode, darkTheme, lightTheme}}>
      <div className='ml-[35%]'>
        <Togglebtn  ></Togglebtn>
       
      </div>
       <Card></Card>
    
      </Themprovider>
        </>
  )
}

export default App
