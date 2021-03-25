import React from "react";
import "./FeelsLike.css";

export default function FeelsLike(props) {

  function feelsLikeCelsius() {
    let temp = Math.round(props.data.feelsLike);
    return `${temp}°`;
  }

  function feelsLikeFahrenheit() {
    let temp = Math.round(props.data.feelsLike * 9 / 5) + 32;
    return `${temp}°`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="FeelsLike">
        <h3>
          Feels like <strong> {feelsLikeCelsius()} </strong>
        </h3>
      </div>
  )

  } else {
    return (
      <div className="FeelsLike">
        <h3>
          Feels like <strong> {feelsLikeFahrenheit()} </strong>
        </h3>
      </div>
  );
  }
}