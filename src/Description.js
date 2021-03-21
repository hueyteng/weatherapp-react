import React from "react";
import "./Description.css";

export default function Description(props) {
  return (
    <div className="row" id="details">
      <div className="col-6" id="current-date-time">
        Tuesday, 21:40
      </div>

      <div className="col-6" id="humidity">
        <strong>Humidity:</strong> {props.data.humidity}%
      </div>

      <div className="col-6" id="conditions"><span className="text-capitalize">
        {props.data.description}
      </span >
      </div>

      <div className="col-6" id="wind">
        <strong>Wind:</strong> {props.data.wind} Mph
      </div>
    </div>
  );
}
