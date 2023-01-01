import React from "react";
import "../assets/css/Developers.css";

import DevCard from "./DevCard";
import Title from "./Title";
import KewaBlay from "../assets/images/kewablay.png";

function Developers() {
  return (
    <div className="developers mb-4">
      <Title text="Developers" />
      <div className="devContainer flex scroll-x hide-scrollbar gap-2">
        <DevCard
          img={KewaBlay}
          name={"Kojo Kewa Junior"}
          skills={"UI/UX and Frontend Development"}
          link={"#"}
        />
        <DevCard
          img={KewaBlay}
          name={"Kojo Kewa Junior"}
          skills={"UI/UX and Frontend Development"}
          link={"#"}
        />
      </div>
    </div>
  );
}

export default Developers;
