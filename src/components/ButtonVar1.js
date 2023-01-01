import React from "react";

function ButtonVar1({ text, icon, link }) {
  return (
    <div>
      <a className="btnVar btnVar1" href={link}>
        <span>
          <img src={icon} alt="." className="user"/>
        </span>
        {text}
      </a>
    </div>
  );
}

export default ButtonVar1;
