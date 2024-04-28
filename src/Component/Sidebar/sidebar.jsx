import React from 'react'
import './sidebar.css' 
import Home from '../../assets/Home.png'
import Trending from '../../assets/explore.png'
import Subscription from '../../assets/subscriprion.png'
import youtubemusic from '../../assets/music.png'
import librarys from '../../assets/library.png'
import Shorts from '../../assets/short.png'
import Sports from '../../assets/sports.png'
import Gaming from '../../assets/game_icon.png'


const sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='shortcut'>
        <div className='side-link'>
          <img src={Home} alt="" /><p>Home</p>
        </div>
        <div className='side-link'>
          <img src={Shorts} alt="" /><p>Shorts</p>
        </div>
        <div className='side-link'>
          <img src={Subscription} alt="" /><p>Subscription</p>
        </div>
        <hr />
      </div>
      
      

      
      <div className="history">
        <h3>Explore</h3>
      <div className='side-link'>
          <img src={Trending} alt="" /><p>Trending</p>
        </div>
        <div className='side-link'>
          <img src={youtubemusic} alt="" /><p>music</p>
        </div>
        <div className='side-link'>
          <img src={Gaming} alt="" /><p>Gaming</p>
        </div>
        <div className='side-link'>
          <img src={Sports} alt="" /><p>Sports</p>
        </div>
        <div className='side-link'>
          <img src={librarys} alt="" /><p>librarys</p>
        </div>
      </div>
        
    </div>
  )
}

export default sidebar