import React from "react";
import "../assets/css/SocialMedia.css";

import Title from "./Title";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import curvedArrow from "../assets/icons/curved-arrow.png";

import mockup1 from "../assets/images/mockup1.png";
import mockup2 from "../assets/images/mockup2.png";

function SocialMedia() {
  return (
    <div className="socialMedia mb-4 bg-primary pt-3">
      <div className="content">
        <Title text="Social Media" />
        <p className="info text-400">
          Check out Gnaas UCC on all social media platforms. Follow us like and
          subscribe for more updates on the fellowship.
        </p>
        <div className="socialIcons">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <img id="arrow" src={curvedArrow} alt="arrow" />
        </div>
      </div>
      <div className="mockup mockup1">
        <img src={mockup1} alt="." />
      </div>
      <div className="mockup mockup2">
        <img src={mockup2} alt="." />
      </div>
    </div>
  );
}

export default SocialMedia;
