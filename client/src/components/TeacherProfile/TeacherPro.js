import React from 'react'
import Header from '../Header/Header'
import './TeacherPro.scss'
import anu from '../assets/teachers/anu.png'
import bilguun from '../assets/teachers/bilguun.png'
import ylgum from '../assets/teachers/ylgum.png'
import sainbilegt from '../assets/teachers/sainbilegt.png'
import ezenbaatar from '../assets/teachers/ezenbaatar.png'
import bayasgalan from '../assets/teachers/bayasgalan.png'
import huslen from '../assets/teachers/huslen.png'
import javkha from '../assets/teachers/javkhaa.png'
import mandah from '../assets/teachers/mandah.png'
import munguldei from '../assets/teachers/munguldei.png'
import namuungoo from '../assets/teachers/namuungoo.png'
import tselmeg from '../assets/teachers/tselmeg.png'
import tsolmon from '../assets/teachers/tsolmon.png'
import teacherInformation from './teachersInformation'

const TeacherPro = () => {
  const ID = window.location.href.split('/')[
    window.location.href.split('/').length - 1
  ]

  const teacherImg = () => {
    if (ID === 'anu') return <img className='teacherImg' alt='anu' src={anu} />

    if (ID === 'bilguun')
      return <img className='teacherImg' alt='bilguun' src={bilguun} />

    if (ID === 'ylgum')
      return <img className='teacherImg' alt='ylgum' src={ylgum} />

    if (ID === 'sainbilegt')
      return <img className='teacherImg' alt='sainbilegt' src={sainbilegt} />
    if (ID === 'ezenbaatar')
      return <img className='teacherImg' alt='ezenbaatar' src={ezenbaatar} />

    if (ID === 'bayasgalan')
      return <img className='teacherImg' alt='bayasgalan' src={bayasgalan} />

    if (ID === 'huslen')
      return <img className='teacherImg' alt='huslen' src={huslen} />

    if (ID === 'javkha')
      return <img className='teacherImg' alt='javkha' src={javkha} />

    if (ID === 'mandah')
      return <img className=' teacherImg' alt='mandah' src={mandah} />

    if (ID === 'munguldei')
      return <img className=' teacherImg' alt='munguldei' src={munguldei} />

    if (ID === 'namuungoo')
      return <img className='teacherImg' alt='namuungoo' src={namuungoo} />

    if (ID === 'tselmeg')
      return <img className='teacherImg' alt='tselmeg' src={tselmeg} />

    if (ID === 'tsolmon')
      return <img className='teacherImg' alt='tsolmon' src={tsolmon} />
  }

  return (
    <div className='teacherPro'>
      <Header />
      <div className='Information col l12 m10 offset-l1 offset-m1'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {teacherImg()}
          <div className='text'>
            <h4 style={{ margin: '0px 0px 15px 0px' }}>
              {' '}
              {teacherInformation[ID].name}{' '}
            </h4>
            {teacherInformation[ID].school.map((cur, index) => (
              <h5
                style={{ margin: 0, display: 'flex', flexDirection: 'row' }}
                key={index}
              >
                {cur}{' '}
              </h5>
            ))}
            {teacherInformation[ID].achievement.map((cur, index) => (
              <h5
                style={{ margin: 0, display: 'flex', flexDirection: 'row' }}
                key={index}
              >
                {cur}{' '}
              </h5>
            ))}
            <h5 style={{ marginTop: '39px' }}>
              {teacherInformation[ID].littleStory}
            </h5>
          </div>
        </div>

        <div className='lesson-card lighten-5 z-depth-1'>
          <h4 style={{ textTransform: 'uppercase', margin: '0' }}>
            {teacherInformation[ID].lesson}
          </h4>
          <h6 style={{ margin: 0, marginTop: '10px' }} className='subtitle'>
            {teacherInformation[ID].Subject}
          </h6>
          <h5 style={{ margin: '20px 170px 0px 0px', fontSize: '19px' }}>
            {teacherInformation[ID].lessonPrice}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default TeacherPro
