import React from "react";

import ButtonVar1 from "./ButtonVar1";
import user from "../assets/icons/user.png";

function PatronCard({ name, desc, link, img }) {
  return (
    <div className="patronCard">
      <div className="imgContainer">
        <div className="imgDiv">
            <img src={img} alt="profile" />
        </div> 
      </div>
      <div className="cardContent">
        <h3 className="text-300">{name}</h3>
        <p className="text-100">{desc}</p>
        <ButtonVar1 text={"View Profile"} icon={user} link={link} />
      </div>
    </div>
  );
}

export default PatronCard;
