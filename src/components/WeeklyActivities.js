import React from "react";
import "../assets/css/WeeklyActivities.css";


import Title from "./Title";
import WeeklyCard from "./WeeklyCard";

function WeeklyActivities() {
  return (
    <div className="weeklyActivities mb-4">
      <Title text={"Weekly Activities"} />
      <div className="lg-center flex scroll-x hide-scrollbar gap-1">
        <WeeklyCard
          title={"Sunday Bible Studies"}
          desc={"Every sunday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          title={"Wednesday Prayers"}
          desc={"Every wednesday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          title={"Friday Vesper Service"}
          desc={"Every friday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          title={"Saturday Devine Service"}
          desc={"Every saturday morning at the church auditorioum"}
          time={"8:30 am- 12:00pm"}
        />
      </div>
    </div>
  );
}

export default WeeklyActivities;
