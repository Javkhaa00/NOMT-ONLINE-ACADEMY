import React from 'react'
import './lessonVideo.scss'
import Header from '../Header/Header'

import lesson from "../assets/testing video/BLACKPINK - 'Kill This Love' M-V.webm"

const LessonVideo = () => {
  return (
    <div className='videoMain'>
      <Header />
      <video className='video' id='player' playsInline controls>
        <source src={lesson} type='video/mp4' />
        <source src={lesson} type='video/webm' />
      </video>
    </div>
  )
}

export default LessonVideo
