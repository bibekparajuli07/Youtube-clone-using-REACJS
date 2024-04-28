import React from 'react'
import './Home.css'
import Sidebar from '../Component/Sidebar/sidebar'
import Feed from '../Component/Feed/feed'
const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar?"":'large-container'}`}>
      <Feed/>
    </div>

    </>
  )
}

export default Home