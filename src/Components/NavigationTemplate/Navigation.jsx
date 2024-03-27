import React, { useContext, useState } from 'react'
import './Navigation.css'
import Nav from '../NaviconTemplate/Nav'
import { RxDashboard } from "react-icons/rx";
import { GrAnalytics } from "react-icons/gr";
import { FiMessageSquare,FiChevronLeft } from "react-icons/fi";
import { GiShadowFollower,GiReceiveMoney } from "react-icons/gi";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { FaFeatherAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiUserFollowFill,RiNotificationLine } from "react-icons/ri";
import { ThemeContext } from '../../ThemeContext';
function Navigation() {
  const [nav,setNav]=useState(false)
 const {darkTheme,setDarkTheme}=useContext(ThemeContext)

  const handlmanubtn=()=>{
    setNav((prve)=>!prve)
  }
  // dark theme
  const changeTheme=()=>{
     setDarkTheme(!darkTheme)
  }
  return (
   <>
   
   <div className={`navigation ${nav && "active"} ${darkTheme && 'dark'}`}>
  
    <div className={`menu ${nav &&"active"}`} onClick={handlmanubtn}>
      <FiChevronLeft className='menu-icon'/>
      
    </div>
      <header>
          <div className='profile'>
              <img src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1711456289~exp=1711459889~hmac=44d6d48ef69ed6647f657dda62d3cc647e9b605f5949322a4ac112c556dfefbc&w=900" alt="user-img" className="profile-img" />
          </div>
          <span>Create_ambition</span>
      </header>

      <Nav title={"Dashboard"} Icon={RxDashboard} />
      <Nav title={"Analytics"} Icon={GrAnalytics} />
      <Nav title={"Messages"} Icon={FiMessageSquare} />
      <Nav title={"Followers"} Icon={ RiUserFollowFill} />
      <div className="divder"></div>
      <Nav title={"Notifications"} Icon={RiNotificationLine} />
      <Nav title={"Following"} Icon={GiShadowFollower} />
      <Nav title={"Earning"} Icon={GiReceiveMoney} />
      <Nav title={"Posts"} Icon={MdOutlinePostAdd} />
      <Nav title={"Message Resquests"} Icon={FaCodePullRequest} />
      <Nav title={"Change Account" }Icon={CgArrowsExchangeAlt} />
      <div className="divder"></div>
      
      <Nav title={`${darkTheme ? 'Switch to Light Theme':"Switch to Dark Theme"}`} onClick={changeTheme} Icon={FaFeatherAlt} />
      <Nav title={"More details"} Icon={HiDotsHorizontal} />

 
   </div>
  

   </>
  )
}

export default Navigation
