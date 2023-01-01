import React from "react";
import "../assets/css/Departments.css";

import departmentImg from "../assets/images/departmentsImg.png";
import Arrow from "../assets/icons/arrow-black.png";
import Button from "../components/Button";
import Title from "../components/Title";

function Depatments() {
  return (
    <div className="departments mb-4 py-3">
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
