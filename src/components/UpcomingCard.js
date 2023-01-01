import React from "react";

function UpcomingCard({ img, title }) {
  return (
    <div className="upcomingCard">
      <div className="cardImage">
        <img src={img} alt="activity" />
      </div>
    </div>
  );
}

export default UpcomingCard;
