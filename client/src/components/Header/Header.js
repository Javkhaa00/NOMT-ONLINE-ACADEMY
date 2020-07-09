import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import logo from '../assets/icons/logo2.png'
import './Header.scss'
import DataContext from '../mainContext'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

const Header = () => {
  const history = useHistory();
  const { userInformation } = useContext(DataContext)

  const dropdown = () => {
    document.getElementById("dropdown1").style.display = "table";
    document.body.addEventListener("click", listener);
  };
  const listener = () => {
    document.getElementById("dropdown1").style.display = "none";
    document.body.removeEventListener("click", listener);
  };

  useEffect(() => {
    const page = window.location.href.split('/')[
      window.location.href.split('/').length - 1
    ]
    if (document.getElementById(page) !== null) {
      document.getElementById(page).style.fontWeight = 'bold'
    }
  }, [])

  const logOut = () => {
    auth.signOut().then(() => { window.location.reload(false); history.push("/") })
  }
  return (
    <>
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
            <div
              className='right buttonTransparent dropdown-trigger btn'
              onClick={() => dropdown()}
            >
              <p className='profileText black-text'>{userInformation.name}</p>
            </div>
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
          <ul id='dropdown1' className='dropdownContent'>
            <li>
              <Link className='dropdown_buttons' to='/#'>
                Худалдан авсан хичээл
            </Link>
            </li>
            <li>
              <div style={{ marginLeft: '15px', cursor: 'pointer' }} className='dropdown_buttons' onClick={logOut}>
                LOG OUT
            </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navbarMobile">
        <Link>
          Сургалтууд
            </Link>
        <Link>
          Бидний тухай
            </Link>
        <Link>
          Холбоо барих
          </Link>
        <Link>
          Төлбөр тооцоо
          </Link>
      </div>
    </>
  )
}

export default Header
