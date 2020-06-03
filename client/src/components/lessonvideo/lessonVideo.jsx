import React from 'react'
import './lessonVideo.scss'

import lesson from "../assets/testing video/BLACKPINK - 'Kill This Love' M-V.webm"

const LessonVideo = () => {

    return (
        <div>
            {/* <Headers /> */}
            <video controls>
                <source src={lesson} type="video/webM"/>
            </video>
        </div>
    )
}

export default LessonVideo