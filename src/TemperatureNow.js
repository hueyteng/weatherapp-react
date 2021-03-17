import React from "react";
import "./TemperatureNow.css";

export default function TemperatureNow() {
  return (
    <div>
      <h2 className="temperature">33</h2>
      <span className="units">
        <a href="#" id="celsius-link" className="active">
          °C
        </a>{" "}
        |
        <a href="#" id="fahrenheit-link">
          °F
        </a>
      </span>
    </div>
  );
}
