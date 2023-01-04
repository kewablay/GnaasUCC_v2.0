import React from "react";
import "../assets/css/EventList.css";

import Title from "../components/Title";
import EventCard from "./EventCard";

import eventImg1 from '../assets/images/event-hero-img.png'

function EventList() {
  return (
    <div className="eventList mb-4">
      <h2 className="title" >Events</h2>

      <div className="eventsContainer autoGrid">
        <EventCard
          img={eventImg1}
          title={"Behind the Scene Dubbed with Bible Lecture Series"}
          date={"03/01/2023"}
          time={"6:40PM - 8:00PM"}
          isLive={true}
        />
        <EventCard
          img={eventImg1}
          title={"Behind the Scene Dubbed"}
          date={"03/01/2023"}
          time={"6:40PM - 8:00PM"}
          isLive={false}
        />
        <EventCard
          img={eventImg1}
          title={"Behind the Scene Dubbed"}
          date={"03/01/2023"}
          time={"6:40PM - 8:00PM"}
          isLive={false}
        />
        <EventCard
          img={eventImg1}
          title={"Behind the Scene Dubbed"}
          date={"03/01/2023"}
          time={"6:40PM - 8:00PM"}
          isLive={false}
        />
        <EventCard
          img={eventImg1}
          title={"Behind the Scene Dubbed"}
          date={"03/01/2023"}
          time={"6:40PM - 8:00PM"}
          isLive={false}
        />
        <EventCard
          img={eventImg1}
          title={"Behind the Scene Dubbed"}
          date={"03/01/2023"}
          time={"6:40PM - 8:00PM"}
          isLive={false}
        />
      </div>
    </div>
  );
}

export default EventList;
