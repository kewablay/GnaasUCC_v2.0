import React from "react";

function ButtonVar2({ text, icon, link }) {
  return (
    <div>
      <a className="btnVar btnVar2" href={link}>
        {text}
        <span>
          <img src={icon} alt="." className="icon" />
        </span>
      </a>
    </div>
  );
}

export default ButtonVar2;
