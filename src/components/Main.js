import React from "react";

export default function Main(props) {
  return (
    <div className="main--container">
      <div className="main--img">
        <img src={`../images/${props.item.image}`} />
      </div>

      <div className="main--content">
        <div className="main--location">
          <span className="location">{props.item.location}</span>
          <span className="location2">View on Google Maps</span>
        </div>
        <h1>{props.item.title}</h1>
        <h6>
          {props.item.startDate}-{props.item.endDate}
        </h6>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
