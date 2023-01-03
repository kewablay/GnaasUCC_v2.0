import React, { useState } from "react";
import "../assets/css/Navbar.css";
import MenuIcon from "../assets/icons/menu.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav class="flex flex-between">
      <div className="logo">
        <Link to="/">GNAASUCC</Link>
      </div>

      <div className={`navLinks ${showMenu && "showMenu"}`}>
        <Link class="link" to="/events">
          Events
        </Link>
        <Link class="link" to="/#gallery">
          Gallery
        </Link>

        <Link class="link" to="/#departments">
          Departments
        </Link>
        <Link class="link" to="/#about-us">
          About Us
        </Link>
        <Link class="link" to="/#contact-us">
          Contact Us
        </Link>
      </div>

      <button className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
        <img src={MenuIcon} alt="menu" />
      </button>
    </nav>
  );
}

export default Navbar;
