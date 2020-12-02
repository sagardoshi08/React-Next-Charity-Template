import React from "react";
import Link from "next/link";

const EventCard = ({ data }) => {
  const { image, title, date, time, location, link } = data;
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-card-image">
          <div className="event-card-image-inner">
            <img src={image} alt="" />
            <span>{date}</span>
          </div>
        </div>
        <div className="event-card-content">
          <h3>
            <Link href={link}>
              <a>{title}</a>
            </Link>
          </h3>
          <ul className="event-card-list">
            <li>
              <i className="azino-icon-clock"></i>
              <strong>Time:</strong> {time}
            </li>
            <li>
              <i className="azino-icon-pin1"></i>
              <strong>Location:</strong> {location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
