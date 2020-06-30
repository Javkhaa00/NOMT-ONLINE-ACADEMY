import React from 'react'
import Header from '../Header/Header'
import { Card } from './card'
import { america, sat, bundle, japan } from './someData'
import './Payment.scss'

const Payment = () => {
  // console.log(america, sat, bundle, japan)
  return (
    <div className='payment'>
      <Header />
      <h1>Багцууд</h1>
      {
        america.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons}/>)
      }
      {
        sat.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons}/>)
      }
      {
        bundle.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons}/>)
      }
      {
        japan.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons}/>)
      }
    </div>
  )
}

export default Payment
