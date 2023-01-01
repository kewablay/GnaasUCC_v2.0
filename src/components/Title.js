import React from "react";
import spark from "../assets/icons/spark.png";

function Title({ text }) {
  return (
    <h2 className="title">
      {text} <img id="spark" src={spark} alt="." />
    </h2>
  );
}

export default Title;
