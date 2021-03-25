import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  
  if (unit === "celsius") {
  return (
    <div className="WeatherTemperature">
      <h2> {props.celsius} </h2>
      <span className="units">
        <a href="/" onClick={displayCelsius} className="active">
          °C
        </a>{" "}
        |{" "}
        <a href="/" onClick={displayFahrenheit}>
          °F
        </a>
      </span>
    </div>
  );

  } else {
    let fahrenheit = (props.celsius * 9 / 5) + 32;
    return (
      <div className="WeatherTemperature">
        <h2> {Math.round(fahrenheit)} </h2>
        <span className="units">
          <a href="/" onClick={displayCelsius}>°C</a>
          {" "} | {" "} 
          <a href="/" onClick={displayFahrenheit} className="active">°F</a>
        </span>
      </div>
    );
  }
}
