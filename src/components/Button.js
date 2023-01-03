import React from "react";
import { Link } from "react-router-dom";

function Button({ text, icon, color, bg, link }) {
  return (
    <div className="btnContainer">
      <Link to={link} className="btn" style={{ color: color, background: bg }}>
        {text}
        <span className="btnIcon">
          <img src={icon} alt="icon" />
        </span>
      </Link>
    </div>
  );
}

export default Button;
