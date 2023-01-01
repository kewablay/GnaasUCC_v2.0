import React from "react";

function Button({ text, icon, color, bg }) {
  return (
    <div className="btnContainer">
      <a href="#" className="btn" style={{ color: color, background: bg }}>
        {text}
        <span className="btnIcon">
          <img src={icon} alt="icon" />
        </span>
      </a>
    </div>
  );
}

export default Button;
