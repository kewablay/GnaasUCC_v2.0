import React, { useState } from "react";
import "../assets/css/Navbar.css";
import MenuIcon from "../assets/icons/menu.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav class="flex flex-between">
      <div className="logo">GNAASUCC</div>

      <div className={`navLinks ${showMenu && "showMenu"}`}>
        <a href="#" class="link">
          Gallery
        </a>
        <a href="#services" class="link">
          Events
        </a>
        <a href="#products" class="link">
          Departments
        </a>
        <a href="#about" class="link">
          About Us
        </a>
        <a href="#contact" class="link">
          Contact Us
        </a>
      </div>

      <button className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
        <img src={MenuIcon} alt="menu" />
      </button>
    </nav>
  );
}

export default Navbar;
