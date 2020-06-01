import React, { useState } from "react";
import Header from "../Header/Header";
import "./Class.scss";
import ClassCard from "./ClassCard";
import { TEACHERS, CLASSES } from "./ClassData";

const Class = () => {
  const [ClassId, setClassId] = useState("satreasoning");

  console.log(TEACHERS);
  return (
    <div className="something">
      <Header />
      <div>
        {CLASSES.map(classes => (
          <h2>
            {classes.title}
          </h2>
        ))}
      </div>
      <div className="classes row">
        {TEACHERS[ClassId].map((cur, index) => (
          <ClassCard
            key={index}
            teacher={cur.teacher}
            uni={cur.uni}
            score={cur.score}
            avatar={cur.avatar}
            price={cur.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Class;
