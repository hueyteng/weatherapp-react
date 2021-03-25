import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === 'celsius') {

  return (
    <div className="Temperature">
      <h2> <Temperature code={props.celsius} /> </h2>
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
      <div className="Temperature">
        <span className="currentTemperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={displayCelsius}>°C</a>
          {" "} | {" "} 
          <a href="/" onClick={displayFahrenheit} className="active">°F</a>
        </span>
      </div>
    );
  }
}
