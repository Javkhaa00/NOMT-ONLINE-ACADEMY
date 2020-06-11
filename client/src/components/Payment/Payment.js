import React from "react";
import Header from "../Header/Header";
import "./Payment.scss";

const Payment = () => {
  return (
    <div className="payment">
      <Header />
      <div className="bundle-bold">
        <span>БАГЦУУД</span>
      </div>
      <div className="bundle">
        <div style={{fontWeight:"bold"}}>BUNDLE</div>
        <div style={{marginLeft:"10px"}}>
          <span>1. 2 хичээл авбал 3 дахь нь 30% хөнгөлөх<br/></span>
          <span>2. 3 хичээл авбал 4 дэхь нь 50% хөнгөлөх<br/></span>
          <span>3. 2 найзаа дагуулвал 30%, 30%, 30% хөнгөлөх/зөвхөн нэг хичээл дээр/</span>
        </div>
        <div style={{fontWeight:"bold"}}>SAT BREAKER</div>
        <div style={{marginLeft:"10px"}}>
          <span>1. SAT Reasoning - 300k<br/><div style={{marginLeft:"12px"}}>a. Math<br/>b. Reading<br/>c. Writing</div></span>
        </div>
        <div style={{marginLeft:"10px"}}>
          <span>2. SAT Engineer - 150k<br/><div style={{marginLeft:"12px"}}>a. Physics or Chemistry<br/>b. Math level 2</div></span>
        </div>
        <div style={{marginLeft:"10px"}}>
          <span>3. SAT Bio-chemist - 230k<br/><div style={{marginLeft:"12px"}}>a. Biology<br/>b. Chemistry<br/>c. Math level 2</div></span>
        </div>
        <div style={{fontWeight:"bold"}}>WELL... HELLO AMERICA? - 590k</div>
        <div style={{marginLeft:"10px"}}>
          <span>1. TOEFL<br/><div style={{marginLeft:"12px"}}>a. Reading<br/>b. Writing<br/>c. Listening<br/>d. Speaking</div></span>
        <div style={{marginLeft:"10px"}}>
          <span>2. SAT Reasoning<br/><div style={{marginLeft:"10px"}}>IELTS - 300k</div><div style={{marginLeft:"25px"}}>a. Reading<br/>b. Writing<br/>c. Listening<br/>d. Speaking</div>
          <div style={{marginLeft:"10px"}}>TOEFL - 300k</div><div style={{marginLeft:"25px"}}>a. Reading<br/>b. Writing<br/>c. Listening<br/>d. Speaking</div>
          </span>
          </div>
        </div>
        <div style={{fontWeight:"bold"}}>KONICHIWA - 280k</div>
        <div style={{marginLeft:"10px"}}>
          <span>1. Monbusho<br/><div style={{marginLeft:"12px"}}>a. Physics<br/>b. Math<br/>c. Chemistry<br/> d. Japanese</div></span>
        </div>
        <div style={{fontWeight:"bold"}}>WELL... HELLO JAPAN? - 510k</div>
        <div>
          <div style={{marginLeft:"10px"}}><span>1. Monbusho<br/>2. N5-N3 or N4-N2 or N3-N1</span></div>
        </div>
      </div>
      <div className="payment-info">
        <span>Төлбөр тооцооны мэдээлэл</span>
      </div>
      <div className="info" style={{fontWeight:"bold", marginTop:"30px"}}>
        <span>Дансны дугаар: 457063198<br/>
        Хүлээн авагчийн нэр: Ezenbaatar B. <br/>
        Гүйлгээний утга: (Таны нэр, бүртгэлтэй Email хаяг, сонгосон хичээлийн нэр/багцийн нэр)
        <div style={{marginTop: "20px"}}><span>Шилжүүлсний дараа 99135563 дугаарт NOMT ONLINE ACADEMY /Таны нэр/ гэж мессэж илгээнэ үү.</span></div>
        </span>
        </div>
        <div style={{marginTop:"20px", marginLeft:"-400px"}}><span>/Тооцооны хэсэг дээр асуух зүйл гарвал ХОЛБОО БАРИХ хэсэг рүү очин холбоо барина уу./</span></div>
    </div>
  );
};

export default Payment;
