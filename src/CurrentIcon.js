import React from "react";
import "./CurrentIcon.css";

export default function CurrentIcon(props) {
 
  return (
    <div className="CurrentIcon">
      <img
        class="current-icon"
        src={props.data.icon} 
        alt={props.data.description}
        id="weather-icon"
      />
    </div>
  );
}