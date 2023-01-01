import React from "react";
import "../assets/css/UpcomingActivities.css";
import activity1 from "../assets/images/activity1.png";

import Title from "./Title";
import UpcomingCard from "./UpcomingCard";

function UpcomingActivities() {
  return (
    <div className="upcomingActivities mb-4">
      <Title text={"Upcoming Activities"} />
      <div className="activitiesContainer lg-center flex scroll-x hide-scrollbar gap-1">
        <UpcomingCard img={activity1} />
        <UpcomingCard img={activity1} />
        <UpcomingCard img={activity1} />
      </div>
    </div>
  );
}

export default UpcomingActivities;
