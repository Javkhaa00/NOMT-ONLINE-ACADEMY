import React from "react";
import Header from "../Header/Header";
import "./Payment.scss";

const Payment = () => {
  return (
    <div className="pay">
      <Header />
      <div className="allText">
        <div className="head">БАГЦУУД</div>
        <div className="bundle">
          <div style={{ textTransform: "uppercase", fontWeight: "500" }}>
            bundle:{" "}
          </div>
          <div style={{ marginLeft: "15px" }}>
            1. 2 хичээл авбал 3 дахь нь 30% хөнгөлөх <br />
            2. 3 хичээл авбал 4 дэхь нь 50% хөнгөлөх <br />
            3. 2 найзаа дагуулвал 30%30%30% хөнгөлөх/зөвхөн нэг хичээл дээр/
          </div>
        </div>
        <div className="sat">
          <div style={{ textTransform: "uppercase", fontWeight: "500" }}>
            sat breaker:{" "}
          </div>
          <div style={{ marginLeft: "15px" }}>
            1. SAT Reasoning - 300k
            <br /> a. Math <br /> b. Reading <br />
            c. Writing
            <br />
            2. SAT Engineering - 150k <br />
            a. Physics or Chemistry <br />
            b. Math level 2
            <br />
            3. SAT Bio-chemist - 230k <br />
            a. Biology <br />
            b. Chemistry <br />
            c. Math level 2
          </div>
        </div>
        <div className="sat">
          <div style={{ textTransform: "uppercase", fontWeight: "500" }}>
            well... hello america? - 590k:{" "}
          </div>
          <div style={{ marginLeft: "15px" }}>
            1. TOEFL <br />
            a. Reading <br />
            b. Writing <br />
            c. Listening <br />
            d. Speaking <br />
            2. SAT Reasoning IELTS - 300k <br />
            a. Reading <br />
            b. Writing <br />
            c. Listening <br />
            d. Speaking TOEFL - 300k <br />
            a. Reading <br />
            b. Writing <br />
            c. Listening <br />
            d. Speaking <br />
          </div>
        </div>
        <div className="konichiva">
          <div style={{ textTransform: "uppercase", fontWeight: "500" }}>
            konichiva
          </div>
          <div style={{ marginLeft: "15px" }}>
            1. Monbusho <br />
            a. Physics <br />
            b. Math <br />
            c. Chemistry <br />
            d. Japanese
          </div>
        </div>
        <div className="sat">
          <div style={{ textTransform: "uppercase", fontWeight: "500" }}>
            well... hello japan? - 510k:{" "}
          </div>
          <div style={{ marginLeft: "15px" }}>
            1. Monbusho <br />
            2. N5-N3 or N4-N2 or N3-N1
          </div>
        </div>
        <div className="head">ТӨЛБӨР ТООЦООНЫ МЭДЭЭЛЭЛ</div>
        <div style={{fontWeight:"500", marginLeft: "15px"}}>
        Дансны дугаар: 457063198 <br/>
        Хүлээн авагчийн нэр: Ezenbaatar B.<br/>
        Гүйлгээний утга: Таны нэр, бүртгэлтэй Email хаяг, сонгосон хичээлийн нэр /багцийн нэр/<br/>
        Шилжүүлсэний дараа 99135563 дугаарт  NOMT ONLINE ACADEMY /Таны нэр/ гэж мэссеж илгээнэ үү.
        </div>
        <div>
        /Тооцооны хэсэг дээр асуух зүйл гарвал ХОЛБОО БАРИХ хэсэг рүү очин холбоо барина уу./<br/>
        </div>
      </div>
    </div>
  );
};

export default Payment;
