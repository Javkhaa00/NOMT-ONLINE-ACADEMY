import React from 'react'
import './lessonVideo.scss'
import Header from '../Header/Header'

import lesson from "../assets/testing video/BLACKPINK - 'Kill This Love' M-V.mp4"

const LessonVideo = () => {
  return (
    <div className='videoMain'>
      <Header />
      <video
        id='my-video'
        className='video-js video'
        controls
        preload='auto'
        data-setup='{"liveui": false}'
      >
        <source src={lesson} type='video/mp4' />
        <source src={lesson} type='video/webm' />
      </video>
    </div>
  )
}

export default LessonVideo
