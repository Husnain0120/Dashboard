import { useState,useEffect } from 'react'
import './App.css'
import Navigation from './Components/NavigationTemplate/Navigation'
import {ThemeContext} from './ThemeContext'
import Main from './Components/Main/Main'
import Login from './Components/LogIn/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'

function App() {
const [darkTheme,setDarkTheme]=useState(true)
const [Loggedin,setLoggedin]=useState(false)

useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if (user) {
      setLoggedin(true)
    }else{
      setLoggedin(false)

    }
  })
},[])
  return (
   <>
   <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
   <div className='App'>
   {Loggedin ?(
   <><Navigation/>
   <Main/>
   </>)
   :(<Login/>
  )}
   

    
   </div>
   </ThemeContext.Provider>
   </>
  )
}

export default App
