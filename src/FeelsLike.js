import React from "react";
import "./FeelsLike.css";

export default function FeelsLike(props) {
  return (
    <div className="FeelsLike">
      <h3>
        Feels like <strong> {props.data.feelsLike}° </strong>
      </h3>
    </div>
  );
}
