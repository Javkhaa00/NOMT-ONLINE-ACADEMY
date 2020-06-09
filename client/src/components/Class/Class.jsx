import React, { useContext } from 'react'
import Header from '../Header/Header'
import './Class.scss'
import pay from '../assets/pay.png'
import anu from '../assets/teachers/anu.png'
import bilguun from '../assets/teachers/bilguun.png'
import ezenbaatar from '../assets/teachers/ezenbaatar.png'
import bayasgalan from '../assets/teachers/bayasgalan.png'
import huslen from '../assets/teachers/huslen.png'
import javkhaa from '../assets/teachers/javkhaa.png'
import mandah from '../assets/teachers/mandah.png'
import munguldei from '../assets/teachers/munguldei.png'
import namuungoo from '../assets/teachers/namuungoo.png'
import ylgum from '../assets/teachers/ylgum.png'
import sainbilegt from '../assets/teachers/sainbilegt.png'
import tselmeg from '../assets/teachers/tselmeg.png'
import tsolmon from '../assets/teachers/tsolmon.png'
import { lessondata } from './ClassData'
import DataContext from '../mainContext'
import { Link } from 'react-router-dom'

const Class = () => {
  const {userInformation, setUserInformation} = useContext("");

  console.log(userInformation)

  const Data = lessondata()

  const avatarImg = () => {
    if (Data.image === 'anu') return <img className="lessonTeacherImage" alt='anu' src={anu} />
    if (Data.image === 'bilguun') return <img className="lessonTeacherImage" alt='bilguun' src={bilguun} />
    if (Data.image === 'ezenbaatar') return <img className="lessonTeacherImage" alt='ezenbaatar' src={ezenbaatar} />
    if (Data.image === 'bayasgalan') return <img className="lessonTeacherImage" alt='bayaslgalan' src={bayasgalan} />
    if (Data.image === 'huslen') return <img className="lessonTeacherImage" alt='huslen' src={huslen} />
    if (Data.image === 'javkhaa') return <img className="lessonTeacherImage" alt='javkhaa' src={javkhaa} />
    if (Data.image === 'mandah') return <img className="lessonTeacherImage" alt='mandah' src={mandah} />
    if (Data.image === 'munguldei') return <img className="lessonTeacherImage" alt='munguldei' src={munguldei} />
    if (Data.image === 'namuungoo') return <img className="lessonTeacherImage" alt='namuundoo' src={namuungoo} />
    if (Data.image === 'ylgum') return <img className="lessonTeacherImage" alt='ylgum' src={ylgum} />
    if (Data.image === 'sainbilegt') return <img className="lessonTeacherImage" alt='saibbilegt' src={sainbilegt} />
    if (Data.image === 'tselmeg') return <img className="lessonTeacherImage" alt='tselmeg' src={tselmeg} />
    if (Data.image === 'tsolmon') return <img className="lessonTeacherImage" alt='tsolmon' src={tsolmon} />
  }
  return (
    <div className='teacherLessons'>
      <Header />
      <div className='bigBigContainer'>
        <div className='lessonSection'>
          {Data.lessons.map((cur, index) => {
            return (
              <div key={index} className='teacherLesson'>
                <p className='lesson name'>{cur.name}</p>
                <p className='lesson time'>{cur.time}</p>
              </div>
            )
          })}
        </div>
        <div className='teacherSection'>
          <div className='teacherSectionPro'>
            {avatarImg()}
            <div className="teacherSectionProTitle">
              <p className="name">{Data.name}</p>
              <p className="teacherText" style={{ marginTop: '18px' }}>{Data.university}</p>
              <p className="teacherText">{Data.score}</p>
              {userInformation.payed !== " " ? (
                <img
                  className="buy"
                  src={pay}
                  alt="pay"
                />
              ) : ('')}

            </div>
          </div>
          {userInformation.payed === ' ' ? (
            <>
              {userInformation.name !== ' ' ? (
                <>
                  <p className="price">{Data.price}</p>
                  <Link
                    className='button-signUp white-text'
                    onClick={() =>
                      setUserInformation({ ...userInformation, page: 'signUp' })
                    }
                    id='signUp'
                    to='/sign-up'
                  >
                    Бүртгүүлэх
                  </Link>
                </>
              ) : (
                  <>
                    <p className="price">{Data.price}</p>
                    <Link
                      className='button-signUp white-text'
                      onClick={() =>
                        setUserInformation({ ...userInformation, page: 'payment' })
                      }
                      id='payment'
                      to='/payment'
                    >
                      Худалдан авах
                    </Link>
                  </>
                )}
            </>
            ) : (
              <p className="price">{Data.price}</p>
          )}

        </div>
      </div>
      </div>
  )
}

export default Class
