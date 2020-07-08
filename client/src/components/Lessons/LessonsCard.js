import React, { useContext } from "react";
import background from "../assets/card.png";
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
import zolboo from "../assets/teachers/zolboo.png";
import "./Lessons.scss";
import { Link } from "react-router-dom";
import payed from "../assets/payed.png";
import DataContext from "../mainContext";

const LessonsCard = props => {
  const { specific, general, teacher, uni, avatar, generalNS, flag } = props;
  const { userInformation } = useContext(DataContext);
  const owned = userInformation.payed;

  const check = () => {
    var count = 0;
    owned.map(cur => {
      count =
        cur.general === generalNS && cur.subject === specific
          ? count + 1
          : count;
      return "hi";
    });
    if (count !== 0) return <img alt="buyed" className="payed" src={payed} />;
  };

  return (
    <div className=" col l0 lessonCard">
      <Link className="card" to={"/class/" + generalNS + "/" + specific}>
        <div className="card-image">
          <img alt="background" className="background" src={background} />
          {check()}

          <span className="card-title">
            <div>
              <span className="lesson card-title-1 black-text">
                {specific}
                {
                  flag === '' ? <></> : <img alt={flag} className="icon" src={flag} />
                }
              </span>
              <div className="general black-text">{general}</div>
            </div>
            <div className="lai">
              <span className="teacher black-text">{teacher}</span>
              <div className="uni black-text">{uni}</div>
            </div>
          </span>
          <div className="avatarImg btn-floating halfway-fab white">
            {avatarImg(avatar)}
          </div>
        </div>
        <div className="card-content lessonCardText"></div>
      </Link>
    </div>
  );
};

const avatarImg = avatar => {
  if (avatar === "anu") return <img alt="anu" src={anu} />;
  if (avatar === "bilguun") return <img alt="bilguun" src={bilguun} />;
  if (avatar === "ezenbaatar") return <img alt="ezenbaatar" src={ezenbaatar} />;
  if (avatar === "bayasgalan")
    return <img alt="bayaslgalan" src={bayasgalan} />;
  if (avatar === "huslen") return <img alt="huslen" src={huslen} />;
  if (avatar === "javkhaa") return <img alt="javkhaa" src={javkhaa} />;
  if (avatar === "mandah") return <img alt="mandah" src={mandah} />;
  if (avatar === "munguldei") return <img alt="munguldei" src={munguldei} />;
  if (avatar === "namuungoo") return <img alt="namuundoo" src={namuungoo} />;
  if (avatar === "ylgum") return <img alt="ylgum" src={ylgum} />;
  if (avatar === "sainbilegt") return <img alt="saibbilegt" src={sainbilegt} />;
  if (avatar === "tselmeg") return <img alt="tselmeg" src={tselmeg} />;
  if (avatar === "tsolmon") return <img alt="tsolmon" src={tsolmon} />;
  if (avatar === "zolboo") return <img alt="zolboo" src={zolboo} />;
};

export default LessonsCard;
