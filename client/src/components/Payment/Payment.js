import React from 'react'
import Header from '../Header/Header'
import { Card } from './card'
import { america, sat, sale, undergraduate, monbusho } from './someData'
import './Payment.scss'

const Payment = () => {
  // console.log(america, sat, bundle, japan)
  return (
    <div className='payment'>
      <Header />
      <h1 className="bundleTitle">Багцууд</h1>
      <div className="bundleContainer">
        {
          sale.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <div className="bundleContainer">
        {
          undergraduate.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <div className="bundleContainer">
        {
          america.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <div className="bundleContainer">
        {
          monbusho.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <div className="satBreaker">SAT BREAKER</div>
      <div className="bundleContainer">
        {
          sat.map((cur, index) => <Card key={index} name={cur.name} price={cur.price} lessons={cur.lessons} />)
        }
      </div>
      <h1 className="bundleInformation">Төлбөр тооцооны мэдээлэл</h1>
      <h5 className="dundleInfoText">Дансны дугаар: 457063198</h5>
      <h5 className="dundleInfoText">Хүлээн авагчийн нэр: Ezenbaatar B.</h5>
      <h5 className="dundleInfoText">Гүйлгээний утга: (Таны нэр, өөрийн youtube Email хаяг, сонгосон хичээлийн нэр/багцийн нэр)</h5>
      <h5 className="dundleInfoText">Шилжүүлсний дараа 99135563 дугаарт NOMT ONLINE ACADEMY /Таны нэр/ гэж мессэж илгээнэ үү.</h5>
      <h5 className="dundleInfoText">/Тооцооны хэсэг дээр асуух зүйл гарвал ХОЛБОО БАРИХ хэсэг рүү очин холбоо барина уу./</h5>
    </div>
  )
}

export default Payment
