import React from "react";
import "../assets/css/Departments.css";

import departmentImg from "../assets/images/departmentsImg.png";
import Button from "./Button";
import Title from "./Title";
import Arrow from "../assets/icons/arrow-black.png";
import coilIcon from "../assets/icons/coil.png";

function Depatments() {
  return (
    <div id="departments" className="departments mb-4 py-3">
      <img id="coil" src={coilIcon} alt="." />
      <div className="introContainer">
        <div className="introText">
          <Title text="Departments" />
          <p>
            View the various departments in the fellowship and their purpose
            with regards to the smooth running of the church.
          </p>
          <Button
            text={"View now"}
            color={"black"}
            bg={"#F7EDE8"}
            icon={Arrow}
          />
        </div>
      </div>
      <div className="imgContainer">
        <div className="image">
          <img src={departmentImg} alt="departments" />
        </div>
      </div>
    </div>
  );
}

export default Depatments;
