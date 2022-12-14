import React from "react";
import "./Heading.css";

const txt1 = "Type the alphabet";
const txt2 =
  "Typing game to see how fast you type. Timer starts when you do :)";

const Heading = () => {
  return (
    <div className="heading">
      <h1>{txt1}</h1>
      <span>{txt2}</span>
    </div>
  );
};

export default Heading;
