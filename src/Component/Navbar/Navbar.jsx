//import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import Logo from '../../assets/logo.jpg'
import search_icon from '../../assets/search.png/'
import upload_icon from '../../assets/upload.png'
import Notification_icon from '../../assets/notification.png'
import more_icon from '../../assets/more.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({setSidebar}) => {
    
  return (
    /* left side navbar*/
    <nav className='flex-div'>
        <div className='nav-left'>
            <img className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon}alt=''/>
            <img className='logo'  src={Logo} alt=''/>
        </div>
       { /*middle navbar */}
        <div className='nav-mid'>
            <div className="searchbox">
                <input type="text" placeholder='Search'/>
                <img src={search_icon} alt=""/>
            </div>
        </div>
{/*right side nav bar */}
        <div className='nav-right'>
            <img src={upload_icon} alt=''/>
            <img src={more_icon} alt=''/>
            <img src={Notification_icon} alt=''/>
            <img className="usericon"src={profile_icon} alt=''/>
        </div>
    </nav>
  )
}

export default Navbar