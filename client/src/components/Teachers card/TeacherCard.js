import React from 'react'
import anu from '../assets/teachers/anu.png'
import bilguun from '../assets/teachers/bilguun.png'
import ylgum from '../assets/teachers/ylgum.png'
import sainbilegt from '../assets/teachers/sainbilegt.png'
import ezenbaatar from '../assets/teachers/ezenbaatar.png'
import bayasgalan from '../assets/teachers/bayasgalan.png'
import huslen from '../assets/teachers/huslen.png'
import javkhaa from '../assets/teachers/javkhaa.png'
import mandah from '../assets/teachers/mandah.png'
import munguldei from '../assets/teachers/munguldei.png'
import namuungoo from '../assets/teachers/namuungoo.png'
import tselmeg from '../assets/teachers/tselmeg.png'
import tsolmon from '../assets/teachers/tsolmon.png'
import zolboo from '../assets/teachers/zolboo.png'
import './TeacherCard.scss'
import { Link } from 'react-router-dom'

const TeacherCard = cin => {
  const name = cin.name
  const school = cin.school
  const image = cin.image
  const lesson = cin.lesson

  const teacherIntro = () => {
    if (image === 'anu')
      return <img className='teacherProfilePicture' alt='anu' src={anu} />

    if (image === 'bilguun')
      return (
        <img className='teacherProfilePicture' alt='bilguun' src={bilguun} />
      )

    if (image === 'ylgum')
      return (
        <img
          className='teacherProfilePicture'
          alt='ylgum'
          src={ylgum}
        />
      )

    if (image === 'sainbilegt')
      return (
        <img
          className='teacherProfilePicture'
          alt='sainbilegt'
          src={sainbilegt}
        />
      )

    if (image === 'ezenbaatar')
      return (
        <img
          className='teacherProfilePicture'
          alt='ezenbaatar'
          src={ezenbaatar}
        />
      )

    if (image === 'bayasgalan')
      return (
        <img
          className='teacherProfilePicture'
          alt='bayasgalan'
          src={bayasgalan}
        />
      )
    if (image === 'bayasgalan')
      return (
        <img
          className='teacherProfilePicture'
          style={{ cursor: 'pointer' }}
          alt='bayasgalan'
          src={bayasgalan}
        />
      )

    if (image === 'huslen')
      return <img className='teacherProfilePicture' alt='huslen' src={huslen} />

    if (image === 'javkha')
      return (
        <img className='teacherProfilePicture' alt='javkha' src={javkhaa} />
      )

    if (image === 'mandah')
      return <img className='teacherProfilePicture' alt='mandah' src={mandah} />

    if (image === 'munguldei')
      return (
        <img
          className='teacherProfilePicture'
          alt='munguldei'
          src={munguldei}
        />
      )

    if (image === 'namuungoo')
      return (
        <img
          className='teacherProfilePicture'
          alt='namuungoo'
          src={namuungoo}
        />
      )

    if (image === 'tselmeg')
      return (
        <img className='teacherProfilePicture' alt='tselmeg' src={tselmeg} />
      )

    if (image === 'tsolmon')
      return (
        <img className='teacherProfilePicture' alt='tsolmon' src={tsolmon} />
      )
      if (image === 'zolboo')
      return (
        <img className='teacherProfilePicture' alt='zolboo' src={zolboo} />
      )
  }

  return (
    <Link className='card' to={'/teacher/' + image} onClick={() => window.scrollTo({top: 0})}>
      {teacherIntro()}
      <div className='card-content'>
        <h4>{name}</h4>
        <h5>{school}</h5>
        <h5>{lesson}</h5>
      </div>
    </Link>
  )
}

export default TeacherCard
