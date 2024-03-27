import { useContext } from 'react'
import './Main.css'
import { ThemeContext } from '../../ThemeContext'
import Header from '../HeaderTemplate/Header'
import Content1 from '../Content/Content1'
function Main() {
    const {darkTheme,setTheme}=useContext(ThemeContext)
  return (
    <div className={`main ${darkTheme && "dark"}`}>
       <Header/>
       <Content1/>
    </div>
  )
}

export default Main
