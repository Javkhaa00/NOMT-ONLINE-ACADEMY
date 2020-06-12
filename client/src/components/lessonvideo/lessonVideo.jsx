import React from 'react'
import './lessonVideo.scss'
import Header from '../Header/Header'

// import lesson from "../assets/testing video/BLACKPINK - 'Kill This Love' M-V.mp4"

const LessonVideo = () => {
  return (
    <div className='videoMain'>
      <Header />
      {/* <video
        id='my-video'
        className='video-js video'
        controls
        preload='auto'
        data-setup='{"liveui": false}'
      >
        <source src='https://www.youtube.com/watch?v=wDJVMNMsNEQ' type='video/mp4' />
        <source src='https://www.youtube.com/watch?v=wDJVMNMsNEQ' type='video/webm' />
      </video> */}
      <iframe
        title='lesson'
        className='video-js video'
        src='https://www.youtube.com/embed/lHVj_8k2sh8'
      ></iframe>
    </div>
  )
}

export default LessonVideo
