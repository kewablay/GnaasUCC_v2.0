import React from "react";
import "../assets/css/Header.css";

import Button from "./Button";
import ArrowWhite from "../assets/icons/arrow.png";
import heroImg from "../assets/images/hero-image.png";

function Header() {
  return (
    <div className="header mb-4">
      <div className="heroContainer">
        <img src={heroImg} alt="heroImg" />
      </div>

      <div className="introText">
        <h1>WELCOME TO GNAAS UCC</h1>
        <p className="text-400">
          A place of peace, love and hope restoration. A family where you can
          grow your faith in Christ.
        </p>
        <Button
          text={"View Events"}
          color={"white"}
          bg={"black"}
          icon={ArrowWhite}
        />
      </div>
    </div>
  );
}

export default Header;
