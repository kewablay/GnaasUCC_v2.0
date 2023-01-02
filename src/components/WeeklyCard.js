import React from "react";
import timeIcon from "../assets/icons/time-icon.png";

function WeeklyCard({ title, desc, time, icon }) {
  return (
    <div className="card flex flex-col">
      <div className="icon"><img src={icon} alt="." /></div>
      <div className="cardContent">
        <h4 className="cardTitle">{title}</h4>
        {/* <p className="cardInfo">{desc}</p> */}
      </div>
      <div className="tag timeTag flex-center">
        <span className="timeIcon flex-center">
          <img src={timeIcon} alt="time" />
        </span>
        {time}
      </div>
    </div>
  );
}

export default WeeklyCard;
