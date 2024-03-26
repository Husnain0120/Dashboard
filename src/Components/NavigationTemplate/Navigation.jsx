import React from 'react'
import './Navigation.css'
import Nav from '../NaviconTemplate/Nav'
import { RxDashboard } from "react-icons/rx";
import { GrAnalytics } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { GiShadowFollower } from "react-icons/gi";
import { RiUserFollowFill,RiNotificationLine } from "react-icons/ri";
function Navigation() {
  return (
   <>
   <div className='navigation'>
      <header>
          <div className='profile'>
              <img src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1711456289~exp=1711459889~hmac=44d6d48ef69ed6647f657dda62d3cc647e9b605f5949322a4ac112c556dfefbc&w=900" alt="user-img" className="profile-img" />
          </div>
          <span>Create_ambition</span>
      </header>

      <Nav title="Dashboard" Icon={RxDashboard} />
      <Nav title="Analytics" Icon={GrAnalytics} />
      <Nav title="Messages" Icon={FiMessageSquare} />
      <Nav title="Followers" Icon={ RiUserFollowFill} />
      <Nav title="Notifications" Icon={RiNotificationLine} />
      <Nav title="Following" Icon={GiShadowFollower} />
      <Nav title="Earning" Icon={RxDashboard} />
      <Nav title="Dashboard" Icon={RxDashboard} />
      <Nav title="Dashboard" Icon={RxDashboard} />
      <Nav title="Dashboard" Icon={RxDashboard} />
   </div>
   </>
  )
}

export default Navigation
