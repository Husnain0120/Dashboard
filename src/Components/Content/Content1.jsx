import { useContext,useState } from 'react'
import './Content1.css'
import CircularProgress from '../CircularProgress/CircularProgress'
import { ThemeContext } from '../../ThemeContext'
import { FiSettings } from 'react-icons/fi'
import { RiChat1Line, RiChat2Line, RiChat3Line, RiFileSettingsLine, RiFolderSettingsFill, RiListSettingsLine, RiMailSettingsLine, RiSettingsLine, RiToolsLine, RiTwitterLine, RiUserSettingsLine } from 'react-icons/ri'
import {AiOutlineEdit, AiOutlineLike, AiOutlineUserSwitch, AiOutlineUsergroupAdd} from 'react-icons/ai'
import { IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import Card from '../CardTemplate/Card'
import Analytics from '../AnalyticsTemplate/Analytics'
import img from '../../assets/illustration.png'
import { GiSettingsKnobs } from "react-icons/gi";
import { FaDribbble, FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Content1() {
  const[value_i]=useState(Math.floor(Math.random()*100))
  const [value_i_offset]=useState( 315-(value_i/100)* 315)

  const[value_ii]=useState(Math.floor(Math.random()*100))
  const [value_ii_offset]=useState( 315-(value_ii/100)* 315)

  const[value_iii]=useState(Math.floor(Math.random()*100))
  const [value_iii_offset]=useState( 315-(value_iii/100)* 315)
    const {darkTheme , setDarktheme}=useContext(ThemeContext)
  return (
    <div className={`content ${darkTheme && 'dark'}`}>

      <div className="row header">

        <FiSettings className='cog'/>

     <h1 className="text-head">Currnet Notification</h1>
     <div className="divider"></div>

     <div className="notifications">
      <RiChat1Line/>
      <RiChat1Line/>
      <RiChat1Line/>
      <RiChat1Line/>
     </div>
     <svg
     className='bg-waves'
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: '#585252', width: '100%', height: 100, }}
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
      </div>
      <div className="row header">
         <Card Icon={AiOutlineUsergroupAdd} title={`Followers`} value={`None :)`} />
         <Card Icon={RiChat2Line} title={`Messages`} value={`+ 0`} />
         <Card Icon={AiOutlineLike} title={`Likes`} value={`+ 0`} />
         <Card Icon={IoCashOutline} title={`Earnings`} value={`$ 0.00`} />
      <svg
      className='bg-waves__'
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: '#e4e0e0', width: '217%', height: 147, transform: 'rotate(180deg) scaleX(-1)' }}
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
      </div>
      <span className="section-title">Brirf Overview </span>

      <div className="row square">
        <Analytics chart_i/>
      </div>
      
      <div className="row square">
      <Analytics chart_ii/>
      </div>

      <div className="row square">
      <Analytics chart_iii/>
      </div>

      <div className="row square">
      <Analytics title='New Followers' value='+ 0' illustration={img}/>
      </div>

      <span className="section-title">
        Analytic Tools
      </span>

      <div className="row tall-square">
      <svg
     className='bg-waves'
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: '#585252', width: '100%', height: 100, }}
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
  <span className='tools-section'> Frequently Used</span>

        <div className="tools">
          <Card Icon={RiToolsLine}/>
          <Card Icon={IoSettingsOutline}/>
          <Card Icon={AiOutlineUsergroupAdd}/>
          <Card Icon={RiToolsLine}/>
          <Card Icon={RiMailSettingsLine}/>
          <Card Icon={RiListSettingsLine}/>
        </div>
        <div className="divider"></div>

        <span className="tools-section">More Tools</span>
        <div className="tools">
          <Card Icon={RiUserSettingsLine}/>
          <Card Icon={RiToolsLine}/>
          <Card Icon={AiOutlineUsergroupAdd}/>
          <Card Icon={RiToolsLine}/>
          <Card Icon={AiOutlineUsergroupAdd}/>
          <Card Icon={RiListSettingsLine}/>
          <Card Icon={RiToolsLine}/>
          <Card Icon={AiOutlineUsergroupAdd}/>
          <Card Icon={RiMailSettingsLine}/>
        </div>
        <div className="divider"></div>
        <span className="tools-section">Advanced Tools</span>
        <div className="tools">
          <Card Icon={RiFolderSettingsFill}/>
          <Card Icon={RiFileSettingsLine}/>
          <Card Icon={RiSettingsLine}/>
     
        </div>
      </div>
      <div className="row tall-square inv-bg">
      <svg
          className='bg-waves'
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#585252', width: '100%', height: 100, }}
        >
          <path
          d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
          opacity=".25"
        />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>

      <header className='tall-square-header'>
        <div className="left">
          <AiOutlineEdit className='icon'/>
        </div>

        <div className="right">
        <GiSettingsKnobs className='icon' />
          <RiChat3Line className='icon'/>
          <AiOutlineUserSwitch className='icon'/>
        </div>
      </header>

      <div className="admin">
        <div className="profile">
          <img src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1711456289~exp=1711459889~hmac=44d6d48ef69ed6647f657dda62d3cc647e9b605f5949322a4ac112c556dfefbc&w=900" alt="" className="profile-img" />
        </div>
        <div className="info">
          <h2 className='admin-name'>creative Husnain</h2>
          <span className='admin-about'>FrontEnd Web Developer</span>
        </div>
        <div className="admin-socials">
          <Card Icon={FaWhatsapp}/>
          <Card Icon={FaInstagram}/>
          <Card Icon={RiTwitterLine}/>
          <Card Icon={FaDribbble}/>
        </div>
      </div>
      </div>
      
       <div className="row side-rect">
        <section>
          <CircularProgress color ='#810551' value={value_i} offset={value_i_offset} />
          <div className="summary">
            <div className="summary-title">Preformance</div>
            <span className="summary-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio minus laboriosam neque qui iusto vel magnam! Rem provident eveniet fugiat at quos ex accusamus, itaque doloremque saepe cumque distinctio. Dolores!</span>
          </div>
          <CircularProgress color ='green' value={value_ii} offset={value_ii_offset} />

        </section>
       </div>

       <div className="row side-rect">
        <section>
        <CircularProgress color ='crimson' value={value_iii} offset={value_iii_offset} />

          <div className="more-details">
            <h1 className="title">Detailed Analysis</h1>
            <span className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium totam sit alias, porro officiis fugiat. Iste ducimus nam aut nemo magni ullam harum, quis dolorem architecto. Consequuntur, quos amet?</span>
          </div>
        </section>
       </div>
       <div className="row side-rect">
       <section>
        <CircularProgress color ='crimson' value={value_iii} offset={value_iii_offset} />

          <div className="more-details">
            <h1 className="title">Detailed Analysis</h1>
            <span className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium totam sit alias, porro officiis fugiat. Iste ducimus nam aut nemo magni ullam harum, quis dolorem architecto. Consequuntur, quos amet?</span>
          </div>
        </section>
       </div>
    </div>
  )
}

export default Content1
