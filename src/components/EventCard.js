import React from "react";
import { Link } from "react-router-dom";

import streaming from "../assets/icons/streaming.png";

function EventCard({ img, title, date, isLive, link, time }) {
  return (
    <div className="eventCard flex">
      <div className="eventImg">
        <img src={img} alt={img} />
      </div>
      <div className="eventContent">
        <div class="cardTop flex-between text-300">
          <div className="eventTag">Event</div>
          <div className="fbLive flex-center">
            <span>
              <img src={streaming} alt="." />
            </span>
            <p className="status">{isLive ? "live" : "facebook"}</p>
          </div>
        </div>
        <Link to={link} target="_blank" class="text-400">
          {title}
        </Link>
        <div className="cardButtom flex-between text-200">
          <div>{date}</div>
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
