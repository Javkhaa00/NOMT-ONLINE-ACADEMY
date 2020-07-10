import React, { useContext } from "react";
import Header from "../Header/Header";
import "./Class.scss";
import pay from "../assets/pay.png";
import anu from "../assets/teachers/anu.png";
import bilguun from "../assets/teachers/bilguun.png";
import ezenbaatar from "../assets/teachers/ezenbaatar.png";
import bayasgalan from "../assets/teachers/bayasgalan.png";
import huslen from "../assets/teachers/huslen.png";
import javkhaa from "../assets/teachers/javkhaa.png";
import mandah from "../assets/teachers/mandah.png";
import munguldei from "../assets/teachers/munguldei.png";
import namuungoo from "../assets/teachers/namuungoo.png";
import ylgum from "../assets/teachers/ylgum.png";
import sainbilegt from "../assets/teachers/sainbilegt.png";
import tselmeg from "../assets/teachers/tselmeg.png";
import tsolmon from "../assets/teachers/tsolmon.png";
import { lessonData } from "./ClassData";
import { Link } from "react-router-dom";
import DataContext from "../mainContext";

const Class = () => {
  const path = window.location.href.split("/");
  const { userInformation } = useContext(DataContext);
  const Data = lessonData[path[4]][path[5]];
  const owned = userInformation.payed;

  const check = () => {
    var count = 0;
    owned.map((cur) => {
      count =
        cur.general === path[4] && cur.subject === path[5] ? count + 1 : count;
      return "hi";
    });
    if (count !== 0) return true;

    return false;
  };

  const toVideoLink = (link) => {
    if (check() === true) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="teacherLessons">
      <Header />
      <div className="bigBigContainer">
        <div className="lessonSection">
          {Data.lessons.map((cur, index) => {
            return (
              <div
                key={index}
                className="teacherLesson"
                onClick={() => toVideoLink(cur.link)}
              >
                <p className="lesson name">{cur.name}</p>
                <p className="lesson time">{cur.time}</p>
              </div>
            );
          })}
        </div>
        <div className="teacherSection">
          <div className="teacherSectionPro">
            {avatarImg(Data.image)}
            <div className="teacherSectionProTitle">
              <p className="name">{Data.name}</p>
              <p className="teacherText" style={{ marginTop: "18px" }}>
                {Data.university}
              </p>
              <p className="teacherText">{Data.score}</p>
              {check() === true ? (
                <img className="buy" src={pay} alt="pay" />
              ) : (
                ""
              )}
            </div>
          </div>
          {check() === false ? (
            <>
              {userInformation.name === "" ? (
                <div>
                  <p className="price">{Data.price}</p>
                  <Link
                    className="button-signUp white-text"
                    id="signUp"
                    to="/sign-up"
                  >
                    Бүртгүүлэх
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="price">{Data.price}</p>
                  <Link
                    className="button-signUp white-text"
                    id="payment"
                    to="/payment"
                  >
                    Худалдан авах
                  </Link>
                </div>
              )}
            </>
          ) : (
            <p className="price">{Data.price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const avatarImg = (image) => {
  if (image === "anu")
    return <img className="lessonTeacherImage" alt="anu" src={anu} />;
  if (image === "bilguun")
    return <img className="lessonTeacherImage" alt="bilguun" src={bilguun} />;
  if (image === "ezenbaatar")
    return (
      <img className="lessonTeacherImage" alt="ezenbaatar" src={ezenbaatar} />
    );
  if (image === "bayasgalan")
    return (
      <img className="lessonTeacherImage" alt="bayaslgalan" src={bayasgalan} />
    );
  if (image === "huslen")
    return <img className="lessonTeacherImage" alt="huslen" src={huslen} />;
  if (image === "javkhaa")
    return <img className="lessonTeacherImage" alt="javkhaa" src={javkhaa} />;
  if (image === "mandah")
    return <img className="lessonTeacherImage" alt="mandah" src={mandah} />;
  if (image === "munguldei")
    return (
      <img className="lessonTeacherImage" alt="munguldei" src={munguldei} />
    );
  if (image === "namuungoo")
    return (
      <img className="lessonTeacherImage" alt="namuundoo" src={namuungoo} />
    );
  if (image === "ylgum")
    return <img className="lessonTeacherImage" alt="ylgum" src={ylgum} />;
  if (image === "sainbilegt")
    return (
      <img className="lessonTeacherImage" alt="saibbilegt" src={sainbilegt} />
    );
  if (image === "tselmeg")
    return <img className="lessonTeacherImage" alt="tselmeg" src={tselmeg} />;
  if (image === "tsolmon")
    return <img className="lessonTeacherImage" alt="tsolmon" src={tsolmon} />;
};

export default Class;
