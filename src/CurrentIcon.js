import React from "react";
import "./CurrentIcon.css";

export default function CurrentIcon() {
  let weatherData = {
    imgUrl: "/Images/01d.png"
  };
  return (
    <div className="CurrentIcon">
      <img
        class="current-icon"
        src={weatherData.imgUrl}
        id="weather-icon"
      />
    </div>
  );
}
