import React from "react";
import "../assets/css/WeeklyActivities.css";

import bibleStudies from "../assets/icons/bible-studies.png";
import prayer from "../assets/icons/prayer.png";
import vesperService from "../assets/icons/vesper-service.png";
import devineService from "../assets/icons/devine-service.png";

import Title from "./Title";
import WeeklyCard from "./WeeklyCard";

function WeeklyActivities() {
  return (
    <div className="weeklyActivities mb-4">
      <Title text={"Weekly Activities"} />
      <div className="weeklyActContainer lg-center flex scroll-x hide-scrollbar gap-1">
        <WeeklyCard
          icon={bibleStudies}
          title={"Sunday Bible Studies"}
          desc={"Every sunday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          icon={prayer}
          title={"Wednesday Prayers"}
          desc={"Every wednesday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          icon={vesperService}
          title={"Friday Vesper Service"}
          desc={"Every friday evening at the church auditorioum"}
          time={"6:40 pm- 8:00pm"}
        />
        <WeeklyCard
          icon={devineService}
          title={"Saturday Devine Service"}
          desc={"Every saturday morning at the church auditorioum"}
          time={"8:30 am- 12:00pm"}
        />
      </div>
    </div>
  );
}

export default WeeklyActivities;
