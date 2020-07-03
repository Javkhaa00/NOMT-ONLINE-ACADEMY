import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './signIn.scss'
import Header from '../Header/Header'
import Check from './check.jsx'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

const SingIn = () => {
  const history = useHistory();
  useEffect(() => {
    if (
      window.location.href.split('/')[
      window.location.href.split('/').length - 1
      ] === 'error'
    )
      alert('invalid email or password')
  }, [])

  const singInClicked = () => {
    const result = Check()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if (result.check === true) {
      auth
        .signInWithEmailAndPassword(email, password).then(() => { window.scrollTo({ top: 0 }); history.push('/')})
        .catch(function (error) {
          var errorCode = (error.code).split('/')[1];
          if (errorCode === 'invalid-email')
            alert('Email хаягаа зөв бич нүү !!!')
          else if (errorCode === 'user-not-found')
            alert('Бүртгэлтэй бус Email байна !!!')
          else if (errorCode === 'wrong-password')
            alert('Нууц үг буруу байна !!!')

        });
    }
  }
  return (
    <div className='register-container row '>
      <Header />
      <div className='text-container row col l10 m10 offset-l1 offset-m1'>
        <div className='bold-text'>
          ТАНЫ ИРЭЭДҮЙН ӨӨРТӨӨ ХИЙХ ХӨРӨНГӨ ОРУУЛАЛТ
        </div>
        <div className='text'>Таньд олон давуу тал бий болох болно</div>
      </div>
      <div className='down_button'></div>

      <form
        id='sign-in'
        className='sign-in-container row'
        action='/sign-in'
        method='post'
        onSubmit={e => e.preventDefault()}
      >
        <div className='input'>
          <label className='head-text left align'>И-МАЙЛ</label>
          <input
            placeholder='ЦАХИМ ЩУУДАНГИЙН ХАЯГ'
            id='email'
            type='text'
            name='email'
            className='sign-in-input validate'
          ></input>
        </div>

        <div className='input'>
          <label className='head-text left-align'>НУУЦ ДУГААР</label>
          <input
            placeholder='КОДОО ОРУУЛНА УУ'
            minLength='8'
            id='password'
            name='password'
            type='password'
            className='sign-in-input validate'
          ></input>
        </div>

        <div className='bottom'>
          <Link to='/sign-up' className='valign-wrapper sign-in'>
            Бүртгүүлэх
          </Link>
          <button className='btn register' onClick={() => singInClicked()}>
            Нэвтрэх
          </button>
        </div>
      </form>
    </div>
  )
}

export default SingIn
