import React, { useEffect, useContext } from 'react'
import logo from '../assets/icons/logo2.png'
import M from 'materialize-css/dist/js/materialize'
import './Header.scss'
import DataContext from '../mainContext'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

const Header = () => {
  const db = firebase.firestore()
  const { userInformation } = useContext(DataContext)

  useEffect(() => {
    const elems = document.querySelectorAll('.dropdown-trigger')
    const instances = M.Dropdown.init(elems, {
      constrainWidth: false,
      coverTrigger: false
    })
    console.log(instances)
    const page = window.location.href.split('/')[
      window.location.href.split('/').length - 1
    ]
    if (document.getElementById(page) !== null) {
      document.getElementById(page).style.fontWeight = 'bold'
    }
  }, [])

  const logOut = () => {
    db.collection('users')
      .get()
      .then(querySnapshot => {
        var count = 1;
        querySnapshot.forEach(async doc => {
          if (doc.data().email === userInformation.email) {
            await db.collection('users').doc(count + '').set({
              activity: ''
            }, { merge: true })
            window.location.href = '/';
          }
          count++
        })
      })
  }
  return (
    <nav className=''>
      <Link
        to='/'
        className='brand-logo'
      >
        <img alt='logo' src={logo} />
      </Link>
      <div id='nav-mobile' className='navbar left'>
        <Link className='black-text titles' id='lessons' to='/lessons'>
          Сургалтууд
        </Link>
        <Link className='black-text titles' id='teachers' to='/teachers'>
          Бидний тухай
        </Link>
        <p
          className='scrolldown black-text titles'
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              left: 100,
              behavior: 'smooth'
            })
          }
        >
          Холбоо барих
        </p>
        <Link className='black-text titles' id='payment' to='/payment'>
          Төлбөр тооцоо
        </Link>
      </div>
      <div>
        {userInformation.name !== '' ? (
          <Link
            className='right buttonTransparent dropdown-trigger btn'
            to='/#'
            data-target='dropdown1'
          >
            <p className='profileText black-text'>{userInformation.name}</p>
          </Link>
        ) : (
          <>
            <Link
              className='buttonSignIn black-text'
              id='sign-in'
              to='/sign-in'
            >
              Нэвтрэх |{' '}
            </Link>
            <Link
              className='buttonSignUp black-text'
              id='sign-up'
              to='/sign-up'
            >
              Бүртгүүлэх
            </Link>
          </>
        )}
        <ul id='dropdown1' className='dropdown-content'>
          <li>
            <Link className='right' to='/#'>
              manage your profile
            </Link>
          </li>
          <li>
            <Link className='right' to='/#'>
              Худалдан авсан хичээл
            </Link>
          </li>
          <li>
            <div style={{ paddingTop: '0' }} className='right' onClick={logOut}>
              LOG OUT
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
