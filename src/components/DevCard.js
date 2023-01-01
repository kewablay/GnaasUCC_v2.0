import React from "react";

import ButtonVar2 from './ButtonVar2'
import LinkedIn from "../assets/icons/linkedIn.png";

function DevCard({name, skills, link, img}) {
  return (
    <div className="devCard">
      <div className="imgContainer">
        <img src={img} alt="developer" />
      </div>
      <div className="content">
        <h3 className="text-400">{name}</h3>
        <p className="text-300">{skills}</p>

        <ButtonVar2 text="Connect on Linkedin" icon={LinkedIn} link={link} />
      </div>
    </div>
  );
}

export default DevCard;
