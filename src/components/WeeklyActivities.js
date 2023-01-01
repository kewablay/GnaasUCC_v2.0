import React from "react";
import "../assets/css/WeeklyActivities.css";


import Title from "./Title";
import WeeklyCard from "./WeeklyCard";

function WeeklyActivities() {
  return (
    <div className="weeklyActivities mb-4">
      <Title text={"Weekly Activities"} />
      <div className="weeklyActivities flex scroll-x hide-scrollbar gap-1">
        <WeeklyCard
          title={"Sunday Bible Studies"}
          desc={"Every sunday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          title={"Sunday Bible Studies"}
          desc={"Every sunday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          title={"Sunday Bible Studies"}
          desc={"Every sunday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          title={"Sunday Bible Studies"}
          desc={"Every sunday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
      </div>
    </div>
  );
}

export default WeeklyActivities;
