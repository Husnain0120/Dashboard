import { useState } from 'react'
import './App.css'
import Navigation from './Components/NavigationTemplate/Navigation'
import {ThemeContext} from './ThemeContext'
import Main from './Components/Main/Main'
function App() {
const [darkTheme,setDarkTheme]=useState(true)

  return (
   <>
   <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
   <div className='App'>
   
    <Navigation/>
    <Main/>
   </div>
   </ThemeContext.Provider>
   </>
  )
}

export default App
