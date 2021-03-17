import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="row" id="details">
      <div className="col-6" id="current-date-time">
        Tuesday, 21:40
      </div>

      <div className="col-6" id="humidity">
        <strong>Humidity:</strong> 73%
      </div>

      <div className="col-6" id="current-conditions">
        Light Rain
      </div>

      <div className="col-6" id="wind">
        <strong>Wind:</strong> 11mph
      </div>
    </div>
  );
}
