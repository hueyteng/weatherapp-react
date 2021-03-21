import React from "react";
import "./TemperatureNow.css";

export default function TemperatureNow() {
  return (
    <div className="CurrentTemp">
      <h2 className="temperature">33</h2>
      <span className="units">
        <span href="/" id="celsius-link" className="active">
          °C
        </span>{" "}
        |
        <span href="/" id="fahrenheit-link">
          °F
        </span>
      </span>
    </div>
  );
}
