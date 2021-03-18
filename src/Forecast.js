import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
        <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <h4>00:00</h4>
          <img src="Images/02d.png"
            className="forecast-image"
            alt=""
          />
          
        </div>

        <div className="col-2">
          <h4>03:00</h4>
          <img src="Images/01d.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
          
        </div>

        <div className="col-2">
          <h4>06:00</h4>
          <img src="Images/03d.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
          
        </div>

        <div className="col-2">
          <h4>09:00</h4>
          <img src="Images/04d.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
        
        </div>

        <div className="col-2">
          <h4>12:00</h4>
          <img src="Images/02d.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
        
        </div>

        <div className="col-2">
          <h4>15:00</h4>
          <img src="Images/09d.png"
            id="weather-icon"
            className="forecast"
            alt=""
          />
          
        </div>
      </div>
    </div>
    );
}
