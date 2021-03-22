import React from "react";
import "./Description.css";
import FormattedDate from "./FormattedDate";

export default function Description(props) {
  return (
    <div className="Description">
    <div className="row" id="details">
      <div className="col-6" id="current-date-time">
        <FormattedDate date={props.data.date} />
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
    </div>
  );
}
