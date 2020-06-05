import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Teachers from './components/TeachersList/Teachers'
import TeacherPro from './components/TeacherProfile/TeacherPro'
import Lessons from './components/Lessons/Lessons.jsx'
import Class from './components/Class/Class.jsx'
import SignUp from './components/signUp/signUp.js'
import SignIn from './components/signIn/signIn.js'
import Payment from './components/Payment/Payment'
import DataContext from './components/mainContext'
import LessonVideo from './components/lessonvideo/lessonVideo'

function App () {
  const [userInformation, setUserInformation] = useState({
    name: '',
    page: '',
    payed: ''
  })
  
  useEffect(() => {
    axios.get('/getData').then(res => {
      if (res.data.name !== undefined && userInformation.name === '') {
        setUserInformation({ ...userInformation, name: res.data.name })
      } else if (res.data.name === '' && userInformation.name !== '') {
        setUserInformation({ ...userInformation, name: res.data.name })
      }
    })
    
  }, [userInformation])

  return (
    <Router>
      <DataContext.Provider value={{ userInformation, setUserInformation }}>
        <Switch>
          <Route path='/teachers'>
            <Teachers />
          </Route>
          <Route path='/teacher'>
            <TeacherPro />
          </Route>
          <Route path='/lessons'>
            <Lessons />
          </Route>
          <Route path='/class'>
            <Class />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/video'>
            <LessonVideo />
          </Route>
          <Route exact path='/'>
            <FrontPage />
          </Route>
        </Switch>
        <Footer />
      </DataContext.Provider>
    </Router>
  )
}

export default App
