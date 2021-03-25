import React from "react";
import "./FeelsLike.css";
import "./WeatherTemperature";

export default function FeelsLike(props) {

  function celsius() {
    let temp = Math.round(props.data.feelsLike);
    return `${temp}°`;
  }

  function fahrenheit() {
    let temp = Math.round(props.data.feelsLike * 9 / 5) + 32;
    return `${temp}°`;
  }

  if (props.unit === "celsius") {
  return (
      <div className="FeelsLike">
        <h3>
          Feels like <strong> {celsius()} </strong>
        </h3>
      </div>
  );

  } else {
    return (
      <div className="FeelsLike">
        <h3>
          Feels like <strong> {fahrenheit()} </strong>
        </h3>
      </div>
  );
  }
}