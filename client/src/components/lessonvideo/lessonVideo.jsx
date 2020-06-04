import React from 'react'
import './lessonVideo.scss'
import Header from '../Header/Header'

import lesson from "../assets/testing video/BLACKPINK - 'Kill This Love' M-V.webm"

const LessonVideo = () => {

    return (
        <div className="videoMain">
            <Header />
            <video className="video" controls>
                <source src={lesson} type="video/webM"/>
            </video>
        </div>
    )
}

export default LessonVideo