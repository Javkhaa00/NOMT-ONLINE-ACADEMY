import React from 'react'
import Header from '../Header/Header'
import { Card } from './card'
import { america, sat, sale, japan } from './someData'
import './Payment.scss'

const Payment = () => {
  // console.log(america, sat, bundle, japan)
  return (
    <div className='payment'>
      <Header />
      <h1 className="bundle-title">Багцууд</h1>
      <div className="bundleContainer">
        {
          sale.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <div className="bundleContainer">
        {
          america.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <div className="bundleContainer">
        {
          sat.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <div className="bundleContainer">
        {
          japan.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
    </div>
  )
}

export default Payment
