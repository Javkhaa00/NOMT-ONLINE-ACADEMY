import React from "react";
import DataContext from "../mainContext";
import "./ownedLessons.scss";
import { useContext } from "react";
import Header from "../Header/Header";
import { LESSON_UNITS } from "../Lessons/LessonsData";
import LessonsCard from "../Lessons/LessonsCard";

export const OwnedLessons = () => {
  const { userInformation } = useContext(DataContext);

  return (
    <div className="mainOwned">
      <Header />
      <div className="ownedTitle">Худалдан авсан</div>
      <div className="ownedContent">
        {userInformation.payed.map((element) => {
          return LESSON_UNITS[element.general].map((cur, index) => {
            if (element.subject === cur.specific) {
              return (
                <LessonsCard
                  key={index}
                  specific={cur.specific}
                  general={cur.general}
                  teacher={cur.teacher}
                  uni={cur.uni}
                  avatar={cur.avatar}
                  generalNS={element.general}
                  flag={cur.flag}
                />
              );
            }
            return ''
          });
        })}
      </div>
    </div>
  );
};
