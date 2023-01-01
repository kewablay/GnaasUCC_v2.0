import React from "react";
import "../assets/css/Developers.css";

import DevCard from "./DevCard";
import Title from "./Title";
import KewaBlay from "../assets/images/kewablay.png";
import Alfred from "../assets/images/Alfred.png";

function Developers() {
  return (
    <div className="developers mb-4">
      <Title text="Developers" />
      <div className="devContainer lg-center flex scroll-x hide-scrollbar gap-2">
        <DevCard
          img={KewaBlay}
          name={"Kojo Kewa Junior"}
          skills={"UI/UX and Frontend Development"}
          link={"#"}
        />
        <DevCard
          img={Alfred}
          name={"Alfred Owusu Acheampong"}
          skills={"Backend Development"}
          link={"#"}
        />
      </div>
    </div>
  );
}

export default Developers;
