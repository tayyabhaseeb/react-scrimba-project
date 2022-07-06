import React from "react";

export default function Main() {
  return (
    <div className="main--container">
      <div className="main--img">
        <img src="../images/Mount Fuji.jpg" />
      </div>

      <div className="main--content">
        <div className="main--location">
          <span className="location">J A P A N</span>
          <span className="location2">View on Google Maps</span>
        </div>
        <h1>Mount Fuji</h1>
        <h6>12 Jan,2021 - 21 Jan,2021</h6>
        <p>
          Mount Fuji is the tallest mountain in japan , standing at 3,776
          meters(12,380 feet) .Mount Fuji is the single most popular tourist
          site in japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
