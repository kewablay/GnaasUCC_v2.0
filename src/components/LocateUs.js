import React from "react";
import "../assets/css/LocateUs.css";

import Title from "./Title";
import bentArrow from '../assets/icons/bent-arrow.png'

function LocateUs() {
  return (
    <div className="locateUs mb-4 ">
      <div className="content">
        <div>
          <img src={bentArrow} id="bentArrow" alt=". " />
          <Title text={"Locate Us"} />
          <p className="text-400">
            Central Region, University of Cape Coast Amamoma.Our doors are
            always opened to you.Join us as we worship the most high with all
            our hearts.
          </p>
        </div>
      </div>

      <div className="map"></div>
    </div>
  );
}

export default LocateUs;
