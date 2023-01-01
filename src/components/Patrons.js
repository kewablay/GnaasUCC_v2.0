import React from "react";
import "../assets/css/Patrons.css";

import Title from "../components/Title";
import PatronCard from "./PatronCard";
import PatronImg from "../assets/images/patron2.png";

function Patrons() {
  return (
    <div className="patrons bg-secondary py-4 mb-4">
      <Title text="Patrons" />
      <div className="cardContainer flex scroll-x hide-scrollbar gap-1">
        <PatronCard
          name={"Pastor Professor Y. A Ankomah"}
          desc={"Main Patron and a professor in the university of capecoast"}
          link={"#"}
          img={PatronImg}
        />
        <PatronCard
          name={"Pastor Professor Y. A Ankomah"}
          desc={"Main Patron and a professor in the university of capecoast"}
          link={"#"}
          img={PatronImg}
        />
        <PatronCard
          name={"Pastor Professor Y. A Ankomah"}
          desc={"Main Patron and a professor in the university of capecoast"}
          link={"#"}
          img={PatronImg}
        />
      </div>
    </div>
  );
}

export default Patrons;
