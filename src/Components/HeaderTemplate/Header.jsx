import { useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../../ThemeContext'
import {AiOutlineUser} from 'react-icons/ai'
import { BiSearch} from 'react-icons/bi'
import {TbMessages} from'react-icons/tb'
import { HiOutlineLogout, HiOutlineMoon } from 'react-icons/hi'
import { RiSettingsLine } from 'react-icons/ri'
import { GrAnalytics } from "react-icons/gr";
function Header() {
    const {darkTheme,setDarkTheme}=useContext(ThemeContext)
     const changeTheme=()=>{
      setDarkTheme(!darkTheme)
     }
  return (
    <header className={` ${darkTheme && "dark"}`}>
      <div className="search-bar">
        <input type="text" placeholder='search ...' />
        <BiSearch className='icon'/>
      </div>

      <div className="tools">
        <AiOutlineUser className='icon' />
        <TbMessages className='icon' />
        <GrAnalytics className='icon' />
        <div className="divider"></div>
        <HiOutlineMoon className='icon' onClick={changeTheme}/>
        <RiSettingsLine className='icon'/>
        <HiOutlineLogout className='icon'/>
        <div className="divider"></div>

        <div className='user'>
            <img src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1711456289~exp=1711459889~hmac=44d6d48ef69ed6647f657dda62d3cc647e9b605f5949322a4ac112c556dfefbc&w=900" alt="" className='profile-img' />
        </div>

      </div>
    </header>
  )
}

export default Header
