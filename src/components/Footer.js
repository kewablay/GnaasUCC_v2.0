import React from "react";
import "../assets/css/Footer.css";

import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'
import instagram from '../assets/icons/instagram.png'

function Footer() {
  return (
    <footer class="bg-primary container-fluid py-3 text-400 grid">
      <div class="flex-center mb-3">
        <h2 class="logo">GNAAS UCC</h2>
      </div>
      <div class="flex-col gap-1 mb-3">
        <a href="#">Gallery</a>
        <a href="#">Events</a>
        <a href="#">Departments</a>
      </div>
      <div class="flex-col gap-1 mb-3">
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Call Us Now</a>
      </div>
      <div class="flex-col gap-1 mb-3">
        <p>Social Media</p>
        <div class="socialLinks">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
