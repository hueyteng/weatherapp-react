import React from "react";
import "./City.css";

export default function City() {
  let defaultCity = {
    city: "KUALA LUMPUR"
  };
  return (
    <div className="City">
      <h1>{defaultCity.city}</h1>
    </div>
  );
}
