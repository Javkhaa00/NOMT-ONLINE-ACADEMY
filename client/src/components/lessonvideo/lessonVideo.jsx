import React from 'react'
import './lessonVideo.scss'
import Header from '../Header/Header'

// import lesson from "../assets/testing video/BLACKPINK - 'Kill This Love' M-V.mp4"

const LessonVideo = () => {
  const id = window.location.href.split('/')[window.location.href.split("/").length - 1];
  const source = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="videoMain">
      <Header />
      <iframe
        title={id}
        width="1235"
        height="529"
        src={ source }
        className="video-js video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default LessonVideo
