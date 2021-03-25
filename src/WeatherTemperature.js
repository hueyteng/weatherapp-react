import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {

  function displayFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  
  if (props.unit === "celsius") {
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
